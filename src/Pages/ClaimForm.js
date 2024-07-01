import React, { useState, useRef } from 'react';
import { TbArrowBack } from "react-icons/tb";

export default function ClaimForm() {

    const [open, setOpen] = useState(false);

    return (
        <div className='edit-claim-page'>
            <div className='edit-claim-page--container'>
                <div className='edit-claim-page--container--table-heading'>View/Edit Claims</div>
                <div class="relative overflow-x-auto">
                    <div className='edit-claim-page--container--file-details'>
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
                                    <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" editBox="0 0 10 6">
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
                            <button>Save Claim</button>
                            <TbArrowBack />
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}