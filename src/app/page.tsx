import Image from "next/image";
import Link from "next/link";
import Table from "./components/table";

export default function Home() {
  return (
    <div className="container">
      <div className="flex justify-center"> Muhasebe programı</div>
      <div className="flex justify-center">
        <button className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
          Öğrenci Ekle
        </button>
        <button className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
          Taksit ödemesi
        </button>
      </div>
      <div className="mt-10">
        <Table />
      </div>
    </div>
  );
}
