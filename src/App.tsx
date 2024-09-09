import clsx from 'clsx';

import Background from './components/background';
import Footer from './components/footer';
import Header from './components/header';
import Navbar from './components/navbar';
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
      <div className="w-full flex-grow flex justify-center items-center">
        <div className="flex flex-col sm:flex-row px-4 sm:px-8 w-full justify-center items-center sm:items-stretch gap-4 pb-4">
          <UserInfoForm />
          <TaxResults />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
