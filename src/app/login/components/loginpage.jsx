'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { loginUser } from '@/api/LoginApi/api';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    // Check if the token exists, if so, redirect to dashboard
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            router.push('/dashboard'); // Redirect to dashboard if token exists
        }
    }, []); // Empty dependency array to run this effect only on mount

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const data = await loginUser(email, password);

            if (data.status) {
                localStorage.setItem('token', data.token); // Store token in local storage
                router.push('/dashboard'); // Redirect to dashboard
            } else {
                alert(data.message); // Display alert if login fails
            }
        } catch (err) {
            alert(err.message); // Display error in an alert if an exception occurs
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
