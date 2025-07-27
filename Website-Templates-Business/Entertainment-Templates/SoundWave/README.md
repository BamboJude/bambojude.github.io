# SoundWave - Professional Musician Website Template

A modern, interactive website template designed specifically for musicians, DJs, and music producers. Features a sleek dark design with vibrant orange accents, animated DJ console, music player, and comprehensive booking system.

## Features

### 🎵 Music Player

- Interactive music player with play/pause, next/previous controls
- Progress bar with click-to-seek functionality
- Track switching with visual feedback
- Keyboard controls (spacebar, arrow keys)

### 🎛️ Animated DJ Console

- Spinning vinyl records with click interaction
- Interactive knobs and sliders
- Realistic DJ mixer design
- Visual feedback on user interaction

### 📱 Responsive Design

- Mobile-first approach
- Hamburger menu for mobile navigation
- Optimized layouts for all screen sizes
- Touch-friendly interactions

### 🎬 Media Sections

- Music tracks with streaming platform links
- Video gallery with play overlays
- Show listings with ticket booking
- Artist biography and achievements

### 📝 Booking System

- Professional contact form
- Event type selection
- Budget range options
- Form validation and feedback

### ✨ Interactive Elements

- Smooth scroll animations
- Loading screen with vinyl animation
- Audio visualizer bars
- Hover effects and transitions
- Notification system

## File Structure

```
SoundWave/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Customization Guide

### Colors

The template uses CSS custom properties for easy color customization:

```css
:root {
  --primary-color: #ff6b35; /* Orange accent color */
  --secondary-color: #1a1a2e; /* Dark blue background */
  --accent-color: #16213e; /* Medium blue */
  --highlight-color: #0f3460; /* Light blue */
  --text-light: #ffffff; /* White text */
  --text-gray: #b8b8b8; /* Gray text */
  --bg-dark: #0a0a0a; /* Black background */
}
```

### Content Customization

#### Artist Information

Update the hero section in `index.html`:

```html
<h1 class="hero-title">
  <span class="title-line">Your</span>
  <span class="title-line highlight">Name</span>
</h1>
<p class="hero-subtitle">Your Genre/Title</p>
<p class="hero-description">Your description</p>
```

#### Music Tracks

Modify the tracks array in `script.js`:

```javascript
const tracks = [
  {
    title: "Your Track Title",
    artist: "Your Name",
    duration: 225, // Duration in seconds
    genre: "Your Genre",
  },
  // Add more tracks...
];
```

#### Shows and Events

Update the show cards in the HTML:

```html
<div class="show-card">
  <div class="show-date">
    <div class="month">MON</div>
    <div class="day">DD</div>
  </div>
  <div class="show-info">
    <h3 class="show-title">Event Name</h3>
    <p class="show-venue">Venue, Location</p>
    <p class="show-time">Time</p>
  </div>
  <!-- ... -->
</div>
```

### Adding Real Music Integration

To integrate with real music streaming services:

1. **Spotify Web API**: Replace placeholder links with Spotify embed codes
2. **SoundCloud**: Use SoundCloud widget API
3. **Apple Music**: Implement Apple Music API
4. **YouTube**: Use YouTube Player API

Example Spotify integration:

```html
<iframe
  src="https://open.spotify.com/embed/track/YOUR_TRACK_ID"
  width="300"
  height="380"
  frameborder="0"
></iframe>
```

### Form Integration

To make the booking form functional:

1. **Backend Integration**: Connect to your server endpoint
2. **Email Services**: Use services like EmailJS, Formspree, or Netlify Forms
3. **Database**: Store submissions in your preferred database

Example with EmailJS:

```javascript
emailjs.send("service_id", "template_id", formData).then(() => {
  showNotification("Message sent successfully!", "success");
});
```

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Performance Features

- CSS animations using `transform` and `opacity` for smooth performance
- Intersection Observer for scroll animations
- Throttled scroll events
- Optimized images and assets

## Accessibility Features

- Semantic HTML structure
- ARIA labels where appropriate
- Keyboard navigation support
- Focus management
- Color contrast compliance

## SEO Optimization

- Meta tags for social sharing
- Structured data markup ready
- Semantic HTML elements
- Fast loading times
- Mobile-friendly design

## Installation

1. Download all files to your web server
2. Customize content in `index.html`
3. Modify colors and styles in `styles.css`
4. Update functionality in `script.js`
5. Test on various devices and browsers

## Dependencies

- Font Awesome 6.4.0 (icons)
- Google Fonts (Poppins, Playfair Display)
- Modern browser with ES6 support

## License

This template is free to use for personal and commercial projects. Attribution appreciated but not required.

## Support

For customization help or questions:

- Check the code comments for guidance
- Modify CSS custom properties for quick color changes
- Use browser developer tools for debugging

## Future Enhancements

Potential additions for advanced users:

- Real audio playback functionality
- Social media integration
- Blog/news section
- E-commerce integration for merchandise
- Advanced analytics tracking
- Multi-language support

---

**SoundWave Template** - Bringing your music to life on the web! 🎵
