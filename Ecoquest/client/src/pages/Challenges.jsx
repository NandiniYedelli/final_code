import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Challenges = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [userStats] = useState({
    totalPoints: 2450,
    challengesCompleted: 8,
    currentStreak: 12,
  });

  const [challenges] = useState([
    {
      id: 1,
      title: "Earth Day Challenge",
      description: "Complete 5 environmental activities to celebrate Earth Day",
      category: "General",
      difficulty: "Medium",
      points: 500,
      duration: "1 week",
      participants: 1250,
      completed: false,
      progress: 0,
      icon: "🌍",
      deadline: "3 days left",
      requirements: [
        "Plant a tree or plant",
        "Reduce energy consumption by 20%",
        "Complete 3 recycling activities",
        "Share environmental tips on social media",
        "Participate in a community clean-up",
      ],
    },
    {
      id: 2,
      title: "Water Conservation Week",
      description: "Track and reduce your daily water usage for a week",
      category: "Water",
      difficulty: "Easy",
      points: 300,
      duration: "1 week",
      participants: 890,
      completed: true,
      progress: 100,
      icon: "💧",
      deadline: "Completed",
      requirements: [
        "Track daily water usage",
        "Reduce shower time by 2 minutes",
        "Fix any leaking taps",
        "Use a bucket for car washing",
        "Collect rainwater for plants",
      ],
    },
    {
      id: 3,
      title: "Plastic-Free Month",
      description: "Avoid single-use plastics for 30 days",
      category: "Waste",
      difficulty: "Hard",
      points: 750,
      duration: "1 month",
      participants: 2100,
      completed: false,
      progress: 45,
      icon: "🚫",
      deadline: "2 weeks left",
      requirements: [
        "Use reusable water bottles",
        "Bring your own shopping bags",
        "Avoid plastic straws and cutlery",
        "Choose products with minimal packaging",
        "Find plastic-free alternatives for daily items",
      ],
    },
    {
      id: 4,
      title: "Energy Efficiency Challenge",
      description: "Reduce your carbon footprint through energy conservation",
      category: "Energy",
      difficulty: "Medium",
      points: 400,
      duration: "2 weeks",
      participants: 650,
      completed: false,
      progress: 20,
      icon: "⚡",
      deadline: "1 week left",
      requirements: [
        "Switch to LED bulbs",
        "Unplug unused electronics",
        "Use natural lighting during day",
        "Set thermostat 2°C higher/lower",
        "Use energy-efficient appliances",
      ],
    },
    {
      id: 5,
      title: "Biodiversity Explorer",
      description: "Learn about and document local plant and animal species",
      category: "Nature",
      difficulty: "Easy",
      points: 250,
      duration: "2 weeks",
      participants: 420,
      completed: true,
      progress: 100,
      icon: "🦋",
      deadline: "Completed",
      requirements: [
        "Identify 10 local plant species",
        "Document 5 different bird species",
        "Learn about local ecosystem",
        "Create a nature journal",
        "Share findings with community",
      ],
    },
    {
      id: 6,
      title: "Zero Waste Challenge",
      description: "Minimize waste generation for 2 weeks",
      category: "Waste",
      difficulty: "Hard",
      points: 600,
      duration: "2 weeks",
      participants: 1800,
      completed: false,
      progress: 0,
      icon: "♻️",
      deadline: "5 days left",
      requirements: [
        "Compost organic waste",
        "Avoid packaged foods",
        "Repair instead of replacing",
        "Donate unused items",
        "Use reusable containers",
      ],
    },
  ]);

  const categories = ["all", "General", "Water", "Waste", "Energy", "Nature"];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case "easy":
        return "#4CAF50";
      case "medium":
        return "#FF9800";
      case "hard":
        return "#F44336";
      default:
        return "#2196F3";
    }
  };

  const filteredChallenges = challenges.filter((challenge) => {
    if (activeFilter === "all") return true;
    return challenge.category === activeFilter;
  });

  return (
    <div className="challenges-page">
      <nav className="challenges-navbar">
        <div className="nav-brand">
          <Link to="/">
            <h1>🌍 EcoQuest</h1>
          </Link>
        </div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/llearninghub">Learning Hub</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/login">Login</Link>
        </div>
      </nav>
      <header className="challenges-header">
        <div className="header-content">
          <div className="welcome-section">
            <h1>🌍 Environmental Challenges</h1>
            <p>Take on challenges and make a real impact on the environment</p>
          </div>
          <div className="header-stats">
            <div className="stat-card">
              <div className="stat-icon">🏆</div>
              <div className="stat-info">
                <h3>{userStats.totalPoints.toLocaleString()}</h3>
                <p>Total Points</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">✅</div>
              <div className="stat-info">
                <h3>{userStats.challengesCompleted}</h3>
                <p>Completed</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">🔥</div>
              <div className="stat-info">
                <h3>{userStats.currentStreak}</h3>
                <p>Day Streak</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="challenges-content">
        {/* Filter Tabs */}
        <div className="filter-tabs">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${activeFilter === category ? "active" : ""}`}
              onClick={() => setActiveFilter(category)}
            >
              {category === "all" ? "All Challenges" : category}
            </button>
          ))}
        </div>

        {/* Challenges Grid */}
        <div className="challenges-grid">
          {filteredChallenges.map((challenge) => (
            <div key={challenge.id} className="challenge-card">
              <div className="challenge-header">
                <div className="challenge-icon">{challenge.icon}</div>
                <div className="challenge-status">
                  {challenge.completed ? "✅" : "🎯"}
                </div>
              </div>

              <div className="challenge-content">
                <h3>{challenge.title}</h3>
                <p className="challenge-description">{challenge.description}</p>

                <div className="challenge-meta">
                  <span
                    className="difficulty-badge"
                    style={{ backgroundColor: getDifficultyColor(challenge.difficulty) }}
                  >
                    {challenge.difficulty}
                  </span>
                  <span className="category-badge">{challenge.category}</span>
                  <span className="duration-badge">⏱️ {challenge.duration}</span>
                </div>

                <div className="challenge-stats">
                  <div className="stat">
                    <span className="stat-icon">🏆</span>
                    <span className="stat-value">{challenge.points} points</span>
                  </div>
                  <div className="stat">
                    <span className="stat-icon">👥</span>
                    <span className="stat-value">{challenge.participants} participants</span>
                  </div>
                  <div className="stat">
                    <span className="stat-icon">⏰</span>
                    <span className="stat-value">{challenge.deadline}</span>
                  </div>
                </div>

                {!challenge.completed && challenge.progress > 0 && (
                  <div className="progress-section">
                    <div className="progress-header">
                      <span>Progress</span>
                      <span>{challenge.progress}%</span>
                    </div>
                    <div className="progress-bar">
                      <div
                        className="progress-fill"
                        style={{ width: `${challenge.progress}%` }}
                      />
                    </div>
                  </div>
                )}

                <div className="challenge-requirements">
                  <h4>Requirements:</h4>
                  <ul>
                    {challenge.requirements.slice(0, 3).map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                    {challenge.requirements.length > 3 && (
                      <li>+{challenge.requirements.length - 3} more...</li>
                    )}
                  </ul>
                </div>
              </div>

              <div className="challenge-actions">
                <button className="btn btn-primary">
                  {challenge.completed ? "View Details" : "Start Challenge"}
                </button>
                <button className="btn btn-outline">
                  Share
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <section className="cta-section">
          <div className="cta-content">
            <h2>Can't find the right challenge?</h2>
            <p>Create your own environmental challenge and inspire others!</p>
            <div className="cta-buttons">
              <button className="btn btn-primary btn-large">
                Create Challenge
              </button>
              <Link to="/llearninghub" className="btn btn-outline btn-large">
                Continue Learning
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Challenges;