# 🎵 Music Explorer - Class Components Implementation

A beautiful, responsive music search application built with React class components and TypeScript, integrated with Spotify Web API.

## 🌟 Features

- **Spotify API Integration** - Search for tracks, artists, and albums
- **Class Components Only** - No functional components or hooks
- **Responsive Design** - Beautiful UI that works on all devices
- **Error Boundaries** - Robust error handling with fallback UI
- **LocalStorage** - Persistent search history
- **TypeScript** - Full type safety throughout
- **Modern Tooling** - Vite, ESLint, Prettier, Husky

## 🚀 Live Demo

[View Live Application](https://ilonagold.github.io/music-explorer/)

## 📱 Screenshots

![Desktop View](./screenshots/desktop-view.png)
![Mobile View](./screenshots/mobile-view.png)
![Error Boundary](./screenshots/error-boundary.png)

## 🛠️ Technology Stack

- **React 19.1.0** - UI library with class components
- **TypeScript 5.8.3** - Type-safe development
- **Vite 7.0.4** - Fast build tool and dev server
- **Spotify Web API** - Music data source
- **CSS3** - Custom styling with CSS variables
- **ESLint** - Code linting and quality
- **Prettier** - Code formatting
- **Husky** - Git hooks for quality assurance

## 🏃‍♂️ Quick Start

### Prerequisites

- Node.js 18+ installed
- Spotify Developer Account

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/rss-solo-react-app.git
   cd rss-solo-react-app/rs-react-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the project root:

   ```env
   VITE_SPOTIFY_CLIENT_ID=your_spotify_client_id
   VITE_SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
   ```

4. **Start development server**

   ```bash
   npm run dev
   ```

5. **Open in browser**
   Navigate to `http://localhost:3000`

## 📋 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

- `npm run format:fix` - Format code with Prettier

## 🎯 RS School Requirements

This project implements all required features for the React course:

- ✅ **Class Components** (No functional components or hooks)
- ✅ **API Integration** (Spotify Web API with proper error handling)
- ✅ **LocalStorage** (Search persistence)
- ✅ **Error Boundaries** (Comprehensive error handling)
- ✅ **TypeScript** (Full type safety)
- ✅ **Responsive Design** (Mobile-first approach)
- ✅ **Code Quality** (ESLint, Prettier, Husky)

## 📁 Project Structure

```
rs-react-app/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── ErrorBoundary.tsx
│   │   ├── Header.tsx
│   │   ├── ResultsSection.tsx
│   │   ├── SearchSection.tsx
│   │   └── TrackResult.tsx
│   ├── services/
│   │   └── spotifyApi.ts
│   ├── assets/
│   │   └── images/
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🔧 Configuration

### Spotify API Setup

1. Go to [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. Create a new app
3. Copy Client ID and Client Secret
4. Add to `.env` file

### Environment Variables

```env
VITE_SPOTIFY_CLIENT_ID=your_client_id_here
VITE_SPOTIFY_CLIENT_SECRET=your_client_secret_here
```

### Deployment Setup

For GitHub Pages deployment:

1. **Deploy to GitHub Pages**:
   ```bash
   npm run build
   npm run deploy
   ```

The app will be available at `https://yourusername.github.io/music-explorer/`

## 🎨 Design Features

- **Music Theme** - Wooden texture background with golden accents
- **Spotify Branding** - Follows Spotify design guidelines
- **Responsive Layout** - Works on desktop, tablet, and mobile
- **Smooth Animations** - Hover effects and transitions
- **Custom Scrollbars** - Themed scrollbar design
- **Loading States** - Animated vinyl record loader

## 🔒 Error Handling

- **ErrorBoundary** - Catches React component errors
- **API Error Handling** - Graceful API failure handling
- **Input Validation** - Form validation and user feedback
- **Fallback UI** - User-friendly error messages

## 🧪 Testing

- **Error Boundary Test** - Click the "🚨 Error Button" to test error handling
- **API Testing** - Search functionality with real Spotify data
- **Responsive Testing** - Test on different screen sizes

## 📈 Performance

- **Token Caching** - Efficient Spotify API token management
- **Image Optimization** - Responsive images with fallbacks
- **Bundle Optimization** - Vite's built-in optimizations
- **Lazy Loading** - Efficient component rendering

## 🤝 Contributing

This is an educational project for RS School. For suggestions or improvements:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📜 License

This project is created for educational purposes as part of RS School curriculum.

## 🙏 Acknowledgments

- **RS School** - For the excellent React course
- **Spotify** - For the comprehensive Web API
- **React Team** - For the amazing framework
- **TypeScript Team** - For type safety

---

**Built with ❤️ for RS School React Course**
