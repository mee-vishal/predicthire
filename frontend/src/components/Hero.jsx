import React, { useState, useEffect } from 'react';
import { TrendingUp, Award, Zap, Sparkles, CheckCircle, Lightbulb, Upload, ArrowRight, Trophy, Medal, Crown, Star, Flame } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-br from-slate-50 via-rose-50 to-orange-50">
      {/* Success Stories Section */}
      <SuccessStoriesSection />

      {/* Interactive Demo Section */}
      <InteractiveDemoSection />

      {/* Leaderboard Section */}
      <LeaderboardSection />

      {/* Testimonials Carousel */}
      <TestimonialsSection />

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />

      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(244, 63, 94, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(244, 63, 94, 0.6);
          }
        }
        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease-out forwards;
        }
        .animate-slide-in-right {
          animation: slideInRight 0.8s ease-out forwards;
        }
        .animate-slide-in-up {
          animation: slideInUp 0.8s ease-out forwards;
        }
        .shimmer {
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255, 255, 255, 0.6) 50%,
            transparent 100%
          );
          background-size: 1000px 100%;
          animation: shimmer 2s infinite;
        }
        .pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

// Success Stories Section
const SuccessStoriesSection = () => {
  const [visibleStats, setVisibleStats] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleStats(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('success-stats');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-gradient-to-br from-rose-600 via-rose-500 to-orange-600 py-24 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-300 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">
            Real Results from Real Users
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Join thousands who've transformed their job search with PredictHire
          </p>
        </div>

        {/* Stats Grid */}
        <div id="success-stats" className="grid md:grid-cols-4 gap-8 mb-16">
          {[
            { number: '89%', label: 'Interview Rate Increase', icon: <TrendingUp className="w-8 h-8" />, color: 'from-rose-500 to-orange-500' },
            { number: '3.2x', label: 'More Job Offers', icon: <Award className="w-8 h-8" />, color: 'from-orange-500 to-yellow-500' },
            { number: '15min', label: 'Average Time Saved', icon: <Zap className="w-8 h-8" />, color: 'from-yellow-500 to-green-500' },
            { number: '4.9/5', label: 'User Satisfaction', icon: <Sparkles className="w-8 h-8" />, color: 'from-green-500 to-emerald-500' }
          ].map((stat, idx) => (
            <div
              key={idx}
              className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center border border-white/20 hover:bg-white/20 hover:scale-110 cursor-pointer transition-all duration-500 ${
                visibleStats ? 'animate-slide-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className={`flex justify-center mb-4 text-white bg-gradient-to-br ${stat.color} w-16 h-16 rounded-xl mx-auto items-center`}>
                {stat.icon}
              </div>
              <div className="text-5xl font-bold text-white mb-2 animate-pulse" style={{ animationDuration: '2s' }}>{stat.number}</div>
              <div className="text-white/90 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Success Story Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: 'Sarah Chen',
              role: 'Software Engineer',
              company: 'Google',
              image: '👩‍💻',
              quote: 'PredictHire helped me identify weak spots in my resume. Within 2 weeks, I landed interviews at 5 major tech companies!',
              color: 'from-rose-50 to-pink-50'
            },
            {
              name: 'Michael Rodriguez',
              role: 'Product Manager',
              company: 'Microsoft',
              image: '👨‍💼',
              quote: 'The ATS analysis was eye-opening. I increased my keyword match from 45% to 92% and got my dream job offer.',
              color: 'from-orange-50 to-amber-50'
            },
            {
              name: 'Priya Sharma',
              role: 'Data Scientist',
              company: 'Amazon',
              image: '👩‍🔬',
              quote: 'Amazing tool! The personalized suggestions helped me optimize my resume and I got 3x more interview calls.',
              color: 'from-purple-50 to-indigo-50'
            }
          ].map((story, idx) => (
            <div
              key={idx}
              className={`bg-gradient-to-br ${story.color} rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-3 transform duration-300 border-2 border-white/50 group cursor-pointer`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-orange-400 rounded-full flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                  {story.image}
                </div>
                <div>
                  <div className="font-bold text-gray-800 flex items-center gap-2">
                    {story.name}
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  </div>
                  <div className="text-sm text-gray-600">{story.role}</div>
                  <div className="text-xs text-rose-600 font-semibold">{story.company}</div>
                </div>
              </div>
              <p className="text-gray-700 italic leading-relaxed mb-4">"{story.quote}"</p>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-orange-400 text-xl group-hover:scale-125 transition-transform" style={{ transitionDelay: `${i * 50}ms` }}>⭐</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Interactive Demo Section
const InteractiveDemoSection = () => {
  const [selectedSkill, setSelectedSkill] = useState(0);
  const [resumeScore] = useState({ before: 45, after: 92 });

  const skills = [
    { name: 'Keyword Optimization', improvement: '+47%' },
    { name: 'Format Structure', improvement: '+38%' },
    { name: 'Skills Matching', improvement: '+52%' },
    { name: 'Action Verbs', improvement: '+41%' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-8 py-24">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-gray-800 mb-4">
          See the <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-orange-600">Transformation</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Watch how our AI transforms a basic resume into an ATS-optimized powerhouse
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Before/After Comparison */}
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 border-2 border-red-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-800">Before PredictHire</h3>
              <span className="px-4 py-1.5 bg-red-500 text-white rounded-full text-sm font-semibold">
                {resumeScore.before}% ATS Score
              </span>
            </div>
            <div className="space-y-3">
              {[
                '❌ Generic job descriptions',
                '❌ Missing keywords',
                '❌ Poor formatting',
                '❌ Weak action verbs'
              ].map((item, idx) => (
                <div key={idx} className="text-gray-700 font-medium">{item}</div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-8 border-2 border-green-300">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-800">After PredictHire</h3>
              <span className="px-4 py-1.5 bg-green-500 text-white rounded-full text-sm font-semibold flex items-center gap-1">
                <TrendingUp className="w-4 h-4" />
                {resumeScore.after}% ATS Score
              </span>
            </div>
            <div className="space-y-3">
              {[
                '✅ Quantified achievements',
                '✅ Optimized keywords',
                '✅ ATS-friendly format',
                '✅ Strong action verbs'
              ].map((item, idx) => (
                <div key={idx} className="text-gray-700 font-medium">{item}</div>
              ))}
            </div>
          </div>
        </div>

        {/* Interactive Skills Panel */}
        <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-rose-200">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Key Improvements</h3>
          <div className="space-y-4">
            {skills.map((skill, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedSkill(idx)}
                className={`p-4 rounded-xl cursor-pointer transition-all ${
                  selectedSkill === idx
                    ? 'bg-gradient-to-r from-rose-500 to-orange-500 text-white scale-105'
                    : 'bg-gray-50 hover:bg-gray-100'
                }`}
              >
                <div className="flex justify-between items-center">
                  <span className="font-semibold">{skill.name}</span>
                  <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                    selectedSkill === idx ? 'bg-white/20' : 'bg-green-100 text-green-700'
                  }`}>
                    {skill.improvement}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-gradient-to-br from-rose-50 to-orange-50 rounded-xl border border-rose-200">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-6 h-6 text-rose-600 flex-shrink-0 mt-1" />
              <div>
                <div className="font-semibold text-gray-800 mb-2">Pro Tip</div>
                <p className="text-sm text-gray-600">
                  Focus on {skills[selectedSkill].name.toLowerCase()} to see immediate improvements 
                  in your ATS compatibility score.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Leaderboard Section
const LeaderboardSection = () => {
  const [activeTab, setActiveTab] = useState('weekly');
  const [visibleLeaderboard, setVisibleLeaderboard] = useState(false);
  const [animateChange, setAnimateChange] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleLeaderboard(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('leaderboard');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  // Different data for each time period
  const leaderboardData = {
    weekly: [
      { rank: 1, name: 'Alex Thompson', score: 98, improvement: '+47%', streak: 12, avatar: '🚀', company: 'Google' },
      { rank: 2, name: 'Jamie Lee', score: 96, improvement: '+43%', streak: 10, avatar: '💎', company: 'Microsoft' },
      { rank: 3, name: 'Morgan Kim', score: 95, improvement: '+41%', streak: 8, avatar: '⚡', company: 'Amazon' },
      { rank: 4, name: 'Taylor Chen', score: 94, improvement: '+38%', streak: 7, avatar: '⭐', company: 'Meta' },
      { rank: 5, name: 'Jordan Park', score: 93, improvement: '+35%', streak: 6, avatar: '💫', company: 'Apple' },
      { rank: 6, name: 'Casey Brown', score: 92, improvement: '+33%', streak: 5, avatar: '🌟', company: 'Netflix' },
      { rank: 7, name: 'Riley Davis', score: 91, improvement: '+31%', streak: 4, avatar: '✨', company: 'Tesla' },
      { rank: 8, name: 'Drew Wilson', score: 90, improvement: '+29%', streak: 3, avatar: '💥', company: 'Uber' },
      { rank: 9, name: 'Sam Martinez', score: 89, improvement: '+27%', streak: 3, avatar: '🔥', company: 'Adobe' },
      { rank: 10, name: 'Avery Jones', score: 88, improvement: '+25%', streak: 2, avatar: '🎯', company: 'Spotify' }
    ],
    monthly: [
      { rank: 1, name: 'Sarah Johnson', score: 99, improvement: '+52%', streak: 28, avatar: '👑', company: 'Apple' },
      { rank: 2, name: 'Mike Rodriguez', score: 98, improvement: '+49%', streak: 25, avatar: '🌠', company: 'Google' },
      { rank: 3, name: 'Emily Chen', score: 97, improvement: '+46%', streak: 22, avatar: '💪', company: 'Amazon' },
      { rank: 4, name: 'David Kim', score: 96, improvement: '+44%', streak: 20, avatar: '🎖️', company: 'Meta' },
      { rank: 5, name: 'Lisa Wang', score: 95, improvement: '+42%', streak: 18, avatar: '🏅', company: 'Netflix' },
      { rank: 6, name: 'Chris Taylor', score: 94, improvement: '+40%', streak: 16, avatar: '🌈', company: 'Tesla' },
      { rank: 7, name: 'Anna Patel', score: 93, improvement: '+38%', streak: 14, avatar: '💼', company: 'Microsoft' },
      { rank: 8, name: 'James Lee', score: 92, improvement: '+36%', streak: 12, avatar: '🎨', company: 'Adobe' },
      { rank: 9, name: 'Maria Garcia', score: 91, improvement: '+34%', streak: 10, avatar: '🚁', company: 'Airbnb' },
      { rank: 10, name: 'Kevin Nguyen', score: 90, improvement: '+32%', streak: 8, avatar: '🎪', company: 'Uber' }
    ],
    'all-time': [
      { rank: 1, name: 'Jessica Palmer', score: 100, improvement: '+58%', streak: 90, avatar: '🏆', company: 'Google' },
      { rank: 2, name: 'Robert Chang', score: 99, improvement: '+56%', streak: 85, avatar: '🥇', company: 'Apple' },
      { rank: 3, name: 'Amanda White', score: 99, improvement: '+54%', streak: 80, avatar: '🌟', company: 'Microsoft' },
      { rank: 4, name: 'Daniel Brown', score: 98, improvement: '+52%', streak: 75, avatar: '💯', company: 'Amazon' },
      { rank: 5, name: 'Sophie Turner', score: 98, improvement: '+50%', streak: 70, avatar: '🎯', company: 'Meta' },
      { rank: 6, name: 'Michael Scott', score: 97, improvement: '+48%', streak: 65, avatar: '🔝', company: 'Netflix' },
      { rank: 7, name: 'Rachel Green', score: 97, improvement: '+46%', streak: 60, avatar: '💎', company: 'Tesla' },
      { rank: 8, name: 'Tom Anderson', score: 96, improvement: '+44%', streak: 55, avatar: '⚡', company: 'Adobe' },
      { rank: 9, name: 'Grace Liu', score: 96, improvement: '+42%', streak: 50, avatar: '🌺', company: 'Spotify' },
      { rank: 10, name: 'Oliver Smith', score: 95, improvement: '+40%', streak: 45, avatar: '🎸', company: 'Airbnb' }
    ]
  };

  const topPerformers = leaderboardData[activeTab];

  const handleTabChange = (tab) => {
    setAnimateChange(true);
    setTimeout(() => {
      setActiveTab(tab);
      setAnimateChange(false);
    }, 300);
  };

  const getRankBadge = (rank) => {
    switch(rank) {
      case 1:
        return <Crown className="w-6 h-6 text-yellow-500" />;
      case 2:
        return <Medal className="w-6 h-6 text-gray-400" />;
      case 3:
        return <Medal className="w-6 h-6 text-orange-600" />;
      default:
        return <Trophy className="w-5 h-5 text-gray-400" />;
    }
  };

  const getRankStyle = (rank) => {
    switch(rank) {
      case 1:
        return 'bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 pulse-glow';
      case 2:
        return 'bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500';
      case 3:
        return 'bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600';
      default:
        return 'bg-white border-2 border-gray-200';
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 py-24 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-rose-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10" id="leaderboard">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-500/20 to-orange-500/20 px-4 py-2 rounded-full border border-rose-500/30 mb-4">
            <Flame className="w-5 h-5 text-orange-400" />
            <span className="text-sm font-semibold text-orange-300">Top Performers This Week</span>
          </div>
          <h2 className="text-5xl font-bold text-white mb-4">
            Resume Optimization <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-400">Leaderboard</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            See who's crushing it with the highest ATS scores and biggest improvements
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          {['weekly', 'monthly', 'all-time'].map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all transform ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-rose-500 to-orange-500 text-white shadow-lg scale-110'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:scale-105'
              }`}
            >
              <span className="flex items-center gap-2">
                {tab === 'weekly' && '📅'}
                {tab === 'monthly' && '📊'}
                {tab === 'all-time' && '🏅'}
                {tab.charAt(0).toUpperCase() + tab.slice(1).replace('-', ' ')}
              </span>
            </button>
          ))}
        </div>

        {/* Top 3 Podium */}
        <div className={`grid md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto transition-all duration-300 ${
          animateChange ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
        }`}>
          {/* 2nd Place */}
          <div className={`${visibleLeaderboard ? 'animate-slide-in-up' : 'opacity-0'} order-1 md:order-1`} style={{ animationDelay: '0.2s' }}>
            <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl p-6 text-center border-2 border-gray-500 hover:scale-105 transition-transform duration-300">
              <div className="text-6xl mb-4 animate-bounce" style={{ animationDuration: '2s' }}>{topPerformers[1].avatar}</div>
              <div className="flex justify-center mb-3">
                <Medal className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">{topPerformers[1].name}</h3>
              <div className="text-sm text-gray-400 mb-2">{topPerformers[1].company}</div>
              <div className="text-4xl font-bold text-gray-300 mb-2">{topPerformers[1].score}</div>
              <div className="inline-flex items-center gap-1 bg-green-500/20 px-3 py-1 rounded-full mb-2">
                <TrendingUp className="w-4 h-4 text-green-400" />
                <span className="text-green-400 font-semibold text-sm">{topPerformers[1].improvement}</span>
              </div>
              <div className="flex items-center justify-center gap-1 text-orange-400 text-sm">
                <Flame className="w-4 h-4" />
                <span>{topPerformers[1].streak} days</span>
              </div>
            </div>
          </div>

          {/* 1st Place - Larger */}
          <div className={`${visibleLeaderboard ? 'animate-slide-in-up' : 'opacity-0'} order-2 md:order-2 md:-mt-8`} style={{ animationDelay: '0.1s' }}>
            <div className="bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500 rounded-2xl p-8 text-center border-4 border-yellow-300 shadow-2xl pulse-glow relative overflow-hidden hover:scale-110 transition-transform duration-300">
              <div className="absolute inset-0 shimmer opacity-50" />
              <div className="relative z-10">
                <div className="text-7xl mb-4 animate-bounce" style={{ animationDuration: '1.5s' }}>{topPerformers[0].avatar}</div>
                <div className="flex justify-center mb-4">
                  <Crown className="w-16 h-16 text-yellow-900 animate-pulse" />
                </div>
                <h3 className="text-3xl font-bold text-yellow-900 mb-2">{topPerformers[0].name}</h3>
                <div className="text-sm text-yellow-800 mb-2 font-semibold">{topPerformers[0].company}</div>
                <div className="text-5xl font-bold text-yellow-900 mb-3">{topPerformers[0].score}</div>
                <div className="inline-flex items-center gap-1 bg-yellow-900/30 px-4 py-2 rounded-full mb-3">
                  <TrendingUp className="w-5 h-5 text-yellow-900" />
                  <span className="text-yellow-900 font-bold">{topPerformers[0].improvement}</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-yellow-900">
                  <Flame className="w-5 h-5 animate-pulse" />
                  <span className="font-semibold">{topPerformers[0].streak} day streak</span>
                </div>
              </div>
            </div>
          </div>

          {/* 3rd Place */}
          <div className={`${visibleLeaderboard ? 'animate-slide-in-up' : 'opacity-0'} order-3`} style={{ animationDelay: '0.3s' }}>
            <div className="bg-gradient-to-br from-orange-700 to-orange-800 rounded-2xl p-6 text-center border-2 border-orange-500 hover:scale-105 transition-transform duration-300">
              <div className="text-6xl mb-4 animate-bounce" style={{ animationDuration: '2.5s' }}>{topPerformers[2].avatar}</div>
              <div className="flex justify-center mb-3">
                <Medal className="w-12 h-12 text-orange-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">{topPerformers[2].name}</h3>
              <div className="text-sm text-orange-300 mb-2">{topPerformers[2].company}</div>
              <div className="text-4xl font-bold text-orange-200 mb-2">{topPerformers[2].score}</div>
              <div className="inline-flex items-center gap-1 bg-green-500/20 px-3 py-1 rounded-full mb-2">
                <TrendingUp className="w-4 h-4 text-green-400" />
                <span className="text-green-400 font-semibold text-sm">{topPerformers[2].improvement}</span>
              </div>
              <div className="flex items-center justify-center gap-1 text-orange-300 text-sm">
                <Flame className="w-4 h-4" />
                <span>{topPerformers[2].streak} days</span>
              </div>
            </div>
          </div>
        </div>

        {/* Rest of Leaderboard */}
        <div className={`max-w-4xl mx-auto space-y-3 transition-all duration-300 ${
          animateChange ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
        }`}>
          {topPerformers.slice(3).map((user, idx) => (
            <div
              key={`${activeTab}-${user.rank}`}
              className={`bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700 hover:bg-gray-800 hover:border-rose-500 transition-all hover:scale-102 cursor-pointer group ${
                visibleLeaderboard ? 'animate-slide-in-left' : 'opacity-0'
              }`}
              style={{ animationDelay: `${0.4 + idx * 0.05}s` }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 flex-1">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-600 rounded-xl font-bold text-gray-300 group-hover:from-rose-600 group-hover:to-orange-600 group-hover:text-white transition-all">
                    #{user.rank}
                  </div>
                  <div className="text-4xl group-hover:scale-110 transition-transform">{user.avatar}</div>
                  <div className="flex-1">
                    <div className="font-semibold text-white flex items-center gap-2">
                      {user.name}
                      {user.rank <= 5 && <Star className="w-4 h-4 text-yellow-400" />}
                    </div>
                    <div className="flex items-center gap-3 text-sm flex-wrap">
                      <span className="text-gray-400">{user.company}</span>
                      <span className="text-gray-500">•</span>
                      <span className="text-gray-400">Score: <span className="text-white font-semibold">{user.score}</span></span>
                      <span className="text-green-400 flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                        {user.improvement}
                      </span>
                      <span className="text-orange-400 flex items-center gap-1">
                        <Flame className="w-3 h-3" />
                        {user.streak} days
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {getRankBadge(user.rank)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Your Rank CTA */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-rose-500/10 to-orange-500/10 backdrop-blur-sm rounded-2xl p-8 border border-rose-500/30 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-3">Want to see your name here?</h3>
            <p className="text-gray-400 mb-6">Upload your resume and start climbing the leaderboard today!</p>
            <button className="px-8 py-4 bg-gradient-to-r from-rose-500 to-orange-500 text-white font-bold rounded-xl hover:shadow-2xl transition-all hover:scale-105 flex items-center gap-2 mx-auto">
              <Upload className="w-5 h-5" />
              Start Your Journey
              <Star className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Testimonials Section
const TestimonialsSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-8 py-24">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-gray-800 mb-4">
          What Our Users Say
        </h2>
        <p className="text-xl text-gray-600">
          Join 50,000+ professionals who trust PredictHire
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl p-6 shadow-lg border border-rose-100 hover:shadow-xl transition-all hover:-translate-y-1"
          >
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-orange-400 text-xl">⭐</span>
              ))}
            </div>
            <p className="text-gray-700 mb-4 italic">
              "This tool completely transformed my job search. The AI recommendations were spot-on!"
            </p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-orange-400 rounded-full" />
              <div>
                <div className="font-semibold text-gray-800">User {idx + 1}</div>
                <div className="text-sm text-gray-600">Professional</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// CTA Section
const CTASection = () => {
  return (
    <div className="bg-gradient-to-r from-rose-600 via-rose-500 to-orange-600 py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-300 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-8 text-center relative z-10">
        <h2 className="text-5xl font-bold text-white mb-6">
          Ready to Land Your Dream Job?
        </h2>
        <p className="text-xl text-white/90 mb-8">
          Join thousands of successful job seekers. Start optimizing your resume today!
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="group px-10 py-5 bg-white text-rose-600 font-bold rounded-xl hover:shadow-2xl transition-all hover:scale-105 transform flex items-center gap-2">
            <Upload className="w-6 h-6" />
            Upload Your Resume
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-10 py-5 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all">
            Schedule a Demo
          </button>
        </div>
      </div>
    </div>
  );
};

// Footer
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-rose-600 to-orange-600 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">PredictHire</span>
            </div>
            <p className="text-gray-400">
              AI-powered resume optimization for the modern job seeker.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Product</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2024 PredictHire. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default HeroSection;