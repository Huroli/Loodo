import React from 'react';
import { useSelector } from 'react-redux';
import { postsPrev } from '../../../../components/Posts';
import { useNavigate } from 'react-router-dom';

function Gallery() {
    const navigate = useNavigate();
    const theme = useSelector(state => state.app.theme);
    // Sadece image tipindeki gönderileri filtrele
    const imageOnlyPosts = postsPrev.filter(post => post.type === 'image');

    const handleImageClick = (postId) => {
        navigate(`/post/${postId}`);
    };

    return (
        <div className="p-6 -mx-6">
            <h2 className="text-2xl font-semibold mb-6 text-[#5DE1E6]">My Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {imageOnlyPosts.map(post => (
                    <div 
                        key={post.id} 
                        className="relative group cursor-pointer transform transition-all duration-300 hover:scale-[1.02]"
                        onClick={() => handleImageClick(post.id)}
                    >
                        <img 
                            src={post.url} 
                            alt={post.name} 
                            className="w-full h-64 object-cover rounded-lg shadow-sm"
                            style={{
                                borderColor: 'var(--border-color)'
                            }}
                        />
                        <div 
                            className="absolute inset-0 bg-gradient-to-t opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
                            style={{
                                backgroundImage: theme === 'light' 
                                    ? 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)'
                                    : 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)'
                            }}
                        >
                            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                                <h3 className="font-medium truncate">{post.title}</h3>
                                <p className="text-sm opacity-90">{post.comments.length} comments</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Gallery;