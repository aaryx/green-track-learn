import { useState } from 'react';

const WasteGenerationChart = () => {
  const data = [
    { label: '<5kg', value: 150, color: 'hsl(142, 76%, 36%)' },
    { label: '5-10kg', value: 108, color: 'hsl(142, 70%, 45%)' },
    { label: '10-20kg', value: 184, color: 'hsl(142, 60%, 55%)' },
    { label: '20kg+', value: 120, color: 'hsl(142, 50%, 65%)' },
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
        <div className="relative h-[280px] sm:h-[320px] flex items-end justify-center gap-3 sm:gap-6 md:gap-8 px-4 sm:px-6 pb-16">
          {/* Bars */}
          {data.map((item, index) => {
            const heightPercent = (item.value / maxValue) * 100;
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={index}
                className="flex-1 max-w-[100px] flex flex-col items-center group relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Tooltip */}
                {isHovered && (
                  <div className="absolute -top-14 left-1/2 -translate-x-1/2 bg-card border border-border rounded-lg px-3 py-2 shadow-lg z-10 whitespace-nowrap animate-fade-in">
                    <p className="text-xs font-semibold text-foreground">{item.label}</p>
                    <p className="text-xs text-muted-foreground">Count: {item.value}</p>
                  </div>
                )}

                {/* Rectangular Bar */}
                <div
                  className="w-full rounded-t-md transition-all duration-300"
                  style={{
                    height: `${heightPercent}%`,
                    backgroundColor: item.color,
                    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                    boxShadow: isHovered 
                      ? `0 -4px 12px ${item.color.replace(')', ', 0.4)')}, 0 0 0 2px ${item.color.replace(')', ', 0.6)')}`
                      : `0 -2px 6px ${item.color.replace(')', ', 0.2)')}`,
                    animation: `bar-rise 0.8s ease-out ${index * 0.1}s both`,
                  }}
                />

                {/* Label */}
                <p className="text-xs sm:text-sm font-semibold text-foreground mt-3 text-center">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>

        {/* Value Legend */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
          {data.map((item, index) => (
            <div key={index} className="text-center">
              <div
                className="w-4 h-4 rounded mx-auto mb-1"
                style={{ backgroundColor: item.color }}
              />
              <p className="text-xs text-muted-foreground">{item.value} households</p>
            </div>
          ))}
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
