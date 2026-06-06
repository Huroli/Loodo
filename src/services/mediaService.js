// Medya bilgilerini almak için backend'e gönderilecek olan api isteğinin url adresi tanımlanıyor.
const API_URL = 'http://localhost:3000/api/media';

// Yeni medya oluşturmak için gerekli olan api iletişimini sağlayacak fonksiyon tanımlanıyor.
export const uploadMedia = async (mediaFile, mediaContent, userInformations) => {



    // Gelen medya özellikleri bir FormData değişkenine tanımlanıyor.
    const formData = new FormData();
    formData.append('file', mediaFile.file);
    formData.append('uploadedBy', userInformations._id);
    formData.append('title', mediaContent.title);
    formData.append('metadata', mediaContent.metadata);
    formData.append('description', mediaContent.description);
    formData.append('tags', mediaContent.tags);
    formData.append('categoryId', mediaContent.categories);

    try {
        const response = await fetch(`${API_URL}/upload-media`, {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Media upload failed.');
        }

        const result = await response.json();
        console.log('Medya uploaded:', result);
    } catch (error) {
        console.error('Media upload error:', error.message);
    }
};