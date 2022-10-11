import { Typography, Box } from "@mui/material";
import { useContext, useEffect } from "react";
import { MyContext } from "../../context/context-provider";

import { federal_tax_brackets_2022,
        provincial_tax_brackets_2022,
        federal_basic_personal_amount_2022,
        provincial_basic_personal_amount_2022,
      } from "../../utils/tax-data";

const TaxViewer = () => {
    const { income, results, setResults } = useContext(MyContext);

    const textBoxSx = { width: '25ch', marginY: 1, display: 'flex', justifyContent: 'space-between' }
    
    const calculateAll = () => {
        console.log(income);
        const { employmentIncome, selfEmploymentIncome, otherIncome, capitalGainsLosses, eligibleDividends } = income;
        let federalTax = 0;
        let provincialTax = 0;
        let cppEiPremiums = 0;
        let totalTax = 0;
        let averagefederalTaxRate = 0;
        let marginalfederalTaxRate = 0;
        let afterTaxIncome = 0;
        // const incomeArr = Object.values(income);
        // incomeArr.shift();
        const totalIncome = employmentIncome + selfEmploymentIncome + otherIncome + capitalGainsLosses + eligibleDividends;
        // console.log(incomeArr);
            
        
        // Calculate federal tax
        let federalTaxCredit = federal_basic_personal_amount_2022*federal_tax_brackets_2022[0][1]/100
        let taxableIncome = employmentIncome + selfEmploymentIncome;
        
        // Check if income is lower than the basic personal amount
        if (taxableIncome < federal_basic_personal_amount_2022) {
            taxableIncome = 0;
        } else {
            taxableIncome -= federalTaxCredit;
        }

        let federalTaxBracketLow = 0;
        let federalTaxBracketHigh = 0;
        let federalTaxRate = 0;

        for (let taxBracket of federal_tax_brackets_2022) {
            [federalTaxBracketHigh, federalTaxRate] = taxBracket;
           
            if (federalTaxBracketLow < employmentIncome) {
                let taxedAmount = Math.min(taxableIncome, federalTaxBracketHigh-federalTaxBracketLow);
                federalTax +=  Math.floor(taxedAmount * federalTaxRate/100);
                taxableIncome -= taxedAmount;
                federalTaxBracketLow = federalTaxBracketHigh;
            }
            
        }

        // Calculate provincial tax
        let provincialTaxCredit = provincial_basic_personal_amount_2022[income.province]*provincial_tax_brackets_2022[income.province][0][1]/100;
        console.log('provincial tax credit', provincialTaxCredit);
        taxableIncome = employmentIncome + selfEmploymentIncome;
        // Check if income is lower than the basic personal amount
        if (taxableIncome < provincial_basic_personal_amount_2022[income.province]) {
            taxableIncome = 0;
        } else {
            taxableIncome -= provincialTaxCredit;
        }

        let provincialTaxBracketLow = 0;
        let provincialTaxBracketHigh = 0;
        let provincialTaxRate = 0;

        for (let taxBracket of provincial_tax_brackets_2022[income.province]) {
            
            [provincialTaxBracketHigh, provincialTaxRate] = taxBracket;

            if (provincialTaxBracketLow < employmentIncome) {
                let taxedAmount = Math.min(taxableIncome, provincialTaxBracketHigh-provincialTaxBracketLow);
                provincialTax +=  Math.floor(taxedAmount * provincialTaxRate/100);
                taxableIncome -= taxedAmount;
                provincialTaxBracketLow = provincialTaxBracketHigh;
            }
        }

        
        // calculate provincial tax



        setResults({ totalIncome: totalIncome, federalTax: federalTax, provincialTax: provincialTax })


 
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