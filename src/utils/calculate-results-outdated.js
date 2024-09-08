import {
  cpp_2022,
  ei_2022,
  federal_basic_personal_amount_2022,
  federal_tax_brackets_2022,
  provincial_basic_personal_amount_2022,
  provincial_tax_brackets_2022,
} from './tax-data';

export const calculateResults = (incomeData) => {
  const income = incomeData;
  const {
    province,
    employmentIncome,
    selfEmploymentIncome,
    otherIncome,
    rrspContribution,
    capitalGainsLosses,
    eligibleDividends,
  } = income;

  let federalTax = 0;
  let provincialTax = 0;
  let cppEiPremiums = 0;
  let totalTax = 0;
  let averageTaxRate = 0;
  let marginalTaxRate = 0;
  let afterTaxIncome = 0;
  let netMonthlyIncome = 0;
  let netWeeklyIncome = 0;
  let netHourlyIncome = 0;

  const totalIncome =
    employmentIncome +
    selfEmploymentIncome +
    otherIncome +
    capitalGainsLosses +
    eligibleDividends;
  const taxableIncome =
    employmentIncome +
    selfEmploymentIncome +
    otherIncome +
    capitalGainsLosses * 0.5 +
    eligibleDividends * 0.38 -
    rrspContribution;

  // Calculate federal tax
  let federalTaxCredit =
    (federal_basic_personal_amount_2022 * federal_tax_brackets_2022[0][1]) /
    100;
  let unTaxedIncome = taxableIncome;

  // Check if income is lower than the basic personal amount
  if (unTaxedIncome < federal_basic_personal_amount_2022) {
    unTaxedIncome = 0;
  } else {
    unTaxedIncome -= federalTaxCredit;
  }

  let federalTaxBracketLow = 0;
  let federalTaxBracketHigh = 0;
  let federalTaxRate = 0;

  for (let taxBracket of federal_tax_brackets_2022) {
    if (federalTaxBracketLow < taxableIncome) {
      [federalTaxBracketHigh, federalTaxRate] = taxBracket;
      let taxedAmount = Math.min(
        unTaxedIncome,
        federalTaxBracketHigh - federalTaxBracketLow
      );
      federalTax += Math.floor((taxedAmount * federalTaxRate) / 100);
      unTaxedIncome -= taxedAmount;
      federalTaxBracketLow = federalTaxBracketHigh;
    }
  }

  // Calculate provincial tax
  let provincialTaxCredit =
    (provincial_basic_personal_amount_2022[province] *
      provincial_tax_brackets_2022[province][0][1]) /
    100;

  unTaxedIncome = taxableIncome;
  // Check if income is lower than the basic personal amount
  if (unTaxedIncome < provincial_basic_personal_amount_2022[province]) {
    unTaxedIncome = 0;
  } else {
    unTaxedIncome -= provincialTaxCredit;
  }

  let provincialTaxBracketLow = 0;
  let provincialTaxBracketHigh = 0;
  let provincialTaxRate = 0;

  for (let taxBracket of provincial_tax_brackets_2022[province]) {
    if (provincialTaxBracketLow < taxableIncome) {
      [provincialTaxBracketHigh, provincialTaxRate] = taxBracket;
      let taxedAmount = Math.min(
        unTaxedIncome,
        provincialTaxBracketHigh - provincialTaxBracketLow
      );
      provincialTax += Math.floor((taxedAmount * provincialTaxRate) / 100);
      unTaxedIncome -= taxedAmount;
      provincialTaxBracketLow = provincialTaxBracketHigh;
    }
  }

  // Calculate CPP/EI
  let cppPremium = 0;

  let TotalEmploymentIncome = employmentIncome + selfEmploymentIncome;

  if (cpp_2022.basicExemptionAmount > TotalEmploymentIncome) {
    cppPremium = 0;
  } else {
    let cppCredit = (cpp_2022.basicExemptionAmount * cpp_2022.rate) / 100;
    let cppEmployed = Math.min(
      (employmentIncome * cpp_2022.rate) / 100,
      cpp_2022.maxContribution
    );
    let cppSelfEmployed = Math.min(
      (selfEmploymentIncome * cpp_2022.rate * 2) / 100,
      cpp_2022.maxContribution * 2
    );
    cppPremium = cppEmployed + cppSelfEmployed - cppCredit;
  }

  let eiPremiums = Math.min(
    (employmentIncome * ei_2022.rate) / 100,
    ei_2022.maxContribution
  );

  cppEiPremiums = Math.ceil(cppPremium + eiPremiums);

  // Calculate total tax
  totalTax = federalTax + provincialTax + cppEiPremiums;
  afterTaxIncome = totalIncome - totalTax;
  netMonthlyIncome = Math.round(afterTaxIncome / 12);
  netHourlyIncome = (netMonthlyIncome / 172).toFixed(2);
  netWeeklyIncome = Math.round(netHourlyIncome * 40);
  averageTaxRate = totalIncome
    ? ((totalTax / totalIncome) * 100).toFixed(2)
    : 0;
  marginalTaxRate = federalTaxRate + provincialTaxRate;

  return {
    totalIncome: totalIncome,
    federalTax: federalTax,
    provincialTax: provincialTax,
    cppEiPremiums: cppEiPremiums,
    totalTax: totalTax,
    afterTaxIncome: afterTaxIncome,
    averageTaxRate: averageTaxRate,
    marginalTaxRate: marginalTaxRate,
    netMonthlyIncome: netMonthlyIncome,
    netWeeklyIncome: netWeeklyIncome,
    netHourlyIncome: netHourlyIncome,
  };
};
