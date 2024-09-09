export type ProvinceId =
  | 'AB'
  | 'BC'
  | 'MB'
  | 'NB'
  | 'NL'
  | 'NS'
  | 'NT'
  | 'NU'
  | 'ON'
  | 'PE'
  | 'QC'
  | 'SK'
  | 'YT';

export type TaxYear = '2021' | '2022' | '2023' | '2024';
export type TaxBracket = {
  incomeThreshold: number;
  taxRate: number;
};

export type IncomeData = {
  provinceId: ProvinceId;
  year: TaxYear;
  employmentIncome: number;
  selfEmploymentIncome: number;
  otherIncome: number;
  rrspContribution: number;
  capitalGainsLosses: number;
  eligibleDividends: number;
};

export type TaxResults = {
  totalIncome: number;
  federalTax: number;
  provincialTax: number;
  cppEiPremiums: number;
  totalTax: number;
  afterTaxIncome: number;
  averageTaxRate: number;
  marginalTaxRate: number;
  grossMonthlyIncome: number;
  netMonthlyIncome: number;
  grossBiweeklyIncome: number;
  netBiweeklyIncome: number;
  grossHourlyIncome: number;
  netHourlyIncome: number;
};

export type Theme = 'light' | 'dark';
