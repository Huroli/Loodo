import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIsLoginOpen } from '../../app/slices/appSlice';
import Icons from '../../components/Icons';

function BeProducer() {
    const dispatch = useDispatch();
    const isUserLogedIn = useSelector(state => state.app.isUserLogedIn);
    const userInformations = useSelector(state => state.app.userInformations);

    // Form states
    const [category, setCategory] = useState('3d');
    const [portfolio, setPortfolio] = useState('');
    const [pricingTier, setPricingTier] = useState('9.99');
    const [bio, setBio] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formError, setFormError] = useState('');

    const handleApply = (e) => {
        e.preventDefault();
        if (!portfolio.trim()) {
            setFormError('Lütfen portföy veya sosyal medya linkinizi girin.');
            return;
        }
        if (!bio.trim()) {
            setFormError('Lütfen kendinizi ve içeriklerinizi anlatan kısa bir açıklama yazın.');
            return;
        }
        setFormError('');
        setIsSubmitted(true);
    };

    const benefits = [
        {
            title: '%100 Bağımsızlık',
            desc: 'Algoritma kısıtlamalarına takılmadan içeriğinizi doğrudan topluluğunuzla paylaşın.',
            icon: <Icons.faCompass className="w-5 h-5 text-cyan-400" />
        },
        {
            title: 'Çoklu Format Desteği',
            desc: '3D sahneler, interaktif kodlar, ses kayıtları ve çok daha fazlasını aynı platformda satın.',
            icon: <Icons.faLayerGroup className="w-5 h-5 text-purple-400" />
        },
        {
            title: 'Esnek Monetizasyon',
            desc: 'Abonelik planları, özel içerik satışları veya topluluk destek bahşişleri ile kazanın.',
            icon: <Icons.faCoins className="w-5 h-5 text-emerald-400" />
        }
    ];

    return (
        <section id='beProducer' className='w-full max-w-6xl mx-auto py-12 px-6 lg:px-8 rounded-3xl transition-all duration-300' style={{ backgroundColor: 'var(--background-secondary)' }}>
            
            {/* Header / Intro */}
            <div className="text-center mb-16">
                <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 bg-[#5DE1E6]/10 text-[#5DE1E6]">
                    Yaratıcı Kulübü
                </span>
                <h1 className="text-4xl md:text-5xl font-black mb-6" style={{ color: 'var(--text-primary)' }}>
                    Loodo Üreticisi Olun
                </h1>
                <p className="text-lg max-w-2xl mx-auto font-light leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    Fikirlerinizi, kodlarınızı, 3D tasarımlarınızı veya müziklerinizi paylaşın. Loodo ile doğrudan hayran kitlenizden gelir elde etmeye başlayın.
                </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {benefits.map((benefit, idx) => (
                    <div key={idx} className="p-6 rounded-2xl shadow-sm border border-opacity-5 border-white transition-all duration-300"
                         style={{ backgroundColor: 'var(--background-primary)' }}>
                        <div className="p-3 rounded-xl bg-opacity-10 mb-4 inline-block" style={{ backgroundColor: 'var(--background-secondary)' }}>
                            {benefit.icon}
                        </div>
                        <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--text-primary)' }}>{benefit.title}</h3>
                        <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{benefit.desc}</p>
                    </div>
                ))}
            </div>

            {/* Application Section */}
            <div className="max-w-2xl mx-auto rounded-3xl p-8 md:p-12 shadow-xl border border-opacity-10 border-white relative overflow-hidden"
                 style={{ backgroundColor: 'var(--background-primary)' }}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#5DE1E6] opacity-5 rounded-full blur-3xl"></div>

                {!isUserLogedIn ? (
                    /* Guest View */
                    <div className="text-center py-8">
                        <div className="w-16 h-16 bg-[#5DE1E6]/10 rounded-full flex justify-center items-center mx-auto mb-6">
                            <Icons.faUserTie className="w-8 h-8 text-[#5DE1E6]" />
                        </div>
                        <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Başvurmak İçin Giriş Yapın</h2>
                        <p className="text-sm mb-8 leading-relaxed max-w-md mx-auto" style={{ color: 'var(--text-secondary)' }}>
                            Üretici başvuru formunu doldurabilmek ve içeriklerinizi yüklemeye başlamak için lütfen Loodo hesabınıza giriş yapın.
                        </p>
                        <button 
                            onClick={() => dispatch(setIsLoginOpen(true))}
                            className="bg-[#5DE1E6] text-slate-950 font-bold px-8 py-3.5 rounded-full shadow-lg hover:shadow-cyan-400/20 hover:-translate-y-0.5 transition-all duration-300"
                        >
                            Hesabıma Giriş Yap
                        </button>
                    </div>
                ) : isSubmitted ? (
                    /* Success State */
                    <div className="text-center py-12 animate-fade-in">
                        <div className="w-20 h-20 bg-emerald-500/10 text-emerald-400 rounded-full flex justify-center items-center mx-auto mb-6 border border-emerald-500/20">
                            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Harika, {userInformations.firstName}!</h2>
                        <p className="text-sm mb-8 leading-relaxed max-w-md mx-auto" style={{ color: 'var(--text-secondary)' }}>
                            Üretici başvurunuz başarıyla alındı ve profiliniz güncellendi. Artık Loodo ekosisteminde resmi bir üreticisiniz!
                        </p>
                        <div className="p-4 rounded-xl text-left border border-emerald-500/10 mb-8" style={{ backgroundColor: 'var(--background-secondary)' }}>
                            <div className="text-xs font-semibold text-emerald-400 mb-1">Bir Sonraki Adım</div>
                            <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                                Profil sayfanıza giderek "Upload Media" butonuyla ilk etkileşimli modelinizi, kod bloğunuzu veya zengin medyanızı yükleyebilirsiniz.
                            </p>
                        </div>
                    </div>
                ) : (
                    /* Logged In Application Form */
                    <form onSubmit={handleApply} className="space-y-6">
                        <div className="border-b pb-4 mb-6" style={{ borderColor: 'var(--border-color)' }}>
                            <h2 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>Üretici Profilinizi Oluşturun</h2>
                            <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>Merhaba {userInformations.firstName}, lütfen aşağıdaki detayları doldurun.</p>
                        </div>

                        {formError && (
                            <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-medium">
                                {formError}
                            </div>
                        )}

                        <div>
                            <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'var(--text-secondary)' }}>Üretim Kategoriniz</label>
                            <select 
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#5DE1E6] transition-all"
                                style={{ backgroundColor: 'var(--background-secondary)', color: 'var(--text-primary)', borderColor: 'var(--border-color)' }}
                            >
                                <option value="3d">3D Model & VR Tasarımcısı</option>
                                <option value="software">Yazılım Geliştirici / Open Source</option>
                                <option value="design">Dijital Sanat & UI/UX</option>
                                <option value="music">Müzik / Ses Sanatçısı</option>
                                <option value="content">Yazar & Video İçerik Üreticisi</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'var(--text-secondary)' }}>Portföy veya Sosyal Medya Linki</label>
                            <input 
                                type="url" 
                                placeholder="https://github.com/kullaniciadi veya https://behance.net/..."
                                value={portfolio}
                                onChange={(e) => setPortfolio(e.target.value)}
                                className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#5DE1E6] transition-all"
                                style={{ backgroundColor: 'var(--background-secondary)', color: 'var(--text-primary)', borderColor: 'var(--border-color)' }}
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'var(--text-secondary)' }}>Hedef Aylık Abonelik Ücreti</label>
                            <div className="grid grid-cols-3 gap-3">
                                {[
                                    { value: '4.99', label: '$4.99 / ay' },
                                    { value: '9.99', label: '$9.99 / ay' },
                                    { value: '19.99', label: '$19.99 / ay' }
                                ].map((tier) => (
                                    <button
                                        key={tier.value}
                                        type="button"
                                        onClick={() => setPricingTier(tier.value)}
                                        className={`py-3 px-2 rounded-xl text-xs font-bold border transition-all ${
                                            pricingTier === tier.value 
                                                ? 'border-[#5DE1E6] bg-[#5DE1E6]/5 text-[#5DE1E6]' 
                                                : 'border-transparent'
                                        }`}
                                        style={{ 
                                            backgroundColor: pricingTier !== tier.value ? 'var(--background-secondary)' : undefined,
                                            color: pricingTier !== tier.value ? 'var(--text-primary)' : undefined
                                        }}
                                    >
                                        {tier.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'var(--text-secondary)' }}>Kendinizden Bahsedin</label>
                            <textarea 
                                rows="4"
                                placeholder="Üreteceğiniz içerikleri, projeleri ve topluluğunuza sunacağınız ayrıcalıkları kısaca özetleyin..."
                                value={bio}
                                onChange={(e) => setBio(e.target.value)}
                                className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#5DE1E6] transition-all resize-none"
                                style={{ backgroundColor: 'var(--background-secondary)', color: 'var(--text-primary)', borderColor: 'var(--border-color)' }}
                            />
                        </div>

                        <button 
                            type="submit"
                            className="w-full bg-[#5DE1E6] text-slate-950 font-extrabold py-4 rounded-xl shadow-lg hover:shadow-cyan-400/20 hover:-translate-y-0.5 transition-all duration-300 mt-2"
                        >
                            Başvurumu Gönder ve Üretici Ol
                        </button>
                    </form>
                )}
            </div>

        </section>
    );
}

export default BeProducer;