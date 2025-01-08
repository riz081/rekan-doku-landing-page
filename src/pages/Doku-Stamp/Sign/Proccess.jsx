import React from 'react';

const StepProgress = () => {
  const steps = [
    { id: 1, label: 'Masuk ke Platform Rekan Doku' },
    { id: 2, label: 'Unggah Dokumen' },
    { id: 3, label: 'Pilih bubuhkan e-Meterai' },
    { id: 4, label: 'Penempatan Otomatis' },
    { id: 5, label: 'Unduh Dokumen' },
  ];

  return (
    <div className="flex flex-col items-center mt-8 translate-y-[-10px] md:translate-y-[-200px]">
      {/* Title */}
      <div className="text-center mb-8 md:mb-16 px-4">
        <h2 className="text-xl md:text-2xl font-[600] text-[Montserrat] text-[32px] text-[#212121]">
          Proses dan Tata Cara Penggunaan <span className="text-[#5B59E8] font-[600]">e-Meterai</span>
        </h2>
        <p className="text-[#212121] text-[Montserrat] mt-2 text-[16px] font-[400] md:text-base">
          Tidak perlu lagi mencari meterai fisik. Dalam beberapa klik, dokumen Anda akan memiliki meterai elektronik yang sah.
        </p>
      </div>

      {/* Progress Bar Container */}
      <div className="relative w-full overflow-x-auto pb-8">
        <div className="min-w-[1000px] md:min-w-full relative mx-auto max-w-6xl">
          {/* Line */}
          <div className="absolute top-[30px] md:top-10 left-1/2 transform -translate-x-1/2 w-[90%] h-[17px] bg-[#67C15E]"></div>

          {/* Steps */}
          <div className="flex justify-between items-center px-8 md:px-12">
            {steps.map((step) => (
              <div key={step.id} className="flex flex-col items-center">
                <div className="w-[60px] h-[60px] md:w-[100px] md:h-[100px] bg-[#A162F9] text-white flex items-center justify-center rounded-full text-3xl md:text-[64px] font-[600] text-[Montserrat] z-10 translate-y-0">
                  {step.id}
                </div>
                <p className="text-[Montserrat] text-[#212121] text-center mt-4 text-[20px] font-[500] md:text-sm w-[100px] md:w-[120px]">
                  {step.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Process = () => {
  return (
    <div className="container mx-auto px-4">
      <StepProgress />
    </div>
  );
};

export default Process;
