// https://www.canada.ca/en/revenue-agency/services/tax/individuals/frequently-asked-questions-individuals/canadian-income-tax-rates-individuals-current-previous-years.html
export const federal_tax_brackets_2022 = [
    [50197, 15],
    [100392, 20.5],
    [155625, 26],
    [221708, 29],
    [+Infinity, 33]
]

export const provincial_tax_brackets_2022 = {
    Ontario: [
    [46226, 5.05],
    [92454, 9.15],
    [150000, 11.16],
    [220000, 12.16],
    [+Infinity, 13.16]
]
}

export const federal_basic_personal_amount_2022 = 14398;

export const provincial_basic_personal_amount_2022 = {
    Ontario: 11141,
}

// https://capricmw.ca/blog/federal-government-announces-new-cpp-and-ei-maximums#:~:text=The%20employee%20and%20employer%20contribution,11.4%20per%20cent%20in%202022.
// cpp basic exemption amount and rate
export const cpp_2022 = {
    rate: 5.7,
    basicExemptionAmount: 3500,
    maxContribution: 3499.80
}

export const ei_2022 = {
    rate: 1.58,
    maxContribution: 952.74
}
