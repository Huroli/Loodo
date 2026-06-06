import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { uploadMedia } from '../../services/mediaService';
import Icons from '../../components/Icons';

function UploadMedia() {
    // Redux store'dan gerekli state useSelector ile alınıyor ve tanımlanıyor.
    const userInformations = useSelector(state => state.app.userInformations);

    const [mediaFile, setMediaFile] = useState(null);
    const [mediaContent, setMediaContent] = useState({ title: null, description: null, metadata: [], tags: [], categories: [] });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log(mediaFile);
    }, [mediaFile])

    // Yönlendirme işlemleri için gerekli olan useNavigate hook'u tanımlanıyor.
    const navigate = useNavigate();

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setMediaFile({ file: selectedFile });
            setMediaContent(prevState => ({ ...prevState, metadata: selectedFile }));
        }
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setMediaContent(prevState => ({ ...prevState, [name]: value }));
    }

    const handleDrop = (e) => {
        e.preventDefault();
        const droppedFile = e.dataTransfer.files[0];
        if (droppedFile) {
            setMediaFile({ file: droppedFile });
        }
    }

    const handleDragOver = (e) => {
        e.preventDefault();
    }

    const handleRemoveMedia = () => {
        setMediaFile(null);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // Doğrulama işlemi tanımlanıyor.
        if (!mediaFile || !mediaContent.title || !mediaContent.description) {
            setError('All fields are required.');
            return;
        }
        setError(null);

        // Tags input alanında değer kalmış ise bunu da medya içeriğine ekleyen işlem tanımlanıyor.
        const tagsInput = document.querySelector('input[name="tags"]');
        if (tagsInput.value.trim()) {
            const newTag = tagsInput.value.trim();
            if (!mediaContent.tags.includes(newTag)) {
                setMediaContent(prevState => ({ ...prevState, tags: [...prevState.tags, newTag] }));
            }
            tagsInput.value = '';
        }

        setIsSubmitted(true);
    };

    // Form onaylandığında çalışacak işlem tanımlanıyor.
    useEffect(() => {
        if (isSubmitted) {
            // isSubmitted true ise medyanın backend'e gönderileceği ve kullanıcının bir önceki sayfaya yönlendirileceği işlem tanımlanıyor.
            uploadMedia(mediaFile, mediaContent, userInformations)
                .then(() => {
                    setTimeout(() => navigate(-1), 2000);
                })
                .catch((err) => {
                    console.error(err);
                    setError('An error occurred while uploading the media.');
                });
        }
    }, [isSubmitted]);

    const triggerFileInput = () => {
        document.getElementById('mediaUpload').click();
    }

    const handleTagInputKeyDown = (e) => {
        if (e.key === 'Enter' || e.key === ',') {
            e.preventDefault();
            const newTag = e.target.value.trim();
            if (newTag && !mediaContent.tags.includes(newTag)) {
                setMediaContent(prevState => ({ ...prevState, tags: [...prevState.tags, newTag] }));
                e.target.value = '';
            }
        }
    }

    const handleRemoveTag = (tagToRemove) => {
        setMediaContent(prevState => ({ ...prevState, tags: prevState.tags.filter(tag => tag !== tagToRemove) }));
    }

    return (
        // Create Media sayfası tanımlanıyor.
        <section id='createMedia' className='createMedia w-full'>
            {isSubmitted ? (
                <div 
                    className='w-[38rem] m-auto p-4 rounded-xl shadow-md flex flex-col items-center transition-colors duration-300'
                    style={{ 
                        backgroundColor: 'var(--background-primary)',
                        color: 'var(--text-primary)'
                    }}
                >
                    <p>Media successfully uploaded! Redirecting...</p>
                </div>
            ) : (
                <form 
                    onSubmit={handleSubmit} 
                    className='w-[38rem] m-auto p-4 rounded-xl shadow-md flex flex-col relative transition-colors duration-300'
                    style={{ 
                        backgroundColor: 'var(--background-primary)',
                        color: 'var(--text-primary)'
                    }}
                >
                    <Icons.faArrowLeft 
                        onClick={() => navigate(-1)} 
                        className='absolute top-0 -left-12 p-3 cursor-pointer rounded-full transition-all duration-300 hover:shadow-md' 
                        style={{ 
                            color: 'var(--text-secondary)',
                            '&:hover': {
                                backgroundColor: 'var(--background-primary)'
                            }
                        }}
                    />
                    <div 
                        className='p-12 flex flex-col justify-center items-center border-2 border-dashed rounded-lg cursor-pointer duration-300 transition group'
                        style={{ 
                            borderColor: 'var(--border-color)',
                            color: 'var(--text-secondary)'
                        }}
                        onClick={triggerFileInput}
                        onDrop={handleDrop}
                        onDragOver={handleDragOver}
                    >
                        <span className='duration-300 transition group-hover:text-[#5DE1E6]'>Click or drag and drop any media to upload</span>
                        <input id='mediaUpload' type='file' accept='image/*,video/*' className='hidden' onChange={handleFileChange} />
                    </div>
                    {mediaFile && (
                        <>
                            <div className='mt-4'>
                                <h2 className='text-lg font-medium'>Preview:</h2>
                                <div 
                                    className='p-3 border rounded-lg'
                                    style={{ borderColor: 'var(--border-color)' }}
                                >
                                    {mediaFile.file.type.startsWith('image') && <img src={URL.createObjectURL(mediaFile.file)} alt='Preview' className='w-auto h-80 m-auto rounded-lg shadow-md' />}
                                    {mediaFile.file.type.startsWith('video') && <video controls src={URL.createObjectURL(mediaFile.file)} className='w-auto h-80 m-auto rounded-lg shadow-md' />}
                                </div>
                            </div>

                            <div className='mt-4'>
                                <h2 className='text-lg font-medium'>Content:</h2>
                                <div 
                                    className='flex flex-col gap-4 p-3 border rounded-lg'
                                    style={{ borderColor: 'var(--border-color)' }}
                                >
                                    <input 
                                        type="text" 
                                        name='title' 
                                        placeholder='Title' 
                                        className='px-4 py-2 w-full border rounded-lg focus:outline-[#5DE1E6] transition-colors duration-300'
                                        style={{ 
                                            backgroundColor: 'var(--background-secondary)',
                                            color: 'var(--text-primary)',
                                            borderColor: 'var(--border-color)'
                                        }}
                                        onChange={handleInputChange} 
                                    />
                                    <input 
                                        type="text" 
                                        name='description' 
                                        placeholder='Description' 
                                        className='px-4 py-2 w-full border rounded-lg focus:outline-[#5DE1E6] transition-colors duration-300'
                                        style={{ 
                                            backgroundColor: 'var(--background-secondary)',
                                            color: 'var(--text-primary)',
                                            borderColor: 'var(--border-color)'
                                        }}
                                        onChange={handleInputChange} 
                                    />
                                    <input 
                                        type="text" 
                                        name='tags' 
                                        placeholder='Tags' 
                                        className='px-4 py-2 w-full border rounded-lg focus:outline-[#5DE1E6] transition-colors duration-300'
                                        style={{ 
                                            backgroundColor: 'var(--background-secondary)',
                                            color: 'var(--text-primary)',
                                            borderColor: 'var(--border-color)'
                                        }}
                                        onKeyDown={handleTagInputKeyDown} 
                                    />
                                    <div className={`flex flex-wrap gap-2 ${mediaContent.tags == '' ? 'hidden' : 'block'}`}>
                                        {mediaContent.tags.map((tag, index) => (
                                            <div 
                                                key={index} 
                                                onClick={() => handleRemoveTag(tag)} 
                                                className='px-2 py-1 flex rounded-lg items-center cursor-pointer transition duration-300 hover:text-white hover:bg-red-600'
                                                style={{ backgroundColor: 'var(--background-secondary)' }}
                                            >
                                                {tag}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                    {error && <p className='mt-4 text-red-500'>{error}</p>}
                    <div className='mt-4 flex flex-row justify-between'>
                        <button type='button' onClick={handleRemoveMedia} className={`ml-2 text-xl text-red-500 duration-300 transition hover:text-red-600 ${!mediaFile && 'invisible'}`}><Icons.faTrashCan /></button>
                        <button type='submit' className={`px-4 py-2 rounded-lg duration-300 transition ${mediaFile ? 'bg-[#5DE1E6] text-white hover:bg-[#0098B3]' : 'bg-gray-200 text-gray-500 cursor-not-allowed'}`} disabled={!mediaFile}>Submit</button>
                    </div>
                </form>
            )}
        </section>
    )
}

export default UploadMedia;