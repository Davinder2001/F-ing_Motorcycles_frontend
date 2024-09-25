import React, { useState } from 'react';
import { saveAs } from 'file-saver'; // For handling file downloads
import * as XLSX from 'xlsx';

const EnquiryForm = ({ enquiryFormData }) => {
    const [searchTerm, setSearchTerm] = useState(''); // State for the search term
    const [searchField, setSearchField] = useState('name'); // State for the selected search field
    const [currentPage, setCurrentPage] = useState(1); // State for the current page
    const [pageSize, setPageSize] = useState(25); // State for the page size, default 25
    const [fromDate, setFromDate] = useState(''); // State for the from date
    const [toDate, setToDate] = useState(''); // State for the to date

    // Function to handle search input change
    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
        setCurrentPage(1); // Reset to page 1 on search
    };

    // Function to handle search field change
    const handleSearchFieldChange = (event) => {
        setSearchField(event.target.value);
        setCurrentPage(1); // Reset to page 1 on search field change
    };

    // Function to handle page size change
    const handlePageSizeChange = (event) => {
        setPageSize(parseInt(event.target.value));
        setCurrentPage(1); // Reset to page 1 when changing the page size
    };

    // Function to handle date range changes
    const handleDateChange = (event) => {
        const { name, value } = event.target;
        if (name === 'fromDate') setFromDate(value);
        if (name === 'toDate') setToDate(value);
        setCurrentPage(1); // Reset to page 1 when changing dates
    };

    // Function to filter enquiries based on search term, selected field, and date range
    const filteredEnquiries = enquiryFormData?.data?.filter((enquiry) => {
        const searchValue = enquiry[searchField]?.toLowerCase() || ''; // Dynamic search field
        const dateInRange = (!fromDate || new Date(enquiry.created_at) >= new Date(fromDate)) &&
                            (!toDate || new Date(enquiry.created_at) <= new Date(toDate));
        return searchValue.includes(searchTerm.toLowerCase()) && dateInRange;
    });

    // Pagination logic
    const indexOfLastRecord = currentPage * pageSize;
    const indexOfFirstRecord = indexOfLastRecord - pageSize;
    const currentEnquiries = filteredEnquiries?.slice(indexOfFirstRecord, indexOfLastRecord); // Get records for the current page

    // Total pages based on filtered results
    const totalPages = Math.ceil(filteredEnquiries?.length / pageSize);

    // Function to handle page navigation
    const goToNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const goToPreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    // Function to handle export to Excel
    const handleExportToExcel = () => {
        const ws = XLSX.utils.json_to_sheet(filteredEnquiries);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Enquiries');
        const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'binary' });

        // Convert binary string to a Blob
        const buf = new ArrayBuffer(wbout.length);
        const view = new Uint8Array(buf);
        for (let i = 0; i < wbout.length; i++) {
            view[i] = wbout.charCodeAt(i) & 0xFF;
        }
        const blob = new Blob([buf], { type: 'application/octet-stream' });

        // Save the file
        saveAs(blob, 'enquiries.xlsx');
    };

    return (
        <div className='dashboard-inner-data'>
            <h2>Enquiry Form Data</h2>

            {/* Date Range Filters */}
            <div className='form-table'>
                <label>
                    From Date:
                    <input
                        type="date"
                        name="fromDate"
                        value={fromDate}
                        onChange={handleDateChange}
                        
                    />
                </label>
                <label>
                    To Date:
                    <input
                        type="date"
                        name="toDate"
                        value={toDate}
                        onChange={handleDateChange}
                        
                    />
                </label>
            </div>
              {/* Export to Excel Button */}
              <button
                onClick={handleExportToExcel}
               
            >
                Export to Excel
            </button>

            {/* Dropdown for selecting search criteria */}
            <select className='dropdown-table'
                value={searchField} 
                onChange={handleSearchFieldChange} 
               
            >
                <option value="name">Search by Name</option>
                <option value="email">Search by Email</option>
                <option value="phone">Search by Phone</option>
            </select>

            {/* Search Input */}
            <input
                type="text"
                placeholder={`Search by ${searchField}`}
                value={searchTerm}
                onChange={handleSearch}
                
            />

            {/* Dropdown for selecting page size */}
             <select className='dropdown-table'
                value={pageSize} 
                onChange={handlePageSizeChange} 
               
            >
                <option value="25">Show 25</option>
                <option value="50">Show 50</option>
                <option value="100">Show 100</option>
                <option value="500">Show 500</option>
                <option value={filteredEnquiries?.length}>Show All</option>
            </select>

          

            {/* Table for displaying enquiries */}
            <table className="enquery-table" border="0.5px solid #e5e5e5" cellPadding="10" cellSpacing="0" width="100%">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Interested In</th>
                        <th>Message</th>
                        <th>Created At</th> {/* New Column for Timestamp */}
                    </tr>
                </thead>
                <tbody>
                    {currentEnquiries?.length > 0 ? (
                        currentEnquiries.map((enquiry) => (
                            <tr key={enquiry.id}>
                                <td>{enquiry.id}</td>
                                <td>{enquiry.name}</td>
                                <td>{enquiry.email}</td>
                                <td>{enquiry.phone}</td>
                                <td>{enquiry.interestedIn}</td>
                                <td>{enquiry.message || 'No message'}</td>
                                <td>{new Date(enquiry.created_at).toLocaleString()}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="7">No Enquiries Found</td>
                        </tr>
                    )}
                </tbody>
            </table>

            {/* Pagination controls */}
            <div className="pagination-form" style={{ marginTop: '20px' }}>
                <button onClick={goToPreviousPage} disabled={currentPage === 1}>
                    Previous
                </button>
                <span style={{ margin: '0 10px' }}>Page {currentPage} of {totalPages}</span>
                <button onClick={goToNextPage} disabled={currentPage === totalPages}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default EnquiryForm;
