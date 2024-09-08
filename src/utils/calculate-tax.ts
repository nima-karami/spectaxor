import {
  CPP,
  EI,
  FEDERAL_BASIC_PERSONAL_AMOUNT,
  FEDERAL_TAX_BRACKETS,
  PROVINCIAL_BASIC_PERSONAL_AMOUNT,
  PROVINCIAL_TAX_BRACKETS,
} from './tax-data';
import { IncomeData, TaxResults } from './types';

export const calculateTaxResults: (incomeData: IncomeData) => TaxResults = (
  incomeData
) => {
  const {
    provinceId,
    year,
    employmentIncome,
    selfEmploymentIncome,
    otherIncome,
    rrspContribution,
    capitalGainsLosses,
    eligibleDividends,
  } = incomeData;

  let federalTax = 0;
  let provincialTax = 0;
  let cppEiPremiums = 0;
  let totalTax = 0;
  let averageTaxRate = 0;
  let marginalTaxRate = 0;
  let afterTaxIncome = 0;
  let grossMonthlyIncome = 0;
  let grossBiweeklyIncome = 0;
  let grossHourlyIncome = 0;
  let netMonthlyIncome = 0;
  let netBiweeklyIncome = 0;
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

  const federalBasicPersonalAmount = FEDERAL_BASIC_PERSONAL_AMOUNT[year];
  const federalTaxBrackets = FEDERAL_TAX_BRACKETS[year];
  const provincialBasicPersonalAmount =
    PROVINCIAL_BASIC_PERSONAL_AMOUNT[year][provinceId];
  const provincialTaxBrackets = PROVINCIAL_TAX_BRACKETS[year][provinceId];
  const cpp = CPP[year];
  const ei = EI[year];

  // Calculate federal tax
  const federalTaxCredit =
    (federalBasicPersonalAmount * federalTaxBrackets[0].taxRate) / 100;
  let untaxedIncome = taxableIncome;

  // Check if income is lower than the basic personal amount
  if (untaxedIncome < federalBasicPersonalAmount) {
    untaxedIncome = 0;
  } else {
    untaxedIncome -= federalTaxCredit;
  }

  let federalTaxBracketLow = 0;
  let federalTaxBracketHigh = 0;
  let federalTaxRate = 0;

  for (const taxBracket of federalTaxBrackets) {
    if (federalTaxBracketLow < taxableIncome) {
      federalTaxBracketHigh = taxBracket.incomeThreshold;
      federalTaxRate = taxBracket.taxRate;

      const taxedAmount = Math.min(
        untaxedIncome,
        federalTaxBracketHigh - federalTaxBracketLow
      );
      federalTax += Math.floor((taxedAmount * federalTaxRate) / 100);
      untaxedIncome -= taxedAmount;
      federalTaxBracketLow = federalTaxBracketHigh;
    }
  }

  // Calculate provincial tax
  const provincialTaxCredit =
    (provincialBasicPersonalAmount * provincialTaxBrackets[0].taxRate) / 100;

  untaxedIncome = taxableIncome;
  // Check if income is lower than the basic personal amount
  if (untaxedIncome < provincialBasicPersonalAmount) {
    untaxedIncome = 0;
  } else {
    untaxedIncome -= provincialTaxCredit;
  }

  let provincialTaxBracketLow = 0;
  let provincialTaxBracketHigh = 0;
  let provincialTaxRate = 0;

  for (const taxBracket of provincialTaxBrackets) {
    if (provincialTaxBracketLow < taxableIncome) {
      provincialTaxBracketHigh = taxBracket.incomeThreshold;
      provincialTaxRate = taxBracket.taxRate;
      const taxedAmount = Math.min(
        untaxedIncome,
        provincialTaxBracketHigh - provincialTaxBracketLow
      );
      provincialTax += Math.floor((taxedAmount * provincialTaxRate) / 100);
      untaxedIncome -= taxedAmount;
      provincialTaxBracketLow = provincialTaxBracketHigh;
    }
  }

  // Calculate CPP/EI
  let cppPremium = 0;

  const TotalEmploymentIncome = employmentIncome + selfEmploymentIncome;

  if (cpp.basicExemptionAmount > TotalEmploymentIncome) {
    cppPremium = 0;
  } else {
    const cppCredit = (cpp.basicExemptionAmount * cpp.rate) / 100;
    const cppEmployed = Math.min(
      (employmentIncome * cpp.rate) / 100,
      cpp.maxContribution
    );
    const cppSelfEmployed = Math.min(
      (selfEmploymentIncome * cpp.rate * 2) / 100,
      cpp.maxContribution * 2
    );
    cppPremium = cppEmployed + cppSelfEmployed - cppCredit;
  }

  const eiPremiums = Math.min(
    (employmentIncome * ei.rate) / 100,
    ei.maxContribution
  );

  cppEiPremiums = Math.ceil(cppPremium + eiPremiums);

  // Calculate total tax
  totalTax = federalTax + provincialTax + cppEiPremiums;
  afterTaxIncome = totalIncome - totalTax;
  netMonthlyIncome = Math.round(afterTaxIncome / 12);
  netHourlyIncome = netMonthlyIncome / 172;
  netBiweeklyIncome = Math.round(netHourlyIncome * 40) * 2;
  averageTaxRate = totalIncome ? (totalTax / totalIncome) * 100 : 0;
  marginalTaxRate = federalTaxRate + provincialTaxRate;

  // Calculate gross income
  grossMonthlyIncome = totalIncome / 12;
  grossBiweeklyIncome = (totalIncome / 52) * 2;
  grossHourlyIncome = totalIncome / 52 / 40;

  const results: TaxResults = {
    totalIncome: totalIncome,
    federalTax: federalTax,
    provincialTax: provincialTax,
    cppEiPremiums: cppEiPremiums,
    totalTax: totalTax,
    afterTaxIncome: afterTaxIncome,
    averageTaxRate: averageTaxRate,
    marginalTaxRate: marginalTaxRate,
    netMonthlyIncome: netMonthlyIncome,
    netBiweeklyIncome: netBiweeklyIncome,
    netHourlyIncome: netHourlyIncome,
    grossMonthlyIncome: grossMonthlyIncome,
    grossBiweeklyIncome: grossBiweeklyIncome,
    grossHourlyIncome: grossHourlyIncome,
  };

  return results;
};
