import { createContext, useState } from "react";

export const MyContext= createContext();

const INITIAL_INCOME_STATE = {
    province: 'Ontario',
    employmentIncome: 0,
    selfEmploymentIncome: 0,
    otherIncome: 0,
    RRSPContribution: 0,
    capitalGainsLosses: 0,
    eligibleDividends: 0
}

const INITIAL_RESULTS_STATE = {
    totalIncome: 0,
    federalTax: 0,
    provincialTax: 0,
    cppEiPremiums: 0,
    totalTax: 0,
    averageTaxRate: 0,
    marginalTaxRate: 0,
    afterTaxIncome: 0,
}

const ContextProvider = ({ children }) => {
    
    const [income, setIncome] = useState(INITIAL_INCOME_STATE);
    const [results, setResults] = useState(INITIAL_RESULTS_STATE);
    
    const value = { income, setIncome, results, setResults };
    return (
        <MyContext.Provider value={ value }>
            {children}
        </MyContext.Provider>
    );
};

export default ContextProvider;