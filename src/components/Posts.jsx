import defaultUser from '../assets/images/default-user.png'
import image1 from '../assets/images/1.jpg'
import image2 from '../assets/images/2.jpg'
import image3 from '../assets/images/3.jpg'
import image4 from '../assets/images/4.jpg'
import image5 from '../assets/images/5.jpg'
import image6 from '../assets/images/6.jpg'
import image7 from '../assets/images/7.jpg'
import image8 from '../assets/images/8.jpg'
import image9 from '../assets/images/9.jpg'
import image10 from '../assets/images/10.jpg'
import image11 from '../assets/images/11.jpg'
import image12 from '../assets/images/12.jpg'
import image13 from '../assets/images/13.jpg'
import image14 from '../assets/images/14.jpg'
import image15 from '../assets/images/15.jpg'
import image16 from '../assets/images/16.jpg'
import image17 from '../assets/images/17.jpg'
import image18 from '../assets/images/18.jpg'
import image19 from '../assets/images/19.jpg'
import image20 from '../assets/images/20.jpg'
import image21 from '../assets/images/21.jpg'
import image22 from '../assets/images/22.jpg'
import image23 from '../assets/images/23.jpg'
import image24 from '../assets/images/24.jpg'
import image25 from '../assets/images/25.jpg'
import image26 from '../assets/images/26.jpeg'
import image27 from '../assets/images/27.jpeg'
import image28 from '../assets/images/28.jpeg'
import image29 from '../assets/images/29.jpeg'
import image30 from '../assets/images/30.jpeg'
import image31 from '../assets/images/31.jpeg'
import image32 from '../assets/images/32.jpeg'
import image33 from '../assets/images/33.jpeg'
import image34 from '../assets/images/34.jpeg'
import image35 from '../assets/images/35.jpeg'
import image36 from '../assets/images/36.jpeg'
import image37 from '../assets/images/37.jpeg'
import image38 from '../assets/images/38.jpeg'
import image39 from '../assets/images/39.jpeg'
import image40 from '../assets/images/40.jpeg'
import image41 from '../assets/images/41.jpeg'
import image42 from '../assets/images/42.jpeg'
import image43 from '../assets/images/43.jpeg'
import image44 from '../assets/images/44.jpeg'
import image45 from '../assets/images/45.jpeg'
import image46 from '../assets/images/46.jpeg'
import image47 from '../assets/images/47.jpeg'
import image48 from '../assets/images/48.jpeg'
import image49 from '../assets/images/49.jpeg'
import image50 from '../assets/images/50.jpeg'

import video1 from '../assets/videos/41.mp4'
import video2 from '../assets/videos/42.mp4'
import video3 from '../assets/videos/43.mp4'
import video4 from '../assets/videos/48.mp4'
import video5 from '../assets/videos/49.mp4'

import model1 from '../assets/3d/mc-laren/source/1.glb'
import model2 from '../assets/3d/apple-vision-pro-dexton/source/2.glb'
import model3 from '../assets/3d/infernus-deadlock-hero-model/source/3.glb'
import model4 from '../assets/3d/sneakers-seen/source/4.glb'

// Model-viewer bileşenini import ediyoruz
import '@google/model-viewer'

