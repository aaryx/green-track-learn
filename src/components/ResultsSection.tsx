import { Button } from "@/components/ui/button";
import { 
  BarChart3, 
  ExternalLink, 
  Lightbulb, 
  Recycle, 
  Truck, 
  GraduationCap 
} from "lucide-react";

const ResultsSection = () => {
  const dashboardUrl = "https://lookerstudio.google.com/embed/reporting/XXXX/page/YYY";

  const recommendations = [
    {
      icon: Recycle,
      title: "Low Segregation Rate",
      description: "Only 40% of residents properly segregate waste",
      suggestion: "Promote composting workshops and provide clearer segregation guidelines",
      actionColor: "text-accent-green",
      bgColor: "bg-accent-green/10"
    },
    {
      icon: Truck,
      title: "Overflow Issues",
      description: "Frequent reports of overflowing bins in high-density areas",
      suggestion: "Suggest more frequent waste pickups and additional collection points",
      actionColor: "text-accent-blue",
      bgColor: "bg-accent-blue/10"
    },
    {
      icon: GraduationCap,
      title: "Low Awareness",
      description: "Many residents lack knowledge about proper waste management",
      suggestion: "Launch school and community awareness campaigns",
      actionColor: "text-accent-orange",
      bgColor: "bg-accent-orange/10"
    }
  ];

  const openDashboard = () => {
    window.open(dashboardUrl, "_blank");
  };

  return (
    <section className="py-16 bg-gradient-to-b from-secondary/20 to-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <div className="flex justify-center">
            <div className="p-4 bg-gradient-to-r from-primary/10 to-primary-light/10 rounded-2xl">
              <BarChart3 className="h-12 w-12 text-primary" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Community <span className="text-gradient">Insights</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-time data analysis from our community surveys revealing patterns, 
            trends, and opportunities for improvement.
          </p>
        </div>

        {/* Dashboard Embed */}
        <div className="card-eco space-y-6 animate-slide-up">
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
            <div>
              <h3 className="text-xl font-semibold text-foreground">Live Dashboard</h3>
              <p className="text-sm text-muted-foreground">Updated in real-time with survey responses</p>
            </div>
            <Button 
              onClick={openDashboard}
              variant="outline"
              className="shrink-0 hover:bg-primary/5 hover:border-primary/40"
            >
              Full Screen View
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Dashboard Container */}
          <div className="relative w-full h-[500px] rounded-xl overflow-hidden border border-border/50 bg-white shadow-[var(--shadow-medium)]">
            <iframe
              src={dashboardUrl}
              width="100%"
              height="100%"
              frameBorder="0"
              className="rounded-xl"
              title="Community Waste Management Dashboard"
            >
              Loading dashboard...
            </iframe>
          </div>
        </div>

        {/* Recommendations */}
        <div className="space-y-6 animate-slide-up">
          <div className="text-center space-y-2">
            <h3 className="text-2xl font-bold text-foreground flex items-center justify-center gap-2">
              <Lightbulb className="h-6 w-6 text-accent-orange" />
              Smart Recommendations
            </h3>
            <p className="text-muted-foreground">
              AI-powered insights based on community data analysis
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recommendations.map((rec, index) => (
              <div key={index} className="card-feature group">
                <div className="space-y-4">
                  <div className={`p-3 ${rec.bgColor} rounded-xl w-fit group-hover:scale-110 transition-transform duration-300`}>
                    <rec.icon className={`h-6 w-6 ${rec.actionColor}`} />
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">{rec.title}</h4>
                    <p className="text-sm text-muted-foreground">{rec.description}</p>
                  </div>
                  
                  <div className={`p-3 ${rec.bgColor} rounded-lg border border-current/10`}>
                    <p className="text-sm font-medium text-foreground">{rec.suggestion}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Metrics Summary */}
        <div className="bg-gradient-to-r from-primary/5 to-primary-light/5 rounded-2xl p-8 border border-primary/10 animate-scale-in">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">73%</div>
              <div className="text-sm text-muted-foreground">Response Rate</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">2.4x</div>
              <div className="text-sm text-muted-foreground">Improvement Potential</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">85%</div>
              <div className="text-sm text-muted-foreground">Want Better Collection</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">92%</div>
              <div className="text-sm text-muted-foreground">Support Green Initiatives</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;