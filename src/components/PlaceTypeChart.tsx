import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

const PlaceTypeChart = () => {
  const data = {
    labels: [
      'School / College / Educational Institution',
      'Home / Household',
      'Office / Workplace',
      'Hospital / Clinic',
      'Laboratory',
      'Restaurant / Cafe',
      'Shop / Commercial Establishment',
      'Public Park'
    ],
    datasets: [{
      label: 'Type of Place',
      data: [40, 20, 15, 10, 5, 4, 4, 2],
      backgroundColor: [
        '#4CAF50',
        '#FFC107',
        '#2196F3',
        '#E91E63',
        '#9C27B0',
        '#FF9800',
        '#8BC34A',
        '#00BCD4'
      ],
      borderColor: '#fff',
      borderWidth: 2,
      hoverOffset: 12
    }]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          font: { size: 14 },
          color: '#333',
          padding: 15,
          boxWidth: 15
        }
      },
      tooltip: {
        callbacks: {
          label: (context: any) => `${context.label}: ${context.raw}%`
        }
      }
    },
    animation: {
      animateScale: true,
      animateRotate: true
    }
  };

  return (
    <div className="w-full max-w-[600px] mx-auto">
      <h3 className="text-lg sm:text-xl font-semibold text-center text-foreground mb-4 sm:mb-6">
        Distribution of Places Providing Information
      </h3>
      <div className="bg-card p-4 sm:p-6 rounded-2xl shadow-sm">
        <div className="h-[400px] sm:h-[450px] md:h-[500px]">
          <Pie data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default PlaceTypeChart;
