import { Tab, Tabs } from '@nextui-org/react';
import clsx from 'clsx';

import Background from './components/background';
import FadeIn from './components/fade-in';
import Footer from './components/footer';
import Header from './components/header';
import Navbar from './components/navbar';
import TaxCharts from './components/tax-charts';
import TaxResults from './components/tax-results';
import UserInfoForm from './components/user-info-form';
import { useAppContext } from './context/context-provider';

function App() {
  const { theme } = useAppContext();
  return (
    <div
      className={clsx(
        'flex flex-col items-center min-h-screen',
        theme === 'dark' && 'dark'
      )}
    >
      <Background />
      <Navbar />
      <Header />
      <Tabs aria-label="Options">
        <Tab
          key="calculator"
          title="Calculator"
          className="w-full flex-grow flex justify-center items-center"
        >
          <FadeIn>
            <div className="flex flex-col sm:flex-row px-4 sm:px-8 w-full justify-center items-center sm:items-stretch gap-4 pb-4">
              <UserInfoForm />
              <TaxResults />
            </div>
          </FadeIn>
        </Tab>
        <Tab
          key="charts"
          title="Charts"
          className="w-full flex-grow flex flex-col justify-center items-center"
        >
          <FadeIn>
            <div className="flex flex-col sm:flex-row px-4 sm:px-8 w-full justify-center items-center sm:items-stretch gap-4 pb-4">
              <TaxCharts />
            </div>
          </FadeIn>
        </Tab>
      </Tabs>

      <Footer />
    </div>
  );
}

export default App;
