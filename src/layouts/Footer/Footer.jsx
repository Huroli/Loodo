import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../public/images/loodo-logo-transparent.png';

function Footer() {
    return (
        <footer 
            className="w-full py-12 px-6 md:px-12 mt-12 transition-colors duration-300"
            style={{ 
                backgroundColor: 'var(--background-primary)',
                color: 'var(--text-primary)',
                borderTop: '1px solid var(--border-color)'
            }}
        >
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="col-span-1">
                    <Link to="/">
                        <img src={Logo} alt="Loodo Logo" className="h-12 mb-4" />
                    </Link>
                    <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                        Share your creative content with the world. Join our community of artists and creators.
                    </p>
                </div>

                <div className="col-span-1">
                    <h3 className="font-semibold mb-4">Explore</h3>
                    <ul className="space-y-2">
                        <li>
                            <Link 
                                to="/explore" 
                                className="text-sm hover:text-[#5DE1E6] transition-colors"
                                style={{ color: 'var(--text-secondary)' }}
                            >
                                Discover
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/categories" 
                                className="text-sm hover:text-[#5DE1E6] transition-colors"
                                style={{ color: 'var(--text-secondary)' }}
                            >
                                Categories
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/premium" 
                                className="text-sm hover:text-[#5DE1E6] transition-colors"
                                style={{ color: 'var(--text-secondary)' }}
                            >
                                Premium
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="col-span-1">
                    <h3 className="font-semibold mb-4">Company</h3>
                    <ul className="space-y-2">
                        <li>
                            <Link 
                                to="/about-us" 
                                className="text-sm hover:text-[#5DE1E6] transition-colors"
                                style={{ color: 'var(--text-secondary)' }}
                            >
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/work-with-us" 
                                className="text-sm hover:text-[#5DE1E6] transition-colors"
                                style={{ color: 'var(--text-secondary)' }}
                            >
                                Careers
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/be-producer" 
                                className="text-sm hover:text-[#5DE1E6] transition-colors"
                                style={{ color: 'var(--text-secondary)' }}
                            >
                                Become a Producer
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="col-span-1">
                    <h3 className="font-semibold mb-4">Legal</h3>
                    <ul className="space-y-2">
                        <li>
                            <Link 
                                to="/privacy" 
                                className="text-sm hover:text-[#5DE1E6] transition-colors"
                                style={{ color: 'var(--text-secondary)' }}
                            >
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/terms" 
                                className="text-sm hover:text-[#5DE1E6] transition-colors"
                                style={{ color: 'var(--text-secondary)' }}
                            >
                                Terms of Service
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/cookies" 
                                className="text-sm hover:text-[#5DE1E6] transition-colors"
                                style={{ color: 'var(--text-secondary)' }}
                            >
                                Cookie Policy
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div 
                className="max-w-7xl mx-auto mt-8 pt-8 text-sm text-center"
                style={{ 
                    borderTop: '1px solid var(--border-color)',
                    color: 'var(--text-secondary)'
                }}
            >
                <p>&copy; {new Date().getFullYear()} Loodo. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;