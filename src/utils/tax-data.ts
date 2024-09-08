import { ProvinceId, TaxBracket, TaxYear } from './types';

export const PROVINCE_NAMES: Record<ProvinceId, string> = {
  AB: 'Alberta',
  BC: 'British Columbia',
  MB: 'Manitoba',
  NB: 'New Brunswick',
  NL: 'Newfoundland and Labrador',
  NS: 'Nova Scotia',
  NT: 'Northwest Territories',
  NU: 'Nunavut',
  ON: 'Ontario',
  PE: 'Prince Edward Island',
  QC: 'Quebec',
  SK: 'Saskatchewan',
  YT: 'Yukon',
};

export const TAX_YEARS: TaxYear[] = ['2021', '2022', '2023', '2024'];

// https://www.canada.ca/en/revenue-agency/services/tax/individuals/frequently-asked-questions-individuals/canadian-income-tax-rates-individuals-current-previous-years.html
export const FEDERAL_TAX_BRACKETS: Record<TaxYear, TaxBracket[]> = {
  '2021': [
    { incomeThreshold: 49020, taxRate: 15 },
    { incomeThreshold: 98040, taxRate: 20.5 },
    { incomeThreshold: 151978, taxRate: 26 },
    { incomeThreshold: 216511, taxRate: 29 },
    { incomeThreshold: Infinity, taxRate: 33 },
  ],
  '2022': [
    { incomeThreshold: 50197, taxRate: 15 },
    { incomeThreshold: 100392, taxRate: 20.5 },
    { incomeThreshold: 155625, taxRate: 26 },
    { incomeThreshold: 221708, taxRate: 29 },
    { incomeThreshold: Infinity, taxRate: 33 },
  ],
  '2023': [
    { incomeThreshold: 53359, taxRate: 15 },
    { incomeThreshold: 106717, taxRate: 20.5 },
    { incomeThreshold: 165430, taxRate: 26 },
    { incomeThreshold: 235675, taxRate: 29 },
    { incomeThreshold: Infinity, taxRate: 33 },
  ],
  '2024': [
    { incomeThreshold: 55867, taxRate: 15 },
    { incomeThreshold: 111733, taxRate: 20.5 },
    { incomeThreshold: 173205, taxRate: 26 },
    { incomeThreshold: 246752, taxRate: 29 },
    { incomeThreshold: Infinity, taxRate: 33 },
  ],
};

// https://www.canada.ca/en/revenue-agency/services/tax/individuals/frequently-asked-questions-individuals/canadian-income-tax-rates-individuals-current-previous-years.html
export const PROVINCIAL_TAX_BRACKETS: Record<
  TaxYear,
  Record<ProvinceId, TaxBracket[]>
