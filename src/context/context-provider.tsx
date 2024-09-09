import { createContext, useContext, useEffect, useState } from 'react';

import { IncomeData, Theme } from '../utils/types';

const INITIAL_INCOME_DATA: IncomeData = {
  provinceId: 'ON',
  year: '2024',
  employmentIncome: 60000,
  selfEmploymentIncome: 0,
  otherIncome: 0,
  rrspContribution: 0,
  capitalGainsLosses: 0,
  eligibleDividends: 0,
};

type AppContextType = {
  incomeData: IncomeData;
  setIncomeData: (incomeData: IncomeData) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  isMobile: boolean;
};

const MyContext = createContext<AppContextType | undefined>(undefined);

type AppContextProviderProps = {
  children: React.ReactNode;
};

export const AppContextProvider: React.FC<AppContextProviderProps> = ({
  children,
}) => {
  const [incomeData, setIncomeData] = useState<IncomeData>(INITIAL_INCOME_DATA);
  const [theme, setTheme] = useState<Theme>('dark');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [setIsMobile]);

  const value = { incomeData, setIncomeData, theme, setTheme, isMobile };
  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};

export const useAppContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error('useAppContext must be used within a AppContextProvider');
  }
  return context;
};
