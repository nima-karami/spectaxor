import {
  Card,
  CardBody,
  CardHeader,
  Input,
  Select,
  SelectItem,
} from '@nextui-org/react';

import { useAppContext } from '../context/context-provider';
import { PROVINCE_NAMES, TAX_YEARS } from '../utils/tax-data';
import { IncomeData, ProvinceId } from '../utils/types';

const UserInfoForm: React.FC<UserInfoFormProps> = () => {
  const { incomeData, setIncomeData } = useAppContext();

  const handleInputChange =
    (key: keyof IncomeData) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setIncomeData({ ...incomeData, [key]: Number(e.target.value) });
    };

  const handleProvinceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setIncomeData({ ...incomeData, provinceId: e.target.value as ProvinceId });
  };

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setIncomeData({ ...incomeData, year: e.target.value });
  };

  return (
    <Card className="p-8 w-96">
      <CardHeader className="font-bold justify-center mb-4">
        Your Information
      </CardHeader>
      <CardBody className="gap-4">
        <Select
          label="Year"
          defaultSelectedKeys={[TAX_YEARS[TAX_YEARS.length - 1]]}
          onChange={handleYearChange}
        >
          {TAX_YEARS.map((year) => (
            <SelectItem key={year} value={year}>
              {year}
            </SelectItem>
          ))}
        </Select>
        <Select
          label="Province"
          defaultSelectedKeys={['ON']}
          onChange={handleProvinceChange}
        >
          {Object.entries(PROVINCE_NAMES).map(([key, value]) => (
            <SelectItem key={key} value={key}>
              {value}
            </SelectItem>
          ))}
        </Select>
        <Input
          label="Employment Income"
          value={incomeData.employmentIncome.toString()}
          onChange={handleInputChange('employmentIncome')}
          type="number"
          startContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400">$</span>
            </div>
          }
        />
        <Input
          label="Self Employment Income"
          onChange={handleInputChange('selfEmploymentIncome')}
          type="number"
          startContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400">$</span>
            </div>
          }
        />
        <Input
          label="Other Income"
          onChange={handleInputChange('otherIncome')}
          type="number"
          startContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400">$</span>
            </div>
          }
        />
        <Input
          label="RRSP Contribution"
          onChange={handleInputChange('rrspContribution')}
          type="number"
          startContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400">$</span>
            </div>
          }
        />
        <Input
          label="Capital Gains/Losses"
          onChange={handleInputChange('capitalGainsLosses')}
          type="number"
          startContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400">$</span>
            </div>
          }
        />
        <Input
          label="Eligible Dividends"
          onChange={handleInputChange('eligibleDividends')}
          type="number"
          startContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400">$</span>
            </div>
          }
        />
      </CardBody>
    </Card>
  );
};
export default UserInfoForm;
