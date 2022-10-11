import { Typography, Box } from "@mui/material";
import { useContext, useEffect } from "react";
import { MyContext } from "../../context/context-provider";

import { federal_tax_brackets_2022,
        provincial_tax_brackets_2022,
        federal_basic_personal_amount_2022,
        provincial_basic_personal_amount_2022,
        cpp_2022,
        ei_2022

      } from "../../utils/tax-data";

const TaxViewer = () => {
    const { income, results, setResults } = useContext(MyContext);

    const textBoxSx = { width: '25ch', marginY: 1, display: 'flex', justifyContent: 'space-between' }
    
    const calculateAll = () => {
        console.log(income);
        const { employmentIncome, selfEmploymentIncome, otherIncome, rrspContribution, capitalGainsLosses, eligibleDividends } = income;
        let federalTax = 0;
        let provincialTax = 0;
        let cppEiPremiums = 0;
        let totalTax = 0;
        let averageTaxRate = 0;
        let marginalTaxRate = 0;
        let afterTaxIncome = 0;
        // const incomeArr = Object.values(income);
        // incomeArr.shift();
        const totalIncome = employmentIncome + selfEmploymentIncome + otherIncome + capitalGainsLosses + eligibleDividends;
        const taxableIncome = employmentIncome + selfEmploymentIncome + otherIncome + capitalGainsLosses*0.5 + eligibleDividends*0.38 - rrspContribution;
        // console.log(incomeArr);
            
        
        // Calculate federal tax
        let federalTaxCredit = federal_basic_personal_amount_2022*federal_tax_brackets_2022[0][1]/100
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
                let taxedAmount = Math.min(unTaxedIncome, federalTaxBracketHigh-federalTaxBracketLow);
                federalTax +=  Math.floor(taxedAmount * federalTaxRate/100);
                unTaxedIncome -= taxedAmount;
                federalTaxBracketLow = federalTaxBracketHigh;
            }
            
        }

        // Calculate provincial tax
        let provincialTaxCredit = provincial_basic_personal_amount_2022[income.province]*provincial_tax_brackets_2022[income.province][0][1]/100;
        console.log('provincial tax credit', provincialTaxCredit);
        unTaxedIncome = taxableIncome;
        // Check if income is lower than the basic personal amount
        if (unTaxedIncome < provincial_basic_personal_amount_2022[income.province]) {
            unTaxedIncome = 0;
        } else {
            unTaxedIncome -= provincialTaxCredit;
        }

        let provincialTaxBracketLow = 0;
        let provincialTaxBracketHigh = 0;
        let provincialTaxRate = 0;

        for (let taxBracket of provincial_tax_brackets_2022[income.province]) {
         
            if (provincialTaxBracketLow < taxableIncome) {
                [provincialTaxBracketHigh, provincialTaxRate] = taxBracket;
                let taxedAmount = Math.min(unTaxedIncome, provincialTaxBracketHigh-provincialTaxBracketLow);
                provincialTax +=  Math.floor(taxedAmount * provincialTaxRate/100);
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
            let cppCredit = cpp_2022.basicExemptionAmount * cpp_2022.rate /100;
            let cppEmployed = Math.min(employmentIncome * cpp_2022.rate /100, cpp_2022.maxContribution);
            let cppSelfEmployed = Math.min(selfEmploymentIncome * cpp_2022.rate * 2 /100, cpp_2022.maxContribution * 2);
            cppPremium = cppEmployed + cppSelfEmployed - cppCredit;
        }
        
        let eiPremiums = Math.min(employmentIncome * ei_2022.rate/100, ei_2022.maxContribution);

        cppEiPremiums = Math.ceil(cppPremium + eiPremiums);

        // Calculate total tax
        totalTax = federalTax + provincialTax + cppEiPremiums;
        afterTaxIncome = totalIncome - totalTax;
        averageTaxRate = totalIncome ? (totalTax/totalIncome*100).toFixed(2): 0;
        marginalTaxRate = federalTaxRate + provincialTaxRate;
        
        console.log(provincialTaxRate, federalTaxRate);

        setResults({ ...results,
            totalIncome: totalIncome,
            federalTax: federalTax,
            provincialTax: provincialTax,
            cppEiPremiums: cppEiPremiums,
            totalTax: totalTax,
            afterTaxIncome: afterTaxIncome,
            averageTaxRate: averageTaxRate,
            marginalTaxRate: marginalTaxRate })


 
    }

    useEffect(()=> {
        calculateAll()
    }, [income])

    return(
        <Box sx={{ p: 3, m: 3, boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px', borderRadius: 4 }}>
            <Typography variant='h6' align='center'>Estimated Results</Typography>

            <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around'}}>

                <Box sx={textBoxSx}>
                    <Typography variant='body' align='center' >Total Income:</Typography>
                    <Typography variant='body' align='center' >${results.totalIncome}</Typography>
                </Box>

                <hr width="100%" />
                
                <Box sx={textBoxSx}>
                    <Typography variant='body' align='center' >Federal Tax:</Typography>
                    <Typography variant='body' align='center' >${results.federalTax}</Typography>
                </Box>

                <Box sx={textBoxSx}>
                    <Typography variant='body' align='center' >Provincial Tax:</Typography>
                    <Typography variant='body' align='center' >${results.provincialTax}</Typography>
                </Box>

                <Box sx={textBoxSx}>
                    <Typography variant='body' align='center' >CPP/EI Premiums:</Typography>
                    <Typography variant='body' align='center' >${results.cppEiPremiums}</Typography>
                </Box>

                <Box sx={textBoxSx}>
                    <Typography variant='body' align='center' >Total Tax:</Typography>
                    <Typography variant='body' align='center' >${results.totalTax}</Typography>
                </Box>
                
                <hr width="100%" />
                
                
                <Box sx={textBoxSx}>
                    <Typography variant='body' align='center' >Average Tax Rate:</Typography>
                    <Typography variant='body' align='center' >{results.averageTaxRate}%</Typography>
                </Box>

                <Box sx={textBoxSx}>
                    <Typography variant='body' align='center' >Marginal Tax Rate:</Typography>
                    <Typography variant='body' align='center' >{results.marginalTaxRate}%</Typography>
                </Box>

                <hr width="100%" />
                
                <Box sx={textBoxSx}>
                    <Typography variant='body' align='center' >After-tax Income:</Typography>
                    <Typography variant='body' align='center' >${results.afterTaxIncome}</Typography>
                </Box>

                <Box sx={textBoxSx}>
                    <Typography variant='body' align='center' >Net Monthly Income:</Typography>
                    <Typography variant='body' align='center' >${Math.round(results.afterTaxIncome/12)}</Typography>
                </Box>
                
            </Box>
        </Box>
        
    )
}

export default TaxViewer;