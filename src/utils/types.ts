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
  year: string;
  employmentIncome: number;
  selfEmploymentIncome: number;
  otherIncome: number;
  rrspContribution: number;
  capitalGainsLosses: number;
  eligibleDividends: number;
};
