import ThemeSwitch from './theme-switch';

const Navbar = () => {
  return (
    <div className="absolute top-0 w-full flex justify-end sm:p-8 p-4">
      <ThemeSwitch />
    </div>
  );
};
export default Navbar;
