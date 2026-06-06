import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { postsPrev } from '../Posts';
import Icons from '../Icons';

function CanvasContainer() {
    const theme = useSelector(state => state.app.theme);
    
    // postsPrev dizisi karıştırılıp yeni bir dizi oluşturulması için gerekli fonksiyon tanımlanıyor.
    const shuffleArray = (array) => {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    // Kullanıcının ekran boyutuna göre gösterilecek satır sayısını dönen fonksiyon tanımlanıyor.
    function getColCount(width) {
        if (width >= 2250) return 9;
        else if (width >= 2000) return 8;
        else if (width >= 1750) return 7;
        else if (width >= 1500) return 6;
        else if (width >= 1250) return 5;
        else if (width >= 1000) return 4;
        else if (width > 610) return 3;
        else return 2;
    }

    // posts dizisini karıştıran fonksiyon çağrılıyor ve sonuç useState olarak tanımlanıyor.
    const [posts, setPosts] = useState(shuffleArray(postsPrev));

    // Kullanıcının ekran boyutuna göre gösterilecek satır sayısını dönen fonksiyon çağrılıyor ve sonuç useState olarak tanımlanıyor.
    const [colCount, setColCount] = useState(getColCount(window.innerWidth));

    // Kullanıcının ekran boyutuna göre useState olarak tanımladığımız değişkene satır sayısını atayan işlem tanımlanıyor.
    useEffect(() => {
        const handleResize = () => {
            setColCount(getColCount(window.innerWidth));
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Paylaş butonuna tıklandığında gözükecek kutunun ilk durumunu tanımlanıyor.
    const [isShareBoxVisible, setIsShareBoxVisible] = useState(false);
    const [shareBoxPosition, setShareBoxPosition] = useState({ top: 0, left: 0 });
    const [shareBoxId, setShareBoxId] = useState(null); // Hangi kutunun gösterileceği bilgisini tutan useState tanımlanıyor.
    const shareBoxRef = useRef();

    // Daha fazla butonuna tıklandığında gözükecek kutunun ilk durumu tanımlanıyor.
    const [isMoreBoxVisible, setIsMoreBoxVisible] = useState(false);
    const [moreBoxPosition, setMoreBoxPosition] = useState({ top: 0, left: 0 });
    const [moreBoxId, setMoreBoxId] = useState(null); // Hangi kutunun gösterileceği bilgisini tutan useState tanımlanıyor.
    const moreBoxRef = useRef();

    // Paylaş butonuna tıklandığında gerekli değişiklikleri yapacak işlem tanımlanıyor.
    const handleShareButtonClick = (event, id) => {
        event.preventDefault();
        const shareButtonRect = event.currentTarget.getBoundingClientRect();    // Tıklanılan butonun bilgisini dönen fonksiyon çağrılıyor.

        // Kutunun konumu sayfanın yüksekliğine göre tanımlanıyor.
        const shareBoxTop = shareButtonRect.top + window.scrollY - (window.innerWidth > 1024 ? 58 : 24);
        const shareBoxLeft = shareButtonRect.left + window.scrollX - 80;
        setShareBoxPosition({ top: shareBoxTop, left: shareBoxLeft });

        // Kutunun görünürlüğünü kapatan diğer state durumlarıyla çakışma olduğu için en son render edilmesini sağlayan fonksiyon çalıştırılıyor.
        setTimeout(() => {
            setIsShareBoxVisible(true); // Paylaş kutusunu aktif et.
            setShareBoxId(id);  // Hangi paylaş kutusunun görüneceğini belirtir.
        }, 0);
    }

    // Daha fazla butonuna tıklandığında gerekli değişiklikleri yapacak işlem tanımlanıyor.
    const handleMoreButtonClick = (event, id) => {
        event.preventDefault();
        const moreButtonRect = event.currentTarget.getBoundingClientRect(); // Tıklanılan butonun bilgisini dönen fonksiyon çağrılıyor.

        // Kutunun konumu sayfanın yüksekliğine göre tanımlanıyor.
        const moreBoxTop = moreButtonRect.top + window.scrollY - (window.innerWidth > 1024 ? 58 : 24);
        const moreBoxLeft = moreButtonRect.left + window.scrollX - 80;
        setMoreBoxPosition({ top: moreBoxTop, left: moreBoxLeft });

        // Kutunun görünürlüğünü kapatan diğer state durumlarıyla çakışma olduğu için en son render edilmesini sağlayan fonksiyon çalıştırılıyor.
        setTimeout(() => {
            setIsMoreBoxVisible(true);  // Paylaş kutusunu aktif et.
            setMoreBoxId(id);   // Hangi daha fazla kutusunun görüneceğini belirtir.
        }, 0);
    }

    // Paylaş kutusunun dışına tıklandığında kutunun kapanması için gerekli fonksiyon tanımlanıyor.
    const handleClickOutsideForShareButton = (event) => {
        if (shareBoxRef.current && !shareBoxRef.current.contains(event.target)) {
            setIsShareBoxVisible(false);
            setShareBoxId(null);
        }
    }

    // Daha fazla kutusunun dışına tıklandığında kutunun kapanması için gerekli fonksiyon tanımlanıyor.
    const handleClickOutsideForMoreButton = (event) => {
        if (moreBoxRef.current && !moreBoxRef.current.contains(event.target)) {
            setIsMoreBoxVisible(false);
            setMoreBoxId(null);
        }
    }

    // Paylaş ve daha fazla kutularının dışına tıklandığında kutuların kapanması için gereki fonksiyonları çağırma işlemini tanımlanıyor.
    useEffect(() => {
        document.addEventListener('click', handleClickOutsideForMoreButton);
        document.addEventListener('click', handleClickOutsideForShareButton);
        return () => {
            document.removeEventListener('click', handleClickOutsideForMoreButton);
            document.removeEventListener('click', handleClickOutsideForShareButton);
        }
    }, []);

    // Video elemanları için Intersection Observer tanımlanıyor
    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.target.tagName.toLowerCase() === 'video') {
                    if (entry.isIntersecting) {
                        entry.target.play();
                    } else {
                        entry.target.pause();
                        entry.target.currentTime = 0;
                    }
                }
            });
        }, options);

        // Sayfadaki tüm videoları gözlemlemeye başla
        document.querySelectorAll('video').forEach(video => {
            observer.observe(video);
        });

        return () => {
            observer.disconnect();
        };
    }, [posts]);

    return (
        // Canvas Container bileşeni tanımlanıyor.
        <div id='canvasContainer' className='canvasContainer w-full h-full flex flex-row gap-4'>
            {/* Sütun sayısına göre her bir sütun tanımlanıyor. */}
            {Array.from({ length: colCount }).map((_, colIndex) => (
                <div key={colIndex} id='canvasCol' className='canvasCol h-full w-full flex flex-col grow gap-4'>
                    {/* Her bir satır tanımlanıyor. */}
                    {posts
                        .filter((_, index) => index % colCount === colIndex) // Resimlerin yan yana bir şekilde sıralı olması için sütunlara sütun sayısı kadar aralıklarla paylaştırılıyor.
                        .map((post) => (
                            // Canvas tanımlanıyor.
                            <div key={post.name} id='canvas' className='canvas w-full'>
                                <Link to={'/post/' + post.id}>
                                    <div className='relative group'>
                                        {/* Canvas görseli tanımlanıyor. */}
                                        <div className='relative w-full overflow-hidden rounded-2xl transition-all duration-300 group-hover:brightness-[.8]'>
                                            {post.type === '3d' ? (
                                                <model-viewer
                                                    src={post.modelUrl}
                                                    alt={post.name}
                                                    auto-rotate
                                                    camera-controls
                                                    touch-action="pan-y pinch-zoom"
                                                    min-camera-orbit="auto auto 5%"
                                                    max-camera-orbit="auto auto 100%"
                                                    interaction-prompt-threshold="0"
                                                    poster={post.url}
                                                    shadow-intensity="1"
                                                    exposure="1"
                                                    style={{ width: '100%', height: '300px' }}
                                                ></model-viewer>
                                            ) : post.type === 'video' ? (
                                                <video 
                                                    src={post.url}
                                                    className='w-full transition-all duration-300 group-hover:scale-105'
                                                    poster={post.thumbnail}
                                                    preload="metadata"
                                                    muted
                                                    loop
                                                    playsInline
                                                />
                                            ) : (
                                                <img draggable='false' src={post.url} alt={post.name} className='transition-all duration-300 group-hover:scale-105' />
                                            )}
                                        </div>
                                        {/* Paylaş ve daha fazla butonları tanımlanıyor. */}
                                        <div className='absolute invisible bottom-3 right-3 flex flex-row gap-2 group-hover:visible'
                                            style={{ visibility: (isMoreBoxVisible && post.url === moreBoxId) || (isShareBoxVisible && post.url === shareBoxId) ? 'visible' : '' }}>
                                            <button 
                                                className='z-10 h-8 w-8 rounded-2xl cursor-pointer hover:brightness-[.9] transition-colors duration-300'
                                                style={{ 
                                                    backgroundColor: theme === 'light' ? 'white' : 'var(--background-primary)',
                                                    color: theme === 'light' ? 'black' : 'white'
                                                }}
                                                onClick={(event) => handleShareButtonClick(event, post.url)}
                                            >
                                                <Icons.faArrowUpFromBracket />
                                            </button>
                                            <button 
                                                className='z-10 h-8 w-8 rounded-2xl cursor-pointer hover:brightness-[.9] transition-colors duration-300'
                                                style={{ 
                                                    backgroundColor: theme === 'light' ? 'white' : 'var(--background-primary)',
                                                    color: theme === 'light' ? 'black' : 'white'
                                                }}
                                                onClick={(event) => handleMoreButtonClick(event, post.url)}
                                            >
                                                <Icons.faEllipsis />
                                            </button>
                                        </div>
                                    </div>

                                    {   // Gönderinin başlığı mevcut ise gönderi başlığı tanımlanıyor.
                                        post.title &&
                                        <p className='text-sm font-medium ml-2 mt-2 mb-1' style={{ color: 'var(--text-primary)' }}>{post.title}</p>
                                    }
                                </Link>
                                {   // Gönderinin başlığı mevcut ise kullanıcı avatarı tanımlanıyor.
                                    post.title &&
                                    <Link to={post.userName}>
                                        <div className={`ml-2 mb-2 flex flex-row items-center gap-2 hover:underline ${post.userName === 'Sponsored' ? 'hidden' : ''}`}>
                                            <img src={post.userAvatar} alt={post.userName} className='h-8' />
                                            <p className='text-sm font-light' style={{ color: 'var(--text-secondary)' }}>{post.userName}</p>
                                        </div>
                                    </Link>
                                }
                            </div>
                        ))}
                </div >
            ))}

            {   // Paylaş kutusu aktif ise paylaş kutusu tanımlanıyor.
                isShareBoxVisible && (
                    <div 
                        ref={shareBoxRef} 
                        className='z-20 absolute font-medium p-2 flex flex-col rounded-2xl shadow-lg transition-colors duration-300'
                        style={{ 
                            top: shareBoxPosition.top, 
                            left: shareBoxPosition.left,
                            backgroundColor: 'var(--background-primary)',
                            color: 'var(--text-primary)',
                            borderColor: 'var(--border-color)'
                        }}
                    >
                        <p className='p-2 cursor-pointer rounded-lg hover:bg-opacity-10 hover:bg-current'>Gönderiyi kopyala</p>
                        <p className='p-2 cursor-pointer rounded-lg hover:bg-opacity-10 hover:bg-current'>WhatsApp</p>
                    </div>
                )
            }

            {   // Daha fazla kutusu aktif ise daha fazla kutusu tanımlanıyor.
                isMoreBoxVisible && (
                    <div 
                        ref={moreBoxRef} 
                        className='z-20 absolute font-medium p-2 flex flex-col rounded-2xl shadow-lg transition-colors duration-300'
                        style={{ 
                            top: moreBoxPosition.top, 
                            left: moreBoxPosition.left,
                            backgroundColor: 'var(--background-primary)',
                            color: 'var(--text-primary)',
                            borderColor: 'var(--border-color)'
                        }}
                    >
                        <p className='p-2 cursor-pointer rounded-lg hover:bg-opacity-10 hover:bg-current'>Gönderiyi kaydet</p>
                        <p className='p-2 cursor-pointer rounded-lg hover:bg-opacity-10 hover:bg-current'>Gönderiyi şikayet et</p>
                    </div>
                )
            }
        </div >
    )
}

export default CanvasContainer;