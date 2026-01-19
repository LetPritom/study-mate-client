// Dashboard.jsx
import React, { useContext, useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AuthContext } from '../AuthContex/AuthContext';

// Placeholder user data (replace with real backend data later)
const mockUser = {
  name: "Pritom Hasan",
  photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=387&q=80", // replace with your real photo URL
  email: "pritom@example.com",
  joinDate: "Joined January 2025"
};

const Dashboard = () => {
  // State for future backend data
  const [user] = useState(mockUser);
  const [stats] = useState({
    connections: 14,
    requestsSent: 32,
    sessionsThisWeek: 11
  });
  const [recentActivity] = useState([
    { action: "You sent a partner request to", name: "Rahim Khan", subject: "Physics", time: "1 hour ago" },
    { action: "Connection accepted with", name: "Ayesha Siddika", subject: "English Speaking", time: "Yesterday" },
    { action: "Profile updated - Added", subject: "Web Development", time: "2 days ago" },
    { action: "Received request from", name: "Sabir Ahmed", subject: "Math", time: "4 days ago" }
  ]);

  const {user:photo}= useContext(AuthContext)

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out',
      once: true,
      offset: 120,
    });

    // TODO: Future backend fetch example
    // const fetchData = async () => {
    //   try {
    //     const res = await axios.get('/api/user/dashboard');
    //     setUser(res.data.user);
    //     setStats(res.data.stats);
    //     setRecentActivity(res.data.recentActivity);
    //   } catch (err) {
    //     console.error("Dashboard data fetch error:", err);
    //   }
    // };
    // fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-linear-to-b from-base-200/50 to-base-100 py-10 px-4 md:px-8 lg:px-12">
      <div className="container mx-auto max-w-7xl">
        {/* User Profile Header */}
        <div 
          className="card bg-base-100 shadow-2xl border border-base-200/60 mb-12 overflow-hidden"
          data-aos="fade-down"
        >
          <div className="relative h-48 bg-linear-to-r from-[#f55a00] to-[#ff8c00] opacity-90">
            <div className="absolute -bottom-16 left-8 md:left-12">
              <div className="avatar">
                <div className="w-32 h-32 rounded-full ring ring-[#f55a00] ring-offset-base-100 ring-offset-4 shadow-2xl">
                  <img 
                    src={photo.photoURL} 
                    alt={photo.DisplayName} 
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="card-body pt-20 md:pt-24 pb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-base-content">
              Hey, <span className="bg-linear-to-r from-[#f55a00] to-[#ff8c00] bg-clip-text text-transparent">{photo.DisplayName}</span>!
            </h1>
            <p className="text-lg text-base-content/70 mt-2">
              {user.joinDate} • {user.email}
            </p>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {[
            { title: "My Connections", value: stats.connections, icon: "🤝", gradient: "from-[#f55a00] to-[#ff8c00]" },
            { title: "Requests Sent", value: stats.requestsSent, icon: "📨", gradient: "from-[#ff8c00] to-[#f55a00]" },
            { title: "Sessions This Week", value: stats.sessionsThisWeek, icon: "📚", gradient: "from-[#f55a00] to-[#e04e00]" }
          ].map((stat, index) => (
            <div
              key={index}
              data-aos="zoom-in-up"
              data-aos-delay={`${index * 150}`}
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-500 border border-base-200/60 hover:border-[#f55a00]/40 group"
            >
              <div className={`h-2 bg-gradient-to-r ${stat.gradient} group-hover:h-3 transition-all duration-300`}></div>
              <div className="card-body items-center text-center p-8">
                <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${stat.gradient} flex items-center justify-center text-4xl text-white mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                  {stat.icon}
                </div>
                <h2 className="text-5xl font-extrabold text-base-content">{stat.value}</h2>
                <p className="text-xl font-medium text-base-content/80">{stat.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Two Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Activity */}
          <div className="card bg-base-100 shadow-xl border border-base-200/60" data-aos="fade-right">
            <div className="card-body p-8">
              <h2 className="card-title text-3xl mb-6 flex items-center gap-3">
                <span className="text-[#f55a00]">Recent Activity</span>
              </h2>
              <div className="space-y-4">
                {recentActivity.map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-xl hover:bg-base-200/50 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-[#f55a00]/10 flex items-center justify-center text-[#f55a00] text-2xl flex-shrink-0">
                      {item.action.includes("sent") || item.action.includes("Received") ? "↔" : "✏️"}
                    </div>
                    <div className="flex-1">
                      <p className="text-base-content">
                        {item.action} <span className="font-semibold text-[#f55a00]">{item.name || item.subject}</span>
                        {item.subject && item.name && <span className="text-base-content/80"> • {item.subject}</span>}
                      </p>
                      <p className="text-sm text-base-content/60 mt-1">{item.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="card bg-base-100 shadow-xl border border-base-200/60" data-aos="fade-left">
            <div className="card-body p-8">
              <h2 className="card-title text-3xl mb-6 flex items-center gap-3">
                <span className="text-[#f55a00]">Quick Actions</span>
              </h2>

              <div className="grid grid-cols-1 gap-4">
                {[
                  "Find New Study Partners",
                  "Update My Profile",
                  "View All Connections",
                  "Check Partner Requests"
                ].map((action, i) => (
                  <button
                    key={i}
                    className="btn btn-lg justify-start bg-base-200 hover:bg-[#f55a00]/10 hover:text-[#f55a00] border-none text-left transition-colors duration-300"
                  >
                    <span className="text-2xl mr-3">⚡</span>
                    {action}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;