> = {
  '2021': {
    AB: [
      { incomeThreshold: 131220, taxRate: 10 },
      { incomeThreshold: 157464, taxRate: 12 },
      { incomeThreshold: 209952, taxRate: 13 },
      { incomeThreshold: 314928, taxRate: 14 },
      { incomeThreshold: Infinity, taxRate: 15 },
    ],
    BC: [
      { incomeThreshold: 42184, taxRate: 5.06 },
      { incomeThreshold: 84369, taxRate: 7.7 },
      { incomeThreshold: 96866, taxRate: 10.5 },
      { incomeThreshold: 117623, taxRate: 12.29 },
      { incomeThreshold: 159483, taxRate: 14.7 },
      { incomeThreshold: 222420, taxRate: 16.8 },
      { incomeThreshold: Infinity, taxRate: 20.5 },
    ],
    MB: [
      { incomeThreshold: 33723, taxRate: 10.8 },
      { incomeThreshold: 72885, taxRate: 12.75 },
      { incomeThreshold: Infinity, taxRate: 17.4 },
    ],
    NB: [
      { incomeThreshold: 43835, taxRate: 9.4 },
      { incomeThreshold: 87671, taxRate: 14.82 },
      { incomeThreshold: 142534, taxRate: 16.52 },
      { incomeThreshold: 162383, taxRate: 17.84 },
      { incomeThreshold: Infinity, taxRate: 20.3 },
    ],
    NL: [
      { incomeThreshold: 38081, taxRate: 8.7 },
      { incomeThreshold: 76161, taxRate: 14.5 },
      { incomeThreshold: 135973, taxRate: 15.8 },
      { incomeThreshold: 190363, taxRate: 17.3 },
      { incomeThreshold: Infinity, taxRate: 18.3 },
    ],
    NS: [
      { incomeThreshold: 29590, taxRate: 8.79 },
      { incomeThreshold: 59180, taxRate: 14.95 },
      { incomeThreshold: 93000, taxRate: 16.67 },
      { incomeThreshold: 150000, taxRate: 17.5 },
      { incomeThreshold: Infinity, taxRate: 21 },
    ],
    NT: [
      { incomeThreshold: 44396, taxRate: 5.9 },
      { incomeThreshold: 88796, taxRate: 8.6 },
      { incomeThreshold: 144362, taxRate: 12.2 },
      { incomeThreshold: Infinity, taxRate: 14.05 },
    ],
    NU: [
      { incomeThreshold: 46740, taxRate: 4 },
      { incomeThreshold: 93480, taxRate: 7 },
      { incomeThreshold: 151978, taxRate: 9 },
      { incomeThreshold: Infinity, taxRate: 11.5 },
    ],
    ON: [
      { incomeThreshold: 45142, taxRate: 5.05 },
      { incomeThreshold: 90287, taxRate: 9.15 },
      { incomeThreshold: 150000, taxRate: 11.16 },
      { incomeThreshold: 220000, taxRate: 12.16 },
      { incomeThreshold: Infinity, taxRate: 13.16 },
    ],
    PE: [
      { incomeThreshold: 31984, taxRate: 9.8 },
      { incomeThreshold: 63969, taxRate: 13.8 },
      { incomeThreshold: Infinity, taxRate: 16.7 },
    ],
    QC: [
      { incomeThreshold: 45105, taxRate: 15 },
      { incomeThreshold: 90200, taxRate: 20 },
      { incomeThreshold: 109755, taxRate: 24 },
      { incomeThreshold: Infinity, taxRate: 25.75 },
    ],
    SK: [
      { incomeThreshold: 45677, taxRate: 10.5 },
      { incomeThreshold: 130506, taxRate: 12.5 },
      { incomeThreshold: Infinity, taxRate: 14.5 },
    ],
    YT: [
      { incomeThreshold: 49020, taxRate: 6.4 },
      { incomeThreshold: 98040, taxRate: 9 },
      { incomeThreshold: 151978, taxRate: 10.9 },
      { incomeThreshold: 500000, taxRate: 12.8 },
      { incomeThreshold: Infinity, taxRate: 15 },
    ],
  },
  '2022': {
    AB: [
      { incomeThreshold: 134238, taxRate: 10 },
      { incomeThreshold: 161086, taxRate: 12 },
      { incomeThreshold: 214781, taxRate: 13 },
      { incomeThreshold: 322171, taxRate: 14 },
      { incomeThreshold: Infinity, taxRate: 15 },
    ],
    BC: [
      { incomeThreshold: 43070, taxRate: 5.06 },
      { incomeThreshold: 86141, taxRate: 7.7 },
      { incomeThreshold: 98901, taxRate: 10.5 },
      { incomeThreshold: 120094, taxRate: 12.29 },
      { incomeThreshold: 162832, taxRate: 14.7 },
      { incomeThreshold: 227091, taxRate: 16.8 },
      { incomeThreshold: Infinity, taxRate: 20.5 },
    ],
    MB: [
      { incomeThreshold: 34431, taxRate: 10.8 },
      { incomeThreshold: 74416, taxRate: 12.75 },
      { incomeThreshold: Infinity, taxRate: 17.4 },
    ],
    NB: [
      { incomeThreshold: 44887, taxRate: 9.4 },
      { incomeThreshold: 89775, taxRate: 14.82 },
      { incomeThreshold: 145955, taxRate: 16.52 },
      { incomeThreshold: 166280, taxRate: 17.84 },
      { incomeThreshold: Infinity, taxRate: 20.3 },
    ],
    NL: [
      { incomeThreshold: 39147, taxRate: 8.7 },
      { incomeThreshold: 78294, taxRate: 14.5 },
      { incomeThreshold: 139780, taxRate: 15.8 },
      { incomeThreshold: 195693, taxRate: 17.8 },
      { incomeThreshold: 250000, taxRate: 19.8 },
      { incomeThreshold: 500000, taxRate: 20.8 },
      { incomeThreshold: 1000000, taxRate: 21.3 },
      { incomeThreshold: Infinity, taxRate: 21.8 },
    ],
    NS: [
      { incomeThreshold: 29590, taxRate: 8.79 },
      { incomeThreshold: 59180, taxRate: 14.95 },
      { incomeThreshold: 93000, taxRate: 16.67 },
      { incomeThreshold: 150000, taxRate: 17.5 },
      { incomeThreshold: Infinity, taxRate: 21 },
    ],
    NT: [
      { incomeThreshold: 45462, taxRate: 5.9 },
      { incomeThreshold: 90927, taxRate: 8.6 },
      { incomeThreshold: 147826, taxRate: 12.2 },
      { incomeThreshold: Infinity, taxRate: 14.05 },
    ],
    NU: [
      { incomeThreshold: 47862, taxRate: 4 },
      { incomeThreshold: 95724, taxRate: 7 },
      { incomeThreshold: 155625, taxRate: 9 },
      { incomeThreshold: Infinity, taxRate: 11.5 },
    ],
    ON: [
      { incomeThreshold: 46226, taxRate: 5.05 },
      { incomeThreshold: 92454, taxRate: 9.15 },
      { incomeThreshold: 150000, taxRate: 11.16 },
      { incomeThreshold: 220000, taxRate: 12.16 },
      { incomeThreshold: Infinity, taxRate: 13.16 },
    ],
    PE: [
      { incomeThreshold: 31984, taxRate: 9.8 },
      { incomeThreshold: 63969, taxRate: 13.8 },
      { incomeThreshold: Infinity, taxRate: 16.7 },
    ],
    QC: [
      { incomeThreshold: 46295, taxRate: 15 },
      { incomeThreshold: 92580, taxRate: 20 },
      { incomeThreshold: 112655, taxRate: 24 },
      { incomeThreshold: Infinity, taxRate: 25.75 },
    ],
    SK: [
      { incomeThreshold: 46773, taxRate: 10.5 },
      { incomeThreshold: 133638, taxRate: 12.5 },
      { incomeThreshold: Infinity, taxRate: 14.5 },
    ],
    YT: [
      { incomeThreshold: 50197, taxRate: 6.4 },
      { incomeThreshold: 100392, taxRate: 9 },
      { incomeThreshold: 155625, taxRate: 10.9 },
      { incomeThreshold: 500000, taxRate: 12.8 },
      { incomeThreshold: Infinity, taxRate: 15 },
    ],
  },
  '2023': {
    AB: [
      { incomeThreshold: 142292, taxRate: 10 },
      { incomeThreshold: 170751, taxRate: 12 },
      { incomeThreshold: 227668, taxRate: 13 },
      { incomeThreshold: 341502, taxRate: 14 },
      { incomeThreshold: Infinity, taxRate: 15 },
    ],
    BC: [
      { incomeThreshold: 45654, taxRate: 5.06 },
      { incomeThreshold: 91310, taxRate: 7.7 },
      { incomeThreshold: 104835, taxRate: 10.5 },
      { incomeThreshold: 127299, taxRate: 12.29 },
      { incomeThreshold: 172602, taxRate: 14.7 },
      { incomeThreshold: 240716, taxRate: 16.8 },
      { incomeThreshold: Infinity, taxRate: 20.5 },
    ],
    MB: [
      { incomeThreshold: 36842, taxRate: 10.8 },
      { incomeThreshold: 79625, taxRate: 12.75 },
      { incomeThreshold: Infinity, taxRate: 17.4 },
    ],
    NB: [
      { incomeThreshold: 47715, taxRate: 9.4 },
      { incomeThreshold: 95431, taxRate: 14 },
      { incomeThreshold: 176756, taxRate: 16 },
      { incomeThreshold: Infinity, taxRate: 19.5 },
    ],
    NL: [
      { incomeThreshold: 41457, taxRate: 8.7 },
      { incomeThreshold: 82913, taxRate: 14.5 },
      { incomeThreshold: 148027, taxRate: 15.8 },
      { incomeThreshold: 207239, taxRate: 17.8 },
      { incomeThreshold: 264750, taxRate: 19.8 },
      { incomeThreshold: 529500, taxRate: 20.8 },
      { incomeThreshold: 1059000, taxRate: 21.3 },
      { incomeThreshold: Infinity, taxRate: 21.8 },
    ],
    NS: [
      { incomeThreshold: 29590, taxRate: 8.79 },
      { incomeThreshold: 59180, taxRate: 14.95 },
      { incomeThreshold: 93000, taxRate: 16.67 },
      { incomeThreshold: 150000, taxRate: 17.5 },
      { incomeThreshold: Infinity, taxRate: 21 },
    ],
    NT: [
      { incomeThreshold: 48326, taxRate: 5.9 },
      { incomeThreshold: 96655, taxRate: 8.6 },
      { incomeThreshold: 157139, taxRate: 12.2 },
      { incomeThreshold: Infinity, taxRate: 14.05 },
    ],
    NU: [
      { incomeThreshold: 50877, taxRate: 4 },
      { incomeThreshold: 101754, taxRate: 7 },
      { incomeThreshold: 165429, taxRate: 9 },
      { incomeThreshold: Infinity, taxRate: 11.5 },
    ],
    ON: [
      { incomeThreshold: 49231, taxRate: 5.05 },
      { incomeThreshold: 98463, taxRate: 9.15 },
      { incomeThreshold: 150000, taxRate: 11.16 },
      { incomeThreshold: 220000, taxRate: 12.16 },
      { incomeThreshold: Infinity, taxRate: 13.16 },
    ],
    PE: [
      { incomeThreshold: 31984, taxRate: 9.8 },
      { incomeThreshold: 63969, taxRate: 13.8 },
      { incomeThreshold: Infinity, taxRate: 16.7 },
    ],
    QC: [
      { incomeThreshold: 49275, taxRate: 14 },
      { incomeThreshold: 98540, taxRate: 19 },
      { incomeThreshold: 119910, taxRate: 24 },
      { incomeThreshold: Infinity, taxRate: 25.75 },
    ],
    SK: [
      { incomeThreshold: 49720, taxRate: 10.5 },
      { incomeThreshold: 142058, taxRate: 12.5 },
      { incomeThreshold: Infinity, taxRate: 14.5 },
    ],
    YT: [
      { incomeThreshold: 53359, taxRate: 6.4 },
      { incomeThreshold: 106717, taxRate: 9 },
      { incomeThreshold: 165430, taxRate: 10.9 },
      { incomeThreshold: 500000, taxRate: 12.8 },
      { incomeThreshold: Infinity, taxRate: 15 },
    ],
  },
  '2024': {
    AB: [
      { incomeThreshold: 148269, taxRate: 10 },
      { incomeThreshold: 177922, taxRate: 12 },
      { incomeThreshold: 237230, taxRate: 13 },
      { incomeThreshold: 355845, taxRate: 14 },
      { incomeThreshold: Infinity, taxRate: 15 },
    ],
    BC: [
      { incomeThreshold: 47937, taxRate: 5.06 },
      { incomeThreshold: 95875, taxRate: 7.7 },
      { incomeThreshold: 110076, taxRate: 10.5 },
      { incomeThreshold: 133664, taxRate: 12.29 },
      { incomeThreshold: 181232, taxRate: 14.7 },
      { incomeThreshold: 252752, taxRate: 16.8 },
      { incomeThreshold: Infinity, taxRate: 20.5 },
    ],
    MB: [
      { incomeThreshold: 47000, taxRate: 10.8 },
      { incomeThreshold: 100000, taxRate: 12.75 },
      { incomeThreshold: Infinity, taxRate: 17.4 },
    ],
    NB: [
      { incomeThreshold: 49958, taxRate: 9.4 },
      { incomeThreshold: 99916, taxRate: 14 },
      { incomeThreshold: 185064, taxRate: 16 },
      { incomeThreshold: Infinity, taxRate: 19.5 },
    ],
    NL: [
      { incomeThreshold: 43198, taxRate: 8.7 },
      { incomeThreshold: 86395, taxRate: 14.5 },
      { incomeThreshold: 154244, taxRate: 15.8 },
      { incomeThreshold: 215943, taxRate: 17.8 },
      { incomeThreshold: 275870, taxRate: 19.8 },
      { incomeThreshold: 551739, taxRate: 20.8 },
      { incomeThreshold: 1103478, taxRate: 21.3 },
      { incomeThreshold: Infinity, taxRate: 21.8 },
    ],
    NS: [
      { incomeThreshold: 29590, taxRate: 8.79 },
      { incomeThreshold: 59180, taxRate: 14.95 },
      { incomeThreshold: 93000, taxRate: 16.67 },
      { incomeThreshold: 150000, taxRate: 17.5 },
      { incomeThreshold: Infinity, taxRate: 21 },
    ],
    NT: [
      { incomeThreshold: 50597, taxRate: 5.9 },
      { incomeThreshold: 101198, taxRate: 8.6 },
      { incomeThreshold: 164525, taxRate: 12.2 },
      { incomeThreshold: Infinity, taxRate: 14.05 },
    ],
    NU: [
      { incomeThreshold: 53268, taxRate: 4 },
      { incomeThreshold: 106537, taxRate: 7 },
      { incomeThreshold: 173205, taxRate: 9 },
      { incomeThreshold: Infinity, taxRate: 11.5 },
    ],
    ON: [
      { incomeThreshold: 51446, taxRate: 5.05 },
      { incomeThreshold: 102894, taxRate: 9.15 },
      { incomeThreshold: 150000, taxRate: 11.16 },
      { incomeThreshold: 220000, taxRate: 12.16 },
      { incomeThreshold: Infinity, taxRate: 13.16 },
    ],
    PE: [
      { incomeThreshold: 32656, taxRate: 9.65 },
      { incomeThreshold: 64313, taxRate: 13.63 },
      { incomeThreshold: 105000, taxRate: 16.65 },
      { incomeThreshold: 140000, taxRate: 18.0 },
      { incomeThreshold: Infinity, taxRate: 18.75 },
    ],
    QC: [
      { incomeThreshold: 51780, taxRate: 14 },
      { incomeThreshold: 103545, taxRate: 19 },
      { incomeThreshold: 126000, taxRate: 24 },
      { incomeThreshold: Infinity, taxRate: 25.75 },
    ],
    SK: [
      { incomeThreshold: 52057, taxRate: 10.5 },
      { incomeThreshold: 148734, taxRate: 12.5 },
      { incomeThreshold: Infinity, taxRate: 14.5 },
    ],
    YT: [
      { incomeThreshold: 55867, taxRate: 6.4 },
      { incomeThreshold: 111733, taxRate: 9 },
      { incomeThreshold: 173205, taxRate: 10.9 },
      { incomeThreshold: 500000, taxRate: 12.8 },
      { incomeThreshold: Infinity, taxRate: 15 },
    ],
  },
};

