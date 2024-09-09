import { Link } from '@nextui-org/react';
import { FaGithub } from 'react-icons/fa';

import ThemeSwitch from './theme-switch';

const Navbar = () => {
  return (
    <div className="absolute top-0 w-full flex justify-between items-center sm:p-8 p-4 gap-4">
      <Link
        className="text-2xl sm:text-3xl"
        target="_blank"
        href="https://github.com/nima-karami/taxulator"
      >
        <FaGithub />
      </Link>
      <ThemeSwitch />
    </div>
  );
};
export default Navbar;
