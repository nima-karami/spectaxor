import { Typography, Box } from "@mui/material";
import { useContext, useEffect } from "react";
import { MyContext } from "../../context/context-provider";

import { federal_tax_brackets_2022 } from "../../utils/tax-data";

const TaxViewer = () => {
    const { income, results, setResults } = useContext(MyContext);

    const textBoxSx = { width: '25ch', marginY: 1, display: 'flex', justifyContent: 'space-between' }
    
    const calculateTax = () => {
        console.log(income);
        const { employmentIncome, selfEmploymentIncome, otherIncome, capitalGainsLosses, eligibleDividends } = income;
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
        // console.log(incomeArr);
        

        let taxableIncome = employmentIncome + selfEmploymentIncome;
        let taxBracketLow = 0;
        let taxBracketHigh = 0;
        let taxRate = 0;

        for (let taxBracket of federal_tax_brackets_2022) {
            [taxBracketHigh, taxRate] = taxBracket;
           
            if (taxBracketLow < employmentIncome) {
                let taxedAmount = Math.min(taxableIncome, taxBracketHigh-taxBracketLow);
                federalTax +=  Math.floor(taxedAmount * taxRate/100);
                taxableIncome -= taxedAmount;
            }

            taxBracketLow = taxBracketHigh;
        }
        
        setResults({ totalIncome: totalIncome, federalTax: federalTax })
 
    }

    useEffect(()=> {
        calculateTax()
    }, [income])

    return(
        <Box sx={{ p: 3, m: 3, boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px', borderRadius: 4 }}>
            <Typography variant='h6' align='center'>Your Results</Typography>

            <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around'}}>

                <Box sx={textBoxSx}>
                    <Typography variant='body' align='center' >Total Income:</Typography>
                    <Typography variant='body' align='center' >${results.totalIncome}</Typography>
                </Box>

                <Box sx={textBoxSx}>
                    <Typography variant='body' align='center' >Federal Tax:</Typography>
                    <Typography variant='body' align='center' >${results.federalTax}</Typography>
                </Box>

                <Box sx={textBoxSx}>
                    <Typography variant='body' align='center' >Provincial Tax:</Typography>
                    <Typography variant='body' align='center' >$100,000</Typography>
                </Box>

                <Box sx={textBoxSx}>
                    <Typography variant='body' align='center' >CPP/EI Premiums:</Typography>
                    <Typography variant='body' align='center' >$100,000</Typography>
                </Box>

                <Box sx={textBoxSx}>
                    <Typography variant='body' align='center' >Total Tax:</Typography>
                    <Typography variant='body' align='center' >$100,000</Typography>
                </Box>

                <Box sx={textBoxSx}>
                    <Typography variant='body' align='center' >Average Tax Rate:</Typography>
                    <Typography variant='body' align='center' >20%</Typography>
                </Box>

                <Box sx={textBoxSx}>
                    <Typography variant='body' align='center' >Marginal Tax Rate:</Typography>
                    <Typography variant='body' align='center' >50%</Typography>
                </Box>
                
                <Box sx={textBoxSx}>
                    <Typography variant='body' align='center' >After-tax Income:</Typography>
                    <Typography variant='body' align='center' >$100,000</Typography>
                </Box>
            </Box>
        </Box>
        
    )
}

export default TaxViewer;