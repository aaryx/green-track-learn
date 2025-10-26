import { useState } from 'react';

const WasteGenerationChart = () => {
  const data = [
    { label: '<5kg', value: 26.7, color: '#4CAF50' },
    { label: '5-10kg', value: 19.2, color: '#2196F3' },
    { label: '10-20kg', value: 32.7, color: '#FF9800' },
    { label: '20kg+', value: 21.4, color: '#E91E63' },
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const maxValue = Math.max(...data.map(d => d.value));

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4 sm:p-6">
      <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-2 text-center">
        How Much Waste Generated
      </h3>
      <p className="text-xs sm:text-sm text-muted-foreground mb-6 sm:mb-8 text-center">
        Daily waste generation per household (n=300)
      </p>
      
      <div className="w-full max-w-[600px] mx-auto">
        {/* Chart Container */}
        <div className="relative h-[320px] sm:h-[350px] flex items-end justify-around gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6 pb-16 bg-card rounded-xl shadow-sm">
          {/* Bars */}
          {data.map((item, index) => {
            const heightPercent = (item.value / maxValue) * 100;
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={index}
                className="flex-1 max-w-[80px] flex flex-col items-center group relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Rectangular Bar */}
                <div
                  className="w-full rounded-t-lg transition-all duration-300 flex items-end justify-center pb-2 relative overflow-hidden"
                  style={{
                    height: `${heightPercent * 3}px`,
                    minHeight: '60px',
                    maxHeight: '300px',
                    backgroundColor: item.color,
                    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                    filter: isHovered ? 'brightness(1.1)' : 'brightness(1)',
                    boxShadow: isHovered 
                      ? `0 4px 20px rgba(0, 0, 0, 0.15)`
                      : `0 2px 8px rgba(0, 0, 0, 0.1)`,
                    animation: `bar-rise 0.8s ease-out ${index * 0.1}s both`,
                  }}
                >
                  {/* Percentage inside bar */}
                  <span 
                    className="text-xs sm:text-sm font-semibold text-white transition-opacity duration-300"
                    style={{
                      opacity: isHovered ? 1 : 0,
                    }}
                  >
                    {item.value}%
                  </span>
                </div>

                {/* Label */}
                <p className="text-xs sm:text-sm font-medium text-foreground mt-3 text-center">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes bar-rise {
          from {
            height: 0%;
            opacity: 0;
          }
          to {
            height: var(--final-height);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default WasteGenerationChart;
