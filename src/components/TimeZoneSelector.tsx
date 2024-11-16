import React from 'react';
import { Globe } from 'lucide-react';

const COMMON_TIMEZONES = [
  'UTC',
  'America/New_York',
  'America/Los_Angeles',
  'Europe/London',
  'Europe/Paris',
  'Asia/Tokyo',
  'Asia/Dubai',
  'Australia/Sydney',
];

const TimeZoneSelector = ({
  selectedZone,
  onZoneChange,
}: {
  selectedZone: string;
  onZoneChange: (zone: string) => void;
}) => {
  return (
    <div className="flex items-center justify-center space-x-2">
      <Globe className="w-5 h-5 text-gray-600 dark:text-gray-400" />
      <select
        value={selectedZone}
        onChange={(e) => onZoneChange(e.target.value)}
        className="px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg 
                 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {COMMON_TIMEZONES.map((zone) => (
          <option key={zone} value={zone}>
            {zone.replace('_', ' ')}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TimeZoneSelector;