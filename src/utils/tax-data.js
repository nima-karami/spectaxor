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
    ],
    Quebec: [
        [46295, 15],
        [92580, 20],
        [112655, 24],
        [+Infinity, 25.75],
    ],
    NewFoundlandAndLabrador: [
        [39147, 8.7],
        [78294, 14.5],
        [139780, 15.8],
        [195693, 17.8],
        [250000, 19.8],
        [500000, 20.8],
        [1000000, 21.3],
        [+Infinity, 21.8]
    ],
    PrinceEdwardIsland: [
        [31984, 9.8],
        [63969, 13.8],
        [+Infinity, 16.7],
    ],
    NovaScotia: [
        [29590, 8.79],
        [59180, 14.95],
        [93000, 16.67],
        [150000, 17.5],
        [+Infinity, 21],
    ],
    NewBrunswick: [
        [44887, 9.4],
        [89775, 14.82],
        [145955, 16.52],
        [166280, 17.84],
        [+Infinity, 20.3],
    ],
    Saskatchewan: [
        [46773, 10.5],
        [133638, 12.5],
        [+Infinity, 14.5],
     ],
    Manitoba: [
        [34431, 10.8],
        [74416, 12.75],
        [+Infinity, 17.4],
    ],
    Alberta: [
        [131220, 10],
        [157464, 12],
        [209952, 13],
        [314928, 14],
        [+Infinity, 15],
    ],
    BritishColumbia: [
        [43070, 5.06],
        [86141, 7.7],
        [98901, 10.5],
        [120094, 12.29],
        [162832, 14.7],
        [227091, 16.8],
        [+Infinity, 20.5],
    ],
    Yukon: [
        [50197, 6.4],
        [100392, 9],
        [155625, 10.9],
        [500000, 12.8],
        [+Infinity, 15],
    ],
    NorthwestTerritories: [
        [45462, 5.9],
        [90927, 8.6],
        [147826, 12.2],
        [+Infinity, 14.05],
    ],
    Nunavut: [
        [47862, 4],
        [95724, 7],
        [155625, 9],
        [+Infinity, 11.5],
    ],


}

export const federal_basic_personal_amount_2022 = 14398;

export const provincial_basic_personal_amount_2022 = {
    Ontario: 11141,
    Quebec: 16143,
    NewFoundlandAndLabrador: 14398,
    PrinceEdwardIsland: 11250,
    NovaScotia: 11481,
    NewBrunswick: 11720,
    Saskatchewan: 16615,
    Manitoba: 14398,
    Alberta: 19369,
    BritishColumbia: 11984,
    Yukon: 14398,
    NorthwestTerritories: 15609,
    Nunavut: 16682,
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
