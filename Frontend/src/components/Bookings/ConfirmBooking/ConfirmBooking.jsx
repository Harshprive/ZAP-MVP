import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Gift, Star, ShoppingBag, Trophy } from 'lucide-react';

const CelebrationCracker = () => {
  const [isExploded, setIsExploded] = useState(false);
  const [showReward, setShowReward] = useState(false);
  const [particles, setParticles] = useState([]);

  const createParticles = () => {
    const newParticles = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      x: 50,
      y: 50,
      size: Math.random() * 8 + 4,
      color: [
        '#FFD700', // Gold
        '#FF6B6B', // Red
        '#4ECDC4', // Cyan
        '#45B7D1', // Blue
        '#96CEB4', // Green
        '#FFEEAD', // Light Yellow
      ][Math.floor(Math.random() * 6)],
      velocity: {
        x: (Math.random() - 0.5) * 15,
        y: (Math.random() - 0.5) * 15,
      },
      angle: Math.random() * 360,
      spin: Math.random() * 360,
    }));
    setParticles(newParticles);
  };

  const handleCrackerClick = () => {
    if (!isExploded) {
      setIsExploded(true);
      createParticles();
      setTimeout(() => setShowReward(true), 1000);
    }
  };

  return (
    <div className="relative w-full max-w-md mx-auto h-[500px] flex items-center justify-center bg-gradient-to-b from-purple-50 to-pink-50 rounded-2xl overflow-hidden mt-32">
      {/* Particles Animation */}
      {isExploded &&
        particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-3 h-3 animate-particle"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              background: particle.color,
              transform: `rotate(${particle.angle}deg)`,
              animation: 'particle 1s ease-out forwards',
            }}
          />
        ))}

      {/* Main Cracker */}
      {!isExploded && (
        <div
          className="cursor-pointer transform transition-transform hover:scale-110"
          onClick={handleCrackerClick}
        >
          <div className="relative animate-bounce">
            <Gift size={80} className="text-purple-500" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xs font-bold">
              TAP!
            </div>
          </div>
          <p className="text-center mt-4 text-purple-600 font-semibold animate-pulse">
            Click to reveal your reward!
          </p>
        </div>
      )}

      {/* Reward Animation */}
      {showReward && (
        <div className="text-center animate-scale-up">
          <div className="bg-white p-6 rounded-2xl shadow-xl">
            <div className="flex justify-center mb-4">
              <Trophy className="w-16 h-16 text-yellow-500 animate-tada" />
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Booking Successful! 🎉
            </h2>

            <div className="space-y-4">
              <div className="bg-green-50 p-3 rounded-lg">
                <p className="text-green-600 font-medium">
                  Order #123456 Confirmed
                </p>
              </div>

              <div className="flex justify-center space-x-2">
                <Star className="w-5 h-5 text-yellow-500 animate-spin-slow" />
                <Star className="w-5 h-5 text-yellow-500 animate-spin-slow" />
                <Star className="w-5 h-5 text-yellow-500 animate-spin-slow" />
              </div>

              <div className="bg-purple-50 p-3 rounded-lg">
                <p className="text-purple-600">Thank you for shopping with us!</p>
              </div>

              <Link to="/services/tracker">
                <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition duration-200 flex items-center justify-center space-x-2">
                  <ShoppingBag className="w-4 h-4" />
                  <span>View Order Details</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes particle {
          0% {
            transform: translate(0, 0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translate(
              ${() => Math.random() * 200 - 100}px,
              ${() => Math.random() * 200 - 100}px
            )
              rotate(${() => Math.random() * 360}deg);
            opacity: 0;
          }
        }
        @keyframes scale-up {
          0% {
            transform: scale(0.5);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        @keyframes tada {
          0% {
            transform: scale(1);
          }
          10%,
          20% {
            transform: scale(0.9) rotate(-3deg);
          }
          30%,
          50%,
          70%,
          90% {
            transform: scale(1.1) rotate(3deg);
          }
          40%,
          60%,
          80% {
            transform: scale(1.1) rotate(-3deg);
          }
          100% {
            transform: scale(1) rotate(0);
          }
        }
        .animate-tada {
          animation: tada 1.5s ease infinite;
        }
        .animate-scale-up {
          animation: scale-up 0.5s ease-out forwards;
        }
        .animate-spin-slow {
          animation: spin 3s linear infinite;
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default CelebrationCracker;
