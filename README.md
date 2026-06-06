# Ryan Reynolds Fan Page

A modern, cinematic fan page celebrating Ryan Reynolds' career, achievements, and business ventures.

## Features

- **Modern Cinematic Design**: Dark theme with crimson red and gold accents inspired by Deadpool branding
- **Premium Typography**: Playfair Display for headings paired with Inter for body text
- **Responsive Layout**: Fully responsive design that works on all devices
- **Smooth Animations**: Elegant scroll animations and hover effects
- **Comprehensive Content**: Biography, filmography, achievements, and business ventures

## Design Philosophy

This fan page follows a **Modern Cinematic Elegance** aesthetic featuring:
- Dark background (charcoal black) with premium lighting
- Crimson red (#dc2626) and gold (#fbbf24) accent colors
- Asymmetric layouts and cinematic hero sections
- Smooth transitions and interactive elements

## Technology Stack

- **React 19**: Modern UI framework
- **Tailwind CSS 4**: Utility-first CSS framework
- **TypeScript**: Type-safe development
- **Vite**: Fast build tool and dev server
- **shadcn/ui**: High-quality UI components

## Project Structure

```
client/
  ├── src/
  │   ├── pages/
  │   │   └── Home.tsx          # Main fan page component
  │   ├── components/           # Reusable UI components
  │   ├── index.css             # Global styles and theme
  │   └── App.tsx               # Main app component
  ├── index.html                # HTML entry point
  └── public/                   # Static assets
```

## Getting Started

### Prerequisites
- Node.js 22+
- pnpm 10+

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Development

The project uses Vite for fast development and hot module replacement. Start the dev server with:

```bash
pnpm dev
```

Then open http://localhost:3000 in your browser.

## Deployment

This project is deployed to GitHub Pages. The site is automatically built and deployed when changes are pushed to the main branch.

## Content Sections

1. **Hero Section**: Eye-catching introduction with Ryan Reynolds' professional image
2. **About**: Biography and key statistics
3. **Achievements**: Major accomplishments and recognition
4. **Filmography**: Notable films with descriptions
5. **Business Ventures**: Overview of business investments and companies
6. **Footer**: Links and additional information

## Customization

### Colors
Edit the CSS variables in `client/src/index.css` to customize the color scheme:
- `--primary`: Crimson red accent color
- `--background`: Dark background
- `--foreground`: Light text color

### Typography
Google Fonts are imported in `client/index.html`:
- **Playfair Display**: Bold, elegant serif for headings
- **Inter**: Clean, modern sans-serif for body text

### Content
Update the content arrays in `client/src/pages/Home.tsx`:
- `filmography`: Movie data
- `achievements`: Achievement cards
- `businessVentures`: Business information

## License

This is an unofficial fan page created for educational and entertainment purposes.

## Author

Created with ❤️ for Ryan Reynolds fans

---

**Note**: This is an unofficial fan page and is not affiliated with Ryan Reynolds or his official representatives.
