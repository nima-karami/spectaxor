import { Card, CardBody, CardHeader, Tooltip } from '@nextui-org/react';
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';

import { calculateTaxResults } from '../utils/calculate-tax';
import { ProvinceId } from '../utils/types';

const allProvinces: ProvinceId[] = [
  'AB',
  'BC',
  'MB',
  'NB',
  'NL',
  'NS',
  'NT',
  'NU',
  'ON',
  'PE',
  'QC',
  'SK',
  'YT',
];

const salaryPoints: number[] = [
  0, 60000, 120000, 180000, 240000, 300000, 360000, 420000,
];

// calculate the total tax for every province and salary point

const calculateTotalTax = (province: ProvinceId, salary: number) => {
  const taxResults = calculateTaxResults({
    provinceId: province,
    year: '2024',
    employmentIncome: salary,
    selfEmploymentIncome: 0,
    otherIncome: 0,
    rrspContribution: 0,
    capitalGainsLosses: 0,
    eligibleDividends: 0,
  });

  return taxResults.totalTax;
};

// calculate the total tax for every province and salary point

type TaxChartData = {
  salaryPoint: string;
} & { [key in ProvinceId]: number };

const calculateTotalTaxForAllProvincesAndSalaries = () => {
  const results: TaxChartData[] = [];

  for (const salary of salaryPoints) {
    const result: TaxChartData = {
      salaryPoint: `$${salary.toLocaleString()}`,
      AB: 0,
      BC: 0,
      MB: 0,
      NB: 0,
      NL: 0,
      NS: 0,
      NT: 0,
      NU: 0,
      ON: 0,
      PE: 0,
      QC: 0,
      SK: 0,
      YT: 0,
    };

    for (const province of allProvinces) {
      result[province] = calculateTotalTax(province, salary);
    }

    results.push(result);
  }
  return results;
};

const chartData = calculateTotalTaxForAllProvincesAndSalaries();

const PROVINCE_COLORS: Record<ProvinceId, string> = {
  AB: '#8884d8',
  BC: '#82ca9d',
  MB: '#ffc658',
  NB: '#ff7300',
  NL: '#d8b83f',
  NS: '#ff85c0',
  NT: '#a4de6c',
  NU: '#82ca9d',
  ON: '#8884d8',
  PE: '#ffc658',
  QC: '#ff7300',
  SK: '#d8b83f',
  YT: '#ff85c0',
};

const TaxCharts = () => {
  console.log(chartData);
  return (
    <Card className="lg:w-[800px] xl:w-[1000px] h-[600px] sm:p-8 p-4">
      <CardHeader className="font-bold justify-center mb-4">
        Comparison of Total Tax by Province and Salary
      </CardHeader>
      <CardBody>
        <div className="w-full h-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <XAxis dataKey="salaryPoint" />
              <YAxis />
              <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
              <Tooltip />
              <Legend />
              {allProvinces.map((province) => (
                <Line
                  key={province}
                  type="monotone"
                  dataKey={province}
                  stroke={PROVINCE_COLORS[province]}
                  activeDot={{ r: 18 }}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardBody>
    </Card>
  );
};
export default TaxCharts;
