import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AgeDistributionChart from "./AgeDistributionChart";
import FrequencyChart from "./FrequencyChart";
import WasteGenerationChart from "./WasteGenerationChart";
import WasteDisposalChart from "./WasteDisposalChart";

const ResultsSection = () => {
  const otherCharts: any[] = [];

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-foreground">Community Insights</h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">
            Explore the data collected from our community waste management survey through these interactive charts.
          </p>
        </div>

        {/* Interactive Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Custom Age Distribution Chart */}
          <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300" style={{ boxShadow: '0 4px 20px rgba(46, 125, 50, 0.15)' }}>
            <CardContent className="p-0 min-h-[400px] sm:min-h-[450px]">
              <AgeDistributionChart />
            </CardContent>
          </Card>

          {/* Custom Frequency Chart */}
          <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300" style={{ boxShadow: '0 4px 20px rgba(46, 125, 50, 0.15)' }}>
            <CardContent className="p-0 min-h-[400px] sm:min-h-[450px]">
              <FrequencyChart />
            </CardContent>
          </Card>

          {/* Custom Waste Generation Chart */}
          <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300" style={{ boxShadow: '0 4px 20px rgba(46, 125, 50, 0.15)' }}>
            <CardContent className="p-0 min-h-[400px] sm:min-h-[450px]">
              <WasteGenerationChart />
            </CardContent>
          </Card>

          {/* Custom Waste Disposal Chart */}
          <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300" style={{ boxShadow: '0 4px 20px rgba(46, 125, 50, 0.15)' }}>
            <CardContent className="p-0 min-h-[400px] sm:min-h-[450px]">
              <WasteDisposalChart />
            </CardContent>
          </Card>

          {/* Other Google Charts */}
          {otherCharts.map((chart, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader className="pb-3 sm:pb-4 px-4 sm:px-6">
                <CardTitle className="text-lg sm:text-xl font-semibold text-center">
                  {chart.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="chart-embed">
                  <iframe
                    width="600"
                    height="371"
                    seamless
                    frameBorder="0"
                    scrolling="no"
                    src={chart.src}
                    title={chart.title}
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Suggestions / Recommendations (static) */}
        <div className="text-center mb-6 sm:mb-8">
          <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-4 sm:mb-6">Recommendations</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          <div className="p-5 sm:p-6 bg-card rounded-2xl shadow-sm hover-lift">
            <h3 className="font-semibold text-base sm:text-lg text-foreground">Promote Composting</h3>
            <p className="text-sm sm:text-base text-muted-foreground mt-2">Low segregation rate → conduct composting workshops.</p>
          </div>
          <div className="p-5 sm:p-6 bg-card rounded-2xl shadow-sm hover-lift">
            <h3 className="font-semibold text-base sm:text-lg text-foreground">Improve Collection</h3>
            <p className="text-sm sm:text-base text-muted-foreground mt-2">Overflow issues → suggest more frequent waste pickups.</p>
          </div>
          <div className="p-5 sm:p-6 bg-card rounded-2xl shadow-sm hover-lift">
            <h3 className="font-semibold text-base sm:text-lg text-foreground">Awareness Campaigns</h3>
            <p className="text-sm sm:text-base text-muted-foreground mt-2">Low awareness → launch community clean-up drives.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;