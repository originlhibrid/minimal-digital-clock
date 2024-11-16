import React from 'react';
import { Clock } from 'lucide-react';

const DigitalClock = ({
  time,
  is24Hour,
  setIs24Hour,
}: {
  time: Date;
  is24Hour: boolean;
  setIs24Hour: (value: boolean) => void;
}) => {
  const hours = is24Hour ? time.getHours() : time.getHours() % 12 || 12;
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const seconds = time.getSeconds().toString().padStart(2, '0');
  const period = time.getHours() >= 12 ? 'PM' : 'AM';

  return (
    <div className="text-center space-y-4">
      <div className="flex items-center justify-center space-x-4">
        <Clock className="w-6 h-6 text-blue-500" />
        <div className="font-mono text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-200">
          {`${hours}:${minutes}:${seconds}`}
          {!is24Hour && (
            <span className="text-2xl ml-2 text-gray-600 dark:text-gray-400">
              {period}
            </span>
          )}
        </div>
      </div>
      <button
        onClick={() => setIs24Hour(!is24Hour)}
        className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-200 text-sm font-medium"
      >
        {is24Hour ? '12-Hour Format' : '24-Hour Format'}
      </button>
    </div>
  );
};

export default DigitalClock;