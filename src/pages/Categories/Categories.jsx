import { useState } from 'react';
import { Link } from 'react-router-dom';
import { postsPrev } from '../../components/Posts';
import '@google/model-viewer';

function Categories() {
    // Filter posts by type
    const images = postsPrev.filter(post => post.type === 'image');
    const videos = postsPrev.filter(post => post.type === 'video' && !post.title.includes('Sponsored'));
    const models = postsPrev.filter(post => post.type === '3d');

    // State for active category
    const [activeCategory, setActiveCategory] = useState('images');

    // Function to render posts based on type
    const renderPosts = (posts) => {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
                {posts.map((post) => (
                    <Link to={`/post/${post.id}`} key={post.id} className="rounded-2xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-[1.02]" style={{ backgroundColor: 'var(--background-secondary)' }}>
                        <div className="relative group">
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
                                    style={{ width: '100%', height: '300px' }}
                                    environment-image="neutral"
                                    camera-orbit="45deg 55deg 2.5m"
                                    interaction-prompt="none"
                                    min-camera-orbit="auto auto 5%"
                                    max-camera-orbit="auto auto 100%"
                                ></model-viewer>
                            ) : post.type === 'video' ? (
                                <div className="relative w-full h-[300px] group">
                                    <video
                                        src={post.url}
                                        className="w-full h-full object-cover"
                                        muted
                                        loop
                                        autoPlay
                                        playsInline
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                                </div>
                            ) : (
                                <img 
                                    src={post.url} 
                                    alt={post.name} 
                                    className="w-full h-[300px] object-cover transition-all duration-300 group-hover:scale-105"
                                />
                            )}
                        </div>
                        <div className="p-4">
                            <h3 className="text-lg font-medium mb-2" style={{ color: 'var(--text-primary)' }}>{post.title}</h3>
                            <div className="flex items-center">
                                <img src={post.userAvatar} alt={post.userName} className="w-8 h-8 rounded-full mr-2" />
                                <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>{post.userName}</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        );
    };

    return (
        <section id='categories' className='categories w-full min-h-screen rounded-2xl' style={{ backgroundColor: 'var(--background-primary)' }}>
            <div className="flex rounded-2xl overflow-hidden" style={{ backgroundColor: 'var(--background-primary)' }}>
                {/* Category Navigation - Left Side */}
                <div className="w-48 shadow-sm min-h-screen" style={{ backgroundColor: 'var(--background-primary)' }}>
                    <h2 className="text-xl font-medium px-6 py-4 border-b" style={{ color: 'var(--text-primary)', borderColor: 'var(--border-color)' }}>Kategoriler</h2>
                    <div className="flex flex-col">
                        <button
                            onClick={() => setActiveCategory('images')}
                            className={`py-4 px-6 text-left font-medium text-sm border-l-4 transition-all duration-300 ${
                                activeCategory === 'images'
                                    ? 'border-[#5DE1E6] text-[#5DE1E6] bg-[#5DE1E6]/5'
                                    : 'border-transparent hover:bg-opacity-5'
                            }`}
                            style={{ 
                                color: activeCategory !== 'images' ? 'var(--text-secondary)' : undefined,
                                backgroundColor: activeCategory !== 'images' ? 'var(--background-primary)' : undefined
                            }}
                        >
                            Images ({images.length})
                        </button>
                        <button
                            onClick={() => setActiveCategory('videos')}
                            className={`py-4 px-6 text-left font-medium text-sm border-l-4 transition-all duration-300 ${
                                activeCategory === 'videos'
                                    ? 'border-[#5DE1E6] text-[#5DE1E6] bg-[#5DE1E6]/5'
                                    : 'border-transparent hover:bg-opacity-5'
                            }`}
                            style={{ 
                                color: activeCategory !== 'videos' ? 'var(--text-secondary)' : undefined,
                                backgroundColor: activeCategory !== 'videos' ? 'var(--background-primary)' : undefined
                            }}
                        >
                            Videos ({videos.length})
                        </button>
                        <button
                            onClick={() => setActiveCategory('3d')}
                            className={`py-4 px-6 text-left font-medium text-sm border-l-4 transition-all duration-300 ${
                                activeCategory === '3d'
                                    ? 'border-[#5DE1E6] text-[#5DE1E6] bg-[#5DE1E6]/5'
                                    : 'border-transparent hover:bg-opacity-5'
                            }`}
                            style={{ 
                                color: activeCategory !== '3d' ? 'var(--text-secondary)' : undefined,
                                backgroundColor: activeCategory !== '3d' ? 'var(--background-primary)' : undefined
                            }}
                        >
                            3D Models ({models.length})
                        </button>
                    </div>
                </div>

                {/* Content Area */}
                <div className="flex-1" style={{ backgroundColor: 'var(--background-primary)' }}>
                    {activeCategory === 'images' && renderPosts(images)}
                    {activeCategory === 'videos' && renderPosts(videos)}
                    {activeCategory === '3d' && renderPosts(models)}
                </div>
            </div>
        </section>
    );
}

export default Categories;