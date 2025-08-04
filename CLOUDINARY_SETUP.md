# Cloudinary Setup for Jumiami Solar Hero Video

## 🔑 Your Cloudinary Credentials

```
Cloud Name: root
API Key: 896315254897449
API Secret: 76DuTs2pAXaBgfkTpqBfC80iN7o
```

## 🎥 Uploading Solar Video to Cloudinary

### **Step 1: Install Cloudinary SDK**
```bash
npm install cloudinary
```

### **Step 2: Upload Video Script**
Create a file `upload-video.js`:

```javascript
const cloudinary = require('cloudinary').v2;

// Configure with your credentials
cloudinary.config({
  cloud_name: 'root',
  api_key: '896315254897449',
  api_secret: '76DuTs2pAXaBgfkTpqBfC80iN7o'
});

async function uploadSolarVideo() {
  try {
    const result = await cloudinary.uploader.upload('./solar-video.mp4', {
      resource_type: 'video',
      folder: 'jumiami-solar',
      public_id: 'hero-video',
      transformation: [
        { width: 1920, height: 1080, crop: 'scale' },
        { quality: 'auto', fetch_format: 'auto' },
        { duration: 30 }
      ],
      eager: [
        { width: 1280, height: 720, crop: 'scale', quality: 'auto' },
        { width: 854, height: 480, crop: 'scale', quality: 'auto' }
      ],
      eager_async: true
    });

    console.log('✅ Video uploaded successfully!');
    console.log('📺 Hero video URL:', result.secure_url);
    console.log('🆔 Public ID:', result.public_id);
    
    return result.secure_url;
  } catch (error) {
    console.error('❌ Error uploading video:', error);
  }
}

uploadSolarVideo();
```

### **Step 3: Run Upload Script**
```bash
node upload-video.js
```

## 🎯 Optimized Video URLs

### **Hero Video URL (After Upload):**
```
https://res.cloudinary.com/root/video/upload/f_auto,q_auto,w_1920,h_1080/v1/jumiami-solar/hero-video
```

### **Responsive Video URLs:**
```
Desktop (1920x1080): https://res.cloudinary.com/root/video/upload/f_auto,q_auto,w_1920,h_1080/v1/jumiami-solar/hero-video
Tablet (1280x720): https://res.cloudinary.com/root/video/upload/f_auto,q_auto,w_1280,h_720/v1/jumiami-solar/hero-video
Mobile (854x480): https://res.cloudinary.com/root/video/upload/f_auto,q_auto,w_854,h_480/v1/jumiami-solar/hero-video
```

## 📱 Video Specifications

### **Recommended Video Content:**
1. **Opening (0-5s)**: Aerial view of solar panels on modern homes
2. **Middle (5-25s)**: Close-up of solar installation process
3. **End (25-30s)**: Sunset over solar farm with "clean energy" message

### **Technical Requirements:**
- **Format**: MP4 with H.264 codec
- **Resolution**: 1920x1080 (Full HD)
- **Frame Rate**: 24-30 fps
- **Duration**: 10-30 seconds
- **File Size**: < 50MB (Cloudinary will optimize)

## 🔧 Implementation in React

### **Updated Hero Component:**
```jsx
const videoSources = [
  {
    src: "https://res.cloudinary.com/root/video/upload/f_auto,q_auto,w_1920,h_1080/v1/jumiami-solar/hero-video",
    type: "video/mp4",
    fallback: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80"
  }
];
```

## 🚀 Cloudinary Transformations

### **Auto-Optimization:**
- `f_auto`: Automatic format selection (WebM, MP4)
- `q_auto`: Automatic quality optimization
- `w_1920,h_1080`: Responsive width and height

### **Performance Optimizations:**
- **CDN Delivery**: Global edge locations
- **Automatic Compression**: Cloudinary optimizes file size
- **Format Selection**: Serves best format for browser
- **Quality Adjustment**: Optimizes for connection speed

## 📊 Monitoring & Analytics

### **Cloudinary Dashboard:**
1. Go to: https://cloudinary.com/console
2. Login with your credentials
3. Check "Media Library" for uploaded videos
4. Monitor usage and performance

### **Video Analytics:**
- View count and bandwidth usage
- Performance metrics
- Error tracking

## 🛠️ Troubleshooting

### **Video Not Playing:**
1. Check Cloudinary URL is correct
2. Verify video is uploaded successfully
3. Test URL in browser directly
4. Check browser console for errors

### **Upload Issues:**
1. Verify API credentials
2. Check file format (MP4)
3. Ensure file size < 100MB
4. Check internet connection

### **Performance Issues:**
1. Use responsive URLs for different devices
2. Implement lazy loading
3. Add loading states
4. Use fallback images

## 🔄 Update Process

1. **Upload new video** to Cloudinary
2. **Update URL** in hero component
3. **Test locally** with `npm run dev`
4. **Build and deploy** to production
5. **Verify** on live site

## 📞 Support

### **Cloudinary Support:**
- Documentation: https://cloudinary.com/documentation
- API Reference: https://cloudinary.com/documentation/video_upload_api_reference
- Community: https://support.cloudinary.com

### **Your Account Details:**
- **Cloud Name**: root
- **API Key**: 896315254897449
- **API Secret**: 76DuTs2pAXaBgfkTpqBfC80iN7o
- **Dashboard**: https://cloudinary.com/console

## 🎯 Next Steps

1. **Create solar video** (10-30 seconds)
2. **Upload to Cloudinary** using the script
3. **Update hero component** with new URL
4. **Test and deploy** to production
5. **Monitor performance** in Cloudinary dashboard

Your Cloudinary account is ready for optimal video delivery! 🚀 