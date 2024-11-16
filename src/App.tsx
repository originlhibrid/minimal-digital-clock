import { useState, useEffect } from 'react';
import ClockFace from './components/ClockFace';
import DigitalClock from './components/DigitalClock';
import DateDisplay from './components/DateDisplay';
import TimeZoneSelector from './components/TimeZoneSelector';
import ThemeToggle from './components/ThemeToggle';
import { Pause, Play } from 'lucide-react';

function App() {
  const [time, setTime] = useState(new Date());
  const [isPaused, setIsPaused] = useState(false);
  const [is24Hour, setIs24Hour] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [timeZone, setTimeZone] = useState('UTC');

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        setTime(new Date());
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [isPaused]);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto space-y-8">
          <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
            World Clock
          </h1>

          <div className="flex flex-col items-center space-y-8">
            <TimeZoneSelector
              selectedZone={timeZone}
              onZoneChange={setTimeZone}
            />

            <ClockFace time={time} isPaused={isPaused} />

            <DigitalClock
              time={time}
              is24Hour={is24Hour}
              setIs24Hour={setIs24Hour}
            />

            <DateDisplay time={time} />

            <button
              onClick={() => setIsPaused(!isPaused)}
              className="flex items-center space-x-2 px-4 py-2 bg-red-500 hover:bg-red-600 
                       text-white rounded-lg transition-colors duration-200"
            >
              {isPaused ? (
                <>
                  <Play className="w-5 h-5" />
                  <span>Resume</span>
                </>
              ) : (
                <>
                  <Pause className="w-5 h-5" />
                  <span>Pause</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;