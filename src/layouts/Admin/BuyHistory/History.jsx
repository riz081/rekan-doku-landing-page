import React, { useState } from 'react';
import { FaTrash, FaDownload, FaFileAlt } from 'react-icons/fa';
import { NavigationTabs, Quota, generateQuota } from '../../../components';
import { EmptyData } from '../../../assets'

const History = () => {
  const [quota, setQuota] = useState(generateQuota());

  // Dummy data
  const generateDummyData = () => {
    return Array.from({ length: 41 }, (_, index) => ({
      invoiceNumber: `RDEMTE098765-${index + 1}`,
      jenisPembelian: '1 Keping e-Meterai Rp. 10.000',
      tanggalPembelian: '02-01-2025, 14:30 WIB',
      jumlahPembelian: 1,
      total: 'Rp. 12.000',
      status: 'Berhasil',
    }));
  };

  const [data, setData] = useState(generateDummyData());
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  // Pagination logic
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const displayedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    } else if (sortConfig.key === key && sortConfig.direction === 'desc') {
      direction = 'asc';
    }
    setSortConfig({ key, direction });

    const sortedData = [...data].sort((a, b) => {
      if (a[key] < b[key]) {
        return direction === 'asc' ? -1 : 1;
      }
      if (a[key] > b[key]) {
        return direction === 'asc' ? 1 : -1;
      }
      return 0;
    });

    setData(sortedData);
  };

  // Render Pagination Buttons (First, Pages, Last)
  const renderPagination = () => {
    const pages = [];
    const firstPage = 1;
    const lastPage = totalPages;

    // Start and End for displaying 3 pages
    const startPage = Math.max(currentPage - 1, firstPage);
    const endPage = Math.min(currentPage + 1, lastPage);

    // First Page Button
    if (currentPage > 1) {
      pages.push(
        <button
          key="first"
          className="px-3 py-1 border rounded-l bg-white text-[#007BFF] hover:bg-gray-100"
          onClick={() => handlePageChange(firstPage)}
        >
          «
        </button>
      );
    }

    // Page Number Buttons
    for (let page = startPage; page <= endPage; page++) {
      pages.push(
        <button
          key={page}
          className={`px-3 py-1 border ${
            page === currentPage
              ? 'bg-blue-500 text-white'
              : 'bg-white text-blue-500 hover:bg-gray-100'
          }`}
          onClick={() => handlePageChange(page)}
        >
          {page}
        </button>
      );
    }

    // Last Page Button
    if (currentPage < totalPages) {
      pages.push(
        <button
          key="last"
          className="px-3 py-1 border rounded-r bg-white text-blue-500 hover:bg-gray-100"
          onClick={() => handlePageChange(lastPage)}
        >
          »
        </button>
      );
    }

    return pages;
  };

  return (
    <div className="p-4 md:p-8 lg:p-12 bg-white-100 min-h-screen">
      {/* Header Section */}
      <Quota quota={quota} />
      {/* Navigation Tabs */}
      <NavigationTabs />
      {/* Main Content */}
      <h2 className="text-[16px] text-[#112C6F] font-[400] font-montserrat tracking-wider mb-4">Daftar Riwayat Pembelian e-Meterai Anda</h2>
      <div className="overflow-x-auto">
        {data.length > 0 ? (
          <table className="min-w-full border-collapse border-gray-200">
            <thead className="bg-[#ffffff] shadow-[0px_-1px_0px_0px_#DEE2E6_inset,0px_1px_0px_0px_#DEE2E6_inset]">
              <tr>
                <th className="border-t border-b border-gray-300 px-4 py-2 font-montserrat font-[600] text-[16px] text-[#212121] text-left flex justify-between items-center">
                  Invoice Number
                  <button onClick={() => handleSort('invoiceNumber')} className="ml-2 text-gray-500 hover:text-gray-700">
                    {sortConfig.key === 'invoiceNumber' ? (
                      sortConfig.direction === 'asc' ? '▲' : '▼'
                    ) : '⇅'}
                  </button>
                </th>
                <th className="border-t border-b border-gray-300 px-4 py-2 font-montserrat font-[600] text-[16px] text-[#212121]  text-left">
                  Jenis Pembelian
                  <button onClick={() => handleSort('jenisPembelian')} className="ml-2 text-gray-500 hover:text-gray-700 text-end">
                    {sortConfig.key === 'jenisPembelian' ? (
                      sortConfig.direction === 'asc' ? '▲' : '▼'
                    ) : '⇅'}
                  </button>
                </th>
                <th className="border-t border-b border-gray-300 px-4 py-2 font-montserrat font-[600] text-[16px] text-[#212121]  text-left">
                  Tanggal Pembelian
                  <button onClick={() => handleSort('tanggalPembelian')} className="ml-2 text-gray-500 hover:text-gray-700">
                    {sortConfig.key === 'tanggalPembelian' ? (
                      sortConfig.direction === 'asc' ? '▲' : '▼'
                    ) : '⇅'}
                  </button>
                </th>
                <th className="border-t border-b border-gray-300 px-4 py-2 font-montserrat font-[600] text-[16px] text-[#212121]  text-left">
                  Jumlah Pembelian
                  <button onClick={() => handleSort('jumlahPembelian')} className="ml-2 text-gray-500 hover:text-gray-700">
                    {sortConfig.key === 'jumlahPembelian' ? (
                      sortConfig.direction === 'asc' ? '▲' : '▼'
                    ) : '⇅'}
                  </button>
                </th>
                <th className="border-t border-b border-gray-300 px-4 py-2 font-montserrat font-[600] text-[16px] text-[#212121]  text-left">
                  Total
                  <button onClick={() => handleSort('total')} className="ml-2 text-gray-500 hover:text-gray-700">
                    {sortConfig.key === 'total' ? (
                      sortConfig.direction === 'asc' ? '▲' : '▼'
                    ) : '⇅'}
                  </button>
                </th>
                <th className="border-t border-b border-gray-300 px-4 py-2 font-montserrat font-[600] text-[16px] text-[#212121]  text-left">
                  Status
                  <button onClick={() => handleSort('status')} className="ml-2 text-gray-500 hover:text-gray-700">
                    {sortConfig.key === 'status' ? (
                      sortConfig.direction === 'asc' ? '▲' : '▼'
                    ) : '⇅'}
                  </button>
                </th>
                <th className="border-t border-b border-gray-300 px-4 py-2 font-montserrat font-[600] text-[16px] text-[#212121]  text-left">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {displayedData.map((item, index) => (
                <tr key={index} className="odd:bg-white even:bg-gray-50">
                  <td className="font-montserrat font-[400] text-[14px] text-[#212529] border-t border-b border-gray-300 px-4 py-2">{item.invoiceNumber}</td>
                  <td className="font-montserrat font-[400] text-[14px] text-[#212529] border-t border-b border-gray-300 px-4 py-2">{item.jenisPembelian}</td>
                  <td className="font-montserrat font-[400] text-[14px] text-[#212529] border-t border-b border-gray-300 px-4 py-2">{item.tanggalPembelian}</td>
                  <td className="font-montserrat font-[400] text-[14px] text-[#212529] border-t border-b border-gray-300 px-4 py-2">{item.jumlahPembelian}</td>
                  <td className="font-montserrat font-[400] text-[14px] text-[#212529] border-t border-b border-gray-300 px-4 py-2">{item.total}</td>
                  <td className="font-montserrat font-[400] text-[14px] text-[#212529] border-t border-b border-gray-300 px-4 py-2">{item.status}</td>
                  <td className="font-montserrat font-[400] text-[14px] text-[#212529] border-t border-b border-gray-300 px-4 py-2 flex space-x-2">
                    <button className="bg-[#DC3545] w-min-full h-auto text-white p-2 rounded hover:bg-[#c82333] flex items-center">
                      <FaTrash />
                    </button>
                    <button className="bg-[#A162F9] w-min-full h-auto text-white p-2 rounded hover:bg-[#7a3ef7] flex items-center">
                      <FaDownload />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="flex flex-col items-center justify-center h-64">
            <img src={EmptyData} alt="No Data" className="w-24 h-24 mb-4" />
            <p className="text-[#212121] text-[16px] font-[400] font-SourceSansPro">Data tidak tersedia</p>
          </div>
        )}
      </div>
      
      {data.length > 0 && (
        <div className="bg-[#E8EBEE] p-2 flex justify-end mt-4 space-x-1 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">{renderPagination()}</div>
      )}
    </div>
  );
};

export default History;