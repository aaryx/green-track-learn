import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const WasteTypeChart = () => {
  const data = {
    labels: [
      'Wet (Organic)',
      'Dry (Recyclable)',
      'Electronic Waste',
      'Hazardous',
      'Mixed'
    ],
    datasets: [{
      label: 'Percentage of Waste Types (%)',
      data: [35, 25, 20, 10, 10],
      backgroundColor: [
        '#4CAF50',
        '#2196F3',
        '#9C27B0',
        '#FF5722',
        '#FFC107'
      ],
      borderRadius: 10,
      borderSkipped: false as const,
    }]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: "#333",
          font: {
            size: 14
          }
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.05)'
        }
      },
      x: {
        ticks: {
          color: "#333",
          font: {
            size: 13
          }
        },
        grid: {
          display: false
        }
      }
    },
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: (context: any) => `${context.raw}%`
        }
      }
    },
    animation: {
      duration: 1500,
      easing: 'easeOutBounce' as const
    }
  };

  return (
    <div className="w-full max-w-[800px] mx-auto">
      <h3 className="text-lg sm:text-xl font-semibold text-center text-foreground mb-4 sm:mb-6">
        Most Commonly Generated Waste Types
      </h3>
      <div className="bg-card p-4 sm:p-6 rounded-2xl shadow-sm">
        <div className="h-[300px] sm:h-[350px] md:h-[400px]">
          <Bar data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default WasteTypeChart;
