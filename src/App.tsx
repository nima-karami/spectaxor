import { useState } from 'react';

import Header from './components/header';
import TaxResults from './components/tax-results';
import UserInfoForm from './components/user-info-form';
import { IncomeData } from './utils/types';

const INITIAL_INCOME_DATA: IncomeData = {
  provinceId: 'ON',
  year: '2024',
  employmentIncome: 0,
  selfEmploymentIncome: 0,
  otherIncome: 0,
  rrspContribution: 0,
  capitalGainsLosses: 0,
  eligibleDividends: 0,
};

function App() {
  const [incomeData, setIncomeData] = useState<IncomeData>(INITIAL_INCOME_DATA);
  console.log('incomeData', incomeData);
  return (
    <>
      <Header />
      <div className="flex w-full justify-center gap-4">
        <UserInfoForm incomeData={incomeData} setIncomeData={setIncomeData} />
        <TaxResults incomeData={incomeData} />
      </div>
    </>
  );
}

export default App;
