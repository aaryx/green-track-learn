import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const WasteDisposalChart = () => {
  const data = {
    labels: [
      "Municipal/Private Collection",
      "Composting",
      "Burning",
      "Illegal Dumping",
      "Recycling"
    ],
    datasets: [{
      label: "Number of Responses",
      data: [143, 60, 56, 54, 50],
      backgroundColor: [
        "#2E7D32",
        "#4CAF50",
        "#FF9800",
        "#D32F2F",
        "#2196F3"
      ],
      borderRadius: 8
    }]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Count",
          font: {
            size: 14
          },
          color: '#333'
        },
        ticks: {
          color: '#333',
          font: {
            size: 14
          }
        }
      },
      x: {
        title: {
          display: true,
          text: "Waste Disposal Method",
          font: {
            size: 14
          },
          color: '#333'
        },
        ticks: {
          color: '#333',
          font: {
            size: 12
          }
        }
      }
    },
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        callbacks: {
          label: (context: any) => `Responses: ${context.raw}`
        }
      }
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4 sm:p-6">
      <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-6 sm:mb-8 text-center">
        How Waste is Usually Disposed
      </h3>
      
      <div className="w-full max-w-[700px] mx-auto flex justify-center">
        <div className="bg-card rounded-2xl shadow-sm p-4 sm:p-6 w-full">
          <div className="h-[300px] sm:h-[400px] md:h-[450px] mx-auto">
            <Bar data={data} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WasteDisposalChart;
