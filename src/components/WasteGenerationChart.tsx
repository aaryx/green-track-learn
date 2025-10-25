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
      <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6 text-center">
        Daily waste generation per household (n=300)
      </p>
      
      <div className="w-full max-w-[500px] mx-auto">
        {/* Chart Container */}
        <div className="relative h-[280px] sm:h-[320px] flex items-end justify-around gap-2 sm:gap-4 px-2 sm:px-4 pb-12">
          {/* Y-axis label */}
          <div className="absolute left-0 top-0 bottom-12 flex items-center">
            <span className="text-xs sm:text-sm text-muted-foreground transform -rotate-90 whitespace-nowrap">
              Count
            </span>
          </div>

          {/* Bars */}
          <div className="flex-1 flex items-end justify-around gap-2 sm:gap-3 ml-6 sm:ml-8">
            {data.map((item, index) => {
              const heightPercent = (item.value / maxValue) * 100;
              const isHovered = hoveredIndex === index;

              return (
                <div
                  key={index}
                  className="flex-1 flex flex-col items-center group relative"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Tooltip */}
                  {isHovered && (
                    <div className="absolute -top-12 bg-card border border-border rounded-lg px-3 py-2 shadow-lg z-10 whitespace-nowrap animate-fade-in">
                      <p className="text-xs font-semibold text-foreground">{item.label}</p>
                      <p className="text-xs text-muted-foreground">Count: {item.value}</p>
                    </div>
                  )}

                  {/* 3D Cylindrical Bar */}
                  <div className="w-full flex flex-col items-center transition-all duration-300"
                    style={{
                      height: `${heightPercent}%`,
                      transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                    }}
                  >
                    {/* Top ellipse */}
                    <div
                      className="w-full rounded-[50%] transition-all duration-300"
                      style={{
                        height: '12px',
                        background: item.color,
                        boxShadow: `0 2px 8px ${item.color.replace(')', ', 0.3)')}`,
                        animation: 'fade-in 0.6s ease-out',
                      }}
                    />
                    
                    {/* Bar body */}
                    <div
                      className="w-full flex-1 relative transition-all duration-300"
                      style={{
                        background: `linear-gradient(to right, ${item.color.replace(')', ', 0.8)')}, ${item.color}, ${item.color.replace(')', ', 0.8)')})`,
                        boxShadow: isHovered 
                          ? `inset -2px 0 8px rgba(0,0,0,0.15), inset 2px 0 8px rgba(255,255,255,0.1), 0 4px 12px ${item.color.replace(')', ', 0.4)')}`
                          : 'inset -2px 0 8px rgba(0,0,0,0.15), inset 2px 0 8px rgba(255,255,255,0.1)',
                        animation: `scale-in 0.8s ease-out ${index * 0.1}s both`,
                      }}
                    />
                    
                    {/* Bottom ellipse */}
                    <div
                      className="w-full rounded-[50%]"
                      style={{
                        height: '12px',
                        background: item.color.replace(')', ', 0.7)'),
                        boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.2)',
                      }}
                    />
                  </div>

                  {/* Label */}
                  <p className="text-xs sm:text-sm font-semibold text-foreground mt-3">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* X-axis label */}
        <div className="text-center mt-2">
          <span className="text-xs sm:text-sm text-muted-foreground">
            Waste Category
          </span>
        </div>

        {/* Value Legend */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-6">
          {data.map((item, index) => (
            <div key={index} className="text-center">
              <div
                className="w-4 h-4 rounded-full mx-auto mb-1"
                style={{ backgroundColor: item.color }}
              />
              <p className="text-xs text-muted-foreground">{item.value} households</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WasteGenerationChart;
