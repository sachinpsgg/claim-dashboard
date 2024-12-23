import React, { useState, useRef } from 'react';

const data = [
    {
        patientname: 'DUMMYLNAME 1',
        patientaccount: 'SK008850.TEST29',
        payername: 'RISRX',
        insuredid: 'T541001365418',
        servicedate: '06-15-2024',
        totalcharge: '$2400.00',
        billingprovider: 'ALLERGY PARTNERS OF HAMPTON ROADS',
        claimnumber: 2
    },
    {
        patientname: 'DUMMYLNAME 2',
        patientaccount: 'SK008850.TEST29',
        payername: 'RISRX',
        insuredid: 'T541001365418',
        servicedate: '06-15-2024',
        totalcharge: '$2400.00',
        billingprovider: 'ALLERGY PARTNERS OF HAMPTON ROADS',
        claimnumber: 2
    },
    {
        patientname: 'DUMMYLNAME 3',
        patientaccount: 'SK008850.TEST29',
        payername: 'RISRX',
        insuredid: 'T541001365418',
        servicedate: '06-15-2024',
        totalcharge: '$2400.00',
        billingprovider: 'ALLERGY PARTNERS OF HAMPTON ROADS',
        claimnumber: 2
    },
    {
        patientname: 'DUMMYLNAME 1',
        patientaccount: 'SK008850.TEST29',
        payername: 'RISRX',
        insuredid: 'T541001365418',
        servicedate: '06-15-2024',
        totalcharge: '$2400.00',
        billingprovider: 'ALLERGY PARTNERS OF HAMPTON ROADS',
        claimnumber: 2
    },
    {
        patientname: 'DUMMYLNAME 1',
        patientaccount: 'SK008850.TEST29',
        payername: 'RISRX',
        insuredid: 'T541001365418',
        servicedate: '06-15-2024',
        totalcharge: '$2400.00',
        billingprovider: 'ALLERGY PARTNERS OF HAMPTON ROADS',
        claimnumber: 2
    },
    {
        patientname: 'DUMMYLNAME 1',
        patientaccount: 'SK008850.TEST29',
        payername: 'RISRX',
        insuredid: 'T541001365418',
        servicedate: '06-15-2024',
        totalcharge: '$2400.00',
        billingprovider: 'ALLERGY PARTNERS OF HAMPTON ROADS',
        claimnumber: 2
    },
    {
        patientname: 'DUMMYLNAME 1',
        patientaccount: 'SK008850.TEST29',
        payername: 'RISRX',
        insuredid: 'T541001365418',
        servicedate: '06-15-2024',
        totalcharge: '$2400.00',
        billingprovider: 'ALLERGY PARTNERS OF HAMPTON ROADS',
        claimnumber: 2
    },
    {
        patientname: 'DUMMYLNAME 1',
        patientaccount: 'SK008850.TEST29',
        payername: 'RISRX',
        insuredid: 'T541001365418',
        servicedate: '06-15-2024',
        totalcharge: '$2400.00',
        billingprovider: 'ALLERGY PARTNERS OF HAMPTON ROADS',
        claimnumber: 2
    },
    {
        patientname: 'DUMMYLNAME 1',
        patientaccount: 'SK008850.TEST29',
        payername: 'RISRX',
        insuredid: 'T541001365418',
        servicedate: '06-15-2024',
        totalcharge: '$2400.00',
        billingprovider: 'ALLERGY PARTNERS OF HAMPTON ROADS',
        claimnumber: 2
    },
    {
        patientname: 'DUMMYLNAME 1',
        patientaccount: 'SK008850.TEST29',
        payername: 'RISRX',
        insuredid: 'T541001365418',
        servicedate: '06-15-2024',
        totalcharge: '$2400.00',
        billingprovider: 'ALLERGY PARTNERS OF HAMPTON ROADS',
        claimnumber: 2
    },
    {
        patientname: 'DUMMYLNAME 1',
        patientaccount: 'SK008850.TEST29',
        payername: 'RISRX',
        insuredid: 'T541001365418',
        servicedate: '06-15-2024',
        totalcharge: '$2400.00',
        billingprovider: 'ALLERGY PARTNERS OF HAMPTON ROADS',
        claimnumber: 2
    },
    {
        patientname: 'DUMMYLNAME 1',
        patientaccount: 'SK008850.TEST29',
        payername: 'RISRX',
        insuredid: 'T541001365418',
        servicedate: '06-15-2024',
        totalcharge: '$2400.00',
        billingprovider: 'ALLERGY PARTNERS OF HAMPTON ROADS',
        claimnumber: 2
    },
    {
        patientname: 'DUMMYLNAME 1',
        patientaccount: 'SK008850.TEST29',
        payername: 'RISRX',
        insuredid: 'T541001365418',
        servicedate: '06-15-2024',
        totalcharge: '$2400.00',
        billingprovider: 'ALLERGY PARTNERS OF HAMPTON ROADS',
        claimnumber: 2
    },
    {
        patientname: 'DUMMYLNAME 1',
        patientaccount: 'SK008850.TEST29',
        payername: 'RISRX',
        insuredid: 'T541001365418',
        servicedate: '06-15-2024',
        totalcharge: '$2400.00',
        billingprovider: 'ALLERGY PARTNERS OF HAMPTON ROADS',
        claimnumber: 2
    },
    {
        patientname: 'DUMMYLNAME 1',
        patientaccount: 'SK008850.TEST29',
        payername: 'RISRX',
        insuredid: 'T541001365418',
        servicedate: '06-15-2024',
        totalcharge: '$2400.00',
        billingprovider: 'ALLERGY PARTNERS OF HAMPTON ROADS',
        claimnumber: 2
    },
    {
        patientname: 'DUMMYLNAME 1',
        patientaccount: 'SK008850.TEST29',
        payername: 'RISRX',
        insuredid: 'T541001365418',
        servicedate: '06-15-2024',
        totalcharge: '$2400.00',
        billingprovider: 'ALLERGY PARTNERS OF HAMPTON ROADS',
        claimnumber: 2
    }
]

