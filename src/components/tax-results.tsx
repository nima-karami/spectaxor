import { Card, CardBody, CardHeader, Tab, Tabs } from '@nextui-org/react';
import { ResponsivePie } from '@nivo/pie';

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
        <Tabs aria-label="Results" fullWidth variant="underlined">
          <Tab
            key="annual"
            title="Annual"
            className="w-full flex-grow flex flex-col justify-center items-center"
          >
            <Result
              title="Total Income"
              value={results.totalIncome}
              valueType="currency"
            />

            <hr className="my-2 w-full" />
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
            <hr className="my-2 w-full" />

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
            <hr className="my-2 w-full" />
            <Result
              title="After Tax Income"
              value={results.afterTaxIncome}
              valueType="currency"
            />
            <hr className="my-2 w-full" />
          </Tab>
          <Tab
            key="monthly"
            title="Monthly"
            className="w-full flex-grow flex flex-col justify-center items-center"
          >
            <Result
              title="Total Income"
              value={results.totalIncome / 12}
              valueType="currency"
            />

            <hr className="my-2 w-full" />
            <Result
              title="Federal Tax"
              value={results.federalTax / 12}
              valueType="currency"
            />
            <Result
              title="Provincial Tax"
              value={results.provincialTax / 12}
              valueType="currency"
            />
            <Result
              title="CPP/EI Premiums"
              value={results.cppEiPremiums / 12}
              valueType="currency"
            />
            <Result
              title="Total Tax"
              value={results.totalTax / 12}
              valueType="currency"
            />
            <hr className="my-2 w-full" />

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
            <hr className="my-2 w-full" />
            <Result
              title="After Tax Income"
              value={results.afterTaxIncome / 12}
              valueType="currency"
            />
            <hr className="my-2 w-full" />
          </Tab>
          <Tab
            key="daily"
            title="Daily"
            className="w-full flex-grow flex flex-col justify-center items-center"
          >
            <Result
              title="Total Income"
              value={results.totalIncome / 260}
              valueType="currency"
            />

            <hr className="my-2 w-full" />
            <Result
              title="Federal Tax"
              value={results.federalTax / 260}
              valueType="currency"
            />
            <Result
              title="Provincial Tax"
              value={results.provincialTax / 260}
              valueType="currency"
            />
            <Result
              title="CPP/EI Premiums"
              value={results.cppEiPremiums / 260}
              valueType="currency"
            />
            <Result
              title="Total Tax"
              value={results.totalTax / 260}
              valueType="currency"
            />
            <hr className="my-2 w-full" />

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
            <hr className="my-2 w-full" />
            <Result
              title="After Tax Income"
              value={results.afterTaxIncome / 260}
              valueType="currency"
            />
            <hr className="my-2 w-full" />
          </Tab>
          <Tab
            key="hourly"
            title="Hourly"
            className="w-full flex-grow flex flex-col justify-center items-center"
          >
            <Result
              title="Total Income"
              value={results.totalIncome / 2087}
              valueType="currency"
            />

            <hr className="my-2 w-full" />
            <Result
              title="Federal Tax"
              value={results.federalTax / 2087}
              valueType="currency"
            />
            <Result
              title="Provincial Tax"
              value={results.provincialTax / 2087}
              valueType="currency"
            />
            <Result
              title="CPP/EI Premiums"
              value={results.cppEiPremiums / 2087}
              valueType="currency"
            />
            <Result
              title="Total Tax"
              value={results.totalTax / 2087}
              valueType="currency"
            />
            <hr className="my-2 w-full" />

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
            <hr className="my-2 w-full" />
            <Result
              title="After Tax Income"
              value={results.afterTaxIncome / 2087}
              valueType="currency"
            />
            <hr className="my-2 w-full" />
          </Tab>
        </Tabs>

        <div className="w-full h-96 overflow-hidden">
          <TaxPieChart
            data={[
              {
                id: 'fed-tax',
                label: 'Federal Tax',
                value: results.federalTax,
              },
              {
                id: 'prov-tax',
                label: 'Provincial Tax',
                value: results.provincialTax,
              },
              {
                id: 'cpp-tax',
                label: 'CPP/EI Premiums',
                value: results.cppEiPremiums,
              },
              {
                id: 'net-income',
                label: 'After Tax Income',
                value: results.afterTaxIncome,
              },
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
    <div className="w-full flex justify-between">
      <p>{title}</p>
      <p>{formattedValue}</p>
    </div>
  );
};

const CustomTooltip: React.FC<{ value: number; label: string }> = ({
  value,
  label,
}) => {
  return (
    <Card className="p-2 bg-background/70">
      <h3>{label}</h3>
      <p>$ {value.toLocaleString()}</p>
    </Card>
  );
};

type TaxPieChartProps = {
  data: { id: string; label: string; value: number }[];
};

const TaxPieChart: React.FC<TaxPieChartProps> = ({ data }) => {
  const { theme } = useAppContext();
  const totalValue = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <ResponsivePie
      data={data}
      margin={{ top: 20, right: 50, bottom: 40, left: 50 }}
      innerRadius={0.4}
      padAngle={2}
      cornerRadius={5}
      colors={{ scheme: 'category10' }}
      borderWidth={0}
      enableArcLinkLabels={false}
      arcLabelsSkipAngle={5}
      arcLabel={(d) => `${((d.value / totalValue) * 100).toFixed(2)}%`}
      arcLabelsTextColor="lightGrey"
      activeOuterRadiusOffset={8}
      tooltip={({ datum }) => (
        <CustomTooltip value={datum.value} label={datum.label as string} />
      )}
      legends={[
        {
          anchor: 'bottom',
          direction: 'column',
          justify: false,
          translateX: -90,
          translateY: 30,
          itemsSpacing: 5,
          itemWidth: 100,
          itemHeight: 18,
          itemTextColor: '#999',
          itemDirection: 'left-to-right',
          itemOpacity: 1,
          symbolSize: 18,
          symbolShape: 'circle',
          effects: [
            {
              on: 'hover',
              style: {
                itemTextColor: theme === 'dark' ? '#fff' : '#000',
              },
            },
          ],
        },
      ]}
    />
  );
};
