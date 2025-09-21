import { Button } from "@/components/ui/button";
import { ExternalLink, FileText } from "lucide-react";

const SurveySection = () => {
  const surveyUrl = "https://docs.google.com/forms/d/e/1FAIpQLSctp754PzgZG2uCpOm2gFdUZ3nYIToGHXbK15N6eUw0rftsfw/viewform?usp=header";

  const openInNewTab = () => {
    window.open(surveyUrl, "_blank");
  };

  return (
    <section className="py-16 bg-gradient-to-b from-background to-secondary/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <div className="flex justify-center">
            <div className="p-4 bg-gradient-to-r from-primary/10 to-primary-light/10 rounded-2xl">
              <FileText className="h-12 w-12 text-primary" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Share Your <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your insights help us understand waste management challenges in your community 
            and develop better solutions together.
          </p>
        </div>

        {/* Survey Button */}
        <div className="card-eco space-y-6 animate-slide-up">
          <div className="text-center space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Community Waste Survey</h3>
              <p className="text-sm text-muted-foreground">Takes approximately 5-7 minutes</p>
            </div>
            
            <Button 
              onClick={openInNewTab}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold"
            >
              FILL SURVEY
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Survey Info */}
          <div className="bg-gradient-to-r from-primary/5 to-primary-light/5 rounded-xl p-6 border border-primary/10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-primary">5-7</div>
                <div className="text-sm text-muted-foreground">minutes to complete</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">anonymous responses</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">available access</div>
              </div>
            </div>
          </div>
        </div>

        {/* Privacy Notice */}
        <div className="text-center text-sm text-muted-foreground">
          <p>
            Your responses are completely anonymous and will only be used for community 
            improvement purposes. We respect your privacy and data security.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SurveySection;