export default function ViewClaim() {

    const [open, setOpen] = useState(false);

    return (
        <div className='view-claim-page'>
            <div className='view-claim-page--container'>
                <div className='view-claim-page--container--table-heading'>Manage Claims</div>
                <div className="relative overflow-x-auto">
                    <div className='view-claim-page--container--file-details'>
                        <div className=''>
                            Uploaded : 17125484154 FileName: RISRX_25626562656_541541.X12
                        </div>
                        <div className="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 dark:bg-gray-900">
                            <div>
                                <button id="dropdownActionButton" data-dropdown-toggle="dropdownAction" className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button"

                                    onClick={() => {
                                        setOpen(!open)
                                    }}>
                                    <span className="sr-only">Action button</span>
                                    Action
                                    <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                    </svg>
                                </button>
                                {/* <!-- Dropdown menu --> */}
                                {open &&
                                    <div id="dropdownAction" className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 position: absolute">
                                        <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownActionButton">
                                            <li>
                                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Reward</a>
                                            </li>
                                            <li>
                                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Promote</a>
                                            </li>
                                            <li>
                                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Activate account</a>
                                            </li>
                                        </ul>
                                        <div className="py-1">
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete User</a>
                                        </div>
                                    </div>
                                }
                            </div>
                            <label for="table-search" className="sr-only">Search</label>
                            <div className="relative ml-2">
                                <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                </div>
                                <input type="text" id="table-search-users" className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for users" />
                            </div>
                        </div>
                    </div>
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="p-4">
                                    <div className="flex items-center">
                                        <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="checkbox-all-search" className="sr-only">checkbox</label>
                                    </div>
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Patient Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Patient Account
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Payer Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Insured ID
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    First Date of Service
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Total Charge
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Billing Provider Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item) => (
                                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                    <td className="w-4 p-4">
                                        <div className="flex items-center">
                                            <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label for="checkbox-table-search-1" className="sr-only">checkbox</label>
                                        </div>
                                    </td>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {item.patientname}
                                    </th>
                                    <td className="px-6 py-4">
                                        {item.patientaccount}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.payername}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.insuredid}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.servicedate}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.totalcharge}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.billingprovider}
                                    </td>
                                    <td className="px-6 py-4">
                                        <a href="#" className="view-claim-page--container--claim-number">{item.claimnumber}</a>
                                    </td>
                                    <div className='extra-details'>

                                    </div>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}