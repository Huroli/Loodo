import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Icons from '../../components/Icons';
import { postsPrev } from '../../components/Posts';
import CanvasContainer from '../../components/CanvasContainer/CanvasContainer';
import '@google/model-viewer';

function Post() {
    // useParams hook'u kullanılarak url üzerindeki gönderinin id değerine erişiliyor ve gerekli tanımlama yapılıyor.
    const { id } = useParams();

    // Yönlendirme işlemleri için gerekli olan useNavigate hook'u tanımlanıyor.
    const navigate = useNavigate();

    // Sayfa her yüklendiğinde scroll'un en üste kayması için gerekli işlem tanımlanıyor.
    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, [id]);

    const post = postsPrev[id - 1];

    // Post bulunamadıysa ana sayfaya yönlendir
    if (!post) {
        navigate('/');
        return null;
    }

    const theme = useSelector(state => state.app.theme);

    return (
        // Post sayfası tanımlanıyor.
        <section id='post' className='post w-full min-h-full flex flex-col gap-8 items-center'>
            <div id='selectedPost' className='selectedPost relative w-[50rem] max-h-[70vh] flex flex-row gap-8'>
                <Icons.faArrowLeft 
                    onClick={() => navigate(-1)} 
                    className='absolute -left-12 p-3 cursor-pointer rounded-full transition-all duration-300 hover:shadow-md' 
                    style={{ 
                        color: 'var(--text-primary)',
                        '&:hover': {
                            backgroundColor: 'var(--background-primary)'
                        }
                    }}
                />
                {/* Gönderi tanımlanıyor. */}
                {post.type === '3d' ? (
                    <model-viewer
                        src={post.modelUrl}
                        alt={post.name}
                        auto-rotate
                        camera-controls
                        touch-action="pan-y pinch-zoom"
                        poster={post.url}
                        shadow-intensity="1"
                        exposure="1"
                        style={{ width: '78rem', height: '30rem' }}
                        className="rounded-2xl"
                        environment-image="neutral"
                        camera-orbit="45deg 55deg 2.5m"
                        interaction-prompt="none"
                    ></model-viewer>
                ) : post.type === 'video' ? (
                    <video
                        src={post.url}
                        className="max-w-[23rem] max-h-[70vh] rounded-2xl shadow-md"
                        controls
                        autoPlay
                        muted
                        loop
                    />
                ) : (
                    <img draggable='false' src={post.url} alt={post.name} className='max-w-[23rem] max-h-[70vh] rounded-2xl shadow-md' />
                )}
                {/* Gönderi bilgileri tanımlanıyor. */}
                <div 
                    className='text-2xl font-medium text-center w-full p-8 flex flex-col justify-between rounded-2xl shadow-md transition-colors duration-300'
                    style={{ 
                        backgroundColor: 'var(--background-primary)',
                        color: 'var(--text-primary)',
                        borderColor: 'var(--border-color)'
                    }}
                >
                    <div>
                        <h1>{post.title}</h1>

                        {/* Yorumlar bölümü */}
                        {post.comments && (
                            <div 
                                className='mt-6 mb-6 rounded-lg border-t pt-4'
                                style={{ borderColor: 'var(--border-color)' }}
                            >
                                <h2 className='text-lg font-medium mb-6'>Comments</h2>
                                <div className='flex flex-col gap-3'>
                                    {post.comments.map((comment, index) => (
                                        <div 
                                            key={index} 
                                            className='flex flex-row gap-2 justify-start items-center text-sm text-left rounded-lg'
                                            style={{ color: 'var(--text-secondary)' }}
                                        >
                                            <img src={post.userAvatar} alt={post.userName} className='h-8' />
                                            <p>{comment}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Gönderiyi paylaşan kullanıcının bilgileri */}
                    <div>
                        <div className='text-sm rounded-2xl mb-4 flex flex-col gap-4 items-end'>
                            <div className='relative w-full h-[3.3rem]'>
                                <input 
                                    type='text' 
                                    className='p-4 w-full h-[3.3rem] rounded-2xl resize-none transition-all duration-300 pr-24' 
                                    style={{
                                        backgroundColor: 'var(--background-secondary)',
                                        color: 'var(--text-primary)',
                                        border: '1px solid var(--border-color)'
                                    }}
                                    name="" 
                                    id="" 
                                    placeholder='Leave a comment...'
                                />
                                <button className='absolute right-2 top-1/2 -translate-y-1/2 bg-[#5DE1E6] w-20 text-white px-4 py-2 rounded-2xl hover:bg-[#0098B3] transition-all duration-300'>Post</button>
                            </div>
                        </div>
                        <div 
                            className='border-t pt-4'
                            style={{ borderColor: 'var(--border-color)' }}
                        >
                            <Link to={post.userName}>
                                <div className='flex flex-row items-center gap-2 hover:underline'>
                                    <img src={post.userAvatar} alt={post.userName} className='h-8' />
                                    <p 
                                        className='text-sm font-light'
                                        style={{ color: 'var(--text-secondary)' }}
                                    >
                                        {post.userName}
                                    </p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* Benzer gönderiler tanımlanıyor. */}
            <CanvasContainer />
        </section>
    )
}

export default Post;