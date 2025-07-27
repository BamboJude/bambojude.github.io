# PhotoPro - Photography Portfolio Template

A modern, responsive photography portfolio website template designed for professional photographers.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Portfolio Gallery**: Filterable portfolio section with categories
- **Service Showcase**: Dedicated section for photography services and pricing
- **Contact Form**: Functional contact form with validation
- **Mobile Navigation**: Hamburger menu for mobile devices
- **Smooth Scrolling**: Enhanced user experience with smooth page transitions
- **SEO Friendly**: Semantic HTML structure for better search engine optimization

## Sections Included

1. **Hero Section**: Eye-catching introduction with call-to-action buttons
2. **About Section**: Personal introduction with statistics
3. **Portfolio Section**: Filterable gallery showcasing work
4. **Services Section**: Photography services with pricing
5. **Contact Section**: Contact information and contact form
6. **Footer**: Social links and additional navigation

## Customization Guide

### 1. Basic Information
Replace the following placeholder content in `index.html`:

- **Business Name**: Change "PhotoPro" to your business name
- **Contact Information**: Update phone, email, and location in the contact section
- **About Text**: Replace the about section content with your personal story
- **Services & Pricing**: Update the services section with your actual offerings

### 2. Colors & Branding
The main brand color is defined in `styles.css`. To change it:

```css
/* Find and replace #e74c3c with your brand color */
.btn-primary { background: #YOUR_COLOR; }
.nav-link:hover { color: #YOUR_COLOR; }
/* And other instances throughout the CSS */
```

### 3. Images
Replace the placeholder images:

- Add your hero image to replace the placeholder in the hero section
- Add your about/profile image
- Add portfolio images in the portfolio section
- Update the image paths in the HTML

### 4. Portfolio Categories
To modify portfolio categories:

1. Update the filter buttons in the HTML
2. Update the `data-category` attributes on portfolio items
3. Add corresponding filter logic in `script.js` if needed

### 5. Social Media Links
Update the social media links in the footer section:

```html
<div class="social-links">
    <a href="YOUR_INSTAGRAM_URL"><i class="fab fa-instagram"></i></a>
    <a href="YOUR_FACEBOOK_URL"><i class="fab fa-facebook"></i></a>
    <a href="YOUR_TWITTER_URL"><i class="fab fa-twitter"></i></a>
    <a href="YOUR_LINKEDIN_URL"><i class="fab fa-linkedin"></i></a>
</div>
```

## File Structure

```
PhotoPro/
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Dependencies

- **Google Fonts**: Poppins font family
- **Font Awesome**: Icons for UI elements
- **No additional frameworks required**

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Installation & Usage

1. Download all files to your web server
2. Customize the content as described above
3. Replace placeholder images with your actual photos
4. Update contact information and social media links
5. Upload to your web hosting service

## Contact Form Setup

The contact form currently shows a success message for demonstration. To make it functional:

1. Set up a backend service (PHP, Node.js, etc.)
2. Update the form action in `index.html`
3. Modify the JavaScript in `script.js` to handle real form submission

## Performance Tips

- Optimize images for web (compress and resize appropriately)
- Consider using WebP format for better compression
- Minify CSS and JavaScript for production
- Use a CDN for faster loading times

## License

This template is provided for commercial and personal use. You may customize and distribute it as needed for your photography business.

## Support

For customization help or questions about this template, refer to standard web development resources or hire a web developer for advanced modifications.
