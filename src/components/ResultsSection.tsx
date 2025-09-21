const ResultsSection = () => {
  return (
    <section className="py-12 bg-secondary/20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-foreground">Community Insights</h2>

        {/* Embedded Looker Studio Dashboard */}
        <div className="w-full h-[800px] shadow-lg rounded-2xl overflow-hidden">
          <iframe 
            width="100%" 
            height="100%" 
            src="https://lookerstudio.google.com/embed/reporting/vz31eaQDSQA/page/1M" 
            frameBorder="0" 
            style={{border: 0}} 
            allowFullScreen
            title="Community Waste Management Dashboard"
          >
          </iframe>
        </div>

        {/* Suggestions / Recommendations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <div className="p-6 bg-card rounded-2xl shadow-sm">
            <h3 className="font-semibold text-lg text-foreground">Promote Composting</h3>
            <p className="text-muted-foreground mt-2">Low segregation rate → conduct composting workshops.</p>
          </div>
          <div className="p-6 bg-card rounded-2xl shadow-sm">
            <h3 className="font-semibold text-lg text-foreground">Improve Collection</h3>
            <p className="text-muted-foreground mt-2">Overflow issues → suggest more frequent pickups.</p>
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