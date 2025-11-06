import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { BookOpen, Play, ChevronRight, Clock, CheckCircle, Leaf, Recycle, Smartphone, Users, X, Brain } from "lucide-react";
const EducationSection = () => {
  const [activeTab, setActiveTab] = useState<"articles" | "videos">("articles");
  const [selectedArticle, setSelectedArticle] = useState<number | null>(null);
  const [completedVideos, setCompletedVideos] = useState<number[]>([]);
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [quizComplete, setQuizComplete] = useState(false);
  const articles = [{
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
  }, {
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
  }, {
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
  }, {
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
  }];
  const videos = [{
    id: 1,
    title: "Waste Segregation 101",
    description: "Learn the basics of proper waste segregation and why it matters for our environment.",
    duration: "12:30",
    embedId: "W5rR4T7p2sQ",
    category: "Basics"
  }, {
    id: 2,
    title: "Composting Basics",
    description: "A complete guide to setting up and maintaining your home composting system.",
    duration: "18:45",
    embedId: "bMq_hfhXnBc",
    category: "Composting"
  }, {
    id: 3,
    title: "E-waste Disposal Tips",
    description: "Discover the right way to dispose of electronic devices and where to take them.",
    duration: "11:41",
    embedId: "e-YTAYcZrbE",
    category: "E-waste"
  }, {
    id: 4,
    title: "Plastic Reduction Challenge",
    description: "30-day challenge to reduce single-use plastics in your daily life.",
    duration: "15:20",
    embedId: "kHxplaKKVMw",
    category: "Plastic Reduction"
  }];
  const toggleVideoComplete = (videoId: number) => {
    setCompletedVideos(prev => prev.includes(videoId) ? prev.filter(id => id !== videoId) : [...prev, videoId]);
  };
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Composting":
        return Leaf;
      case "Plastic Reduction":
        return Recycle;
      case "E-waste":
        return Smartphone;
      case "Awareness":
        return Users;
      default:
        return BookOpen;
    }
  };
  const quizQuestions = [{
    question: "Which bin should you put vegetable peels in?",
    options: ["Blue bin", "Green bin", "Red bin", "Yellow bin"],
    correct: 1
  }, {
    question: "Which of these is non-biodegradable waste?",
    options: ["Paper", "Plastic bottle", "Food waste", "Cotton cloth"],
    correct: 1
  }, {
    question: "What does the ♻️ recycling symbol mean?",
    options: ["Product is expensive", "Product can be reused", "Product is biodegradable", "Product is organic"],
    correct: 1
  }, {
    question: "Which of these items is e-waste?",
    options: ["Broken glass", "Mobile phone", "Banana peel", "Old newspaper"],
    correct: 1
  }, {
    question: "Which is the best method to handle kitchen waste?",
    options: ["Composting", "Burning", "Throwing in dustbin", "Dumping in river"],
    correct: 0
  }, {
    question: "Which gas is mainly produced in landfills?",
    options: ["Oxygen", "Methane", "Carbon dioxide", "Nitrogen"],
    correct: 1
  }, {
    question: "Which of these is hazardous waste?",
    options: ["Plastic bag", "Paint can", "Cardboard box", "Fruit peel"],
    correct: 1
  }, {
    question: "What is the first step in waste management?",
    options: ["Dumping", "Segregation", "Recycling", "Composting"],
    correct: 1
  }, {
    question: "Which waste goes in the blue bin (India guidelines)?",
    options: ["Plastic bottles", "Food waste", "Medical waste", "Garden leaves"],
    correct: 0
  }, {
    question: "Which of these is a single-use plastic?",
    options: ["Cloth bag", "Plastic straw", "Metal spoon", "Steel bottle"],
    correct: 1
  }, {
    question: "Which is the correct 3R principle order?",
    options: ["Recycle → Reduce → Reuse", "Reduce → Reuse → Recycle", "Reuse → Recycle → Reduce", "Reduce → Recycle → Reuse"],
    correct: 1
  }, {
    question: "Which of these wastes is biodegradable?",
    options: ["Banana peel", "Plastic wrapper", "Glass bottle", "Aluminum foil"],
    correct: 0
  }, {
    question: "What should you do with expired medicines?",
    options: ["Throw in normal bin", "Give to pharmacy/hospital", "Compost them", "Flush in toilet"],
    correct: 1
  }, {
    question: "Which of these practices helps reduce plastic waste?",
    options: ["Using cloth bags", "Buying bottled water daily", "Burning plastics", "Throwing plastics in landfill"],
    correct: 0
  }, {
    question: "Compost is rich in which nutrient?",
    options: ["Nitrogen", "Iron", "Copper", "Silver"],
    correct: 0
  }];
  const handleQuizAnswer = (answerIndex: number) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setUserAnswers(newAnswers);
  };
  const handleNextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizComplete(true);
    }
  };
  const calculateScore = () => {
    return userAnswers.reduce((score, answer, index) => {
      return score + (answer === quizQuestions[index].correct ? 1 : 0);
    }, 0);
  };
  const getResultMessage = (score: number) => {
    if (score >= 12) {
      return {
        emoji: "🎉",
        message: "Excellent! You have great knowledge about Waste Management!"
      };
    } else if (score >= 5) {
      return {
        emoji: "✨",
        message: "Good effort! Keep learning and you'll become a waste warrior."
      };
    } else {
      return {
        emoji: "📘",
        message: "Don't worry! Keep practicing to improve your knowledge."
      };
    }
  };
  const resetQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswers([]);
    setQuizComplete(false);
    setShowQuiz(false);
  };
  return <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10 md:space-y-12">
        {/* Header */}
        <div className="text-center space-y-3 sm:space-y-4 animate-fade-in">
          <div className="flex justify-center">
            <div className="p-3 sm:p-4 bg-gradient-to-r from-primary/10 to-primary-light/10 rounded-2xl">
              <BookOpen className="h-10 w-10 sm:h-12 sm:w-12 text-primary" />
            </div>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground px-4">
            Learn & <span className="text-gradient">Take Action</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Expand your knowledge with our comprehensive educational resources, 
            from practical guides to interactive video courses.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center animate-slide-up px-4">
          <div className="bg-white rounded-2xl p-1.5 sm:p-2 shadow-[var(--shadow-soft)] border border-border/50 w-full sm:w-auto">
            <div className="flex gap-1 sm:gap-2">
              <Button onClick={() => setActiveTab("articles")} variant={activeTab === "articles" ? "default" : "ghost"} className={`flex-1 sm:flex-none px-4 sm:px-6 py-2 rounded-xl transition-all duration-300 text-sm sm:text-base ${activeTab === "articles" ? "bg-primary text-primary-foreground shadow-md" : "hover:bg-primary/5"}`}>
                <BookOpen className="h-3 w-3 sm:h-4 sm:w-4 sm:mr-2" />
                <span className="hidden sm:inline">Articles</span>
              </Button>
              <Button onClick={() => setActiveTab("videos")} variant={activeTab === "videos" ? "default" : "ghost"} className={`flex-1 sm:flex-none px-4 sm:px-6 py-2 rounded-xl transition-all duration-300 text-sm sm:text-base ${activeTab === "videos" ? "bg-primary text-primary-foreground shadow-md" : "hover:bg-primary/5"}`}>
                <Play className="h-3 w-3 sm:h-4 sm:w-4 sm:mr-2" />
                <span className="hidden sm:inline">Video Courses</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Articles Section */}
        {activeTab === "articles" && <div className="space-y-8 animate-fade-in">
            {selectedArticle ?
        // Article Detail View
        <div className="card-eco space-y-6">
                <Button onClick={() => setSelectedArticle(null)} variant="ghost" className="mb-4">
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
                  
                  <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{
              __html: articles.find(a => a.id === selectedArticle)?.content || ""
            }} />
                </div>
              </div> :
        // Articles Grid
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {articles.map(article => {
            const IconComponent = getCategoryIcon(article.category);
            return <div key={article.id} className="card-eco hover-lift cursor-pointer group" onClick={() => {
              if (article.id === 1) {
                window.open('https://www.epa.gov/recycle/composting-home', '_blank');
              } else if (article.id === 2) {
                window.open('https://www.wwf.org.uk/updates/top-tips-reduce-your-plastic-footprint', '_blank');
              } else if (article.id === 3) {
                window.open('https://www.teriin.org/article/e-waste-management-india-challenges-and-opportunities', '_blank');
              } else if (article.id === 4) {
                window.open('https://tontoton.com/how-to-raise-waste-management-awareness/', '_blank');
              } else {
                setSelectedArticle(article.id);
              }
            }}>
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
                    </div>;
          })}
              </div>}
          </div>}

        {/* Videos Section */}
        {activeTab === "videos" && <div className="space-y-6 sm:space-y-8 animate-fade-in">
            <div className="text-center space-y-2 px-4">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground">Video Course Modules</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Interactive learning with progress tracking
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {videos.map(video => <div key={video.id} className="card-eco space-y-3 sm:space-y-4">
                  <div className="aspect-video rounded-xl overflow-hidden bg-muted">
                    <iframe src={`https://www.youtube.com/embed/${video.embedId}`} title={video.title} className="w-full h-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <h4 className="text-lg font-semibold text-foreground">{video.title}</h4>
                        <p className="text-sm text-muted-foreground">{video.description}</p>
                      </div>
                      
                      <Button size="sm" variant={completedVideos.includes(video.id) ? "default" : "outline"} onClick={() => toggleVideoComplete(video.id)} className={completedVideos.includes(video.id) ? "bg-accent-green hover:bg-accent-green/90" : ""}>
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
                </div>)}
            </div>

            {/* Progress Summary */}
            
          </div>}

        {/* Quiz Button */}
        <div className="text-center animate-fade-in px-4">
          <Button onClick={() => setShowQuiz(true)} size="lg" className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <Brain className="h-5 w-5 sm:h-6 sm:w-6 mr-2 sm:mr-3" />
            Test Your Knowledge Now
          </Button>
        </div>

        {/* Quiz Modal */}
        <Dialog open={showQuiz} onOpenChange={setShowQuiz}>
          <DialogContent className="max-w-[95vw] sm:max-w-2xl max-h-[90vh] overflow-y-auto p-4 sm:p-6">
            <DialogHeader className="relative pb-2">
              <DialogTitle className="text-xl sm:text-2xl font-bold text-center text-green-600 pr-8">
                Waste Management Quiz
              </DialogTitle>
              <Button variant="ghost" size="sm" className="absolute right-0 top-0 h-7 w-7 sm:h-8 sm:w-8 p-0" onClick={() => resetQuiz()}>
                <X className="h-3 w-3 sm:h-4 sm:w-4" />
              </Button>
            </DialogHeader>

            {!quizComplete ? <div className="space-y-6">
                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Question {currentQuestion + 1} of {quizQuestions.length}</span>
                    <span>{Math.round((currentQuestion + 1) / quizQuestions.length * 100)}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-green-600 rounded-full h-2 transition-all duration-300" style={{
                  width: `${(currentQuestion + 1) / quizQuestions.length * 100}%`
                }} />
                  </div>
                </div>

                {/* Question */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">
                    {quizQuestions[currentQuestion].question}
                  </h3>

                  {/* Answer Options */}
                  <div className="space-y-3">
                    {quizQuestions[currentQuestion].options.map((option, index) => <Button key={index} variant={userAnswers[currentQuestion] === index ? "default" : "outline"} className={`w-full justify-start text-left p-4 h-auto ${userAnswers[currentQuestion] === index ? "bg-green-600 hover:bg-green-700 text-white" : "hover:bg-green-50"}`} onClick={() => handleQuizAnswer(index)}>
                        <span className="font-medium mr-3">
                          {String.fromCharCode(65 + index)}.
                        </span>
                        {option}
                      </Button>)}
                  </div>

                  {/* Next Button */}
                  <div className="flex justify-center pt-4">
                    <Button onClick={handleNextQuestion} disabled={userAnswers[currentQuestion] === undefined} size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8">
                      {currentQuestion < quizQuestions.length - 1 ? "Next Question" : "See Results"}
                    </Button>
                  </div>
                </div>
              </div> : (/* Quiz Results */
          <div className="text-center space-y-6">
                <div className="space-y-4">
                  <div className="text-6xl">
                    {getResultMessage(calculateScore()).emoji}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    Quiz Complete!
                  </h3>
                  <div className="text-4xl font-bold text-green-600">
                    {calculateScore()}/{quizQuestions.length}
                  </div>
                  <p className="text-lg text-muted-foreground max-w-md mx-auto">
                    {getResultMessage(calculateScore()).message}
                  </p>
                </div>

                <div className="flex gap-4 justify-center">
                  <Button onClick={resetQuiz} variant="outline" size="lg" className="px-6">
                    Close
                  </Button>
                  <Button onClick={() => {
                setCurrentQuestion(0);
                setUserAnswers([]);
                setQuizComplete(false);
              }} size="lg" className="bg-green-600 hover:bg-green-700 text-white px-6">
                    Take Quiz Again
                  </Button>
                </div>
              </div>)}
          </DialogContent>
        </Dialog>
      </div>
    </section>;
};
export default EducationSection;