// Gönderiler statik bir dizi olarak tanımlanıyor. Daha sonra dinamik bir yapıya çevrilecek.
const postsPrev = [
    { id: 1, name: 'Image 1', url: image1, type: 'image', title: 'First Image', userName: 'User1', userAvatar: defaultUser, comments: ['Amazing shot!', 'Love the composition'] },
    { id: 2, name: 'Image 2', url: image2, type: 'image', title: 'Second Image', userName: 'User2', userAvatar: defaultUser, comments: ['Beautiful colors', 'Where was this taken?'] },
    { id: 3, name: 'Image 3', url: image3, type: 'image', title: 'Third Image', userName: 'User3', userAvatar: defaultUser, comments: ['Stunning view!', 'This is incredible'] },
    { id: 4, name: 'Image 4', url: image4, type: 'image', title: 'Fourth Image', userName: 'User4', userAvatar: defaultUser, comments: ['Perfect timing', 'Great shot'] },
    { id: 5, name: 'Image 5', url: image5, type: 'image', title: 'Fifth Image', userName: 'User5', userAvatar: defaultUser, comments: ['Love this perspective', 'Excellent work'] },
    { id: 6, name: 'Image 6', url: image6, type: 'image', title: 'Sixth Image', userName: 'User6', userAvatar: defaultUser, comments: ['This is fantastic!', 'Keep up the great work'] },
    { id: 7, name: 'Image 7', url: image7, type: 'image', title: 'Seventh Image', userName: 'User7', userAvatar: defaultUser, comments: ['Absolutely gorgeous', 'What camera did you use?'] },
    { id: 8, name: 'Image 8', url: image8, type: 'image', title: 'Eighth Image', userName: 'User8', userAvatar: defaultUser, comments: ['Incredible moment captured', 'This deserves more likes'] },
    { id: 9, name: 'Image 9', url: image9, type: 'image', title: 'Ninth Image', userName: 'User9', userAvatar: defaultUser, comments: ['Simply beautiful', 'Amazing work'] },
    { id: 10, name: 'Image 10', url: image10, type: 'image', title: 'Tenth Image', userName: 'User10', userAvatar: defaultUser, comments: ['This is inspiring', 'Wonderful composition'] },
    { id: 11, name: 'Image 11', url: image11, type: 'image', title: 'Eleventh Image', userName: 'User11', userAvatar: defaultUser, comments: ['Brilliant shot', 'The lighting is perfect'] },
    { id: 12, name: 'Image 12', url: image12, type: 'image', title: 'Twelfth Image', userName: 'User12', userAvatar: defaultUser, comments: ['Outstanding work', 'Love the details'] },
    { id: 13, name: 'Image 13', url: image13, type: 'image', title: 'Thirteenth Image', userName: 'User13', userAvatar: defaultUser, comments: ['This is amazing', 'Such talent!'] },
    { id: 14, name: 'Image 14', url: image14, type: 'image', title: 'Fourteenth Image', userName: 'User14', userAvatar: defaultUser, comments: ['Fantastic shot', 'Great eye for detail'] },
    { id: 15, name: 'Image 15', url: image15, type: 'image', title: 'Fifteenth Image', userName: 'User15', userAvatar: defaultUser, comments: ['Beautiful capture', 'Love the mood'] },
    { id: 16, name: 'Image 16', url: image16, type: 'image', title: 'Sixteenth Image', userName: 'User16', userAvatar: defaultUser, comments: ['Incredible perspective', 'Well done!'] },
    { id: 17, name: 'Image 17', url: image17, type: 'image', title: 'Seventeenth Image', userName: 'User17', userAvatar: defaultUser, comments: ['Masterpiece', 'This is art'] },
    { id: 18, name: 'Image 18', url: image18, type: 'image', title: 'Eighteenth Image', userName: 'User18', userAvatar: defaultUser, comments: ['Stunning work', 'Love the colors'] },
    { id: 19, name: 'Image 19', url: image19, type: 'image', title: 'Nineteenth Image', userName: 'User19', userAvatar: defaultUser, comments: ['Breathtaking', 'Perfect shot'] },
    { id: 20, name: 'Image 20', url: image20, type: 'image', title: 'Twentieth Image', userName: 'User20', userAvatar: defaultUser, comments: ['This is incredible', 'Amazing talent'] },
    { id: 21, name: 'Image 21', url: image21, type: 'image', title: 'Twenty-First Image', userName: 'User21', userAvatar: defaultUser, comments: ['Exceptional work', 'Love the composition'] },
    { id: 22, name: 'Image 22', url: image22, type: 'image', title: 'Twenty-Second Image', userName: 'User22', userAvatar: defaultUser, comments: ['Brilliant capture', 'This is beautiful'] },
    { id: 23, name: 'Image 23', url: image23, type: 'image', title: 'Twenty-Third Image', userName: 'User23', userAvatar: defaultUser, comments: ['Outstanding photo', 'Great eye!'] },
    { id: 24, name: 'Image 24', url: image24, type: 'image', title: 'Twenty-Fourth Image', userName: 'User24', userAvatar: defaultUser, comments: ['Fantastic work', 'Love this shot'] },
    { id: 25, name: 'Image 25', url: image25, type: 'image', title: 'Twenty-Fifth Image', userName: 'User25', userAvatar: defaultUser, comments: ['Beautiful moment', 'Well captured'] },
    { id: 26, name: 'Image 26', url: image26, type: 'image', title: 'Twenty-Sixth Image', userName: 'User26', userAvatar: defaultUser, comments: ['Amazing perspective', 'Great work'] },
    { id: 27, name: 'Image 27', url: image27, type: 'image', title: 'Twenty-Seventh Image', userName: 'User27', userAvatar: defaultUser, comments: ['Stunning shot', 'Perfect timing'] },
    { id: 28, name: 'Image 28', url: image28, type: 'image', title: 'Twenty-Eighth Image', userName: 'User28', userAvatar: defaultUser, comments: ['Incredible detail', 'Love the colors'] },
    { id: 29, name: 'Image 29', url: image29, type: 'image', title: 'Twenty-Ninth Image', userName: 'User29', userAvatar: defaultUser, comments: ['Beautiful work', 'This is art'] },
    { id: 30, name: 'Image 30', url: image30, type: 'image', title: 'Thirtieth Image', userName: 'User30', userAvatar: defaultUser, comments: ['Masterful shot', 'Excellent composition'] },
    { id: 31, name: 'Image 31', url: image31, type: 'image', title: 'Thirty-First Image', userName: 'User31', userAvatar: defaultUser, comments: ['Wonderful capture', 'Love this'] },
    { id: 32, name: 'Image 32', url: image32, type: 'image', title: 'Thirty-Second Image', userName: 'User32', userAvatar: defaultUser, comments: ['Perfect shot', 'Amazing work'] },
    { id: 33, name: 'Image 33', url: image33, type: 'image', title: 'Thirty-Third Image', userName: 'User33', userAvatar: defaultUser, comments: ['Brilliant perspective', 'Well done'] },
    { id: 34, name: 'Image 34', url: image34, type: 'image', title: 'Thirty-Fourth Image', userName: 'User34', userAvatar: defaultUser, comments: ['Outstanding composition', 'Love it'] },
    { id: 35, name: 'Image 35', url: image35, type: 'image', title: 'Thirty-Fifth Image', userName: 'User35', userAvatar: defaultUser, comments: ['Beautiful shot', 'Great eye'] },
    { id: 36, name: 'Image 36', url: image36, type: 'image', title: 'Thirty-Sixth Image', userName: 'User36', userAvatar: defaultUser, comments: ['Fantastic work', 'Amazing talent'] },
    { id: 37, name: 'Image 37', url: image37, type: 'image', title: 'Thirty-Seventh Image', userName: 'User37', userAvatar: defaultUser, comments: ['Incredible shot', 'Perfect lighting'] },
    { id: 38, name: 'Image 38', url: image38, type: 'image', title: 'Thirty-Eighth Image', userName: 'User38', userAvatar: defaultUser, comments: ['Stunning work', 'Love the mood'] },
    { id: 39, name: 'Image 39', url: image39, type: 'image', title: 'Thirty-Ninth Image', userName: 'User39', userAvatar: defaultUser, comments: ['Beautiful composition', 'Well captured'] },
    { id: 40, name: 'Image 40', url: image40, type: 'image', title: 'Eleventh Image', userName: 'User40', userAvatar: defaultUser, comments: ['Great shot', 'The lighting is perfect'] },
    { id: 41, name: 'Image 41', url: image41, type: 'image', title: 'Twelfth Image', userName: 'User41', userAvatar: defaultUser, comments: ['Outstanding work', 'Love the details'] },
    { id: 42, name: 'Image 42', url: image42, type: 'image', title: 'Thirteenth Image', userName: 'User42', userAvatar: defaultUser, comments: ['This is amazing', 'Such talent!'] },
    { id: 43, name: 'Image 43', url: image43, type: 'image', title: 'Fourteenth Image', userName: 'User43', userAvatar: defaultUser, comments: ['Fantastic shot', 'Great eye for detail'] },
    { id: 44, name: 'Image 44', url: image44, type: 'image', title: 'Fifteenth Image', userName: 'User44', userAvatar: defaultUser, comments: ['Beautiful capture', 'Love the mood'] },
    { id: 45, name: 'Image 45', url: image45, type: 'image', title: 'Sixteenth Image', userName: 'User45', userAvatar: defaultUser, comments: ['Incredible perspective', 'Well done!'] },
    { id: 46, name: 'Image 46', url: image46, type: 'image', title: 'Seventeenth Image', userName: 'User46', userAvatar: defaultUser, comments: ['Masterpiece', 'This is art'] },
    { id: 47, name: 'Image 47', url: image47, type: 'image', title: 'Eighteenth Image', userName: 'User47', userAvatar: defaultUser, comments: ['Stunning work', 'Love the colors'] },
    { id: 48, name: 'Image 48', url: image48, type: 'image', title: 'Nineteenth Image', userName: 'User48', userAvatar: defaultUser, comments: ['Breathtaking', 'Perfect shot'] },
    { id: 49, name: 'Image 49', url: image49, type: 'image', title: 'Twentieth Image', userName: 'User49', userAvatar: defaultUser, comments: ['This is incredible', 'Amazing talent'] },
    { id: 50, name: 'Image 50', url: image50, type: 'image', title: 'Twenty-First Image', userName: 'User50', userAvatar: defaultUser, comments: ['Exceptional work', 'Love the composition'] },
    { id: 51, name: 'Video 1', url: video1, type: 'video', title: 'Sponsored', userName: 'Sponsored', userAvatar: defaultUser, comments: ['Amazing video', 'Great production quality'] },
    { id: 52, name: 'Video 2', url: video2, type: 'video', title: 'Sponsored', userName: 'Sponsored', userAvatar: defaultUser, comments: ['Excellent content', 'Well produced'] },
    { id: 53, name: 'Video 3', url: video3, type: 'video', title: 'Sponsored', userName: 'Sponsored', userAvatar: defaultUser, comments: ['Fantastic video', 'Love the editing'] },
    { id: 54, name: 'McLaren Model', url: model1, modelUrl: model1, type: '3d', title: 'McLaren 3D Model', userName: 'User44', userAvatar: defaultUser, comments: ['Incredible detail', 'Amazing 3D work'] },
    { id: 55, name: 'Apple Vision Pro Model', url: model2, modelUrl: model2, type: '3d', title: 'Apple Vision Pro 3D Model', userName: 'User45', userAvatar: defaultUser, comments: ['Perfect modeling', 'Outstanding detail'] },
    { id: 56, name: 'Infernus Model', url: model3, modelUrl: model3, type: '3d', title: 'Infernus 3D Model', userName: 'User46', userAvatar: defaultUser, comments: ['Beautiful model', 'Great texturing'] },
    { id: 57, name: 'Seen Model', url: model4, modelUrl: model4, type: '3d', title: 'Seen 3D Model', userName: 'User47', userAvatar: defaultUser, comments: ['Excellent work', 'Love the details'] },
    { id: 58, name: 'Video 4', url: video4, type: 'video', title: 'Flowers', userName: 'User48', userAvatar: defaultUser, comments: ['Beautiful footage', 'Perfect composition'] },
    { id: 59, name: 'Video 5', url: video5, type: 'video', title: 'Moon Light', userName: 'User49', userAvatar: defaultUser, comments: ['Amazing atmosphere', 'Stunning visuals'] },
];

export { postsPrev };

// Post bileşeni
const Post = ({ post }) => {
    return (
        <div className="post">
            <div className="post-header">
                <img src={post.userAvatar} alt={post.userName} className="user-avatar" />
                <span className="user-name">{post.userName}</span>
            </div>
            <div className="post-content">
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
                        style={{ width: '100%', height: '400px' }}
                        loading="eager"
                        environment-image="neutral"
                        camera-orbit="45deg 55deg 2.5m"
                        interaction-prompt="none"
                    ></model-viewer>
                ) : (
                    <img src={post.url} alt={post.name} className="post-image" />
                )}
            </div>
            {post.title && <div className="post-title">{post.title}</div>}
            {post.comments && (
                <div className="post-comments">
                    {post.comments.map((comment, index) => (
                        <div key={index} className="comment">
                            <span className="comment-text">{comment}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

// Posts bileşeni
const Posts = () => {
    return (
        <div className="posts-container">
            {postsPrev.map(post => (
                <Post key={post.id} post={post} />
            ))}
        </div>
    );
};

export default Posts;
