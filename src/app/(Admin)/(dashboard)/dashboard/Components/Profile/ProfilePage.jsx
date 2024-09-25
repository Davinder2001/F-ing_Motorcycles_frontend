import React, { useState } from 'react';
import { EXPORT_ALL_APIS } from '../../../../../../../utils/apis/apis';

const ProfilePage = ({ profile }) => {
  const { data, success } = profile || {};

  // State for new password and confirmation
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [showChangePassword, setShowChangePassword] = useState(false); // State for showing input fields

  const handleChangePassword = async () => {
    if (newPassword !== confirmPassword) {
      setMessage('Passwords do not match.');
      return;
    }
    const api = EXPORT_ALL_APIS();

    try {
      const token = localStorage.getItem('token'); // Retrieve the token from local storage or context
           await api.changePassword(token, newPassword, confirmPassword);
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div>
      <h1>Profile Page</h1>
      {
        <ul>
          {data === undefined ? (
            "No result found"
          ) : (
            data.map((item, index) => (
              <li key={index}>
                <p>ID: {item.id}</p>
                <p>Name: {item.name}</p>
              </li>
            ))
          )}
        </ul>
      }

      <h2>Change Password</h2>
      <button onClick={() => setShowChangePassword(!showChangePassword)}>
        {showChangePassword ? 'Hide Change Password' : 'Change Password'}
      </button>

      {showChangePassword && (
        <div>
          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button onClick={handleChangePassword}>Submit</button>
        </div>
      )}

      {message && <p>{message}</p>}
    </div>
  );
};

export default ProfilePage;
