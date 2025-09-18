import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  Play, 
  ChevronRight, 
  Clock, 
  CheckCircle, 
  Leaf,
  Recycle,
  Smartphone,
  Users
} from "lucide-react";

const EducationSection = () => {
  const [activeTab, setActiveTab] = useState<"articles" | "videos">("articles");
  const [selectedArticle, setSelectedArticle] = useState<number | null>(null);
  const [completedVideos, setCompletedVideos] = useState<number[]>([]);

  const articles = [
    {
      id: 1,
      title: "Composting at Home",
      category: "Composting",
      description: "Transform your kitchen scraps into nutrient-rich compost with this comprehensive step-by-step guide.",
      readTime: "8 min read",
      image: "/api/placeholder/400/200",
      content: `
        <h3>Getting Started with Home Composting</h3>
        <p>Composting is one of the most effective ways to reduce household waste while creating valuable fertilizer for your garden. Here's everything you need to know to start composting at home.</p>
        
        <h4>What You'll Need:</h4>
        <ul>
          <li>Compost bin or designated area</li>
          <li>Brown materials (dried leaves, paper, cardboard)</li>
          <li>Green materials (fruit scraps, vegetable peels, grass clippings)</li>
          <li>Garden fork or shovel for turning</li>
        </ul>
        
        <h4>Step-by-Step Process:</h4>
        <ol>
          <li><strong>Choose Your Location:</strong> Find a partially shaded area with good drainage</li>
          <li><strong>Layer Your Materials:</strong> Start with browns, add greens, maintain 3:1 ratio</li>
          <li><strong>Maintain Moisture:</strong> Keep compost as moist as a wrung-out sponge</li>
          <li><strong>Turn Regularly:</strong> Mix every 2-3 weeks to add oxygen</li>
          <li><strong>Wait and Harvest:</strong> Finished compost ready in 3-6 months</li>
        </ol>
        
        <h4>Common Mistakes to Avoid:</h4>
        <p>Don't add meat, dairy, or oily foods. Avoid pet waste and diseased plants. Keep the pile balanced and aerated.</p>
      `,
      iconColor: "text-accent-green",
      bgColor: "bg-accent-green/10"
    },
    {
      id: 2,
      title: "Plastic Reduction Tips",
      category: "Plastic Reduction",
      description: "Discover practical alternatives to single-use plastics and learn effective recycling strategies.",
      readTime: "6 min read",
      image: "/api/placeholder/400/200",
      content: `
        <h3>Reducing Plastic in Daily Life</h3>
        <p>Small changes in our daily habits can significantly reduce plastic consumption and environmental impact.</p>
        
        <h4>Easy Swaps to Make Today:</h4>
        <ul>
          <li>Reusable water bottles instead of plastic bottles</li>
          <li>Cloth shopping bags instead of plastic bags</li>
          <li>Glass or stainless steel food containers</li>
          <li>Bamboo toothbrushes and metal straws</li>
        </ul>
        
        <h4>Recycling Best Practices:</h4>
        <ol>
          <li>Clean containers before recycling</li>
          <li>Check local recycling codes and guidelines</li>
          <li>Separate different types of plastics</li>
          <li>Find specialized recycling programs for items like electronics</li>
        </ol>
      `,
      iconColor: "text-accent-blue",
      bgColor: "bg-accent-blue/10"
    },
    {
      id: 3,
      title: "E-waste Management",
      category: "E-waste",
      description: "Learn about proper disposal of electronic devices and find local recycling centers.",
      readTime: "5 min read",
      image: "/api/placeholder/400/200",
      content: `
        <h3>Responsible E-waste Disposal</h3>
        <p>Electronic waste contains valuable materials that can be recovered, but also hazardous substances that require proper handling.</p>
        
        <h4>What Counts as E-waste:</h4>
        <ul>
          <li>Smartphones, tablets, and computers</li>
          <li>TVs, monitors, and gaming consoles</li>
          <li>Small appliances and batteries</li>
          <li>Cables, chargers, and accessories</li>
        </ul>
        
        <h4>Disposal Options:</h4>
        <ol>
          <li><strong>Manufacturer Programs:</strong> Many brands offer take-back programs</li>
          <li><strong>Retail Drop-offs:</strong> Electronics stores often accept old devices</li>
          <li><strong>Municipal Programs:</strong> Check local government recycling events</li>
          <li><strong>Certified Recyclers:</strong> Find e-Stewards or R2 certified facilities</li>
        </ol>
      `,
      iconColor: "text-accent-purple",
      bgColor: "bg-accent-purple/10"
    },
    {
      id: 4,
      title: "Community Awareness Campaigns",
      category: "Awareness",
      description: "Organize effective local clean-ups and educational workshops in your neighborhood.",
      readTime: "10 min read",
      image: "/api/placeholder/400/200",
      content: `
        <h3>Building Community Engagement</h3>
        <p>Successful environmental campaigns start with community involvement and clear communication.</p>
        
        <h4>Planning Your Campaign:</h4>
        <ul>
          <li>Identify local environmental challenges</li>
          <li>Set clear, achievable goals</li>
          <li>Partner with local organizations</li>
          <li>Create engaging educational materials</li>
        </ul>
        
        <h4>Event Ideas:</h4>
        <ol>
          <li><strong>Community Clean-ups:</strong> Organize neighborhood or park cleaning events</li>
          <li><strong>Educational Workshops:</strong> Teach composting and recycling techniques</li>
          <li><strong>School Programs:</strong> Partner with schools for youth education</li>
          <li><strong>Social Media Campaigns:</strong> Share tips and success stories online</li>
        </ol>
      `,
      iconColor: "text-accent-orange",
      bgColor: "bg-accent-orange/10"
    }
  ];

  const videos = [
    {
      id: 1,
      title: "Waste Segregation 101",
      description: "Learn the basics of proper waste separation and why it matters for our environment.",
      duration: "12:30",
      embedId: "vl3hQ6CDihc",
      category: "Basics"
    },
    {
      id: 2,
      title: "Composting Basics",
      description: "A complete guide to setting up and maintaining your home composting system.",
      duration: "18:45",
      embedId: "I8QyxlM_U5c",
      category: "Composting"
    },
    {
      id: 3,
      title: "E-waste Disposal Tips",
      description: "Discover the right way to dispose of electronic devices and where to take them.",
      duration: "10:15",
      embedId: "7uY6FiKp3Vk",
      category: "E-waste"
    },
    {
      id: 4,
      title: "Plastic Reduction Challenge",
      description: "30-day challenge to reduce single-use plastics in your daily life.",
      duration: "15:20",
      embedId: "O7P4S1OeKqg",
      category: "Plastic Reduction"
    }
  ];

  const toggleVideoComplete = (videoId: number) => {
    setCompletedVideos(prev => 
      prev.includes(videoId) 
        ? prev.filter(id => id !== videoId)
        : [...prev, videoId]
    );
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Composting": return Leaf;
      case "Plastic Reduction": return Recycle;
      case "E-waste": return Smartphone;
      case "Awareness": return Users;
      default: return BookOpen;
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <div className="flex justify-center">
            <div className="p-4 bg-gradient-to-r from-primary/10 to-primary-light/10 rounded-2xl">
              <BookOpen className="h-12 w-12 text-primary" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Learn & <span className="text-gradient">Take Action</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expand your knowledge with our comprehensive educational resources, 
            from practical guides to interactive video courses.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center animate-slide-up">
          <div className="bg-white rounded-2xl p-2 shadow-[var(--shadow-soft)] border border-border/50">
            <div className="flex gap-2">
              <Button
                onClick={() => setActiveTab("articles")}
                variant={activeTab === "articles" ? "default" : "ghost"}
                className={`px-6 py-2 rounded-xl transition-all duration-300 ${
                  activeTab === "articles" 
                    ? "bg-primary text-primary-foreground shadow-md" 
                    : "hover:bg-primary/5"
                }`}
              >
                <BookOpen className="h-4 w-4 mr-2" />
                Articles
              </Button>
              <Button
                onClick={() => setActiveTab("videos")}
                variant={activeTab === "videos" ? "default" : "ghost"}
                className={`px-6 py-2 rounded-xl transition-all duration-300 ${
                  activeTab === "videos" 
                    ? "bg-primary text-primary-foreground shadow-md" 
                    : "hover:bg-primary/5"
                }`}
              >
                <Play className="h-4 w-4 mr-2" />
                Video Courses
              </Button>
            </div>
          </div>
        </div>

        {/* Articles Section */}
        {activeTab === "articles" && (
          <div className="space-y-8 animate-fade-in">
            {selectedArticle ? (
              // Article Detail View
              <div className="card-eco space-y-6">
                <Button
                  onClick={() => setSelectedArticle(null)}
                  variant="ghost"
                  className="mb-4"
                >
                  ← Back to Articles
                </Button>
                
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">
                        {articles.find(a => a.id === selectedArticle)?.category}
                      </span>
                      <Clock className="h-4 w-4" />
                      {articles.find(a => a.id === selectedArticle)?.readTime}
                    </div>
                    
                    <h1 className="text-3xl font-bold text-foreground">
                      {articles.find(a => a.id === selectedArticle)?.title}
                    </h1>
                  </div>
                  
                  <div 
                    className="prose prose-lg max-w-none"
                    dangerouslySetInnerHTML={{ 
                      __html: articles.find(a => a.id === selectedArticle)?.content || "" 
                    }}
                  />
                </div>
              </div>
            ) : (
              // Articles Grid
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {articles.map((article) => {
                  const IconComponent = getCategoryIcon(article.category);
                  return (
                    <div
                      key={article.id}
                      className="card-eco hover-lift cursor-pointer group"
                      onClick={() => {
                        if (article.id === 1) {
                          window.open('https://www.epa.gov/recycle/composting-home', '_blank');
                        } else if (article.id === 2) {
                          window.open('https://www.wwf.org.uk/updates/top-tips-reduce-your-plastic-footprint', '_blank');
                        } else if (article.id === 3) {
                          window.open('https://www.teriin.org/article/e-waste-management-india-challenges-and-opportunities', '_blank');
                        } else {
                          setSelectedArticle(article.id);
                        }
                      }}
                    >
                      <div className="space-y-4">
                        <div className="flex items-start justify-between">
                          <div className={`p-3 ${article.bgColor} rounded-xl`}>
                            <IconComponent className={`h-6 w-6 ${article.iconColor}`} />
                          </div>
                          <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm">
                            <span className="px-2 py-1 bg-primary/10 text-primary rounded-md text-xs">
                              {article.category}
                            </span>
                            <span className="text-muted-foreground flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {article.readTime}
                            </span>
                          </div>
                          
                          <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                            {article.title}
                          </h3>
                          
                          <p className="text-muted-foreground text-sm">
                            {article.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* Videos Section */}
        {activeTab === "videos" && (
          <div className="space-y-8 animate-fade-in">
            <div className="text-center space-y-2">
              <h3 className="text-2xl font-bold text-foreground">Video Course Modules</h3>
              <p className="text-muted-foreground">
                Interactive learning with progress tracking
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {videos.map((video) => (
                <div key={video.id} className="card-eco space-y-4">
                  <div className="aspect-video rounded-xl overflow-hidden bg-muted">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.embedId}`}
                      title={video.title}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <h4 className="text-lg font-semibold text-foreground">{video.title}</h4>
                        <p className="text-sm text-muted-foreground">{video.description}</p>
                      </div>
                      
                      <Button
                        size="sm"
                        variant={completedVideos.includes(video.id) ? "default" : "outline"}
                        onClick={() => toggleVideoComplete(video.id)}
                        className={completedVideos.includes(video.id) ? "bg-accent-green hover:bg-accent-green/90" : ""}
                      >
                        <CheckCircle className="h-4 w-4" />
                      </Button>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <span className="px-2 py-1 bg-primary/10 text-primary rounded-md">
                        {video.category}
                      </span>
                      <span className="text-muted-foreground flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {video.duration}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Progress Summary */}
            <div className="bg-gradient-to-r from-primary/5 to-primary-light/5 rounded-2xl p-6 border border-primary/10">
              <div className="text-center space-y-2">
                <h4 className="text-lg font-semibold text-foreground">Your Progress</h4>
                <div className="text-3xl font-bold text-primary">
                  {completedVideos.length}/{videos.length}
                </div>
                <p className="text-sm text-muted-foreground">modules completed</p>
                <div className="w-full bg-muted rounded-full h-2 mt-4">
                  <div 
                    className="bg-gradient-to-r from-primary to-primary-light rounded-full h-2 transition-all duration-500"
                    style={{ width: `${(completedVideos.length / videos.length) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default EducationSection;