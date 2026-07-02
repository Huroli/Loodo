import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Icons from '../../components/Icons';

function WorkWithUs() {
    const isUserLogedIn = useSelector(state => state.app.isUserLogedIn);
    const userInformations = useSelector(state => state.app.userInformations);

    // Accordion / active job state
    const [activeJob, setActiveJob] = useState(null);

    // Form states
    const [fullName, setFullName] = useState(
        isUserLogedIn ? `${userInformations.firstName || ''} ${userInformations.lastName || ''}`.trim() : ''
    );
    const [email, setEmail] = useState('');
    const [position, setPosition] = useState('react-dev');
    const [portfolio, setPortfolio] = useState('');
    const [coverLetter, setCoverLetter] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formError, setFormError] = useState('');

    const jobs = [
        {
            id: 'react-dev',
            title: 'Senior Frontend React Developer',
            type: 'Remote / Tam Zamanlı',
            exp: '4+ Yıl Deneyim',
            details: 'Loodo\'nun zengin medya oynatıcılarını, etkileşimli arayüzlerini ve yüksek performanslı sosyal akışını geliştirecek; React, Redux Toolkit ve Tailwind CSS konusunda uzman takım arkadaşı arıyoruz.'
        },
        {
            id: 'threejs-eng',
            title: '3D Graphics / WebGL Engineer',
            type: 'Remote / Tam Zamanlı',
            exp: '3+ Yıl Deneyim',
            details: 'Platformumuzdaki etkileşimli 3D model izleyiciyi (model-viewer/Three.js) geliştirecek, shader programlamaya hakim ve GLTF/GLB optimizasyonu konusunda deneyimli mühendisler arıyoruz.'
        },
        {
            id: 'uiux-designer',
            title: 'Product (UI/UX) Designer',
            type: 'Remote / Tam Zamanlı',
            exp: '3+ Yıl Deneyim',
            details: 'Loodo\'nun karanlık/aydınlık tema tasarım sistemini yönetecek, kullanıcı deneyimi akışlarını tasarlayacak ve mikro-etkileşim prototipleri hazırlayacak yaratıcı tasarımcılar arıyoruz.'
        }
    ];

    const perks = [
        { title: 'Uzaktan Çalışma', desc: 'Dünyanın her yerinden, kendi çalışma düzeninizle çalışın.', icon: '🌍' },
        { title: 'Donanım Desteği', desc: 'İhtiyacınız olan tüm ekipmanlar şirket tarafından karşılanır.', icon: '💻' },
        { title: 'Gelişim Bütçesi', desc: 'Yıllık kurs, kitap ve konferans harcamalarınız için bütçe.', icon: '📚' }
    ];

    const handleApply = (e) => {
        e.preventDefault();
        if (!fullName.trim()) {
            setFormError('Lütfen adınızı ve soyadınızı girin.');
            return;
        }
        if (!email.trim() || !email.includes('@')) {
            setFormError('Lütfen geçerli bir e-posta adresi girin.');
            return;
        }
        if (!portfolio.trim()) {
            setFormError('Lütfen CV veya portfolyo linkinizi girin.');
            return;
        }
        setFormError('');
        setIsSubmitted(true);
    };

    return (
        <section id='workWithUs' className='w-full max-w-6xl mx-auto py-12 px-6 lg:px-8 rounded-3xl transition-all duration-300' style={{ backgroundColor: 'var(--background-secondary)' }}>
            
            {/* Hero Section */}
            <div className="text-center mb-16">
                <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 bg-[#5DE1E6]/10 text-[#5DE1E6]">
                    Kariyer Fırsatları
                </span>
                <h1 className="text-4xl md:text-5xl font-black mb-6" style={{ color: 'var(--text-primary)' }}>
                    Birlikte İnşa Edelim
                </h1>
                <p className="text-lg max-w-2xl mx-auto font-light leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    Geleceğin içerik üreticileri ve geliştiricileri için özgür bir ekosistem yaratıyoruz. Ekibimizin bir parçası olun ve vizyonumuzu dünyaya taşıyın.
                </p>
            </div>

            {/* Perks */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                {perks.map((perk, idx) => (
                    <div key={idx} className="p-6 rounded-2xl flex items-start gap-4 transition-all duration-300 border border-opacity-5 border-white"
                         style={{ backgroundColor: 'var(--background-primary)' }}>
                        <div className="text-3xl">{perk.icon}</div>
                        <div>
                            <h3 className="font-bold text-md mb-1" style={{ color: 'var(--text-primary)' }}>{perk.title}</h3>
                            <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>{perk.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Main Grid: Jobs and Application Form */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Job Listings (Left) */}
                <div className="lg:col-span-7 space-y-4">
                    <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>Açık Pozisyonlar</h2>
                    
                    {jobs.map((job) => (
                        <div 
                            key={job.id} 
                            className="rounded-2xl overflow-hidden shadow-sm transition-all duration-300 border border-opacity-10 border-white"
                            style={{ backgroundColor: 'var(--background-primary)' }}
                        >
                            <button
                                onClick={() => setActiveJob(activeJob === job.id ? null : job.id)}
                                className="w-full p-6 text-left flex justify-between items-center focus:outline-none"
                            >
                                <div>
                                    <h3 className="font-bold text-lg" style={{ color: 'var(--text-primary)' }}>{job.title}</h3>
                                    <div className="flex gap-3 mt-1.5">
                                        <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#5DE1E6]/10 text-[#5DE1E6] font-semibold">{job.type}</span>
                                        <span className="text-xs px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-400 font-semibold">{job.exp}</span>
                                    </div>
                                </div>
                                <span className={`text-xl transform transition-transform duration-300 ${activeJob === job.id ? 'rotate-180' : ''}`} style={{ color: 'var(--text-secondary)' }}>
                                    ▼
                                </span>
                            </button>
                            
                            {activeJob === job.id && (
                                <div className="px-6 pb-6 pt-2 border-t border-opacity-10" style={{ borderColor: 'var(--border-color)', color: 'var(--text-secondary)' }}>
                                    <p className="text-sm leading-relaxed mb-4">{job.details}</p>
                                    <button 
                                        onClick={() => {
                                            setPosition(job.id);
                                            document.getElementById('apply-form-section')?.scrollIntoView({ behavior: 'smooth' });
                                        }}
                                        className="text-xs font-bold text-[#5DE1E6] hover:underline"
                                    >
                                        Hemen Başvur &rarr;
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Application Form (Right) */}
                <div id="apply-form-section" className="lg:col-span-5 rounded-3xl p-8 shadow-xl border border-opacity-10 border-white relative overflow-hidden"
                     style={{ backgroundColor: 'var(--background-primary)' }}>
                    <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500 opacity-5 rounded-full blur-2xl"></div>

                    {isSubmitted ? (
                        /* Success View */
                        <div className="text-center py-12 animate-fade-in">
                            <div className="w-16 h-16 bg-emerald-500/10 text-emerald-400 rounded-full flex justify-center items-center mx-auto mb-6 border border-emerald-500/20">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>Başvurunuz Alındı!</h2>
                            <p className="text-xs mb-6 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                                Loodo ekosistemine katılma talebiniz başarıyla kaydedilmiştir. Başvurunuzu değerlendirdikten sonra en kısa sürede sizinle e-posta adresiniz üzerinden iletişime geçeceğiz.
                            </p>
                        </div>
                    ) : (
                        /* Form View */
                        <form onSubmit={handleApply} className="space-y-4">
                            <div className="border-b pb-3" style={{ borderColor: 'var(--border-color)' }}>
                                <h2 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>Hızlı Başvuru Formu</h2>
                                <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>Ekibimize katılmak için bilgilerinizi girin.</p>
                            </div>

                            {formError && (
                                <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-medium">
                                    {formError}
                                </div>
                            )}

                            <div>
                                <label className="block text-xs font-semibold mb-1" style={{ color: 'var(--text-secondary)' }}>Ad Soyad</label>
                                <input 
                                    type="text" 
                                    placeholder="Adınız ve Soyadınız"
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                    className="w-full px-4 py-2.5 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#5DE1E6] text-sm transition-all"
                                    style={{ backgroundColor: 'var(--background-secondary)', color: 'var(--text-primary)', borderColor: 'var(--border-color)' }}
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-semibold mb-1" style={{ color: 'var(--text-secondary)' }}>E-posta Adresi</label>
                                <input 
                                    type="email" 
                                    placeholder="ornek@domain.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-4 py-2.5 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#5DE1E6] text-sm transition-all"
                                    style={{ backgroundColor: 'var(--background-secondary)', color: 'var(--text-primary)', borderColor: 'var(--border-color)' }}
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-semibold mb-1" style={{ color: 'var(--text-secondary)' }}>Başvurulan Pozisyon</label>
                                <select 
                                    value={position}
                                    onChange={(e) => setPosition(e.target.value)}
                                    className="w-full px-4 py-2.5 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#5DE1E6] text-sm transition-all"
                                    style={{ backgroundColor: 'var(--background-secondary)', color: 'var(--text-primary)', borderColor: 'var(--border-color)' }}
                                >
                                    <option value="react-dev">Senior Frontend React Developer</option>
                                    <option value="threejs-eng">3D Graphics / WebGL Engineer</option>
                                    <option value="uiux-designer">Product (UI/UX) Designer</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-xs font-semibold mb-1" style={{ color: 'var(--text-secondary)' }}>CV / Portfolyo / GitHub Linki</label>
                                <input 
                                    type="url" 
                                    placeholder="https://github.com/..."
                                    value={portfolio}
                                    onChange={(e) => setPortfolio(e.target.value)}
                                    className="w-full px-4 py-2.5 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#5DE1E6] text-sm transition-all"
                                    style={{ backgroundColor: 'var(--background-secondary)', color: 'var(--text-primary)', borderColor: 'var(--border-color)' }}
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-semibold mb-1" style={{ color: 'var(--text-secondary)' }}>Ön Yazı (İsteğe Bağlı)</label>
                                <textarea 
                                    rows="3"
                                    placeholder="Neden Loodo ekibine katılmak istiyorsunuz?"
                                    value={coverLetter}
                                    onChange={(e) => setCoverLetter(e.target.value)}
                                    className="w-full px-4 py-2.5 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#5DE1E6] text-sm transition-all resize-none"
                                    style={{ backgroundColor: 'var(--background-secondary)', color: 'var(--text-primary)', borderColor: 'var(--border-color)' }}
                                />
                            </div>

                            <button 
                                type="submit"
                                className="w-full bg-[#5DE1E6] text-slate-950 font-extrabold py-3.5 rounded-xl shadow-lg hover:shadow-cyan-400/20 hover:-translate-y-0.5 transition-all duration-300 mt-2 text-sm"
                            >
                                Başvuruyu Gönder
                            </button>
                        </form>
                    )}
                </div>
            </div>

        </section>
    );
}

export default WorkWithUs;