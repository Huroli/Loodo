import React from 'react';
import { useSelector } from 'react-redux';
import { postsPrev } from '../../../../components/Posts';
import { useNavigate } from 'react-router-dom';

function Favorites() {
    const navigate = useNavigate();
    const theme = useSelector(state => state.app.theme);
    const favoritePosts = postsPrev.slice(0, 6);

    const handlePostClick = (postId) => {
        navigate(`/post/${postId}`);
    };

    const cardStyle = {
        backgroundColor: 'var(--background-primary)',
        color: 'var(--text-primary)',
        borderColor: 'var(--border-color)'
    };

    return (
        <div className="p-6 -mx-6">
            <h2 className="text-2xl font-semibold mb-6 text-[#5DE1E6]">My Favorites</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {favoritePosts.map(post => (
                    <div 
                        key={post.id} 
                        className="rounded-xl shadow-sm overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
                        style={cardStyle}
                        onClick={() => handlePostClick(post.id)}
                    >
                        <div className="relative pb-[56.25%]">
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
                                    <h3 className="font-medium">{post.title}</h3>
                                    <p className="text-sm opacity-90">By {post.userName}</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-4">
                            <div className="flex items-center justify-between text-sm" style={{ color: 'var(--text-secondary)' }}>
                                <span>Type: {post.type}</span>
                                <span>{post.comments.length} comments</span>
                            </div>
                            <div className="mt-2 space-y-1">
                                {post.comments.slice(0, 2).map((comment, index) => (
                                    <p 
                                        key={index} 
                                        className="text-sm italic"
                                        style={{ color: 'var(--text-secondary)' }}
                                    >
                                        "{comment}"
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Favorites;