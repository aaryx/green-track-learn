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
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-secondary/20 to-primary/5 px-4">
      <div className="max-w-6xl mx-auto text-center space-y-12">
        {/* Hero Content */}
        <div className="space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Together for a{" "}
            <span className="text-gradient">Cleaner Future</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Help us improve waste segregation and collection in your community. 
            Join thousands of environmentally conscious citizens making a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button 
              onClick={onSurveyClick}
              className="btn-hero group"
              size="lg"
            >
              Take the Survey
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="px-8 py-4 rounded-2xl border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
              onClick={() => window.open('https://greensutra.in/waste-segregation-all-you-need-to-know/', '_blank')}
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 animate-slide-up">
          {stats.map((stat, index) => (
            <div key={index} className="card-feature group">
              <div className="flex flex-col items-center space-y-4">
                <div className="p-4 bg-gradient-to-r from-primary/10 to-primary-light/10 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-center space-y-2">
                  <div className="text-3xl md:text-4xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-sm font-semibold text-foreground">
                    {stat.label}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {stat.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Visual Elements */}
        <div className="flex justify-center space-x-8 opacity-60 animate-fade-in">
          <div className="w-12 h-12 bg-accent-green/20 rounded-full flex items-center justify-center">
            <div className="w-6 h-6 bg-accent-green rounded-full"></div>
          </div>
          <div className="w-12 h-12 bg-accent-blue/20 rounded-full flex items-center justify-center">
            <div className="w-6 h-6 bg-accent-blue rounded-full"></div>
          </div>
          <div className="w-12 h-12 bg-accent-orange/20 rounded-full flex items-center justify-center">
            <div className="w-6 h-6 bg-accent-orange rounded-full"></div>
          </div>
          <div className="w-12 h-12 bg-accent-purple/20 rounded-full flex items-center justify-center">
            <div className="w-6 h-6 bg-accent-purple rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;