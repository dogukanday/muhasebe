import React from "react";

const page = () => {
  return (
    <div className="container mt-20 border-solid border-2 border-gray-600 rounded-2xl bg-slate-700">
        <p className="flex justify-center text-xl mt-5 text-white">Öğrenci Bilgileri</p>
      <div className="container grid grid-cols-4 gap-8 place-content-center mt-10">
        <input
          type="text"
          placeholder="İsim"
          className="border-solid border-2 border-black p-2 rounded-md"
        />
        <input
          type="text"
          placeholder="Soyisim"
          className="border-solid border-2 border-black p-2 rounded-md"
        />
        <input
          type="text"
          placeholder="Borç"
          className="border-solid border-2 border-black p-2 rounded-md"
        />
        <input
          type="text"
          placeholder="Taksit sayısı"
          className="border-solid border-2 border-black p-2 rounded-md"
        />
      </div>
      <div>
        <div className="flex justify-center mt-10 mb-8">
          <button className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
            Öğrenciyi Ekle
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
