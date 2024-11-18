import { useMemo, useState } from 'react';

import { Card, CardBody, CardHeader } from '@nextui-org/react';
import { Layer, ResponsiveLine } from '@nivo/line';

import { useAppContext } from '../context/context-provider';
import { calculateTaxResults } from '../utils/calculate-tax';
import { PROVINCE_NAMES } from '../utils/tax-data';
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
  id: string;
  data: { x: number; y: number }[];
};

const calculateTotalTaxForAllProvincesAndSalaries = () => {
  const results: TaxChartData[] = [];

  allProvinces.forEach((province) => {
    const data: { x: number; y: number }[] = [];

    salaryPoints.forEach((salary) => {
      data.push({
        x: salary,
        y: calculateTotalTax(province, salary),
      });
    });

    results.push({ id: PROVINCE_NAMES[province], data });
  });
  return results;
};

const chartData = calculateTotalTaxForAllProvincesAndSalaries();

const TaxCharts = () => {
  console.log(chartData);
  const { theme, isMobile } = useAppContext();
  const [selectedProvince, setSelectedProvince] = useState<ProvinceId | null>(
    null
  );

  const legendsItemTextColors = {
    selected: theme === 'dark' ? '#fff' : '#000',
    unselected: theme === 'dark' ? 'lightGrey' : 'grey',
  };

  const lineOpacity = {
    selected: 1,
    unselected: 0.3,
  };

  // Define the CustomLayerProps type
  type CustomLayerProps = {
    series: {
      id: string;
      data: { data: { x: number; y: number } }[];
      color: string;
    }[];
    lineGenerator: (data: { x: number; y: number }[]) => string;
    xScale: (value: number) => number;
    yScale: (value: number) => number;
  };

  // Create a custom line layer to adjust line opacity
  const CustomLineLayer: React.FC<CustomLayerProps> = ({
    series,
    lineGenerator,
    xScale,
    yScale,
  }) => (
    <g>
      {series.map(({ id, data, color }) => (
        <path
          key={id}
          d={lineGenerator(
            data.map((d) => ({
              x: xScale(d.data.x),
              y: yScale(d.data.y),
            }))
          )}
          fill="none"
          stroke={color}
          strokeWidth={2}
          opacity={
            selectedProvince === null || selectedProvince === id ? 1 : 0.1
          }
        />
      ))}
    </g>
  );

  // Create custom points layer to adjust point opacity
  const CustomPointsLayer: React.FC<CustomLayerProps> = ({
    series,
    xScale,
    yScale,
  }) => (
    <g>
      {series.map(({ id, data, color }) => (
        <g key={id}>
          {data.map((d) => (
            <circle
              key={`${id}-${d.data.x}`}
              cx={xScale(d.data.x)}
              cy={yScale(d.data.y)}
              r={4}
              fill={color}
              opacity={
                selectedProvince === null || selectedProvince === id ? 1 : 0.1
              }
            />
          ))}
        </g>
      ))}
    </g>
  );

  return (
    <Card className="lg:w-[800px] xl:w-[1000px] h-[750px] sm:h-[600px] p-4 sm:p-8 ">
      <CardHeader className="font-bold justify-center mb-4">
        Comparison of Total Tax by Province and Salary
      </CardHeader>
      <CardBody>
        <div className="w-full h-full overflow-hidden">
          <ResponsiveLine
            data={chartData}
            colors={{ scheme: 'paired' }}
            margin={{
              top: 100,
              right: isMobile ? 0 : 200,
              bottom: isMobile ? 320 : 50,
              left: isMobile ? 90 : 100,
            }}
            xScale={{ type: 'point' }}
            yScale={{
              type: 'linear',
              min: 'auto',
              max: 'auto',
            }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'Salary (in dollars)',
              legendOffset: 36,
              legendPosition: 'middle',
              truncateTickAt: 0,
              format: (value) => `$${value / 1000}k`,
            }}
            axisLeft={{
              tickSize: 5,
              tickPadding: 15,
              tickRotation: 0,
              legend: 'Total Tax (in dollars)',
              legendOffset: -70,
              legendPosition: 'middle',
              format: (value) => `$${value / 1000}k`,
            }}
            enableTouchCrosshair={true}
            useMesh={true}
            tooltip={({ point }) => (
              console.log(point),
              (
                <ChartTooltip
                  label={point.serieId as string}
                  salary={point.data.x as number}
                  totalTax={point.data.y as number}
                  color={point.serieColor as string}
                />
              )
            )}
            layers={[
              'grid',
              'markers',
              'axes',
              CustomLineLayer as unknown as Layer,
              CustomPointsLayer as unknown as Layer,
              'slices',
              'mesh',
              'legends',
            ]}
            legends={[
              {
                itemTextColor: theme === 'dark' ? '#fff' : '#000',
                anchor: isMobile ? 'bottom' : 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: isMobile ? -120 : 120,
                translateY: isMobile ? 320 : 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                onClick: (data) => {
                  setSelectedProvince((prev) =>
                    prev === data.id ? null : (data.id as ProvinceId)
                  );
                },
                effects: [
                  {
                    on: 'hover',
                    style: {
                      itemBackground: 'rgba(0, 0, 0, .03)',
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]}
            theme={{
              axis: {
                ticks: {
                  text: {
                    fill: theme === 'dark' ? 'lightGrey' : 'grey',
                  },
                },
                legend: {
                  text: {
                    fill: theme === 'dark' ? 'lightGrey' : 'grey',
                  },
                },
              },
              crosshair: {
                line: {
                  stroke: theme === 'dark' ? 'lightGrey' : 'grey',
                  strokeWidth: 1,
                  strokeDasharray: '6',
                },
              },
            }}
          />
        </div>
      </CardBody>
    </Card>
  );
};
export default TaxCharts;

type ChartTooltipProps = {
  label: string;
  salary: number;
  totalTax: number;
  color: string;
};

const ChartTooltip: React.FC<ChartTooltipProps> = ({
  label,
  salary,
  totalTax,
  color,
}) => {
  return (
    <Card
      className="sm:p-4 p-2 text-sm sm:text-base bg-background"
      style={{
        border: `2px solid ${color}`,
      }}
    >
      <p>{label}</p>
      <p>Salary: ${salary / 1000}k</p>
      <p>Total Tax: ${totalTax / 1000}k</p>
    </Card>
  );
};
