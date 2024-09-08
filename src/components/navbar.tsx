import ThemeSwitch from './theme-switch';

const Navbar = () => {
  return (
    <div className="fixed top-0 w-full flex justify-end p-8">
      <ThemeSwitch />
    </div>
  );
};
export default Navbar;
