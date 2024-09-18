'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { EXPORT_ALL_APIS } from '../../../../utils/apis/apis';

const LoginPage = () => {
    let api=EXPORT_ALL_APIS();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

 

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const data = await api.loginUser(email, password);

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
