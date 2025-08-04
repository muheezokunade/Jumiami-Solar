const cloudinary = require('cloudinary').v2;

// Configure Cloudinary with your credentials
cloudinary.config({
  cloud_name: 'dhdjzw88p',
  api_key: '896315254897449',
  api_secret: '76DuTs2pAXaBgfkTpqBfC80iN7o'
});

// Function to upload solar video with optimization
async function uploadSolarVideo() {
  try {
    // Upload video with optimization parameters
    const result = await cloudinary.uploader.upload('path/to/your/solar-video.mp4', {
      resource_type: 'video',
      folder: 'jumiami-solar',
      public_id: 'hero-video',
      transformation: [
        { width: 1920, height: 1080, crop: 'scale' },
        { quality: 'auto', fetch_format: 'auto' },
        { duration: 30 } // Limit to 30 seconds for hero video
      ],
      eager: [
        { width: 1280, height: 720, crop: 'scale', quality: 'auto' },
        { width: 854, height: 480, crop: 'scale', quality: 'auto' }
      ],
      eager_async: true,
      eager_notification_url: 'https://webhook.site/your-webhook-url'
    });

    console.log('Video uploaded successfully:', result);
    console.log('Hero video URL:', result.secure_url);
    
    return result.secure_url;
  } catch (error) {
    console.error('Error uploading video:', error);
  }
}

// Function to get optimized video URL
function getOptimizedVideoUrl(publicId) {
  return `https://res.cloudinary.com/dhdjzw88p/video/upload/f_auto,q_auto,w_1920,h_1080/v1/${publicId}`;
}

// Example usage
// uploadSolarVideo();

module.exports = {
  uploadSolarVideo,
  getOptimizedVideoUrl
}; 