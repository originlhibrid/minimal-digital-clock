import React from 'react';

const ClockFace = ({ time, isPaused }: { time: Date; isPaused: boolean }) => {
  const hours = time.getHours() % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const hourDegrees = (hours + minutes / 60) * 30;
  const minuteDegrees = (minutes + seconds / 60) * 6;
  const secondDegrees = seconds * 6;

  return (
    <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg">
      {/* Hour markers and numbers */}
      {[...Array(12)].map((_, i) => {
        const hour = i + 1;
        const angle = ((i + 1) * 30 - 90) * (Math.PI / 180); // Convert to radians, start from 12 o'clock
        const markerAngle = i * 30; // For the hour markers
        
        // Increased radius for better number positioning
        const numberRadius = 42; // Increased from 35 to 42
        const x = 50 + numberRadius * Math.cos(angle);
        const y = 50 + numberRadius * Math.sin(angle);

        return (
          <React.Fragment key={i}>
            {/* Hour marker */}
            <div
              className="absolute w-1 h-5 bg-gray-400 dark:bg-gray-500" // Increased height from h-4 to h-5
              style={{
                transform: `rotate(${markerAngle}deg)`,
                transformOrigin: '50% 50%',
                left: 'calc(50% - 0.125rem)',
                top: '0.5rem',
              }}
            />
            {/* Hour number */}
            <div
              className="absolute font-bold text-xl text-gray-800 dark:text-gray-200" // Increased text size
              style={{
                left: `${x}%`,
                top: `${y}%`,
                transform: 'translate(-50%, -50%)',
              }}
            >
              {hour}
            </div>
          </React.Fragment>
        );
      })}

      {/* Clock hands container */}
      <div className="absolute inset-0">
        {/* Hour hand */}
        <div
          className={`absolute left-1/2 w-1.5 bg-gray-800 dark:bg-gray-200 rounded-full ${
            isPaused ? '' : 'transition-transform duration-500'
          }`}
          style={{
            height: '25%',
            top: '25%',
            transform: `rotate(${hourDegrees}deg)`,
            transformOrigin: '50% 100%',
            marginLeft: '-0.075rem',
          }}
        />

        {/* Minute hand */}
        <div
          className={`absolute left-1/2 w-1 bg-gray-600 dark:bg-gray-300 rounded-full ${
            isPaused ? '' : 'transition-transform duration-500'
          }`}
          style={{
            height: '35%',
            top: '15%',
            transform: `rotate(${minuteDegrees}deg)`,
            transformOrigin: '50% 100%',
            marginLeft: '-0.05rem',
          }}
        />

        {/* Second hand */}
        <div
          className={`absolute left-1/2 w-0.5 bg-blue-500 rounded-full ${
            isPaused ? '' : 'transition-transform duration-100'
          }`}
          style={{
            height: '40%',
            top: '10%',
            transform: `rotate(${secondDegrees}deg)`,
            transformOrigin: '50% 100%',
            marginLeft: '-0.025rem',
          }}
        />

        {/* Center dot */}
        <div className="absolute left-1/2 top-1/2 w-3 h-3 bg-blue-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10" />
      </div>
    </div>
  );
};

export default ClockFace;