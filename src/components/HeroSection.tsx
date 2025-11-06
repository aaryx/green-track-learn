import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, FileText, FlaskConical, Clipboard } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface HeroSectionProps {
  onSurveyClick: () => void;
}

const HeroSection = ({ onSurveyClick }: HeroSectionProps) => {
  const [openDialog, setOpenDialog] = useState<string | null>(null);

  const sections = [
    {
      id: "introduction",
      title: "Introduction",
      icon: BookOpen,
      content: `Waste management has become a major challenge in urban as well as rural areas of India. With rapid urbanization and population growth, the generation of household waste has increased drastically. If not managed properly, this waste can lead to pollution, spread of diseases, and severe environmental damage. Eco-waste management focuses on the scientific handling of waste — including segregation, recycling, composting, and safe disposal — to minimize its impact on the environment.

The purpose of this project is to study how people manage their daily waste and how aware they are about eco-friendly waste handling practices. The project also aims to observe the frequency of waste collection in different households and to identify which age groups are more conscious about waste segregation and recycling.

A structured online survey was conducted to collect data about people's habits, awareness levels, and local collection systems. The collected information was then analyzed to find trends and relationships among age, awareness, and collection frequency. By understanding these patterns, we can suggest improvements in public awareness programs and local collection systems.

This project not only helps to understand waste behavior but also emphasizes the importance of public participation in keeping our surroundings clean. Through the use of digital tools, interactive charts, and data visualization, this study bridges the gap between awareness and practical implementation of waste management practices.`
    },
    {
      id: "literature",
      title: "Literature Review",
      icon: FileText,
      content: `Various studies and government reports have addressed the issue of waste management and public awareness in India. According to the Swachh Bharat Mission (2023), over 55% of urban waste is still not properly segregated at the source. Research by the Central Pollution Control Board (CPCB) also indicates that around 30–40% of total municipal waste remains uncollected or improperly dumped. These figures show that despite several awareness programs, there remains a gap between knowledge and actual practice.

Academic literature emphasizes three major aspects of eco-waste management — awareness, behavior, and infrastructure. Awareness involves educating citizens about the types of waste and their disposal methods. Behavioral change refers to developing habits like separating wet and dry waste at home, avoiding single-use plastics, and reusing materials wherever possible. Infrastructure covers regular waste collection, recycling plants, and composting facilities.

A study by Gupta et al. (2022) suggested that areas with regular awareness drives and door-to-door waste collection show better compliance in segregation. Similarly, Patel and Singh (2021) highlighted that youth and educated citizens are more responsive to eco-friendly practices. Digital platforms and local campaigns play an important role in spreading awareness about proper waste management.

This literature supports the purpose of this project — to evaluate how people understand and respond to eco-waste concepts and how often their waste is collected. The findings of this project are aligned with national sustainability goals, contributing towards building cleaner and greener communities.`
    },
    {
      id: "methodology",
      title: "Methodology",
      icon: FlaskConical,
      content: `The methodology of this project is designed to ensure systematic data collection and accurate interpretation. A quantitative approach was adopted through an online Google Form survey, consisting of multiple-choice and descriptive questions. The form included sections on age group, waste collection frequency, awareness about recycling, and opinions about eco-friendly practices.

A total of 300 responses were received from participants belonging to various age groups ranging from below 18 years to above 60 years. The questions were kept simple to ensure easy understanding and honest responses.

After data collection, the responses were exported to Google Sheets for cleaning and categorization. The data was then analyzed to find trends, such as the most common collection frequency, dominant age group, and awareness levels. To make the results visually appealing, the charts were created using HTML, CSS, and JavaScript, ensuring full compatibility with mobile, tablet, and desktop screens.

For visualization, pie charts were used to show proportions such as "Age Distribution" and "Collection Frequency", while bar charts were applied to show comparative data. These charts were embedded in the project website to make the report interactive and easy to understand.

Ethical practices were followed — no personal information was collected, and all participants gave consent before filling out the form. The results represent general behavioral trends and not specific individuals or communities.`
    },
    {
      id: "fieldwork",
      title: "Field Work Description",
      icon: Clipboard,
      content: `The field work for this project focused on understanding how people actually deal with their household waste and how their awareness translates into real action. Since the project combined both online and local observations, it provided a clear picture of waste behavior across different demographics.

During the field study, participants were asked questions like:

• How often is waste collected in your area?
• Do you segregate wet and dry waste?
• Are you aware of composting or recycling practices?
• Have you attended any cleanliness or waste awareness programs?

The survey revealed that most participants (around 60%) reported daily waste collection, while some had weekly or bi-weekly collection systems. A small number mentioned that waste is collected rarely or monthly, especially in semi-urban or rural areas.

Observations also showed that people in the 18–30 age group are more active in following eco-friendly practices like using cloth bags and avoiding single-use plastics. In contrast, older groups tend to rely more on municipal services without personal segregation.

In certain localities, households practiced composting for kitchen waste, indicating a rising environmental consciousness. However, lack of proper collection bins and irregular municipal services were noted as major obstacles.

Through this field work, it became evident that awareness directly influences behavior. Areas with educational institutions or awareness campaigns showed significantly better waste management practices. These findings highlight the importance of community involvement, regular collection systems, and continuous education for effective eco-waste management.`
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

        {/* Interactive Eco-Themed Section */}
        <div className="pt-8 sm:pt-12 animate-slide-up px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {sections.map((section) => (
              <Button
                key={section.id}
                onClick={() => setOpenDialog(section.id)}
                className="h-auto py-6 px-6 flex flex-col items-center gap-3 bg-gradient-to-br from-accent-green/10 to-accent-green/5 hover:from-accent-green/20 hover:to-accent-green/10 border-2 border-accent-green/20 hover:border-accent-green/40 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
                variant="outline"
              >
                <div className="p-3 bg-accent-green/20 rounded-xl">
                  <section.icon className="h-6 w-6 text-accent-green" />
                </div>
                <span className="text-sm font-semibold text-foreground text-center">
                  {section.title}
                </span>
              </Button>
            ))}
          </div>
        </div>

        {/* Dialogs for each section */}
        {sections.map((section) => (
          <Dialog
            key={section.id}
            open={openDialog === section.id}
            onOpenChange={(open) => !open && setOpenDialog(null)}
          >
            <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto bg-background/95 backdrop-blur-sm border-accent-green/20">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-accent-green flex items-center gap-2">
                  <section.icon className="h-6 w-6" />
                  {section.title}
                </DialogTitle>
              </DialogHeader>
              <DialogDescription asChild>
                <div className="text-foreground text-base leading-relaxed whitespace-pre-line">
                  {section.content}
                </div>
              </DialogDescription>
            </DialogContent>
          </Dialog>
        ))}

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