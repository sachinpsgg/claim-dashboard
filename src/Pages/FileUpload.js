import React, { useState } from 'react';

const UploadFiles = ({ uploadButtonClass, uploadContainerClass }) => {
    const [showUploadPopup, setShowUploadPopup] = useState(false);

    const toggleUploadPopup = () => {
        setShowUploadPopup(!showUploadPopup);
    };

    return (
        <div className={uploadContainerClass}>
            <button className={`bg-blue-500 text-white p-2 rounded ${uploadButtonClass}`} onClick={toggleUploadPopup}>
                Upload Files
            </button>

            {showUploadPopup && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-8 rounded shadow-lg">
                        <h2 className="text-2xl mb-4">Upload your files</h2>
                        <input type="file" className="mb-4" />
                        <div className="flex justify-end">
                            <button className="bg-red-500 text-white p-2 rounded mr-2" onClick={toggleUploadPopup}>
                                Cancel
                            </button>
                            <button className="bg-blue-500 text-white p-2 rounded">
                                Upload
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <div className="mt-6">
                <table className="min-w-full bg-white">
                    <thead>
                    <tr>
                        <th className="py-2 px-4 border">View</th>
                        <th className="py-2 px-4 border">Type</th>
                        <th className="py-2 px-4 border">Filename</th>
                        <th className="py-2 px-4 border">Qty</th>
                        <th className="py-2 px-4 border">Amount</th>
                        <th className="py-2 px-4 border">Upload Time</th>
                        <th className="py-2 px-4 border">Method</th>
                        <th className="py-2 px-4 border">Uploaded By</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="py-2 px-4 border">View</td>
                        <td className="py-2 px-4 border">Type</td>
                        <td className="py-2 px-4 border">Filename</td>
                        <td className="py-2 px-4 border">Qty</td>
                        <td className="py-2 px-4 border">Amount</td>
                        <td className="py-2 px-4 border">Upload Time</td>
                        <td className="py-2 px-4 border">Method</td>
                        <td className="py-2 px-4 border">Uploaded By</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UploadFiles;
