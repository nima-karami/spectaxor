import { Typography, Box } from "@mui/material";
import { useContext, useEffect } from "react";
import { MyContext } from "../../context/context-provider";

import { calculateResults } from "../../utils/calculate-results";

const TaxViewer = () => {
    const { income, results, setResults, numberWithCommas } = useContext(MyContext);
    const { totalIncome, federalTax, provincialTax, cppEiPremiums, totalTax, averageTaxRate, marginalTaxRate, afterTaxIncome } = results;

    const textBoxSx = { width: '25ch', marginY: 1, display: 'flex', justifyContent: 'space-between' }



    useEffect(()=> {
        let results = calculateResults(income);
        setResults(results);
    }, [income])

    return(
        <Box sx={{ p: 3, m: 3, boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px', borderRadius: 4 }}>
            <Typography variant='h6' align='center'>Estimated Results</Typography>

            <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around'}}>

                <Box sx={textBoxSx}>
                    <Typography variant='body' align='center' >Total Income:</Typography>
                    <Typography variant='body' align='center' >${numberWithCommas(totalIncome)}</Typography>
                </Box>

                <hr width="100%" />
                
                <Box sx={textBoxSx}>
                    <Typography variant='body' align='center' >Federal Tax:</Typography>
                    <Typography variant='body' align='center' >${numberWithCommas(federalTax)}</Typography>
                </Box>

                <Box sx={textBoxSx}>
                    <Typography variant='body' align='center' >Provincial Tax:</Typography>
                    <Typography variant='body' align='center' >${numberWithCommas(provincialTax)}</Typography>
                </Box>

                <Box sx={textBoxSx}>
                    <Typography variant='body' align='center' >CPP/EI Premiums:</Typography>
                    <Typography variant='body' align='center' >${numberWithCommas(cppEiPremiums)}</Typography>
                </Box>

                <Box sx={textBoxSx}>
                    <Typography variant='body' align='center' >Total Tax:</Typography>
                    <Typography variant='body' align='center' >${numberWithCommas(totalTax)}</Typography>
                </Box>
                
                <hr width="100%" />
                
                
                <Box sx={textBoxSx}>
                    <Typography variant='body' align='center' >Average Tax Rate:</Typography>
                    <Typography variant='body' align='center' >{numberWithCommas(averageTaxRate)}%</Typography>
                </Box>

                <Box sx={textBoxSx}>
                    <Typography variant='body' align='center' >Marginal Tax Rate:</Typography>
                    <Typography variant='body' align='center' >{numberWithCommas(marginalTaxRate)}%</Typography>
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