import { Card, CardBody, CardHeader } from '@nextui-org/react';
import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from 'recharts';

import { useAppContext } from '../context/context-provider';
import { calculateTaxResults } from '../utils/calculate-tax';

const TaxResults: React.FC = () => {
  const { incomeData } = useAppContext();
  const results = calculateTaxResults(incomeData);

  return (
    <Card className="p-4 sm:p-8 w-full max-w-96 sm:w-96">
      <CardHeader className="font-bold justify-center mb-4">
        Estimated Results
      </CardHeader>
      <CardBody>
        <Result
          title="Total Income"
          value={results.totalIncome}
          valueType="currency"
        />

        <hr className="my-2" />
        <Result
          title="Federal Tax"
          value={results.federalTax}
          valueType="currency"
        />
        <Result
          title="Provincial Tax"
          value={results.provincialTax}
          valueType="currency"
        />
        <Result
          title="CPP/EI Premiums"
          value={results.cppEiPremiums}
          valueType="currency"
        />
        <Result
          title="Total Tax"
          value={results.totalTax}
          valueType="currency"
        />
        <hr className="my-2" />

        <Result
          title="Average Tax Rate"
          value={results.averageTaxRate}
          valueType="percentage"
        />
        <Result
          title="Marginal Tax Rate"
          value={results.marginalTaxRate}
          valueType="percentage"
        />
        <hr className="my-2" />
        <Result
          title="After Tax Income"
          value={results.afterTaxIncome}
          valueType="currency"
        />
        <hr className="my-2" />
        <div className="w-full h-96">
          <TaxPieChart
            data={[
              { name: 'Federal Tax', value: results.federalTax },
              { name: 'Provincial Tax', value: results.provincialTax },
              { name: 'CPP/EI Premiums', value: results.cppEiPremiums },
              { name: 'After Tax Income', value: results.afterTaxIncome },
            ]}
          />
        </div>
      </CardBody>
    </Card>
  );
};
export default TaxResults;

type ResultProps = {
  title: string;
  value: number;
  valueType: 'currency' | 'percentage';
};

const Result: React.FC<ResultProps> = ({ title, value, valueType }) => {
  const truncatedValue = Math.round(value * 100) / 100;
  let formattedValue = '';
  if (valueType === 'currency') {
    // Add commas to the number
    formattedValue = `$${truncatedValue.toLocaleString()}`;
  } else if (valueType === 'percentage') {
    formattedValue = `${truncatedValue}%`;
  }
  return (
    <div className="flex justify-between">
      <p>{title}</p>
      <p>{formattedValue}</p>
    </div>
  );
};

type TaxPieChartProps = {
  data: { name: string; value: number }[];
};

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}: {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
  index: number;
  payload: { name: string; value: number };
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 1.8;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <>
      <text
        x={x}
        y={y}
        fill={COLORS[index % COLORS.length]}
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    </>
  );
};

const TaxPieChart: React.FC<TaxPieChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={400} height={100}>
        <Pie
          dataKey="value"
          data={data}
          fill="#8884d8"
          cx="50%"
          cy="50%"
          outerRadius={80}
          innerRadius={40}
          labelLine={true}
          label={renderCustomizedLabel}
          legendType="circle"
        >
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend
          layout="radial"
          height={80}
          margin={{ top: 0, left: 0, right: 0, bottom: 0 }}
        />
      </PieChart>
    </ResponsiveContainer>
  );
};
