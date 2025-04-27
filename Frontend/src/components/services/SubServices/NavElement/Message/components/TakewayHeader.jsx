import React from 'react';
import PrintIcon from '@mui/icons-material/Print';
import GetAppIcon from '@mui/icons-material/GetApp';

const Header = ({ onPrint, onDownload }) => (
  <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-200">
    <h1 className="text-2xl font-bold text-gray-900">Repair Take-Away Slip</h1>
    <div className="flex space-x-4">
      <button
        onClick={onPrint}
        className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 flex items-center"
      >
        <PrintIcon className="mr-2" /> Print
      </button>
      <button
        onClick={onDownload}
        className="bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 flex items-center"
      >
        <GetAppIcon className="mr-2" /> Download PDF
      </button>
    </div>
  </div>
);

export default Header;
