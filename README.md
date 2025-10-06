# Engineering Portfolio Website

A modern, responsive portfolio website designed specifically for engineering students to showcase their projects, skills, and achievements.

🌐 **Live Demo**: [Visit Portfolio](https://briansahagian.github.io/portfolio/)

## 🌟 Features

- **Responsive Design**: Looks great on all devices (desktop, tablet, mobile)
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Project Showcase**: 12 detailed project pages with comprehensive documentation
- **Photo Galleries**: Interactive image galleries with modal views
- **Contact Form**: Functional contact form with validation
- **Smooth Scrolling**: Seamless navigation between sections
- **Performance Optimized**: Fast loading times with efficient code

## 🛠️ Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript (ES6+)**: Interactive functionality
- **Font Awesome**: Professional icons
- **Google Fonts**: Typography (Inter font family)
- **GitHub Pages**: Free hosting and deployment

## 📁 Project Structure

```
portfolio/
│
├── index.html              # Main portfolio page
├── README.md              # Project documentation
├── .gitignore             # Git ignore file
│
├── .github/
│   └── workflows/
│       └── pages.yml      # GitHub Pages deployment workflow
│
├── assets/
│   ├── css/
│   │   ├── style.css      # Main stylesheet
│   │   └── project-detail.css # Project page styles
│   ├── js/
│   │   ├── script.js      # Main site functionality
│   │   └── project-detail.js # Project page interactions
│   └── images/            # All project images organized by category
│       ├── class-projects/
│       ├── machine-shop/
│       ├── personal-projects/
│       └── personal/
│
└── projects/
    └── detailed/          # Individual project pages
        ├── gasket-manufacturing.html
        ├── laser-communicator.html
        ├── mechanical-oscillator.html
        ├── chess-piece-cnc.html
        ├── monet-machine.html
        ├── motor-control-cart.html
        ├── hdpe-coaster-cnc.html
        ├── thermoformed-bins.html
        ├── machine-maintenance.html
        ├── cb350-rebuild.html
        ├── jeep-maintenance.html
        └── panasonic-bike.html
```

## 🚀 GitHub Pages Deployment

This portfolio is configured for automatic deployment to GitHub Pages:

### Quick Setup:
1. **Fork this repository** or create a new repository with these files
2. **Enable GitHub Pages**:
   - Go to repository Settings
   - Navigate to Pages section
   - Set Source to "GitHub Actions"
3. **Push to main branch** - deployment happens automatically
4. **Access your site** at: `https://yourusername.github.io/repository-name/`

### Automatic Deployment:
- ✅ Deploys automatically on every push to main branch
- ✅ Uses GitHub Actions workflow (`.github/workflows/pages.yml`)
- ✅ No build process required - pure HTML/CSS/JS
- ✅ Fast deployment (usually under 2 minutes)

## ✏️ Customization Guide

### Personal Information:
1. **Update `index.html`**:
   - Change name, title, and bio in the hero section
   - Update contact information
   - Replace social media links

2. **Project Content**:
   - Modify project descriptions and details
   - Update project links and repositories
   - Replace project images in `assets/images/`

3. **Styling**:
   - Customize colors in `assets/css/style.css`
   - Modify fonts and spacing as needed
   - Add your own brand colors

### Adding New Projects:
1. **Create new project page** in `projects/detailed/`
2. **Add project images** to appropriate folder in `assets/images/`
3. **Update main portfolio** page with new project card
4. **Test locally** before pushing to GitHub

### Personal Information
Update these sections in `index.html`:

1. **Hero Section**: Your name, title, and introduction
2. **About Section**: Your background, university, and statistics
3. **Contact Information**: Email, LinkedIn, GitHub profiles
4. **Page Title**: Update the `<title>` tag in the head section

### Projects
1. Use the project template in `projects/README.md`
2. Replace example projects with your actual work
3. Update project categories, descriptions, and technologies
4. Add real links to demos, repositories, and documentation

### Styling
- **Colors**: Modify CSS variables for your brand colors
- **Fonts**: Change Google Fonts import for different typography
- **Layout**: Adjust grid layouts and spacing as needed

### Images
1. Add your professional photo for the hero section
2. Include project screenshots or mockups
3. Optimize images for web (compress for faster loading)

## 📱 Sections Overview

### Navigation
- Fixed header with smooth scroll navigation
- Mobile-responsive hamburger menu

### Hero Section
- Professional introduction
- Call-to-action buttons
- Animated typing effect for subtitle

### About Section
- Personal background and education
- Achievement statistics
- Professional photo placeholder

### Projects Section
- Interactive filtering system (All, Software, Hardware, Research, Design)
- Project cards with hover effects
- Technology tags and project links

### Skills Section
- Categorized technical skills
- Programming languages, tools, and technologies
- Interactive skill items with hover effects

### Contact Section
- Contact information display
- Functional contact form with validation
- Social media links

## 🎨 Design Features

- **Color Scheme**: Professional blue gradient with clean whites
- **Typography**: Inter font family for modern readability
- **Animations**: Smooth hover effects and scroll animations
- **Icons**: Font Awesome icons for consistency
- **Layout**: CSS Grid and Flexbox for responsive design

## 📧 Contact Form

The contact form includes:
- Client-side validation
- Success/error notifications
- Responsive design
- Placeholder functionality (ready for backend integration)

## 🌐 Deployment Options

### Free Hosting Platforms
1. **GitHub Pages**: Perfect for portfolios hosted on GitHub
2. **Netlify**: Drag-and-drop deployment with form handling
3. **Vercel**: Optimized for modern web applications
4. **Firebase Hosting**: Google's free hosting solution

### Deployment Steps (GitHub Pages)
1. Upload your files to a GitHub repository
2. Go to repository Settings > Pages
3. Select source branch (usually `main` or `master`)
4. Your site will be available at `https://yourusername.github.io/repository-name`

## 📱 Mobile Responsiveness

The portfolio is fully responsive with:
- Mobile-first CSS approach
- Collapsible navigation menu
- Optimized layouts for tablets and phones
- Touch-friendly interactive elements

## ⚡ Performance Features

- Optimized CSS and JavaScript
- Efficient animation implementations
- Lazy loading capabilities (ready for images)
- Minimal external dependencies

## 🔧 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📋 SEO Ready

- Semantic HTML structure
- Meta tags for social sharing
- Descriptive alt text support
- Search engine friendly URLs

## 🤝 Contributing

This is a personal portfolio template, but suggestions for improvements are welcome:

1. Fork the project
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](https://opensource.org/licenses/MIT).

## 💡 Tips for Engineering Students

1. **Keep it Updated**: Regularly add new projects and achievements
2. **Quality over Quantity**: Showcase your best work, not everything
3. **Tell a Story**: Explain the problem, solution, and impact of each project
4. **Include Process**: Show your engineering thought process and methodology
5. **Add Metrics**: Include quantifiable results when possible
6. **Professional Photos**: Use high-quality, professional images
7. **Proofread**: Ensure all content is error-free and professional

## 🔮 Future Enhancements

Consider adding these features as you grow:
- Blog section for technical articles
- Dark/light theme toggle
- Multi-language support
- Advanced project filtering
- Testimonials section
- Resume download functionality
- Integration with GitHub API for live project data

## 📞 Support

If you need help customizing your portfolio:
1. Check the `projects/README.md` for detailed templates
2. Review the code comments for guidance
3. Test changes in a local environment first
4. Use browser developer tools for debugging

---

**Ready to showcase your engineering journey? Start customizing your portfolio today!** 🚀
