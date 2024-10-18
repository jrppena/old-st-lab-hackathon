import React from 'react';
import Header from '../components/header';

const ListViewPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <div className="w-full flex justify-center mt-4">
        <Header />
      </div>
      {/* Other components and content can go here */}
    </div>
  );
};

export default ListViewPage;