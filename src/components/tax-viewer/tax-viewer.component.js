import { Typography, Box } from "@mui/material";
import { useContext, useEffect } from "react";
import { MyContext } from "../../context/context-provider";

import { federal_tax_brackets_2022 } from "../../utils/tax-data";

const TaxViewer = () => {
    const { income, results, setResults } = useContext(MyContext);

    const textBoxSx = { width: '25ch', marginY: 1, display: 'flex', justifyContent: 'space-between' }
    
    const calculateTax = () => {
        console.log(income);
        const incomeArr = Object.values(income);
        incomeArr.shift();
        const totalIncome = incomeArr.reduce((total, num) => total+num);
    
        console.log(incomeArr);
        
        for (let tax_bracket of federal_tax_brackets_2022) {
            

        }
        
        setResults({ totalIncome: totalIncome })
 
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
                    <Typography variant='body' align='center' >$100,000</Typography>
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