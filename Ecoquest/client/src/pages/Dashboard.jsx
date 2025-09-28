import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Dashboard = () => {
  const [userStats] = useState({
    totalPoints: 2450,
    level: "Eco Explorer",
    progress: 68,
    streak: 12,
    treesPlanted: 25,
    challengesCompleted: 8,
    quizzesTaken: 15,
    storiesRead: 6,
  });

  const [recentActivities] = useState([
    {
      id: 1,
      type: "quiz",
      title: "Climate Change Quick Quiz",
      points: 100,
      completed: true,
      date: "2 hours ago",
      icon: "🌡️",
    },
    {
      id: 2,
      type: "story",
      title: "The Last Tree on Earth",
      points: 50,
      completed: true,
      date: "1 day ago",
      icon: "🌳",
    },
    {
      id: 3,
      type: "challenge",
      title: "Weekly Recycling Challenge",
      points: 200,
      completed: false,
      date: "3 days ago",
      icon: "♻️",
    },
    {
      id: 4,
      type: "lesson",
      title: "Renewable Energy Basics",
      points: 75,
      completed: true,
      date: "1 week ago",
      icon: "⚡",
    },
  ]);

  const [upcomingChallenges] = useState([
    {
      id: 1,
      title: "Earth Day Challenge",
      description: "Complete 5 environmental activities",
      points: 500,
      deadline: "3 days left",
      participants: 1250,
      icon: "🌍",
    },
    {
      id: 2,
      title: "Water Conservation Week",
      description: "Track your daily water usage",
      points: 300,
      deadline: "1 week left",
      participants: 890,
      icon: "💧",
    },
    {
      id: 3,
      title: "Plastic-Free Month",
      description: "Avoid single-use plastics for 30 days",
      points: 750,
      deadline: "2 weeks left",
      participants: 2100,
      icon: "🚫",
    },
  ]);

  const [leaderboard] = useState([
    { rank: 1, name: "Priya Sharma", points: 3200, school: "Delhi Public School" },
    { rank: 2, name: "Arjun Patel", points: 2950, school: "Kendriya Vidyalaya" },
    { rank: 3, name: "Sneha Kumar", points: 2800, school: "St. Mary's School" },
    { rank: 4, name: "Rahul Singh", points: 2650, school: "Modern School" },
    { rank: 5, name: "Ananya Gupta", points: 2500, school: "DPS International" },
  ]);

  return (
    <div className="dashboard-page">
      <nav className="dashboard-navbar">
        <div className="nav-brand">
          <Link to="/">
            <h1>🌍 EcoQuest</h1>
          </Link>
        </div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/llearninghub">Learning Hub</Link>
          <Link to="/challenges">Challenges</Link>
          <Link to="/login">Login</Link>
        </div>
      </nav>
      <header className="dashboard-header">
        <div className="header-content">
          <div className="welcome-section">
            <h1>🌍 Welcome to EcoQuest Dashboard</h1>
            <p>Track your environmental learning journey</p>
          </div>
          <div className="header-actions">
            <Link to="/llearninghub" className="btn btn-outline">
              Continue Learning
            </Link>
            <Link to="/challenges" className="btn btn-primary">
              View Challenges
            </Link>
          </div>
        </div>
      </header>

      <main className="dashboard-content">
        {/* Stats Overview */}
        <section className="stats-overview">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">🏆</div>
              <div className="stat-info">
                <h3>{userStats.totalPoints.toLocaleString()}</h3>
                <p>Total Points</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">🔥</div>
              <div className="stat-info">
                <h3>{userStats.streak}</h3>
                <p>Day Streak</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">🌳</div>
              <div className="stat-info">
                <h3>{userStats.treesPlanted}</h3>
                <p>Trees Planted</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">🎯</div>
              <div className="stat-info">
                <h3>{userStats.challengesCompleted}</h3>
                <p>Challenges Completed</p>
              </div>
            </div>
          </div>
        </section>

        <div className="dashboard-grid">
          {/* Progress Section */}
          <section className="progress-section">
            <h2>Learning Progress</h2>
            <div className="progress-card">
              <div className="progress-header">
                <h3>Current Level: {userStats.level}</h3>
                <span className="level-badge">{userStats.level}</span>
              </div>
              <div className="progress-bar-container">
                <div
                  className="progress-bar-fill"
                  style={{ width: `${userStats.progress}%` }}
                />
                <span className="progress-text">{userStats.progress}%</span>
              </div>
              <div className="progress-stats">
                <div className="stat">
                  <span>📚 {userStats.quizzesTaken} Quizzes</span>
                </div>
                <div className="stat">
                  <span>📖 {userStats.storiesRead} Stories</span>
                </div>
              </div>
            </div>
          </section>

          {/* Recent Activities */}
          <section className="recent-activities">
            <h2>Recent Activities</h2>
            <div className="activities-list">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="activity-item">
                  <div className="activity-icon">{activity.icon}</div>
                  <div className="activity-content">
                    <h4>{activity.title}</h4>
                    <p>
                      {activity.completed ? "Completed" : "In Progress"} • {activity.date}
                    </p>
                  </div>
                  <div className="activity-points">
                    {activity.completed ? `+${activity.points}` : "Pending"}
                  </div>
                </div>
              ))}
            </div>
            <Link to="/llearninghub" className="view-all-link">
              View All Activities →
            </Link>
          </section>

          {/* Upcoming Challenges */}
          <section className="upcoming-challenges">
            <h2>Upcoming Challenges</h2>
            <div className="challenges-list">
              {upcomingChallenges.map((challenge) => (
                <div key={challenge.id} className="challenge-card">
                  <div className="challenge-icon">{challenge.icon}</div>
                  <div className="challenge-content">
                    <h4>{challenge.title}</h4>
                    <p>{challenge.description}</p>
                    <div className="challenge-meta">
                      <span className="deadline">{challenge.deadline}</span>
                      <span className="participants">
                        {challenge.participants} participants
                      </span>
                    </div>
                  </div>
                  <div className="challenge-points">
                    <span>+{challenge.points} pts</span>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/challenges" className="view-all-link">
              View All Challenges →
            </Link>
          </section>

          {/* Leaderboard */}
          <section className="leaderboard-section">
            <h2>Top Performers</h2>
            <div className="leaderboard-card">
              <div className="leaderboard-list">
                {leaderboard.map((user) => (
                  <div key={user.rank} className="leaderboard-item">
                    <div className="rank">#{user.rank}</div>
                    <div className="user-info">
                      <h4>{user.name}</h4>
                      <p>{user.school}</p>
                    </div>
                    <div className="user-points">{user.points.toLocaleString()}</div>
                  </div>
                ))}
              </div>
              <Link to="/leaderboard" className="view-all-link">
                View Full Leaderboard →
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;