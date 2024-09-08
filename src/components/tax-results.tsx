import { Card, CardBody, CardHeader } from '@nextui-org/react';

import { IncomeData } from '../utils/types';

type TaxResultsProps = {
  incomeData: IncomeData;
};

const TaxResults: React.FC<TaxResultsProps> = ({ incomeData }) => {
  const results = calculateTaxResults(incomeData);
  return (
    <Card className="p-4 min-w-80">
      <CardHeader className="font-bold justify-center">
        Estimated Results
      </CardHeader>
      <CardBody></CardBody>
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
  return (
    <div className="flex justify-between">
      <p>{title}</p>
      <p>{value}</p>
    </div>
  );
};
