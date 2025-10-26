import { useState } from 'react';

const WasteDisposalChart = () => {
  const data = [
    { method: "Composting", percent: 20, color: "#4CAF50" },
    { method: "Burning", percent: 18, color: "#FF7043" },
    { method: "Recycling", percent: 15, color: "#29B6F6" },
    { method: "Municipal Collection", percent: 28, color: "#7E57C2" },
    { method: "Private Collector", percent: 8, color: "#FFCA28" },
    { method: "Illegal Dumping", percent: 11, color: "#E53935" }
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4 sm:p-6">
      <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-6 sm:mb-8 text-center">
        How Waste is Usually Disposed
      </h3>
      
      <div className="w-full max-w-[700px] mx-auto">
        {/* Chart Container */}
        <div className="relative h-[300px] sm:h-[320px] flex items-end justify-around gap-2 sm:gap-4 px-4 sm:px-6 pb-4 bg-card rounded-2xl shadow-sm">
          {/* Bars */}
          {data.map((item, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={index}
                className="flex flex-col items-center"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Percentage Label Above */}
                <div className="mb-2 text-xs sm:text-sm font-bold text-foreground">
                  {item.percent}%
                </div>

                {/* Bar */}
                <div
                  className="w-[30px] sm:w-[40px] rounded-t-lg transition-all duration-300"
                  style={{
                    height: `${item.percent * 2.5}px`,
                    minHeight: '20px',
                    background: item.color,
                    transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                    opacity: isHovered ? 0.9 : 1,
                    animation: `bar-rise 0.8s ease-out ${index * 0.1}s both`,
                  }}
                />

                {/* Label Below */}
                <div className="text-[10px] sm:text-xs font-medium text-muted-foreground mt-2 text-center max-w-[70px] break-words">
                  {item.method}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes bar-rise {
          from {
            height: 0;
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

export default WasteDisposalChart;
