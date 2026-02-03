import React, { useState, useEffect } from 'react';
import { TrendingUp, Lightbulb, Users, Upload, CheckCircle, Sparkles, Zap, Target, Award, ArrowRight, FileText, BarChart, Brain, Rocket } from 'lucide-react';

const LandingPage = () => {
  const [scrolled, setScrolled] = useState(false);
  const [atsScore, setAtsScore] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Animate ATS score
    const interval = setInterval(() => {
      setAtsScore(prev => (prev >= 95 ? 95 : prev + 1));
    }, 20);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-rose-50 to-orange-50 overflow-hidden">
      {/* Fixed Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-rose-100' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-rose-600 to-orange-600 rounded-lg flex items-center justify-center transform hover:rotate-12 transition-transform">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-rose-600 via-rose-500 to-orange-600 bg-clip-text text-transparent">
                PredictHire
              </span>
            </div>
            
            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-700 hover:text-rose-600 font-medium transition-colors">Features</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-rose-600 font-medium transition-colors">How It Works</a>
              <a href="#pricing" className="text-gray-700 hover:text-rose-600 font-medium transition-colors">Pricing</a>
              <a href="#contact" className="text-gray-700 hover:text-rose-600 font-medium transition-colors">Contact</a>
            </div>
            
            <div className="flex gap-3">
              <button className="px-6 py-2.5 text-rose-600 font-medium hover:bg-rose-50 rounded-lg transition-all">
                Sign up
              </button>
              <button className="px-6 py-2.5 bg-gradient-to-r from-rose-600 to-orange-600 text-white font-medium hover:shadow-xl rounded-lg transition-all shadow-lg shadow-rose-300 hover:scale-105 transform">
                Log in
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 relative">
            {/* Floating badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-100 to-orange-100 px-4 py-2 rounded-full border border-rose-200 animate-bounce">
              <Sparkles className="w-4 h-4 text-rose-600" />
              <span className="text-sm font-semibold text-rose-700">AI-Powered ATS Analysis</span>
            </div>
            
            <div className="space-y-6">
              <p className="text-rose-600 font-semibold text-sm tracking-wide uppercase flex items-center gap-2">
                <Zap className="w-4 h-4" />
                Optimize Your Resume, Maximize Your Potential
              </p>
              <h1 className="text-7xl font-bold leading-tight">
                <span className="text-rose-600 inline-block hover:scale-105 transition-transform cursor-default">Accelerate</span>
                <span className="text-gray-800"> your</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-gray-700 to-rose-600">hiring process</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Beat the bots, impress recruiters. Our AI analyzes your resume against real ATS systems 
                and gives you actionable insights to land more interviews.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="group px-8 py-4 bg-gradient-to-r from-rose-600 to-orange-600 text-white font-semibold rounded-xl hover:shadow-2xl transition-all shadow-lg shadow-rose-300 hover:scale-105 transform flex items-center gap-2">
                <Upload className="w-5 h-5" />
                Upload Resume Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 border-2 border-rose-600 text-rose-600 font-semibold rounded-xl hover:bg-rose-50 transition-all flex items-center gap-2">
                <Rocket className="w-5 h-5" />
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {[
                { icon: <Users className="w-5 h-5" />, value: '50K+', label: 'Users' },
                { icon: <FileText className="w-5 h-5" />, value: '200K+', label: 'Resumes Analyzed' },
                { icon: <Award className="w-5 h-5" />, value: '95%', label: 'Success Rate' }
              ].map((stat, idx) => (
                <div key={idx} className="text-center group hover:scale-110 transition-transform cursor-default">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-rose-100 rounded-lg mb-2 text-rose-600 group-hover:bg-rose-600 group-hover:text-white transition-colors">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Animated Section */}
          <div className="relative">
            {/* Main ATS Scanner Animation */}
            <div className="relative bg-white rounded-3xl p-8 shadow-2xl border-2 border-rose-200">
              {/* ATS Score Circle */}
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <svg className="w-48 h-48 transform -rotate-90">
                    <circle
                      cx="96"
                      cy="96"
                      r="88"
                      stroke="#fecdd3"
                      strokeWidth="12"
                      fill="none"
                    />
                    <circle
                      cx="96"
                      cy="96"
                      r="88"
                      stroke="url(#gradient)"
                      strokeWidth="12"
                      fill="none"
                      strokeDasharray={`${2 * Math.PI * 88}`}
                      strokeDashoffset={`${2 * Math.PI * 88 * (1 - atsScore / 100)}`}
                      className="transition-all duration-1000"
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#e11d48" />
                        <stop offset="100%" stopColor="#ea580c" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center flex-col">
                    <div className="text-5xl font-bold bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-transparent">
                      {atsScore}%
                    </div>
                    <div className="text-sm text-gray-600 font-medium">ATS Score</div>
                  </div>
                </div>
              </div>

              {/* Scanning Animation */}
              <div className="space-y-3 mb-6">
                {[
                  { label: 'Keywords Match', score: 92, delay: '0s' },
                  { label: 'Format Compatibility', score: 98, delay: '0.2s' },
                  { label: 'Section Organization', score: 95, delay: '0.4s' },
                  { label: 'Contact Information', score: 100, delay: '0.6s' }
                ].map((item, idx) => (
                  <div key={idx} className="space-y-1" style={{ animationDelay: item.delay }}>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-700 font-medium">{item.label}</span>
                      <span className="text-rose-600 font-semibold">{item.score}%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-rose-500 to-orange-500 rounded-full transition-all duration-1000"
                        style={{ 
                          width: `${item.score}%`,
                          animationDelay: item.delay
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* AI Insights */}
              <div className="bg-gradient-to-br from-rose-50 to-orange-50 rounded-xl p-4 border border-rose-200">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-rose-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Brain className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800 mb-1 flex items-center gap-2">
                      AI Recommendation
                      <Sparkles className="w-4 h-4 text-rose-600 animate-pulse" />
                    </div>
                    <p className="text-sm text-gray-600">
                      Add 3 more technical skills and quantify your achievements to boost ATS score to 98%
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-rose-400 to-orange-400 rounded-2xl opacity-20 animate-pulse" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-orange-400 to-rose-400 rounded-full opacity-20 animate-bounce" 
                 style={{ animationDuration: '3s' }} />
            
            {/* Floating Icons */}
            <div className="absolute top-10 -left-4 animate-float">
              <div className="w-16 h-16 bg-white rounded-xl shadow-xl flex items-center justify-center border border-rose-100">
                <CheckCircle className="w-8 h-8 text-green-500" />
              </div>
            </div>
            <div className="absolute bottom-20 -right-4 animate-float" style={{ animationDelay: '1s' }}>
              <div className="w-16 h-16 bg-white rounded-xl shadow-xl flex items-center justify-center border border-rose-100">
                <Target className="w-8 h-8 text-rose-600" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 mb-4">
            How It <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-orange-600">Works</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our AI-powered platform analyzes your resume in seconds and provides actionable insights
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Upload className="w-6 h-6" />,
              title: 'Upload Your Resume',
              description: 'Upload resume for ATS-based analysis. Our AI instantly scans your document.',
              color: 'from-rose-500 to-pink-500'
            },
            {
              icon: <BarChart className="w-6 h-6" />,
              title: 'Get Instant Analysis',
              description: 'Check placement probability and get detailed breakdown of your ATS compatibility score.',
              color: 'from-orange-500 to-rose-500'
            },
            {
              icon: <Rocket className="w-6 h-6" />,
              title: 'Improve & Track',
              description: 'Get personalized improvement suggestions and re-upload to track improvements over time.',
              color: 'from-rose-600 to-orange-600'
            }
          ].map((feature, idx) => (
            <div key={idx} className="group relative">
              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-rose-100 hover:border-rose-300 transition-all hover:shadow-2xl hover:-translate-y-2 transform duration-300">
                <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  {React.cloneElement(feature.icon, { className: 'w-7 h-7 text-white' })}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                
                {/* Step number */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-rose-50 rounded-full flex items-center justify-center">
                  <span className="text-rose-600 font-bold">{idx + 1}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="fixed top-20 left-10 w-64 h-64 bg-rose-200 rounded-full opacity-10 blur-3xl animate-pulse" />
      <div className="fixed bottom-20 right-10 w-96 h-96 bg-orange-200 rounded-full opacity-10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default LandingPage;