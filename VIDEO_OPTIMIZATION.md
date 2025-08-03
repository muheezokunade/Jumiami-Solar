# Video Optimization Guide for Jumiami Solar

## 🎥 Hero Video Requirements

### **File Specifications:**
- **Format**: MP4 with H.264 codec
- **Resolution**: 1920x1080 (Full HD) or 1280x720 (HD)
- **Frame Rate**: 24-30 fps
- **Duration**: 10-30 seconds
- **File Size**: < 5MB for optimal loading
- **Content**: Solar panels, clean energy, modern technology

### **Recommended Video Content:**
1. **Opening**: Aerial view of solar panels on modern homes
2. **Middle**: Close-up of solar installation process
3. **End**: Sunset over solar farm with "clean energy" message

## 📁 File Placement

### **Local Video (Recommended):**
```
client/public/videos/hero-video.mp4
```

### **CDN Hosting (Alternative):**
Upload to Cloudinary with these settings:
- **Format**: Auto (f_auto)
- **Quality**: Auto (q_auto)
- **Transformation**: `f_auto,q_auto,w_1920,h_1080`

## 🔧 Implementation

### **HTML Video Element:**
```html
<video
  autoPlay
  muted
  loop
  playsInline
  preload="auto"
  poster="/images/hero-poster.jpg"
  className="hero-video"
>
  <source src="/videos/hero-video.mp4" type="video/mp4" />
  <img src="/images/hero-poster.jpg" alt="Solar panels" />
</video>
```

### **CSS Requirements:**
```css
video {
  opacity: 1 !important;
  visibility: visible !important;
  display: block !important;
}

.hero-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
}
```

## 🚀 Deployment Checklist

### **Before Deployment:**
- [ ] Video file is in `client/public/videos/`
- [ ] Video is optimized (< 5MB)
- [ ] Poster image is set
- [ ] Fallback image is configured
- [ ] CSS conflicts are resolved

### **Production Testing:**
- [ ] Video autoplays on desktop
- [ ] Video autoplays on mobile
- [ ] Fallback works when video fails
- [ ] Loading states are smooth
- [ ] No console errors

## 🛠️ Troubleshooting

### **Video Not Playing:**
1. Check file path: `/videos/hero-video.mp4`
2. Verify file exists in build
3. Check browser console for errors
4. Ensure `muted` attribute is set
5. Test with different browsers

### **Video Loading Slowly:**
1. Compress video further
2. Use CDN hosting
3. Implement lazy loading
4. Add loading indicator

### **Mobile Issues:**
1. Ensure `playsInline` attribute
2. Test on different devices
3. Check mobile browser policies
4. Provide manual play button

## 📱 Mobile Optimization

### **iOS Safari:**
- Requires `muted` and `playsInline`
- May block autoplay
- Provide manual play button

### **Android Chrome:**
- Generally allows autoplay
- Test on different Android versions
- Ensure proper MIME types

## 🎯 Performance Tips

1. **Compress video** to smallest acceptable quality
2. **Use WebM format** as alternative source
3. **Implement lazy loading** for better performance
4. **Add loading states** for better UX
5. **Test on slow connections**

## 🔄 Update Process

1. Replace `client/public/videos/hero-video.mp4`
2. Update poster image if needed
3. Test locally: `npm run dev`
4. Build and test: `npm run build`
5. Deploy to production
6. Verify on live site

## 📞 Support

If video issues persist:
1. Check browser console for errors
2. Verify file permissions
3. Test with different video formats
4. Contact development team 