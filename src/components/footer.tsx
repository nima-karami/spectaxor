import { Link } from '@nextui-org/react';

const Footer = () => {
  return (
    <div className="flex flex-col justify-end ">
      <p className="bottom-0 w-full text-center py-4 text-foreground">
        Created by{' '}
        <Link target="_blank" href="https:nima-karami.com">
          Nima Karami
        </Link>{' '}
        | 2024
      </p>
    </div>
  );
};
export default Footer;
