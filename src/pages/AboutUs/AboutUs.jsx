import React from 'react';
import Icons from '../../components/Icons';

function AboutUs() {
    const stats = [
        { label: 'Aktif Yaratıcı', value: '150K+', color: 'text-cyan-400' },
        { label: 'Yıllık Erişim', value: '25M+', color: 'text-purple-400' },
        { label: 'Desteklenen Format', value: '10+', color: 'text-emerald-400' },
        { label: 'Yaratıcı Geliri', value: '$2M+', color: 'text-amber-400' }
    ];

    const values = [
        {
            title: 'Sınırsız Özgürlük',
            description: 'Sadece resim veya video değil; 3D modellerden kaynak kodlarına kadar hayal ettiğiniz her formatta paylaşım yapın.',
            icon: <Icons.faLayerGroup className="w-6 h-6" />
        },
        {
            title: 'Doğrudan Gelir',
            description: 'Üçüncü parti aracı firmalar olmadan, topluluğunuzdan doğrudan destek ve abonelik geliri elde edin.',
            icon: <Icons.faCoins className="w-6 h-6" />
        },
        {
            title: 'Topluluk Odaklı',
            description: 'Takipçilerinizle sadece etkileşime girmeyin; onlarla birlikte projeler üretin ve özel alanlar kurun.',
            icon: <Icons.faUsers className="w-6 h-6" />
        }
    ];

    const formats = [
        { name: '3D Modeller', desc: 'Etkileşimli 3D tasarımlar', badge: 'Three.js / GLTF' },
        { name: 'Kod Dosyaları', desc: 'Geliştiriciler için kod blokları', badge: 'Syntax Highlighting' },
        { name: 'Zengin Medya', desc: 'Yüksek kaliteli görsel ve videolar', badge: 'Ultra HD' },
        { name: 'Ses & Müzik', desc: 'Sanatçılar için özgün ses kayıtları', badge: 'Lossless' }
    ];

    return (
        <section id='aboutUs' className='w-full max-w-6xl mx-auto py-12 px-6 lg:px-8 rounded-3xl transition-all duration-300' style={{ backgroundColor: 'var(--background-secondary)' }}>
            
            {/* Hero Section */}
            <div className="relative overflow-hidden rounded-3xl py-20 px-8 text-center mb-16 shadow-xl border border-opacity-10 border-white"
                 style={{ 
                     background: 'linear-gradient(135deg, rgba(93, 225, 230, 0.1) 0%, rgba(139, 92, 246, 0.15) 100%)',
                     backdropFilter: 'blur(10px)'
                 }}>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-[#5DE1E6] opacity-10 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="absolute bottom-0 right-10 w-48 h-48 bg-purple-500 opacity-10 rounded-full blur-[80px] pointer-events-none"></div>

                <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6 bg-[#5DE1E6]/10 text-[#5DE1E6] border border-[#5DE1E6]/20">
                    Loodo Hikayesi
                </span>
                
                <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight leading-tight" style={{ color: 'var(--text-primary)' }}>
                    Geleceğin Yaratıcı Ekosistemi <span className="bg-gradient-to-r from-[#5DE1E6] to-purple-400 bg-clip-text text-transparent">Burada Başlıyor</span>
                </h1>
                
                <p className="text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    Loodo, yaratıcıların, yazılımcıların ve toplulukların tek bir çatı altında bir araya geldiği, sınırsız içerik paylaşımını ve doğrudan gelir modelini mümkün kılan yeni nesil sosyal platformdur.
                </p>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
                {stats.map((stat, idx) => (
                    <div key={idx} className="p-6 rounded-2xl text-center shadow-sm hover:shadow-md transition-all duration-300 border border-opacity-5 border-white"
                         style={{ backgroundColor: 'var(--background-primary)' }}>
                        <div className={`text-3xl md:text-4xl font-bold mb-2 ${stat.color}`}>{stat.value}</div>
                        <div className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>{stat.label}</div>
                    </div>
                ))}
            </div>

            {/* Core Values */}
            <div className="mb-20">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-extrabold mb-4" style={{ color: 'var(--text-primary)' }}>Neden Loodo?</h2>
                    <p className="text-md max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                        Geleneksel sosyal ağların kısıtlamalarını geride bırakarak yaratıcı gücünüzü açığa çıkarın.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {values.map((val, idx) => (
                        <div key={idx} className="p-8 rounded-2xl shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300 border border-opacity-10 border-white flex flex-col items-start"
                             style={{ backgroundColor: 'var(--background-primary)' }}>
                            <div className="p-3.5 rounded-xl bg-[#5DE1E6]/10 text-[#5DE1E6] mb-6">
                                {val.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>{val.title}</h3>
                            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{val.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Format Diversity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
                <div>
                    <span className="text-xs font-semibold text-[#5DE1E6] uppercase tracking-wider block mb-3">Çoklu Medya Desteği</span>
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-6" style={{ color: 'var(--text-primary)' }}>
                        Hayal Ettiğiniz Her Formatı Destekliyoruz
                    </h2>
                    <p className="text-md mb-8 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                        Diğer platformlar sizi sadece video veya fotoğrafla sınırlar. Loodo ise projenizin asıl değerini yansıtabilmeniz için 3D model etkileşimlerinden kaynak kodu derleyicilerine kadar geniş bir yelpazeyi yerleşik olarak sunar.
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {formats.map((fmt, idx) => (
                            <div key={idx} className="p-4 rounded-xl border border-opacity-10 border-white" style={{ backgroundColor: 'var(--background-primary)' }}>
                                <span className="inline-block px-2 py-0.5 text-[10px] font-bold rounded bg-[#5DE1E6]/10 text-[#5DE1E6] mb-2">{fmt.badge}</span>
                                <h4 className="font-semibold text-sm mb-1" style={{ color: 'var(--text-primary)' }}>{fmt.name}</h4>
                                <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>{fmt.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative rounded-3xl overflow-hidden aspect-video shadow-2xl bg-gradient-to-tr from-purple-900 to-indigo-950 p-1">
                    <div className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80')` }}></div>
                    <div className="relative w-full h-full flex flex-col justify-between p-8 rounded-2xl backdrop-blur-sm bg-black/40 text-white">
                        <div className="flex justify-between items-center">
                            <span className="text-xs font-bold bg-[#5DE1E6]/20 text-[#5DE1E6] px-3 py-1 rounded-full border border-[#5DE1E6]/30">Loodo Space</span>
                            <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping"></span>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2">Canlı Proje İşbirlikleri</h3>
                            <p className="text-xs opacity-80 leading-relaxed max-w-md">Topluluğunuzla birlikte gerçek zamanlı olarak 3D sahneler tasarlayın, kod yazın ve yaratıcılığın sınırlarını zorlayın.</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    );
}

export default AboutUs;