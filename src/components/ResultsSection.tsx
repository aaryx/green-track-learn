import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ResultsSection = () => {
  const charts = [
    {
      title: "Age Data",
      src: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRttnWCg0b1Gwq3L0zNxphphnwM5HmaBtHsee8JFcr7NnOE9u8rRLMf6gl_aEv8TvnltBvpkOClIl9C/pubchart?oid=1853520302&format=interactive"
    },
    {
      title: "Frequency of waste collection",
      src: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRttnWCg0b1Gwq3L0zNxphphnwM5HmaBtHsee8JFcr7NnOE9u8rRLMf6gl_aEv8TvnltBvpkOClIl9C/pubchart?oid=993278740&format=interactive"
    },
    {
      title: "How Much Waste Generated",
      src: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRttnWCg0b1Gwq3L0zNxphphnwM5HmaBtHsee8JFcr7NnOE9u8rRLMf6gl_aEv8TvnltBvpkOClIl9C/pubchart?oid=133653367&format=interactive"
    },
    {
      title: "How Waste is Usually Disposed",
      src: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRttnWCg0b1Gwq3L0zNxphphnwM5HmaBtHsee8JFcr7NnOE9u8rRLMf6gl_aEv8TvnltBvpkOClIl9C/pubchart?oid=552455884&format=interactive"
    }
  ];

  return (
    <section className="py-12 bg-secondary/20">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Community Insights</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore the data collected from our community waste management survey through these interactive charts.
          </p>
        </div>

        {/* Interactive Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {charts.map((chart, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-semibold text-center">
                  {chart.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="w-full h-[400px] overflow-hidden">
                  <iframe
                    width="100%"
                    height="100%"
                    seamless
                    frameBorder="0"
                    scrolling="no"
                    src={chart.src}
                    title={chart.title}
                    className="w-full h-full"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Suggestions / Recommendations (static) */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-semibold text-foreground mb-6">Recommendations</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-card rounded-2xl shadow-sm">
            <h3 className="font-semibold text-lg text-foreground">Promote Composting</h3>
            <p className="text-muted-foreground mt-2">Low segregation rate → conduct composting workshops.</p>
          </div>
          <div className="p-6 bg-card rounded-2xl shadow-sm">
            <h3 className="font-semibold text-lg text-foreground">Improve Collection</h3>
            <p className="text-muted-foreground mt-2">Overflow issues → suggest more frequent waste pickups.</p>
          </div>
          <div className="p-6 bg-card rounded-2xl shadow-sm">
            <h3 className="font-semibold text-lg text-foreground">Awareness Campaigns</h3>
            <p className="text-muted-foreground mt-2">Low awareness → launch community clean-up drives.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;