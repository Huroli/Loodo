import React from 'react';
import { useSelector } from 'react-redux';
import { postsPrev } from '../../../../components/Posts';

function About() {
    const userInformations = useSelector(state => state.app.userInformations);
    const theme = useSelector(state => state.app.theme);

    // İstatistikler için örnek veriler
    const stats = {
        totalPosts: postsPrev.length,
        images: postsPrev.filter(post => post.type === 'image').length,
        videos: postsPrev.filter(post => post.type === 'video').length,
        models: postsPrev.filter(post => post.type === '3d').length,
        followers: 1234,
        following: 567
    };

    const cardStyle = {
        backgroundColor: 'var(--background-primary)',
        color: 'var(--text-primary)',
        borderColor: 'var(--border-color)'
    };

    return (
        <div className="p-6 -mx-6 space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                <div 
                    className="p-4 rounded-xl shadow-sm transition-colors duration-300"
                    style={cardStyle}
                >
                    <h4 className="text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>Total Posts</h4>
                    <p className="text-2xl font-bold text-[#5DE1E6]">{stats.totalPosts}</p>
                </div>
                <div 
                    className="p-4 rounded-xl shadow-sm transition-colors duration-300"
                    style={cardStyle}
                >
                    <h4 className="text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>Images</h4>
                    <p className="text-2xl font-bold text-[#5DE1E6]">{stats.images}</p>
                </div>
                <div 
                    className="p-4 rounded-xl shadow-sm transition-colors duration-300"
                    style={cardStyle}
                >
                    <h4 className="text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>Videos</h4>
                    <p className="text-2xl font-bold text-[#5DE1E6]">{stats.videos}</p>
                </div>
                <div 
                    className="p-4 rounded-xl shadow-sm transition-colors duration-300"
                    style={cardStyle}
                >
                    <h4 className="text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>3D Models</h4>
                    <p className="text-2xl font-bold text-[#5DE1E6]">{stats.models}</p>
                </div>
                <div 
                    className="p-4 rounded-xl shadow-sm transition-colors duration-300"
                    style={cardStyle}
                >
                    <h4 className="text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>Followers</h4>
                    <p className="text-2xl font-bold text-[#5DE1E6]">{stats.followers}</p>
                </div>
                <div 
                    className="p-4 rounded-xl shadow-sm transition-colors duration-300"
                    style={cardStyle}
                >
                    <h4 className="text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>Following</h4>
                    <p className="text-2xl font-bold text-[#5DE1E6]">{stats.following}</p>
                </div>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Personal Info */}
                <div 
                    className="lg:col-span-2 rounded-xl shadow-sm overflow-hidden transition-colors duration-300"
                    style={cardStyle}
                >
                    <div className="p-6">
                        <h2 className="text-2xl font-semibold mb-6">Personal Information</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <p className="text-sm mb-1" style={{ color: 'var(--text-secondary)' }}>First Name</p>
                                <p className="text-lg font-medium">{userInformations.firstName}</p>
                            </div>
                            <div>
                                <p className="text-sm mb-1" style={{ color: 'var(--text-secondary)' }}>Last Name</p>
                                <p className="text-lg font-medium">{userInformations.lastName}</p>
                            </div>
                            <div>
                                <p className="text-sm mb-1" style={{ color: 'var(--text-secondary)' }}>Nickname</p>
                                <p className="text-lg font-medium">{userInformations.nickname}</p>
                            </div>
                            <div>
                                <p className="text-sm mb-1" style={{ color: 'var(--text-secondary)' }}>Email</p>
                                <p className="text-lg font-medium">{userInformations.email}</p>
                            </div>
                        </div>

                        <div 
                            className="mt-6 pt-6 border-t"
                            style={{ borderColor: 'var(--border-color)' }}
                        >
                            <h3 className="text-xl font-semibold mb-4">Bio</h3>
                            <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                                Creative content producer passionate about sharing visual experiences. 
                                Specializing in photography, videography, and 3D modeling. With years of experience
                                in digital content creation, I strive to push creative boundaries and inspire others
                                through my work.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Skills & Contact */}
                <div className="space-y-6">
                    <div 
                        className="rounded-xl shadow-sm overflow-hidden transition-colors duration-300"
                        style={cardStyle}
                    >
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-4">Skills</h3>
                            <div className="flex flex-wrap gap-2">
                                {[
                                    'Photography',
                                    'Videography',
                                    '3D Modeling',
                                    'Digital Art',
                                    'Motion Graphics',
                                    'Visual Effects',
                                    'Color Grading',
                                    'Composition'
                                ].map((skill) => (
                                    <span 
                                        key={skill}
                                        className="px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300"
                                        style={{
                                            backgroundColor: 'var(--background-secondary)',
                                            color: 'var(--text-primary)'
                                        }}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div 
                        className="rounded-xl shadow-sm overflow-hidden transition-colors duration-300"
                        style={cardStyle}
                    >
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-4">Contact</h3>
                            <div className="space-y-4">
                                <div>
                                    <p className="text-sm mb-1" style={{ color: 'var(--text-secondary)' }}>Business Email</p>
                                    <p className="font-medium text-[#5DE1E6]">{userInformations.email}</p>
                                </div>
                                <div>
                                    <p className="text-sm mb-1" style={{ color: 'var(--text-secondary)' }}>Location</p>
                                    <p className="font-medium">Istanbul, Turkey</p>
                                </div>
                                <div>
                                    <p className="text-sm mb-1" style={{ color: 'var(--text-secondary)' }}>Member Since</p>
                                    <p className="font-medium">January 2024</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;