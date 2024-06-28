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
                <div class="relative overflow-x-auto">
                    <div className='view-claim-page--container--file-details'>
                        <div className=''>
                            Uploaded : 17125484154 FileName: RISRX_25626562656_541541.X12
                        </div>
                        <div class="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 dark:bg-gray-900">
                            <div>
                                <button id="dropdownActionButton" data-dropdown-toggle="dropdownAction" class="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button"

                                    onClick={() => {
                                        setOpen(!open)
                                    }}>
                                    <span class="sr-only">Action button</span>
                                    Action
                                    <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                    </svg>
                                </button>
                                {/* <!-- Dropdown menu --> */}
                                {open &&
                                    <div id="dropdownAction" class="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 position: absolute">
                                        <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownActionButton">
                                            <li>
                                                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Reward</a>
                                            </li>
                                            <li>
                                                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Promote</a>
                                            </li>
                                            <li>
                                                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Activate account</a>
                                            </li>
                                        </ul>
                                        <div class="py-1">
                                            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete User</a>
                                        </div>
                                    </div>
                                }
                            </div>
                            <label for="table-search" class="sr-only">Search</label>
                            <div class="relative ml-2">
                                <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                </div>
                                <input type="text" id="table-search-users" class="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for users" />
                            </div>
                        </div>
                    </div>
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="p-4">
                                    <div class="flex items-center">
                                        <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="checkbox-all-search" class="sr-only">checkbox</label>
                                    </div>
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Patient Name
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Patient Account
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Payer Name
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Insured ID
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    First Date of Service
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Total Charge
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Billing Provider Name
                                </th>
                                <th scope="col" class="px-6 py-3">
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item) => (
                                <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                    <td class="w-4 p-4">
                                        <div class="flex items-center">
                                            <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                                        </div>
                                    </td>
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {item.patientname}
                                    </th>
                                    <td class="px-6 py-4">
                                        {item.patientaccount}
                                    </td>
                                    <td class="px-6 py-4">
                                        {item.payername}
                                    </td>
                                    <td class="px-6 py-4">
                                        {item.insuredid}
                                    </td>
                                    <td class="px-6 py-4">
                                        {item.servicedate}
                                    </td>
                                    <td class="px-6 py-4">
                                        {item.totalcharge}
                                    </td>
                                    <td class="px-6 py-4">
                                        {item.billingprovider}
                                    </td>
                                    <td class="px-6 py-4">
                                        <a href="#" class="view-claim-page--container--claim-number">{item.claimnumber}</a>
                                    </td>
                                    <div className='extra-details'>

                                    </div>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {/* <nav class="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4" aria-label="Table navigation">
                    <span class="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">Showing <span class="font-semibold text-gray-900 dark:text-white">1-10</span> of <span class="font-semibold text-gray-900 dark:text-white">1000</span></span>
                    <ul class="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
                        <li>
                            <a href="#" class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                        </li>
                        <li>
                            <a href="#" aria-current="page" class="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
                        </li>
                    </ul>
                </nav> */}
                </div>
            </div>
        </div>
    )
}