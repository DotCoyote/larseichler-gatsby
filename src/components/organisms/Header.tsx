import React from 'react';

const Header = () => {
  return (
    <header className="flex flex-row py-3 px-6 items-center justify-between fixed inset-x-0 top-0 bg-gray-900">
      <a href="/" className="font-bold hover:text-gray-900 text-xl">
        Lars Eichler
      </a>
      <time dateTime="2021-12-01T00:00:00TZD" className="text-gray-300">
        December 2021
      </time>
    </header>
  );
};

export default Header;
