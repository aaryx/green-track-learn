import { Button } from "@/components/ui/button";
import { ArrowRight, Users, TrendingUp, Award } from "lucide-react";

interface HeroSectionProps {
  onSurveyClick: () => void;
}

const HeroSection = ({ onSurveyClick }: HeroSectionProps) => {
  const stats = [
    {
      icon: Users,
      value: "500+",
      label: "responses",
      description: "Community members engaged"
    },
    {
      icon: TrendingUp,
      value: "40%",
      label: "segregate waste properly",
      description: "Current segregation rate"
    },
    {
      icon: Award,
      value: "10+",
      label: "awareness campaigns launched",
      description: "Educational initiatives"
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-secondary/20 to-primary/5 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center space-y-8 sm:space-y-10 md:space-y-12 py-8 sm:py-0">
        {/* Hero Content */}
        <div className="space-y-4 sm:space-y-6 animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight px-2">
            Together for a{" "}
            <span className="text-gradient">Cleaner Future</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Help us improve waste segregation and collection in your community. 
            Join thousands of environmentally conscious citizens making a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-4 sm:pt-6 px-4">
            <Button 
              onClick={onSurveyClick}
              className="btn-hero group w-full sm:w-auto"
              size="lg"
            >
              Take the Survey
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="w-full sm:w-auto px-6 sm:px-8 py-4 rounded-2xl border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
              onClick={() => window.open('https://greensutra.in/waste-segregation-all-you-need-to-know/', '_blank')}
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 pt-8 sm:pt-12 animate-slide-up px-4">
          {stats.map((stat, index) => (
            <div key={index} className="card-feature group">
              <div className="flex flex-col items-center space-y-3 sm:space-y-4">
                <div className="p-3 sm:p-4 bg-gradient-to-r from-primary/10 to-primary-light/10 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                </div>
                <div className="text-center space-y-1 sm:space-y-2">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-foreground px-2">
                    {stat.label}
                  </div>
                  <div className="text-xs text-muted-foreground px-2">
                    {stat.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Visual Elements */}
        <div className="flex justify-center space-x-4 sm:space-x-8 opacity-60 animate-fade-in px-4">
          <div className="w-8 h-8 sm:w-12 sm:h-12 bg-accent-green/20 rounded-full flex items-center justify-center">
            <div className="w-4 h-4 sm:w-6 sm:h-6 bg-accent-green rounded-full"></div>
          </div>
          <div className="w-8 h-8 sm:w-12 sm:h-12 bg-accent-blue/20 rounded-full flex items-center justify-center">
            <div className="w-4 h-4 sm:w-6 sm:h-6 bg-accent-blue rounded-full"></div>
          </div>
          <div className="w-8 h-8 sm:w-12 sm:h-12 bg-accent-orange/20 rounded-full flex items-center justify-center">
            <div className="w-4 h-4 sm:w-6 sm:h-6 bg-accent-orange rounded-full"></div>
          </div>
          <div className="w-8 h-8 sm:w-12 sm:h-12 bg-accent-purple/20 rounded-full flex items-center justify-center">
            <div className="w-4 h-4 sm:w-6 sm:h-6 bg-accent-purple rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;