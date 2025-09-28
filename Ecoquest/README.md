# 🌍 EcoQuest - Environmental Learning Platform

A comprehensive React-based web application for environmental education, featuring gamified learning experiences, challenges, and progress tracking.

## 🚀 Features

- **Homepage**: Landing page with features overview and call-to-action
- **Learning Hub**: Interactive curriculum, quizzes, and stories
- **Challenges**: Environmental challenges with progress tracking
- **Dashboard**: User progress and statistics overview
- **Authentication**: Login and registration system
- **Responsive Design**: Mobile-friendly interface

## 📁 Project Structure

```
Ecoquest/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Main application pages
│   │   │   ├── HomePage.jsx
│   │   │   ├── llearninghub.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   └── Challenges.jsx
│   │   ├── context/       # React context providers
│   │   ├── services/      # API services
│   │   └── utils/         # Utility functions
│   └── package.json
├── server/                # Node.js backend
│   ├── controllers/       # Route controllers
│   ├── models/           # Database models
│   ├── routes/           # API routes
│   └── server.js
└── README.md
```

## 🛠️ Technologies Used

### Frontend
- **React 19** - UI framework
- **React Router DOM** - Client-side routing
- **Vite** - Build tool and dev server
- **CSS3** - Styling with custom components
- **Axios** - HTTP client for API calls

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database (configured but not implemented)

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Ecoquest
   ```

2. **Install frontend dependencies**
   ```bash
   cd client
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   cd ../server
   npm install
   ```

### Running the Application

1. **Start the frontend development server**
   ```bash
   cd client
   npm run dev
   ```
   The application will be available at `http://localhost:5173`

2. **Start the backend server** (optional)
   ```bash
   cd server
   npm start
   ```
   The API will be available at `http://localhost:3000`

## 📱 Pages Overview

### 🏠 Homepage (`/`)
- Hero section with animated statistics
- Feature highlights
- Testimonials
- Call-to-action sections

### 🎓 Learning Hub (`/llearninghub`)
- Curriculum modules with progress tracking
- Interactive quizzes
- Environmental stories
- Achievement system

### 🏆 Challenges (`/challenges`)
- Environmental challenges with different difficulty levels
- Progress tracking
- Community participation
- Points and rewards system

### 📊 Dashboard (`/dashboard`)
- User statistics and progress
- Recent activities
- Upcoming challenges
- Leaderboard

### 🔐 Authentication
- **Login** (`/login`) - User authentication
- **Register** (`/register`) - New user registration

## 🎨 Design Features

- **Responsive Design**: Works on desktop, tablet, and mobile
- **Modern UI**: Clean, intuitive interface with smooth animations
- **Color Scheme**: Green and blue gradient theme representing nature
- **Typography**: Inter font family for readability
- **Icons**: Emoji-based icons for visual appeal

## 🔧 Development

### Available Scripts

In the `client` directory:
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Structure

- **Components**: Reusable UI components in `/src/components/`
- **Pages**: Main application pages in `/src/pages/`
- **Context**: React context for state management
- **Services**: API integration and data fetching
- **Utils**: Helper functions and utilities

## 🌟 Key Features

1. **Gamification**: Points, badges, and leaderboards
2. **Progress Tracking**: Visual progress indicators
3. **Interactive Content**: Quizzes, stories, and challenges
4. **Responsive Navigation**: Consistent navigation across all pages
5. **User Authentication**: Login and registration system
6. **Environmental Focus**: Content centered around sustainability

## 🚀 Future Enhancements

- [ ] Backend API integration
- [ ] User authentication with JWT
- [ ] Database integration
- [ ] Real-time progress tracking
- [ ] Social features and sharing
- [ ] Mobile app development
- [ ] Offline mode support

## 📄 License

This project is part of the EcoQuest environmental education platform.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

---

**Made with 🌍 for a sustainable future**