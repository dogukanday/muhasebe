import React from 'react'

const table = () => {
  return (
    
    <div className="relative overflow-x-auto rounded-lg">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-3">
            Isim Soyisim
          </th>
          <th scope="col" className="px-6 py-3">
            Borç
          </th>
          <th scope="col" className="px-6 py-3">
            Taksit günü
          </th>
          <th scope="col" className="px-6 py-3">
            Taksit tutarı
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <th
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            Doğukan DAY
          </th>
          <td className="px-6 py-4">11000</td>
          <td className="px-6 py-4">10/09/2023</td>
          <td className="px-6 py-4">3000</td>
        </tr>
      </tbody>
    </table>
  </div>

  )
}

export default table