import React, { useState } from 'react';
import { FaTrash, FaDownload, FaFileAlt } from 'react-icons/fa';
import { NavigationTabs, Quota, generateQuota } from '../../../components';
import { EmptyData } from '../../../assets'

const History = () => {
  const [quota, setQuota] = useState(generateQuota());

  // Dummy data
  const generateDummyData = () => {
    return Array.from({ length: 41 }, (_, index) => ({
      namaDokumen: `DOC-${(Math.random() * 1e6).toFixed(0)}-${index + 1}`,
      tanggalUpload: '02-01-2025, 14:30 WIB',
      jenisDokumen: index % 2 === 0 ? 'Dokumen Perjanjian' : 'Dokumen Pernyataan',
      jumlahMaterai: 1,
      status: index % 2 === 0 ? 'Proses' : 'Selesai',
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
      <h2 className="text-[16px] text-[#112C6F] font-[400] font-montserrat tracking-wider mb-4">Daftar Riwayat Pembubuhan e-Meterai Anda</h2>
      <div className="overflow-x-auto">
        {data.length > 0 ? (
          <table className="min-w-full border-collapse border-gray-200">
            <thead className="bg-[#ffffff] shadow-[0px_-1px_0px_0px_#DEE2E6_inset,0px_1px_0px_0px_#DEE2E6_inset]">
              <tr>
                <th className="border-t border-b border-gray-300 px-4 py-2 font-montserrat font-[600] text-[16px] text-[#212121] text-left flex justify-between items-center">
                  Nama Dokumen
                  <button onClick={() => handleSort('namaDokumen')} className="ml-2 text-gray-500 hover:text-gray-700">
                    {sortConfig.key === 'namaDokumen' ? (
                      sortConfig.direction === 'asc' ? '▲' : '▼'
                    ) : '⇅'}
                  </button>
                </th>                
                <th className="border-t border-b border-gray-300 px-4 py-2 font-montserrat font-[600] text-[16px] text-[#212121]  text-left">
                  Tanggal Upload Dokumen
                  <button onClick={() => handleSort('tanggalUpload')} className="ml-2 text-gray-500 hover:text-gray-700">
                    {sortConfig.key === 'tanggalUpload' ? (
                      sortConfig.direction === 'asc' ? '▲' : '▼'
                    ) : '⇅'}
                  </button>
                </th>
                <th className="border-t border-b border-gray-300 px-4 py-2 font-montserrat font-[600] text-[16px] text-[#212121]  text-left">
                  Jenis Dokumen
                  <button onClick={() => handleSort('jenisDokumen')} className="ml-2 text-gray-500 hover:text-gray-700 text-end">
                    {sortConfig.key === 'jenisDokumen' ? (
                      sortConfig.direction === 'asc' ? '▲' : '▼'
                    ) : '⇅'}
                  </button>
                </th>
                <th className="border-t border-b border-gray-300 px-4 py-2 font-montserrat font-[600] text-[16px] text-[#212121]  text-left">
                  Jumlah e-Materai
                  <button onClick={() => handleSort('jumlahMaterai')} className="ml-2 text-gray-500 hover:text-gray-700">
                    {sortConfig.key === 'jumlahMaterai' ? (
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
                  <td className="font-montserrat font-[400] text-[14px] text-[#212529] border-t border-b border-gray-300 px-4 py-2">{item.namaDokumen}</td>
                  <td className="font-montserrat font-[400] text-[14px] text-[#212529] border-t border-b border-gray-300 px-4 py-2">{item.tanggalUpload}</td>
                  <td className="font-montserrat font-[400] text-[14px] text-[#212529] border-t border-b border-gray-300 px-4 py-2">{item.jenisDokumen}</td>
                  <td className="font-montserrat font-[400] text-[14px] text-[#212529] border-t border-b border-gray-300 px-4 py-2">{item.jumlahMaterai}</td>
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