// TODO: Update these values with the correct amounts
export const FEDERAL_BASIC_PERSONAL_AMOUNT: Record<TaxYear, number> = {
  '2021': 13229,
  '2022': 14398,
  '2023': 14779,
  '2024': 15198,
};

// TODO: Update these values with the correct amounts
export const PROVINCIAL_BASIC_PERSONAL_AMOUNT: Record<
  TaxYear,
  Record<ProvinceId, number>
> = {
  '2021': {
    AB: 19369,
    BC: 10947,
    MB: 10067,
    NB: 10737,
    NL: 10371,
    NS: 12067,
    NT: 15000,
    NU: 15000,
    ON: 10467,
    PE: 10500,
    QC: 15000,
    SK: 16065,
    YT: 15000,
  },
  '2022': {
    AB: 19369,
    BC: 11984,
    MB: 14398,
    NB: 11720,
    NL: 14398,
    NS: 11481,
    NT: 15609,
    NU: 16682,
    ON: 11141,
    PE: 11250,
    QC: 16143,
    SK: 16615,
    YT: 14398,
  },
  '2023': {
    AB: 19369,
    BC: 11984,
    MB: 14398,
    NB: 11720,
    NL: 14398,
    NS: 11481,
    NT: 15609,
    NU: 16682,
    ON: 11141,
    PE: 11250,
    QC: 16143,
    SK: 16615,
    YT: 14398,
  },
  '2024': {
    AB: 19369,
    BC: 11984,
    MB: 14398,
    NB: 11720,
    NL: 14398,
    NS: 11481,
    NT: 15609,
    NU: 16682,
    ON: 11141,
    PE: 11250,
    QC: 16143,
    SK: 16615,
    YT: 14398,
  },
};

// https://capricmw.ca/blog/federal-government-announces-new-cpp-and-ei-maximums#:~:text=The%20employee%20and%20employer%20contribution,11.4%20per%20cent%20in%202022.
// cpp basic exemption amount and rate

export const CPP: Record<
  TaxYear,
  { rate: number; basicExemptionAmount: number; maxContribution: number }
> = {
  '2021': {
    rate: 5.45,
    basicExemptionAmount: 3500,
    maxContribution: 2898,
  },
  '2022': {
    rate: 5.7,
    basicExemptionAmount: 3500,
    maxContribution: 3499.8,
  },
  '2023': {
    rate: 5.7,
    basicExemptionAmount: 3500,
    maxContribution: 3499.8,
  },
  '2024': {
    rate: 5.7,
    basicExemptionAmount: 3500,
    maxContribution: 3499.8,
  },
};

export const EI: Record<TaxYear, { rate: number; maxContribution: number }> = {
  '2021': {
    rate: 1.58,
    maxContribution: 889.54,
  },
  '2022': {
    rate: 1.58,
    maxContribution: 952.74,
  },
  '2023': {
    rate: 1.58,
    maxContribution: 952.74,
  },
  '2024': {
    rate: 1.58,
    maxContribution: 952.74,
  },
};
