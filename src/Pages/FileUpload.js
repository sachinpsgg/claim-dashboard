
import React, { useState } from 'react';

const UploadFiles = () => {
    const [showUploadPopup, setShowUploadPopup] = useState(false);

    const toggleUploadPopup = () => {
        setShowUploadPopup(!showUploadPopup);
    };
    // return(
    //     <p>h1</p>
    // )
    return (
        <div>
            <button onClick={toggleUploadPopup}>
                Upload Files
            </button>

            {showUploadPopup && (
                <div className="upload-popup-overlay">
                    <div className="upload-popup">
                        <h2 className="upload-popup-title">Upload your files</h2>
                        <input type="file" className="upload-input" />
                        <div className="upload-popup-actions">
                            <button className="cancel-button" onClick={toggleUploadPopup}>
                                Cancel
                            </button>
                            <button className="confirm-button">
                                Upload
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <div className="table-container">
                <table className="upload-table">
                    <thead>
                    <tr>
                        <th className="table-header">View</th>
                        <th className="table-header">Type</th>
                        <th className="table-header">Filename</th>
                        <th className="table-header">Qty</th>
                        <th className="table-header">Amount</th>
                        <th className="table-header">Upload Time</th>
                        <th className="table-header">Method</th>
                        <th className="table-header">Uploaded By</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="table-cell">View</td>
                        <td className="table-cell">Type</td>
                        <td className="table-cell">Filename</td>
                        <td className="table-cell">Qty</td>
                        <td className="table-cell">Amount</td>
                        <td className="table-cell">Upload Time</td>
                        <td className="table-cell">Method</td>
                        <td className="table-cell">Uploaded By</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UploadFiles;

