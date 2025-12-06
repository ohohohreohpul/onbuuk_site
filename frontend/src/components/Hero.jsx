import React, { useState, useEffect, useRef } from 'react';
import { Button } from './ui/button';
import { ArrowRight, Check, Calendar, Clock, User } from 'lucide-react';

const Hero = () => {
  const [activeDay, setActiveDay] = useState(10);
  const [appointmentIndex, setAppointmentIndex] = useState(0);
  const [selectedDate, setSelectedDate] = useState(null);
  const canvasRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });

  const appointments = [
    { name: 'Emma Wilson', service: 'Haircut & Styling', time: '9:00 AM', avatar: 'EW', color: 'bg-blue-500' },
    { name: 'James Miller', service: 'Hair Coloring', time: '10:30 AM', avatar: 'JM', color: 'bg-purple-500' },
    { name: 'Sarah Davis', service: 'Manicure & Pedicure', time: '12:00 PM', avatar: 'SD', color: 'bg-pink-500' },
  ];

  const dayAppointments = {
    8: [{ name: 'John Doe', time: '2:00 PM', service: 'Massage' }],
    9: [{ name: 'Alice Brown', time: '11:00 AM', service: 'Facial' }],
    10: [
      { name: 'Emma Wilson', time: '9:00 AM', service: 'Haircut' },
      { name: 'James Miller', time: '10:30 AM', service: 'Coloring' },
      { name: 'Sarah Davis', time: '12:00 PM', service: 'Manicure' }
    ],
    14: [{ name: 'Mike Johnson', time: '3:00 PM', service: 'Haircut' }],
    15: [
      { name: 'Lisa White', time: '10:00 AM', service: 'Spa Treatment' },
      { name: 'Tom Green', time: '2:00 PM', service: 'Massage' }
    ],
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setAppointmentIndex((prev) => (prev + 1) % appointments.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const gridSize = 60;
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let x = 0; x < canvas.width; x += gridSize) {
        for (let y = 0; y < canvas.height; y += gridSize) {
          const distance = Math.sqrt(
            Math.pow(mousePos.current.x - x, 2) + Math.pow(mousePos.current.y - y, 2)
          );
          
          const maxDistance = 200;
          const intensity = Math.max(0, 1 - distance / maxDistance);
          
          if (intensity > 0) {
            // Fill effect
            ctx.fillStyle = `rgba(20, 184, 166, ${intensity * 0.15})`;
            ctx.fillRect(x, y, gridSize, gridSize);
          }
          
          // Grid lines
          ctx.strokeStyle = `rgba(20, 184, 166, ${0.06 + intensity * 0.1})`;
          ctx.lineWidth = 1;
          ctx.strokeRect(x, y, gridSize, gridSize);
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  const handleMouseMove = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const rect = canvas.getBoundingClientRect();
    mousePos.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  };

  const handleDayClick = (day) => {
    setActiveDay(day);
    setSelectedDate(day);
  };

  return (
    <section className="relative pt-32 pb-24 px-12 lg:px-24 bg-white overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 hero-grid"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            <div className="inline-flex items-center space-x-2 bg-gray-100 px-3 py-1.5 rounded-full mb-6">
              <div className="w-2 h-2 rounded-full bg-[#14B8A6]"></div>
              <span className="text-sm text-gray-700">Built for salons & spas</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Booking software
              <br />that actually works
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Manage appointments, take payments, and grow your business. All in one beautiful platform.
            </p>

            <div className="mb-8">
              <Button 
                size="lg"
                onClick={() => window.location.href = 'https://app.onbuuk.com'}
                className="bg-[#14B8A6] hover:bg-[#0d9488] text-white px-8 h-12 text-base rounded-lg"
              >
                Start for free
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-[#14B8A6]" />
                <span>Start for free</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-[#14B8A6]" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-[#14B8A6]" />
                <span>Upgrade anytime</span>
              </div>
            </div>
          </div>

          {/* Right: Interactive Demo */}
          <div className="relative">
            {/* Animated Calendar */}
            <div className="bg-white border-2 border-gray-200 rounded-xl p-5 shadow-lg max-w-md mx-auto relative">
              {/* Floating Stats - Moved inside calendar at top */}
              <div className="absolute -top-3 -right-3 bg-white border-2 border-gray-200 rounded-xl p-3 shadow-lg z-20">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-lg bg-[#A4D23E] flex items-center justify-center">
                    <User className="w-4 h-4 text-gray-900" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-gray-900">248</p>
                    <p className="text-[10px] text-gray-600">Happy customers</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-base font-bold text-gray-900">December 2024</h3>
                  <p className="text-xs text-gray-600">15 bookings this week</p>
                </div>
                <div className="flex items-center space-x-1.5">
                  <Clock className="w-4 h-4 text-[#14B8A6]" />
                  <span className="text-xs font-medium text-[#14B8A6]">Live</span>
                </div>
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-1.5 mb-4">
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
                  <div key={i} className="text-center text-xs font-medium text-gray-500">{day}</div>
                ))}
                {[...Array(35)].map((_, i) => {
                  const hasBooking = [8, 9, 10, 14, 15, 16, 17, 21, 22, 23].includes(i);
                  const isToday = i === activeDay;
                  return (
                    <button
                      key={i}
                      onClick={() => handleDayClick(i)}
                      className={`aspect-square flex items-center justify-center text-sm rounded-lg transition-all ${
                        isToday
                          ? 'bg-[#14B8A6] text-white font-bold shadow-md scale-110'
                          : hasBooking
                          ? 'bg-[#14B8A6]/10 text-gray-900 font-medium hover:bg-[#14B8A6]/20'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      {i + 1}
                    </button>
                  );
                })}
              </div>

              {/* Show appointments for selected date or current date */}
              {selectedDate !== null && dayAppointments[selectedDate] ? (
                <div className="space-y-2">
                  <div className="text-xs font-semibold text-gray-600 mb-2">
                    APPOINTMENTS FOR DAY {selectedDate + 1}
                  </div>
                  {dayAppointments[selectedDate].map((apt, idx) => (
                    <div key={idx} className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold text-gray-900 text-sm">{apt.name}</p>
                          <p className="text-xs text-gray-600">{apt.service}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-gray-900">{apt.time}</p>
                          <span className="text-xs font-medium text-[#14B8A6] bg-[#14B8A6]/10 px-2 py-0.5 rounded">
                            Confirmed
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                /* Default Animated Appointment Card */
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 rounded-lg ${appointments[appointmentIndex].color} flex items-center justify-center text-white font-bold text-sm`}>
                        {appointments[appointmentIndex].avatar}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">{appointments[appointmentIndex].name}</p>
                        <p className="text-xs text-gray-600">{appointments[appointmentIndex].service}</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end space-y-1">
                      <p className="text-sm font-medium text-gray-900">{appointments[appointmentIndex].time}</p>
                      <span className="text-xs font-medium text-[#14B8A6] bg-[#14B8A6]/10 px-2 py-0.5 rounded">
                        Confirmed
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;