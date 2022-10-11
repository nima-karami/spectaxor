import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine } from 'recharts';



import { calculateResults } from "../../utils/calculate-results";
import { useContext } from "react";
import { MyContext } from "../../context/context-provider";


const Graph = () => {
  
  const { income } = useContext(MyContext);

  const salariesArr = [0, 30000, 60000, 90000, 120000, 150000, 180000, 210000, 240000, 270000, 300000];
  const resultsArr = [];

  for (let salary of salariesArr) {
    
    const tempIncome = {
      province: income.province,
      employmentIncome: salary,
      selfEmploymentIncome: 0,
      otherIncome: 0,
      rrspContribution: 0,
      capitalGainsLosses: 0,
      eligibleDividends: 0
    }
    
    let { federalTax, provincialTax, cppEiPremiums } = calculateResults(tempIncome);

    resultsArr.push({
      'Salary': `${salary/1000}k`,
      'Federal Tax': federalTax,
      'Provincial Tax': provincialTax,
      'CPP/EI Premiums': cppEiPremiums
    })
  }


    return(
        <Box sx={{ width: { xs: '346px', md: '755px'}, p: 3, m: 3, boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px', borderRadius: 4 }}>
            <Typography variant='h6' align='center'>Graph</Typography>
            
            <Box sx={{ width: '100%', height: '90%', marginY: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant='body' align='center' m={3}>{income.province} Employment Tax</Typography>
                <ResponsiveContainer width="95%" height="80%">
                    <AreaChart
                        width={800}
                        height={400}
                        data={resultsArr}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                        >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="Salary" />
                        <YAxis />
                        <Tooltip />
                        
                        <Area type="monotone" dataKey="Federal Tax" stackId="1" stroke="#8884d8" fill="#8884d8" />
                        <Area type="monotone" dataKey="Provincial Tax" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                        <Area type="monotone" dataKey="CPP/EI Premiums" stackId="1" stroke="#ffc658" fill="#ffc658" />
                        <Legend/>
                    </AreaChart>
                </ResponsiveContainer>
            </Box>
        </Box>
        
    )
}

export default Graph;