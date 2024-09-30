'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { EXPORT_ALL_APIS } from '../../../../utils/apis/apis';

const LoginPage = () => {
    let api = EXPORT_ALL_APIS();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    // Redirect to dashboard if token is already present
    useEffect(() => {
        const token = localStorage.getItem('token');
        // console.log('Token ',token)
        // return
        if (token) {
            const responce = api.getUserDashboard(token)
            router.push('/dashboard'); // Redirect to dashboard if token is found
        }else{
            // Redirect to login page if no token is present
            router.push('/login');
        }
    }, [router]);

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
    
        try {
            const data = await api.loginUser(email, password);
    
            if (data.status) {
                const tokenExpiryTime = new Date().getTime() + 24 * 60 * 60 * 1000; // 24 hours in milliseconds
    
                // Save token and expiry time to local storage
                localStorage.setItem('token', data.token);
                localStorage.setItem('tokenExpiry', tokenExpiryTime.toString());
    
                router.push('/dashboard'); // Redirect to dashboard
                alert('Admin logged in successfully');
            } else {
                alert(data.message); // Display alert if login fails
            }
        } catch (err) {
            alert(err.message); // Display error in an alert if an exception occurs
        }
    
        // Function to check if the token is still valid
        const getToken = () => {
            const token = localStorage.getItem('token');
            const tokenExpiry = localStorage.getItem('tokenExpiry');
    
            if (!token || !tokenExpiry) {
                return null; // No token or expiry time found
            }
    
            const currentTime = new Date().getTime();
            if (currentTime > tokenExpiry) {
                localStorage.removeItem('token'); // Token expired, remove it
                localStorage.removeItem('tokenExpiry'); // Remove expiry time
                return null;
            }
    
            return token; // Return valid token
        };
    
        // Call getToken to ensure the token is valid if you need to use it
        const token = getToken();
        if (!token) {
            console.log("Session expired or not found.");
        } else {
            console.log("Valid token found:", token);
        }
    };
    

    return (
        <div className='container login_page'>
            <div className='loginformContainer'>
                <h3>Login</h3>
                <form onSubmit={handleLogin}>
                    <div className='email_inp_container'>
                        <label>Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='Enter Admin Email'
                            required
                        />
                    </div>
                    <div className='pass_inp_container'>
                        <label>Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder='Enter Admin Password'
                            required
                        />
                    </div>
                    <button className='adminLoginBtn' type="submit">Login</button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;



