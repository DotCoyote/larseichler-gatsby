import React from 'react';

const Header = () => {
  return (
    <header className="flex flex-row py-3 px-6 items-center justify-between fixed inset-x-0 top-0 bg-gray-900 z-10">
      <a
        href="/"
        className={`
          font-bold hover:text-primary text-xl no-underline relative logo
        `}
      >
        <span className="relative z-10">Lars Eichler</span>
      </a>
    </header>
  );
};

export default Header;
