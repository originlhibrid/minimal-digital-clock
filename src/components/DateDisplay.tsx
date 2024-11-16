import React from 'react';
import { Calendar } from 'lucide-react';

const DateDisplay = ({ time }: { time: Date }) => {
  const formattedDate = time.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    weekday: 'long',
  });

  return (
    <div className="flex items-center justify-center space-x-2 text-lg text-gray-600 dark:text-gray-400">
      <Calendar className="w-5 h-5" />
      <span>{formattedDate}</span>
    </div>
  );
};

export default DateDisplay;