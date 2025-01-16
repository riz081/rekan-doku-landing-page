import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Document, Page } from "react-pdf";
import { Materai, InforIcon, SignatureExample, CheckExampleIcon, CrossExampleIcon, WrongExample, CorrectExample } from "../../../assets"; // Path to your Materai image
import { Quota, generateQuota, NavigationTabs } from "../../../components";
import { FaAngleDoubleLeft, FaAngleDoubleRight, FaPlus, FaMinus } from 'react-icons/fa';
import { AiOutlineCloudUpload } from "react-icons/ai";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import 'animate.css';


import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// Import worker from specific version
import { pdfjs } from "react-pdf";
import { Check } from "lucide-react";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
const MySwal = withReactContent(Swal);

const Dokumen = () => {
  const navigate = useNavigate();

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [pdfFile, setPdfFile] = useState(null);
  const [scale, setScale] = useState(1.0);
  const [stamps, setStamps] = useState([]); // To track the stamps
  const [draggingStamp, setDraggingStamp] = useState(null); // To track which stamp is being dragged
  const [isDragging, setIsDragging] = useState(false);
  const [pdfFileName, setPdfFileName] = useState("");
  const [quota, setQuota] = useState(generateQuota());
  const [showInitialModal, setShowInitialModal] = useState(true);
  

  const handleAddStamp = () => {
    if (quota > 0) {
      const newStamp = {
        id: Date.now(),
        x: 50,
        y: 50,
      };
      setStamps([...stamps, newStamp]);
      setQuota((prevQuota) => prevQuota - 1);
    } else {
      Swal.fire({
        html: `
          <div class="custom-swal">
            <div class="header flex items-center">
              <img 
                src="${InforIcon}"
                alt="Info Icon"
                class="w-[20px] h-[20px] mr-3"
              />
              <h2 class="title font-montserrat text-[16px] font-[600] text-[#598AE9] tracking-wider leading-[24px]">Informasi Penting</h2>
            </div>
            <div class="content font-montserrat text-[14px] font-[400] text-[#212121] mt-4 text-start tracking-wider leading-[21px]">
              Kuota e-Meterai Anda tidak tersedia. Silakan ke Menu Pembelian e-Meterai untuk melakukan penambahan saldo kuota e-Meterai Anda
            </div>
            <div class="footer flex justify-end mt-6">
              <button 
                id="buy-stamp-button"
                class="swal2-confirm font-montserrat bg-[#845FF1] hover:bg-purple-600 text-white font-[500] text-[16px] py-2 px-4 rounded-lg transition-colors duration-200 tracking-wider leading-[19.2px] shadow-custom">
                Beli e-Materai
              </button>
            </div>
          </div>
        `,
        showCloseButton: false,
        showConfirmButton: false,
        customClass: {
          popup: 'rounded-xl p-6',
          closeButton: 'focus:outline-none hover:text-gray-700 text-gray-500',
        },
        buttonsStyling: false,
        didOpen: () => {
          const buyStampButton = document.getElementById('buy-stamp-button');
          if (buyStampButton) {
            buyStampButton.addEventListener('click', () => {
              Swal.close();
              navigate('/admin/beli-materai');
            });
          }
        }
      });
    }
  };

  const handleRemoveStamp = () => {
    if (stamps.length > 0) {
      setStamps(stamps.slice(0, -1)); // Remove the last stamp
      setQuota((prevQuota) => prevQuota + 1);
    }
  };

  const handleMouseDown = (id) => (e) => {
    setDraggingStamp({ id, startX: e.clientX, startY: e.clientY });
  };

  const handleMouseMove = (e) => {
    if (!draggingStamp) return;

    const { id, startX, startY } = draggingStamp;
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;

    setStamps((prevStamps) =>
      prevStamps.map((stamp) =>
        stamp.id === id
          ? { ...stamp, x: stamp.x + dx, y: stamp.y + dy }
          : stamp
      )
    );
    setDraggingStamp({ ...draggingStamp, startX: e.clientX, startY: e.clientY });
  };

  const handleMouseUp = () => {
    setDraggingStamp(null);
  };

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };
  
  // Updated file handling function to process both browse and drop events
  const processFile = (file) => {
    if (file && file.type === "application/pdf") {
      const fileUrl = URL.createObjectURL(file);
      setPdfFile(fileUrl);
      setPdfFileName(file.name);
    } else {
      alert("Mohon upload file PDF saja");
    }
  };

  // Handler for browse file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    processFile(file);
  };

  // New handlers for drag and drop
  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files.length) {
      processFile(files[0]);
    }
  };

  const handleNextClick = () => {
    MySwal.fire({
      html: (
        <div className="p-4 text-start font-montserrat tracking-wider w-full h-auto">
          <h2 className="font-[600] text-[16px] text-[#598AE9] leading-[24px]">Informasi Detail Customer</h2>
          <p className="font-[400] text-[12px] leading-[18px] text-[#212121] mb-3">
            Silakan tambahkan detail informasi terkait dokumen yang akan dibubuhkan e-Meterai.
          </p>
          <div className="space-y-4">
            <div>
              <label className="font-[500] text-[12px] leading-[18px] text-[#598AE9] block mb-2">
                Nomor Dokumen (Boleh dikosongkan)
              </label>
              <input
                type="number"
                className="w-full px-3 py-2 border border-[#598AE9] rounded-md focus:outline-none focus:ring-2 focus:ring-[#598AE9]"
              />
            </div>
            <div>
              <label className="font-[500] text-[12px] leading-[18px] text-[#598AE9] block mb-2">
                Tanggal Dokumen (Boleh dikosongkan)
              </label>
              <input
                type="date"
                className="w-full px-3 py-2 border border-[#598AE9] rounded-md focus:outline-none focus:ring-2 focus:ring-[#598AE9] text-[#598AE9] text-sm"
              />
            </div>
            <div>
              <label className="font-[500] text-[12px] leading-[18px] text-[#598AE9] block mb-2">
                Jenis Dokumen (Boleh dikosongkan)
              </label>
              <select className="w-full px-3 py-2 border border-[#598AE9] rounded-md focus:outline-none focus:ring-2 focus:ring-[#598AE9] text-[#598AE9] text-sm">
                <option>Pilih jenis dokumen</option>
              </select>
            </div>
          </div>
        </div>
      ),
      showCancelButton: true,
      confirmButtonText: 'Simpan',
      cancelButtonText: 'Batal',
      customClass: {
        popup: 'rounded-lg animate__animated animate__fadeInUp',
        actions: 'flex flex-row-reverse justify-start gap-4 mt-4 px-4 pb-4', // Reversed flex direction to switch button order
        confirmButton: 'font-montserrat bg-[#845FF1] hover:bg-[#845FF1] text-white font-[500] text-[16px] py-2 px-6 rounded-lg order-2', // Added order-2
        cancelButton: 'font-montserrat bg-white hover:bg-gray-300 text-[#845FF1] font-[500] text-[16px] py-2 px-6 rounded-lg border border-[#845FF1] order-1', // Added order-1
        htmlContainer: 'p-0'
      },
      buttonsStyling: false,
      showClass: {
        popup: 'animate__animated animate__fadeInUp animate__faster'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutDown animate__faster'
      }
    });   
  };

  useEffect(() => {
    if (showInitialModal) {
      Swal.fire({
        html: `
          <div class="custom-swal">
            <div class="max-w-3xl mx-auto text-start">
              <h2 class="font-montserrat text-[#598AE9] text-[16px] font-[600] tracking-wider leading-[24px] mb-4">Perhatian</h2>
              <ol class="list-decimal pl-6 font-montserrat font-[400] text-[12px] text-[#212121] space-y-1 tracking-wider leading-[18px]">
                <li>
                  Jika Anda akan memberi tanda tangan basah pada dokumen, maka pastikan telah memberi tanda tangan basah terlebih dahulu sebelum membubuhkan e-Meterai.
                </li>
                <li>
                  Jika dokumen yang Anda ingin bubuhkan sudah terdapat e-Meterai dan e-Sign di dalamnya, pastikan dokumen tersebut memiliki versi PDF 1.6 atau di atasnya untuk dapat melakukan pembubuhan e-Meterai dan e-Sign.
                </li>
                <li>
                  Sebaliknya jika pada dokumen yang akan Anda upload tidak terdapat e-Meterai atau e-Sign, maka dokumen tidak harus berupa versi 1.6 atau di atasnya.
                </li>
                <li>
                  Posisikan e-Meterai di sebelah tanda tangan pada saat pembubuhan, e-Meterai yang tertimpa tanda tangan atau objek lainnya akan membuat QR code tidak dapat diverifikasi. Berikut contohnya:
                </li>
              </ol>
            </div>

            <!-- Mobile Image Section -->
            <div class="sm:hidden flex flex-col gap-4 my-4">
              <img src="${CorrectExample}" alt="Correct Example" class="w-full h-auto rounded-lg shadow-md" />
              <img src="${WrongExample}" alt="Wrong Example" class="w-full h-auto rounded-lg shadow-md" />
            </div>

            <!-- Card Section - Hidden on mobile -->
            <div class="hidden sm:flex signature-example justify-center gap-12 my-4">
              <!-- Card 1 -->
              <div class="relative w-[254px] h-[121px] gap-0 rounded-[14px] border border-[#00BF63] px-[12px] py-[8px] bg-white shadow-[0px_4px_4px_0px_#00000040]">                    
                <!-- Check Icon -->
                <div class="absolute bottom-[-18px] right-[-18px] bg-white rounded-[6px] p-[5px] w-[41px] h-[41px] border border-[#00BF63]">
                  <img src="${CheckExampleIcon}" alt="Check Icon" class="w-[30px] h-[30px]" />
                </div>
                <!-- Time & Place Text -->
                <div class="absolute top-0 right-0 text-[12px] font-[500] leading-[18px] text-black tracking-[0.005em] text-left p-[4px] mt-2 mr-4">
                  Jakarta, 20 Januari 2025
                </div>
                <!-- Materai Image -->
                <div class="absolute top-[35px] left-[17px]">
                  <img src="${Materai}" alt="Materai" class="w-[81px] h-[78px]" />
                </div>
                <!-- Signature Image and Name -->
                <div class="absolute top-[35px] left-[122px]">
                  <img src="${SignatureExample}" alt="Signature Example" class="w-[77.43px] h-[55px] border-t-[1.33px]" />
                  <div class="text-[12px] font-[500] leading-[18px] text-black tracking-[0.005em] text-left mt-2">
                    Nama Jelas
                  </div>
                </div>
              </div>

              <!-- Card 2 -->
              <div class="relative w-[254px] h-[121px] gap-0 rounded-[14px] border border-[#FF3B30] px-[12px] py-[8px] bg-white shadow-[0px_4px_4px_0px_#00000040]">                    
                <!-- Cross Icon -->
                <div class="absolute bottom-[-18px] right-[-18px] bg-white rounded-[6px] p-[5px] w-[41px] h-[41px] border border-[#FF3B30]">
                  <img src="${CrossExampleIcon}" alt="Cross Icon" class="w-[30px] h-[30px]" />
                </div>
                <!-- Time & Place Text -->
                <div class="absolute top-0 right-0 text-[12px] font-[500] leading-[18px] text-black tracking-[0.005em] text-left p-[4px] mt-2 mr-4">
                  Jakarta, 20 Januari 2025
                </div>
                <!-- Materai Image -->
                <div class="absolute top-[35px] left-[17px]">
                  <img src="${Materai}" alt="Materai" class="w-[81px] h-[78px]" />
                </div>
                <!-- Signature Image and Name -->
                <div class="absolute top-[35px] left-[70px] z-[10]">
                  <img src="${SignatureExample}" alt="Signature Example" class="w-[77.43px] h-[55px] border-t-[1.33px]" />
                </div>
                <div class="absolute bottom-0 right-[70px] text-[12px] font-[500] leading-[18px] text-black tracking-[0.005em] text-left my-2">
                  (Nama Jelas)
                </div>
              </div>
            </div>

            <!-- Footer Button -->
            <div class="footer flex justify-center mt-12 mb-4">
              <button 
                id="understand-button"
                class="swal2-confirm w-full sm:w-[535px] h-[48px] font-montserrat bg-[#845FF1] hover:bg-purple-600 text-white font-[500] text-[16px] py-3 px-6 rounded-lg transition-colors duration-200 tracking-wider leading-[19.2px] shadow-custom">
                Saya Mengerti
              </button>
            </div>

          </div>
        `,
        showCloseButton: false,
        showConfirmButton: false,
        allowOutsideClick: false,
        allowEscapeKey: false,
        customClass: {
          popup: 'rounded-xl p-4 sm:p-8 w-full sm:w-[841px] h-auto',
        },
        didOpen: () => {
          const understandButton = document.getElementById('understand-button');
          if (understandButton) {
            understandButton.addEventListener('click', () => {
              setShowInitialModal(false);
              Swal.close();
            });
          }
        }
      });
    }
  }, [showInitialModal]);

  return (
    <>
      <div className="p-4 md:p-8 lg:p-12 bg-white-100 min-h-screen">
        {/* Quota */}
        <Quota quota={quota} />
        
        {/* Navigation Tabs */}
        <NavigationTabs />

        {/* Main Content */}
        <div className="min-h-screen" onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
          {/* Membungkus konten dalam grid 50:50 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Kolom 1 */}
            <div>
              <p className="font-montserrat text-[16px] md:text-[18px] font-[400] text-[#112C6F] my-4 tracking-wider leading-[19.2px]">
                Bubuhkan Dokumen Anda
              </p>
              <ul className="mb-5">
                <li className="font-montserrat font-[400] text-[12px] sm:text-[14px] text-[#212121] tracking-wider leading-[18px] my-2">
                  1. Pastikan dokumen yang Anda upload dalam bentuk pdf
                </li>
                <li className="font-montserrat font-[400] text-[12px] sm:text-[14px] text-[#212121] tracking-wider leading-[18px] my-2">
                  2. Pastikan dokumen yang akan di e-Materai adalah dokumen final atau dokumen akhir
                </li>
              </ul>
            </div>

            {/* Kolom 2 */}
            <div className="flex justify-end py-3 gap-4">
              {pdfFile && (
                <>
                  {/* Stamp Controls */}
                  <div className="flex items-center bg-[#845FF1] text-white rounded-[8px] shadow-md h-[48px]">
                    <span className="font-montserrat font-[600] text-[16px] sm:text-[16px] tracking-wider leading-[24px] my-3 mx-4">
                      Jumlah e-Materai
                    </span>
                    <div className="flex items-center border border-[#845FF1] rounded-r-[8px] bg-white">
                      <button
                        onClick={handleRemoveStamp}
                        disabled={stamps.length === 0}
                        className="w-10 h-10 flex items-center justify-center text-[#845FF1] hover:bg-purple-100 border-r border-[#845FF1] disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <FaMinus />
                      </button>
                      <span className="w-10 h-10 flex items-center justify-center text-[#845FF1]">
                        {stamps.length}
                      </span>
                      <button
                        onClick={handleAddStamp}
                        className="w-10 h-10 flex items-center justify-center text-[#845FF1] hover:bg-purple-100 border-l border-[#845FF1]"
                      >
                        <FaPlus />
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Header Pagination */}
          <div className="bg-white shadow">
            {pdfFile && (
              <>
                {/* Dokumen Name */}
                <div className="my-2">
                  <span className="font-montserrat font-[400] text-[16px] sm:text-[18px] text-[#112C6F] tracking-wider leading-[19.2px]">
                    Nama Dokumen:
                  </span>
                  <span className="font-montserrat font-[400] text-[16px] sm:text-[18px] text-[#112C6F] tracking-wider leading-[19.2px] ml-2">
                    {pdfFileName}
                  </span>
                </div>

                {/* Dokumen Header */}
                <div className="flex w-full justify-between items-center bg-[#845FF1] text-white py-2 px-4 rounded-t-lg">
                  <div className="flex items-center">
                    <button
                      onClick={() => setPageNumber(1)}
                      className="text-white font-semibold px-2 hover:underline flex items-center"
                    >
                      First
                    </button>
                    <button
                      onClick={() => setPageNumber((prev) => Math.max(prev - 1, 1))}
                      className="text-white font-semibold px-2 hover:underline flex items-center"
                    >
                      <FaAngleDoubleLeft className="mr-1" />
                    </button>
                  </div>
                  <span className="text-sm">Halaman {pageNumber} dari {numPages}</span>
                  <div className="flex items-center">
                    <button
                      onClick={() => setPageNumber((prev) => Math.min(prev + 1, numPages))}
                      className="text-white font-semibold px-2 hover:underline flex items-center"
                    >
                      <FaAngleDoubleRight className="ml-1" />
                    </button>
                    <button
                      onClick={() => setPageNumber(numPages)}
                      className="text-white font-semibold px-2 hover:underline flex items-center"
                    >
                      Last
                    </button>
                  </div>
                  <span className="text-sm ml-auto">Jumlah Halaman: {numPages}</span>
                </div>
              </>
            )}
          </div>

          {/* PDF Viewer */}
          <div className="mx-auto w-full max-w-4xl"> {/* Container utama dengan max-width */}
            <div className="flex flex-col items-center py-6">
              <div className="w-full max-w-3xl px-4">
                {/* PDF Content */}
                {pdfFile ? (
                  <div className="flex justify-center border border-[#845FF1] items-center w-full relative translate-y-[-25px]">
                    <Document 
                      file={pdfFile} 
                      onLoadSuccess={onDocumentLoadSuccess} 
                      className="w-full"
                    >
                      <Page
                        pageNumber={pageNumber}
                        scale={scale}
                        renderTextLayer={false}
                        renderAnnotationLayer={false}
                        className="mx-auto" // Memastikan Page component juga center
                      />
                    </Document>
          
                    {stamps.map((stamp) => (
                      <img
                        key={stamp.id}
                        src={Materai}
                        alt="Materai"
                        className="absolute w-12 h-12 object-contain cursor-pointer"
                        style={{
                          top: `${stamp.y}px`,
                          left: `${stamp.x}px`,
                        }}
                        onMouseDown={handleMouseDown(stamp.id)}
                      />
                    ))}
                  </div>
                ) : (
                  <div
                    className={`flex items-center justify-center h-96 sm:h-[250px] bg-white rounded-lg border-2 border-dashed my-5 ${
                      isDragging ? 'border-[#ffffff] bg-white' : 'border-white'
                    } relative transition-colors duration-200`}
                    onDragEnter={handleDragEnter}
                    onDragLeave={handleDragLeave}
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                  >
                    <label className="flex flex-col items-center justify-center w-full h-full mx-8 cursor-pointer">
                      <AiOutlineCloudUpload
                        className={`text-5xl sm:text-6xl mb-4 ${isDragging ? 'text-purple-600' : 'text-[#845FF1]'}`}
                      />

                      <p
                        className={`font-semibold text-lg sm:text-xl ${isDragging ? 'text-purple-600' : 'text-[#845FF1]'}`}
                      >
                        {isDragging ? 'Lepaskan file di sini' : 'Drag and Drop Here'}
                      </p>

                      <p className="text-gray-500 text-sm sm:text-base">
                        atau <span className="text-[#845FF1] underline">browse</span> dokumen melalui perangkat Anda
                      </p>

                      <input
                        type="file"
                        onChange={handleFileChange}
                        accept="application/pdf"
                        className="hidden"
                      />
                    </label>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Button Area */}
        {pdfFile ? (
          <div className="flex justify-end gap-3 mt-4">
            <button
              className="w-[154px] h-[59px] bg-white hover:bg-gray-100 border-[1px] border-[#845FF1] text-black font-semibold py-2 px-4 rounded-lg"
            >
              Batal
            </button>

            <button
              onClick={handleNextClick}
              className="w-[154px] h-[59px] bg-[#845FF1] hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-lg"
            >
              Lanjutkan
            </button>
          </div>
        ) : (<div></div>)}
      </div>
    </>
  );
};

export default Dokumen;
