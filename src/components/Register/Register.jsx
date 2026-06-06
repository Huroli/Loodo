import React, { useState, forwardRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { createUser, loginUser } from '../../services/usersService';

function Register(props, ref) {
    // Gerekli useState'ler tanımlanıyor.
    const [formData, setFormData] = useState({});
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const theme = useSelector(state => state.app.theme);

    // Yönlendirme işlemleri için gerekli olan useNavigate hook'u tanımlanıyor.
    const navigate = useNavigate();

    // Input alanına girilen değerleri kaydetmek için gerekli fonksiyon tanımlanıyor.
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    // Form gönderildikten sonra kullanıcı oluşturmak ve sisteme giriş yapmak için gerekli fonksiyon tanımlanıyor.
    const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        // Backend şemasının zorunlu kıldığı 'hashedPassword' anahtarını elinle eşitle
        const payload = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            nickname: formData.nickname,
            email: formData.email,
            hashedPassword: formData.password // password'ü şemanın beklediği isme atadık
        };

        await createUser(payload); // Artık formData değil, hazırladığımız payload gidiyor
        setSuccess('Registration Successful!');
        setError('');
        await loginUser({ email: formData.email, password: formData.password });
        navigate(0);
    } catch (err) {
        setError(err.message);
        setSuccess('');
    }
}

    return (
        // Register bileşeni tanımlanıyor. Gerekli referans tanımlanıyor.
        <section ref={ref} id='register' className='register z-30 hidden fixed -translate-y-full top-0 w-full min-h-full -ml-[2vw] flex flex-col justify-center items-center' {...props}>
            <form 
                onSubmit={handleSubmit} 
                className='sm:w-[28.5rem] w-[80vw] flex flex-col p-10 gap-4 rounded-2xl shadow-md transition-colors duration-300'
                style={{
                    backgroundColor: 'var(--background-primary)',
                    color: 'var(--text-primary)',
                    borderColor: 'var(--border-color)'
                }}
            >
                <h1 className='m-auto text-4xl font-medium mb-6'>REGISTER</h1>
                <div className='w-full flex flex-row items-center justify-between'>
                    <input 
                        type='text' 
                        name='firstName' 
                        placeholder='First Name' 
                        onChange={handleChange} 
                        className='w-full p-2 px-3 font-light rounded-full transition-all hover:shadow-md focus:outline-[#5DE1E6]'
                        style={{
                            backgroundColor: 'var(--background-secondary)',
                            color: 'var(--text-primary)',
                            borderColor: 'var(--border-color)'
                        }}
                    />
                </div>
                <div className='w-full flex flex-row items-center justify-between'>
                    <input 
                        type='text' 
                        name='lastName' 
                        placeholder='Last Name' 
                        onChange={handleChange} 
                        className='w-full p-2 px-3 font-light rounded-full transition-all hover:shadow-md focus:outline-[#5DE1E6]'
                        style={{
                            backgroundColor: 'var(--background-secondary)',
                            color: 'var(--text-primary)',
                            borderColor: 'var(--border-color)'
                        }}
                    />
                </div>
                <div className='w-full flex flex-row items-center justify-between'>
                    <input 
                        type='text' 
                        name='nickname' 
                        placeholder='Nickname' 
                        onChange={handleChange} 
                        className='w-full p-2 px-3 font-light rounded-full transition-all hover:shadow-md focus:outline-[#5DE1E6]'
                        style={{
                            backgroundColor: 'var(--background-secondary)',
                            color: 'var(--text-primary)',
                            borderColor: 'var(--border-color)'
                        }}
                    />
                </div>
                <div className='w-full flex flex-row items-center justify-between'>
                    <input 
                        type='email' 
                        name='email' 
                        placeholder='E-Mail' 
                        onChange={handleChange} 
                        className='w-full p-2 px-3 font-light rounded-full transition-all hover:shadow-md focus:outline-[#5DE1E6]'
                        style={{
                            backgroundColor: 'var(--background-secondary)',
                            color: 'var(--text-primary)',
                            borderColor: 'var(--border-color)'
                        }}
                    />
                </div>
                <div className='w-full flex flex-row items-center justify-between'>
                    <input 
                        type='password' 
                        name='password' 
                        placeholder='Password' 
                        onChange={handleChange} 
                        className='w-full p-2 px-3 font-light rounded-full transition-all hover:shadow-md focus:outline-[#5DE1E6]'
                        style={{
                            backgroundColor: 'var(--background-secondary)',
                            color: 'var(--text-primary)',
                            borderColor: 'var(--border-color)'
                        }}
                    />
                </div>
                <button 
                    type='submit' 
                    className={`p-2 px-3 font-light rounded-full transition-all hover:shadow-md focus:outline-[#5DE1E6] ${error ? 'bg-red-500 text-white' : ''} ${success ? 'bg-[#5DE1E6] text-white' : ''}`}
                    style={!error && !success ? {
                        backgroundColor: 'var(--background-secondary)',
                        color: 'var(--text-primary)',
                        borderColor: 'var(--border-color)'
                    } : {}}
                >
                    Register
                </button>
                {/* Hata mesajı veya onay mesajı var ise ekrana bastırılır. */}
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {success && <p style={{ color: '#5DE1E6' }}>{success}</p>}
            </form>
        </section>
    )
}

// Üst bileşenlerde Register bileşenine ref tanımlanabilmesi için Register bileşeni forwardRef ile tanımlanıyor.
Register = forwardRef(Register);

export default Register;