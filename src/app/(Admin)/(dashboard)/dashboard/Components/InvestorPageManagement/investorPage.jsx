import React, { useState, useEffect } from 'react';
import { EXPORT_ALL_APIS } from '../../../../../../../utils/apis/apis';
import Link from 'next/link';

const api = EXPORT_ALL_APIS();

const InvestorPageManagement = () => {
    const [newInvestor, setNewInvestor] = useState({
        field1: '',
        field2: '',
        field3: '',
        field4: '',
        field5: '',
        field6: '',
        field7: '',
        field8: '',
        field9: '',
        image: null,
    });

    const [investor, setInvestor] = useState({});
     
    const [showAddForm, setShowAddForm] = useState(false);
    const [showEditForm, setShowEditForm] = useState(false);

    useEffect(() => {
        const fetchInvestor = async () => {
            const token = localStorage.getItem('token');
            try {
                const fetchInvestorPage = await api.fetchInvestor(token);
                setInvestor(fetchInvestorPage.data[0] || {});
            } catch (error) {
                console.error('Failed to fetch investor data:', error.message);
            }
        };

        fetchInvestor();
    }, []);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setNewInvestor((prevInvestor) => ({
            ...prevInvestor,
            [name]: files ? files[0] : value,
        }));
        console.log()
    };

    const handleCreateInvestor = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        const formData = new FormData();

        formData.append('field1', newInvestor.field1);
        formData.append('field2', newInvestor.field2);
        formData.append('field3', newInvestor.field3);
        formData.append('field4', newInvestor.field4);
        formData.append('field5', newInvestor.field5);
        formData.append('field6', newInvestor.field6);
        formData.append('field7', newInvestor.field7);
        formData.append('field8', newInvestor.field8);
        formData.append('field9', newInvestor.field9);

        if (newInvestor.image) {
            formData.append('image', newInvestor.image);
        }

        try {
            await api.createInvestorContent(token, newInvestor);
            const updatedInvestor = await api.fetchInvestor(token);
            setInvestor(updatedInvestor || {});
            setNewInvestor({
                field1: '',
                field2: '',
                field3: '',
                field4: '',
                field5: '',
                field6: '',
                field7: '',
                field8: '',
                field9: '',
                image: null,
            });
            setShowAddForm(false);
        } catch (error) {
            console.error('Failed to create investor:', error.message);
        }
    };

    const handleUpdateInvestor = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
    

        try {
            await api.updateInvestorContent(token, investor.id, investor);
            const updatedInvestor = await api.fetchInvestor(token);
            setInvestor(updatedInvestor || {});
            setShowEditForm(false);
        } catch (error) {
            console.error('Failed to update investor:', error.message);
        }
    };

    const handleDeleteInvestor = async () => {
        const token = localStorage.getItem('token');

        try {
            await api.deleteInvestor(token);
            setInvestor({});
        } catch (error) {
            console.error('Failed to delete investor:', error.message);
        }
    };

    return (
        <div>
            <h1>Investor Page Management</h1>

            {showAddForm && (
                <form onSubmit={handleCreateInvestor}>
                    <h2>Create Investor</h2>
                    <input
                        type="file"
                        name="image"
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="field1"
                        value={newInvestor.field1}
                        onChange={handleChange}
                        placeholder="Field 1"
                    />
                    <input
                        type="text"
                        name="field2"
                        value={newInvestor.field2}
                        onChange={handleChange}
                        placeholder="Field 2"
                    />
                    <input
                        type="text"
                        name="field3"
                        value={newInvestor.field3}
                        onChange={handleChange}
                        placeholder="Field 3"
                    />
                    <input
                        type="text"
                        name="field4"
                        value={newInvestor.field4}
                        onChange={handleChange}
                        placeholder="Field 4"
                    />
                    <input
                        type="text"
                        name="field5"
                        value={newInvestor.field5}
                        onChange={handleChange}
                        placeholder="Field 5"
                    />
                    <input
                        type="text"
                        name="field6"
                        value={newInvestor.field6}
                        onChange={handleChange}
                        placeholder="Field 6"
                    />
                    <input
                        type="text"
                        name="field7"
                        value={newInvestor.field7}
                        onChange={handleChange}
                        placeholder="Field 7"
                    />
                    <input
                        type="text"
                        name="field8"
                        value={newInvestor.field8}
                        onChange={handleChange}
                        placeholder="Field 8"
                    />
                    <input
                        type="text"
                        name="field9"
                        value={newInvestor.field9}
                        onChange={handleChange}
                        placeholder="Field 9"
                    />
                    <button type="submit">Create Investor</button>
                </form>
            )}

            {showEditForm && (
                <form onSubmit={handleUpdateInvestor}>
                    <h2>Edit Investor</h2>
                    <input
                        type="file"
                        name="image"
                        onChange={(e) => setInvestor({ ...investor, image: e.target.files[0] })}
                    />
                    <input
                        type="text"
                        name="field1"
                        value={investor.field1 || ''}
                        onChange={(e) => setInvestor({ ...investor, field1: e.target.value })}
                        placeholder="Field 1"
                    />
                    <input
                        type="text"
                        name="field2"
                        value={investor.field2 || ''}
                        onChange={(e) => setInvestor({ ...investor, field2: e.target.value })}
                        placeholder="Field 2"
                    />
                    <input
                        type="text"
                        name="field3"
                        value={investor.field3 || ''}
                        onChange={(e) => setInvestor({ ...investor, field3: e.target.value })}
                        placeholder="Field 3"
                    />
                    <input
                        type="text"
                        name="field4"
                        value={investor.field4 || ''}
                        onChange={(e) => setInvestor({ ...investor, field4: e.target.value })}
                        placeholder="Field 4"
                    />
                    <input
                        type="text"
                        name="field5"
                        value={investor.field5 || ''}
                        onChange={(e) => setInvestor({ ...investor, field5: e.target.value })}
                        placeholder="Field 5"
                    />
                    <input
                        type="text"
                        name="field6"
                        value={investor.field6 || ''}
                        onChange={(e) => setInvestor({ ...investor, field6: e.target.value })}
                        placeholder="Field 6"
                    />
                    <input
                        type="text"
                        name="field7"
                        value={investor.field7 || ''}
                        onChange={(e) => setInvestor({ ...investor, field7: e.target.value })}
                        placeholder="Field 7"
                    />
                    <input
                        type="text"
                        name="field8"
                        value={investor.field8 || ''}
                        onChange={(e) => setInvestor({ ...investor, field8: e.target.value })}
                        placeholder="Field 8"
                    />
                    <input
                        type="text"
                        name="field9"
                        value={investor.field9 || ''}
                        onChange={(e) => setInvestor({ ...investor, field9: e.target.value })}
                        placeholder="Field 9"
                    />
                    <button type="submit">Update Investor</button>
                </form>
            )}

            <button onClick={() => setShowAddForm(!showAddForm)}>
                {showAddForm ? 'Cancel' : 'Add Investor'}
            </button>

            <button onClick={() => setShowEditForm(!showEditForm)}>
                {showEditForm ? 'Cancel Edit' : 'Edit Investor'}
            </button>

            <button onClick={handleDeleteInvestor}>
                Delete Investor
            </button>

            <div>
                <h2>Current Investor Page</h2>
                {investor.image && (
                    <p><strong>Image:</strong> <img src={investor.image} alt="Investor" /></p>
                )}
                <p><strong>Field 1:</strong> {investor.field1}</p>
                <p><strong>Field 2:</strong> {investor.field2}</p>
                <p><strong>Field 3:</strong> {investor.field3}</p>
                <p><strong>Field 4:</strong> {investor.field4}</p>
                <p><strong>Field 5:</strong> {investor.field5}</p>
                <p><strong>Field 6:</strong> {investor.field6}</p>
                <p><strong>Field 7:</strong> {investor.field7}</p>
                <p><strong>Field 8:</strong> {investor.field8}</p>
                <p><strong>Field 9:</strong> {investor.field9}</p>
               
            </div>
        </div>
    );
};

export default InvestorPageManagement;



