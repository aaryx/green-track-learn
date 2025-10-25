import { useEffect, useRef } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const AgeDistributionChart = () => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<ChartJS | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext('2d');
    if (!ctx) return;

    // Destroy previous chart instance if it exists
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const data = {
      labels: ['Below 18', '18 - 30', '31 - 45', '46 - 60', '50+', 'Above 60'],
      datasets: [
        {
          data: [10, 45, 25, 15, 3, 2],
          backgroundColor: [
            'hsl(142, 76%, 36%)',  // primary green
            'hsl(142, 70%, 45%)',  // lighter green
            'hsl(142, 60%, 55%)',  // even lighter
            'hsl(142, 50%, 65%)',  // pale green
            'hsl(142, 40%, 75%)',  // very pale
            'hsl(142, 30%, 85%)',  // almost white green
          ],
          borderColor: 'hsl(0, 0%, 100%)',
          borderWidth: 3,
          hoverOffset: 15,
          hoverBorderWidth: 4,
        },
      ],
    };

    const config = {
      type: 'pie' as const,
      data: data,
      options: {
        responsive: true,
        maintainAspectRatio: true,
        aspectRatio: 1.5,
        plugins: {
          legend: {
            position: 'bottom' as const,
            labels: {
              padding: 15,
              font: {
                size: 13,
                family: "'Inter', sans-serif",
              },
              color: 'hsl(240, 10%, 3.9%)',
              usePointStyle: true,
              pointStyle: 'circle',
            },
          },
          tooltip: {
            backgroundColor: 'hsl(142, 76%, 36%)',
            titleColor: 'hsl(0, 0%, 100%)',
            bodyColor: 'hsl(0, 0%, 100%)',
            padding: 12,
            cornerRadius: 8,
            displayColors: true,
            callbacks: {
              label: function(context: any) {
                const label = context.label || '';
                const value = context.parsed || 0;
                return `${label}: ${value}%`;
              },
            },
          },
        },
        animation: {
          animateRotate: true,
          animateScale: true,
          duration: 1000,
        },
      },
    };

    chartInstance.current = new ChartJS(ctx, config);

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4 sm:p-6">
      <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-2 text-center">
        Age Group Distribution
      </h3>
      <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6 text-center">
        Data collected from community survey (n=300)
      </p>
      <div className="w-full max-w-[400px] mx-auto">
        <canvas ref={chartRef} />
      </div>
    </div>
  );
};

export default AgeDistributionChart;
