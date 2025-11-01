const AgeDistributionChart = () => {
  const data = [{
    label: 'Below 18',
    value: 10,
    color: 'hsl(142, 76%, 36%)'
  }, {
    label: '18 - 30',
    value: 45,
    color: 'hsl(142, 70%, 45%)'
  }, {
    label: '31 - 45',
    value: 25,
    color: 'hsl(142, 60%, 55%)'
  }, {
    label: '46 - 60',
    value: 15,
    color: 'hsl(142, 50%, 65%)'
  }, {
    label: '50+',
    value: 3,
    color: 'hsl(142, 40%, 75%)'
  }, {
    label: 'Above 60',
    value: 2,
    color: 'hsl(142, 30%, 85%)'
  }];

  // Calculate conic gradient stops
  let currentAngle = 0;
  const gradientStops = data.map(item => {
    const startAngle = currentAngle;
    const endAngle = currentAngle + item.value / 100 * 360;
    currentAngle = endAngle;
    return `${item.color} ${startAngle}deg ${endAngle}deg`;
  }).join(', ');
  return <div className="w-full h-full flex flex-col items-center justify-center p-4 sm:p-6">
      <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-2 text-center">
        Age Group Distribution
      </h3>
      
      
      <div className="w-full max-w-[350px] mx-auto">
        {/* Pie Chart */}
        <div className="relative mx-auto w-64 h-64 sm:w-72 sm:h-72 mb-6">
          <div className="w-full h-full rounded-full shadow-lg transition-transform duration-300 hover:scale-105" style={{
          background: `conic-gradient(${gradientStops})`,
          boxShadow: '0 4px 20px rgba(46, 125, 50, 0.2)'
        }} />
        </div>

        {/* Legend */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {data.map((item, index) => <div key={index} className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full flex-shrink-0" style={{
            backgroundColor: item.color
          }} />
              <span className="text-sm text-foreground">
                {item.label}: <span className="font-semibold">{item.value}%</span>
              </span>
            </div>)}
        </div>
      </div>
    </div>;
};
export default AgeDistributionChart;