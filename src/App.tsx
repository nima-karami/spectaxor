import Background from './components/background';
import Header from './components/header';
import Navbar from './components/navbar';
import TaxResults from './components/tax-results';
import UserInfoForm from './components/user-info-form';
import { useAppContext } from './context/context-provider';

function App() {
  const { theme } = useAppContext();
  return (
    <div className={theme === 'dark' ? 'dark' : 'light'}>
      <Background />
      <Navbar />
      <Header />
      <div className="flex w-full justify-center gap-4">
        <UserInfoForm />
        <TaxResults />
      </div>
    </div>
  );
}

export default App;
