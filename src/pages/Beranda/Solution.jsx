import React from 'react';
import Constants from '../../utils/Constants';

const solutionItems = [
    {
        id: 1,
        percentage: "90%",
        title: "Lebih Cepat dalam Autentikasi Dokumen",
        description: "Dengan otomatisasi e-Meterai dan e-Sign, proses autentikasi dokumen bisa berlangsung hingga 90% lebih cepat dibandingkan metode manual. Tak perlu antre atau menunggu tanda tangan fisik."
    },
    {
        id: 2,
        percentage: "85%",
        title: "Pengurangan Biaya Operasional",
        description: "Digitalisasi dokumen mampu menghemat hingga 85% dari biaya cetak, pengiriman, dan penyimpanan fisik. Semua proses dilakukan secara online, merangkas kebutuhan akan alat tulis dan logistik."
    },
    {
        id: 3,
        percentage: "95%",
        title: "Berkurangnya Risiko Kehilangan Dokumen",
        description: "Dokumen digital yang tersimpan di cloud memiliki keamanan hingga 95% lebih baik, meminimalisir risiko kehilangan atau kerusakan dokumen penting. Akses kapan saja, di mana saja."
    },
    {
        id: 4,
        percentage: "88%",
        title: "Kepatuhan Hukum yang Lebih Efisien",
        description: "Proses legalitas menjadi 88% lebih cepat dan terjangkau. Dengan tanda tangan digital yang sah secara hukum, risiko sengketa dan penalti hampir seluruhnya dapat dihindari."
    }
];

const Solution = () => {
    return (
        <div className="bg-white py-12 px-14 border border-blue-200 rounded-lg translate-y-[-10px] md:translate-y-[-40px]">
            <div className="container mx-auto text-start">
                <h2
                    style={{
                        fontFamily: Constants.fontFamilies.primary,
                        fontSize: Constants.fontSizes.heading,
                        fontWeight: Constants.weight.semibold,
                        lineHeight: Constants.size.large,
                        letterSpacing: '0.05%',
                        textAlign: 'left',
                        textUnderlinePosition: 'from-font',
                        textDecorationSkipInk: 'none',
                        color: Constants.colors.black,
                    }}
                    >
                    Solusi Modern Dari{' '}
                    <span
                        style={{
                        fontFamily: Constants.fontFamilies.primary,
                        fontSize: Constants.fontSizes.heading,
                        fontWeight: Constants.weight.bold,
                        lineHeight: Constants.size.large,
                        letterSpacing: '0.05%',
                        textAlign: 'left',
                        textUnderlinePosition: 'from-font',
                        textDecorationSkipInk: 'none',
                        color: Constants.colors.primary,
                        }}
                    >
                        Rekan Doku {` `}
                    </span>
                </h2>

                <p
                    className="text-gray-600 mb-12 mt-3"
                    style={{
                        fontFamily: Constants.fontFamilies.primary,
                    }}
                >
                    RekanDoku hadir sebagai solusi modern untuk membantu perusahaan Anda beroperasi lebih efisien, hemat, dan aman. Dengan teknologi digital yang
                    canggih, kami memastikan setiap dokumen diproses dengan cepat dan sah secara hukum, tanpa harus mengorbankan anggaran besar.
                </p>

                {/* Grid Container */}
                <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 sm:gap-x-6 md:gap-x-8 md:gap-y-12">
                    {solutionItems.map((item) => (
                        <div
                        key={item.id}
                        className="flex flex-col sm:flex-row items-center bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2"
                        style={{
                            padding: '16px 20px',
                        }}
                        >
                        {/* Circle Icon */}
                        <div
                            className="flex items-center justify-center text-white mb-4 sm:mb-0 sm:mr-6 p-6 hover:scale-110 transition-transform duration-300"
                            style={{
                            fontFamily: Constants.fontFamilies.primary,
                            fontSize: Constants.fontSizes.medium,
                            fontWeight: Constants.weight.bold,
                            lineHeight: '1',
                            letterSpacing: '0.05%',
                            textAlign: 'center',
                            backgroundColor: Constants.colors.primary,
                            width: '53px',
                            height: '53px',
                            borderRadius: '50%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            }}
                        >
                            {item.percentage}
                        </div>

                        {/* Text Section */}
                        <div>
                            {/* Title */}
                            <div
                                className="w-full sm:w-[417px] h-[29px] px-4 mb-3 flex items-center justify-center sm:justify-start hover:bg-blue-300 transition-colors duration-300"
                                style={{
                                    fontFamily: Constants.fontFamilies.primary,
                                    backgroundColor: Constants.colors.cyan,
                                    borderRadius: '10px',
                                }}
                            >
                                <h3 className="text-sm sm:text-md font-semibold text-black-600 hover:text-blue-700 transition-colors duration-300 truncate">
                                    {item.title}
                                </h3>
                            </div>


                            {/* Description */}
                            <p className="text-gray-600 text-center sm:text-left hover:text-gray-800 transition-colors duration-300">
                            {item.description}
                            </p>
                        </div>
                        </div>
                    ))}
                </div>


            </div>
        </div>

    );
};

export default Solution;
