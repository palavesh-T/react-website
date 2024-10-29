import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { updateConfirmPassword } from '../service/Api';
import "../Admin/assete/css/changepassword.css";
import Adminheader from './Adminheader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Changepassword = () => {
    const navigate = useNavigate();
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [currentPasswordVisible, setCurrentPasswordVisible] = useState(false);
    const [newPasswordVisible, setNewPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

    const toggleCurrentPasswordVisibility = () => {
        setCurrentPasswordVisible(!currentPasswordVisible);
    };

    const toggleNewPasswordVisibility = () => {
        setNewPasswordVisible(!newPasswordVisible);
    };

    const toggleConfirmPasswordVisibility = () => {
        setConfirmPasswordVisible(!confirmPasswordVisible);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (newPassword !== confirmPassword) {
            setErrorMessage('New password and confirm password do not match');
            return;
        }

        try {
            const response = await updateConfirmPassword({
                id: 1,
                current_password: currentPassword,
                new_password: newPassword,
                confirm_password: confirmPassword,
            });

            if (response.success) {
                console.log('Password change successful:', response.message);
                navigate('/Admin');
                window.location.reload();
            } else {
                setErrorMessage(response.message || 'Password change failed. Please try again later.');
            }
        } catch (error) {
            console.error('Password change failed:', error);
            setErrorMessage('Password change failed. Please try again later.');
        }
    };

    return (
        <>
            <Adminheader />
            <div className="change_pas">
                <div className='change_pas1'>
                <h2>Change Password</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group" style={{ position: 'relative' }}>
                        <input
                            type={currentPasswordVisible ? "text" : "password"}
                            value={currentPassword}
                            onChange={(e) => setCurrentPassword(e.target.value)}
                            placeholder="Current Password"
                            required
                        />
                        <FontAwesomeIcon
                            icon={currentPasswordVisible ? faEye : faEyeSlash}
                            onClick={toggleCurrentPasswordVisibility}
                            className="icon"
                            style={{
                                position: 'absolute',
                                right: '10px',
                                top: '35%',
                                transform: 'translateY(-50%)',
                                cursor: 'pointer'
                            }}
                        />
                    </div>
                    <div className="form-group" style={{ position: 'relative' }}>
                        <input
                            type={newPasswordVisible ? "text" : "password"}
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            placeholder="New Password"
                            required
                        />
                        <FontAwesomeIcon
                            icon={newPasswordVisible ? faEye : faEyeSlash}
                            onClick={toggleNewPasswordVisibility}
                            className="icon"
                            style={{
                                position: 'absolute',
                                right: '10px',
                                top: '35%',
                                transform: 'translateY(-50%)',
                                cursor: 'pointer'
                            }}
                        />
                    </div>
                    <div className="form-group" style={{ position: 'relative' }}>
                        <input
                            type={confirmPasswordVisible ? "text" : "password"}
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="Confirm New Password"
                            required
                        />
                        <FontAwesomeIcon
                            icon={confirmPasswordVisible ? faEye : faEyeSlash}
                            onClick={toggleConfirmPasswordVisibility}
                            className="icon"
                            style={{
                                position: 'absolute',
                                right: '10px',
                                top: '35%',
                                transform: 'translateY(-50%)',
                                cursor: 'pointer'
                            }}
                        />
                    </div>
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                    <button type="submit">Change Password</button>
                </form>
            </div>
            </div>
        </>
    );
};

export default Changepassword