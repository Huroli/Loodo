import React, { useState } from 'react';
import { postsPrev } from '../../../../components/Posts';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Posts() {
    const userInformations = useSelector(state => state.app.userInformations);
    const theme = useSelector(state => state.app.theme);
    const navigate = useNavigate();
    const [filter, setFilter] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');

    // Filtreleme ve arama fonksiyonu
    const filteredPosts = postsPrev.filter(post => {
        const matchesFilter = filter === 'all' || post.type === filter;
        const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            post.userName.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    const handlePostClick = (postId) => {
        navigate(`/post/${postId}`);
    };

    // İstatistikler
    const stats = {
        images: postsPrev.filter(post => post.type === 'image').length,
        videos: postsPrev.filter(post => post.type === 'video').length,
        models: postsPrev.filter(post => post.type === '3d').length
    };

    const cardStyle = {
        backgroundColor: 'var(--background-primary)',
        color: 'var(--text-primary)',
        borderColor: 'var(--border-color)'
    };

    const inputStyle = {
        backgroundColor: 'var(--background-secondary)',
        color: 'var(--text-primary)',
        borderColor: 'var(--border-color)'
    };

    return (
        <div className="p-6 -mx-12">
            {/* İstatistikler */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div 
                    className="p-6 rounded-xl shadow-sm transition-colors duration-300"
                    style={cardStyle}
                >
                    <h3 className="text-xl font-semibold mb-2">Images</h3>
                    <p className="text-3xl font-bold text-[#5DE1E6]">{stats.images}</p>
                </div>
                <div 
                    className="p-6 rounded-xl shadow-sm transition-colors duration-300"
                    style={cardStyle}
                >
                    <h3 className="text-xl font-semibold mb-2">Videos</h3>
                    <p className="text-3xl font-bold text-[#5DE1E6]">{stats.videos}</p>
                </div>
                <div 
                    className="p-6 rounded-xl shadow-sm transition-colors duration-300"
                    style={cardStyle}
                >
                    <h3 className="text-xl font-semibold mb-2">3D Models</h3>
                    <p className="text-3xl font-bold text-[#5DE1E6]">{stats.models}</p>
                </div>
            </div>

            {/* Filtreler */}
            <div className="mb-6 flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="flex gap-4">
                    <input
                        type="text"
                        placeholder="Search posts..."
                        className="px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5DE1E6] transition-colors duration-300"
                        style={inputStyle}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <select
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        className="px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5DE1E6] transition-colors duration-300"
                        style={inputStyle}
                    >
                        <option value="all">All Types</option>
                        <option value="image">Images</option>
                        <option value="video">Videos</option>
                        <option value="3d">3D Models</option>
                    </select>
                </div>
            </div>

            {/* Gönderiler Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {filteredPosts.map(post => (
                    <div 
                        key={post.id} 
                        className="rounded-xl shadow-sm overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
                        style={cardStyle}
                        onClick={() => handlePostClick(post.id)}
                    >
                        <div className="relative pb-[100%]">
                            {post.type === 'image' && (
                                <img 
                                    src={post.url} 
                                    alt={post.name} 
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            )}
                            {post.type === 'video' && (
                                <video 
                                    src={post.url}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            )}
                            {post.type === '3d' && (
                                <model-viewer
                                    src={post.modelUrl}
                                    alt={post.name}
                                    auto-rotate
                                    camera-controls
                                    className="absolute inset-0 w-full h-full"
                                ></model-viewer>
                            )}
                            <div 
                                className="absolute inset-0 bg-gradient-to-t opacity-0 hover:opacity-100 transition-opacity duration-300"
                                style={{
                                    backgroundImage: theme === 'light' 
                                        ? 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)'
                                        : 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)'
                                }}
                            >
                                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                                    <h4 className="font-medium truncate">{post.title}</h4>
                                    <p className="text-sm opacity-90">{post.comments.length} comments</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Posts;