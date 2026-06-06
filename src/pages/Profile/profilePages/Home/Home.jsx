import React from 'react';
import { useSelector } from 'react-redux';
import { postsPrev } from '../../../../components/Posts';
import { useNavigate } from 'react-router-dom';

function Home() {
    const userInformations = useSelector(state => state.app.userInformations);
    const theme = useSelector(state => state.app.theme);
    const navigate = useNavigate();

    const recentPosts = postsPrev.slice(0, 3);
    const totalPosts = postsPrev.length;
    const totalLikes = 1234; // Örnek veri
    const totalViews = 5678; // Örnek veri

    const handlePostClick = (postId) => {
        navigate(`/post/${postId}`);
    };

    const cardStyle = {
        backgroundColor: 'var(--background-primary)',
        color: 'var(--text-primary)',
        borderColor: 'var(--border-color)'
    };

    const activityItemStyle = {
        backgroundColor: theme === 'light' ? '#f9fafb' : 'var(--background-secondary)',
        color: 'var(--text-primary)',
        borderColor: 'var(--border-color)'
    };

    return (
        <div className="p-6 -mx-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div 
                    className="p-6 rounded-xl shadow-sm transition-colors duration-300"
                    style={cardStyle}
                >
                    <h3 className="text-xl font-semibold mb-2">Total Posts</h3>
                    <p className="text-3xl font-bold text-[#5DE1E6]">{totalPosts}</p>
                </div>
                <div 
                    className="p-6 rounded-xl shadow-sm transition-colors duration-300"
                    style={cardStyle}
                >
                    <h3 className="text-xl font-semibold mb-2">Total Likes</h3>
                    <p className="text-3xl font-bold text-[#5DE1E6]">{totalLikes}</p>
                </div>
                <div 
                    className="p-6 rounded-xl shadow-sm transition-colors duration-300"
                    style={cardStyle}
                >
                    <h3 className="text-xl font-semibold mb-2">Total Views</h3>
                    <p className="text-3xl font-bold text-[#5DE1E6]">{totalViews}</p>
                </div>
            </div>

            <div 
                className="p-6 rounded-xl shadow-sm mb-8 transition-colors duration-300"
                style={cardStyle}
            >
                <h2 className="text-2xl font-semibold mb-4 text-[#5DE1E6]">Recent Activity</h2>
                <div className="space-y-4">
                    {recentPosts.map(post => (
                        <div 
                            key={post.id} 
                            className="flex items-center space-x-4 p-4 rounded-lg cursor-pointer transform transition-all duration-300 hover:scale-[1.01] hover:shadow-md"
                            style={activityItemStyle}
                            onClick={() => handlePostClick(post.id)}
                        >
                            <div className="relative w-20 h-20 rounded-lg overflow-hidden">
                                {post.type === 'image' && (
                                    <img 
                                        src={post.url} 
                                        alt={post.name} 
                                        className="w-full h-full object-cover"
                                    />
                                )}
                                {post.type === 'video' && (
                                    <video 
                                        src={post.url} 
                                        className="w-full h-full object-cover"
                                    />
                                )}
                                {post.type === '3d' && (
                                    <model-viewer
                                        src={post.modelUrl}
                                        alt={post.name}
                                        auto-rotate
                                        camera-controls
                                        className="w-full h-full"
                                    ></model-viewer>
                                )}
                                <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                            </div>
                            <div>
                                <h4 className="font-medium" style={{ color: 'var(--text-primary)' }}>{post.title}</h4>
                                <p style={{ color: 'var(--text-secondary)' }} className="text-sm">
                                    Posted by {userInformations.firstName}
                                </p>
                                <p className="text-[#5DE1E6] text-sm mt-1">{post.comments.length} comments</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div 
                className="p-6 rounded-xl shadow-sm transition-colors duration-300"
                style={cardStyle}
            >
                <h2 className="text-2xl font-semibold mb-4 text-[#5DE1E6]">About Me</h2>
                <p style={{ color: 'var(--text-secondary)' }}>
                    {userInformations.firstName} {userInformations.lastName} is a content creator passionate about sharing amazing visual experiences.
                </p>
            </div>
        </div>
    );
}

export default Home;