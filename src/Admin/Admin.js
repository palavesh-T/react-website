import React, { useState, useEffect } from 'react';
import "../Admin/assete/css/admin.css";
import { SignInApi } from '../service/Api'; 
import { useNavigate } from 'react-router-dom'; 
import im_log from "../assete/logo/LOGO.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Admin = () => {
    const [user_name, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [error, setError] = useState('');

    const navigate = useNavigate(); 

    useEffect(() => {
        if (localStorage.getItem('user') !== null) {
            navigate("/Admin"); 
        }
    }, [navigate]);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleLogin = async (event) => {
        event.preventDefault();
   
        try {
            const response = await SignInApi({ user_name, password });

            if (response.status === false) {
                console.log("Login failed");
                setError("Invalid username or password");
            } else {
                console.log("Login Successful");
                localStorage.setItem('user', user_name); 
                navigate('/Viewdetails'); 
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setError("Invalid password");
        }
    };

    return (
        <div className='logo_top' style={{ maxWidth: '400px', margin: '100px auto', padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <img src={im_log} alt="Login" style={{ maxWidth: '50%', height: 'auto' }} />
            </div>

            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    value={user_name}
                    id="user_name"
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    required
                    style={{
                        width: '100%',
                        padding: '10px',
                        marginBottom: '20px',
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                        boxSizing: 'border-box'
                    }}
                />
                <div className="form-group" style={{ position: 'relative' }}>
                    <input
                        type={passwordVisible ? "text" : "password"}
                        value={password}
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                        style={{
                            width: '100%',
                            padding: '10px',
                            marginBottom: '20px',
                            border: '1px solid #ccc',
                            borderRadius: '4px',
                            boxSizing: 'border-box'
                        }}
                    /> 
                    <FontAwesomeIcon
                        icon={passwordVisible ? faEye : faEyeSlash}
                        onClick={togglePasswordVisibility}
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
                <input
                    type="submit"
                    value="Login"
                    style={{
                        width: '100%',
                        padding: '10px',
                        border: 'none',
                        borderRadius: '4px',
                        backgroundColor: '#007bff',
                        color: '#fff',
                        cursor: 'pointer'
                    }}
                />
            </form>
            {error && <div style={{ textAlign: 'center', color: 'red', marginTop: '10px' }}>{error}</div>}
        </div>
    );
}
export default Admin