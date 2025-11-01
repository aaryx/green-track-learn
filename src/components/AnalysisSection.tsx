import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, TrendingUp, Trash2, AlertTriangle, ShieldCheck, Lightbulb, CheckCircle, Home, School, Building2, FlaskConical, Stethoscope, Store, Trees } from "lucide-react";
import PlaceTypeChart from "@/components/PlaceTypeChart";

const AnalysisSection = () => {
  return (
    <div className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-primary/5">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16 animate-fade-in">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-gradient px-2">
            🌍 Waste Management in Our Communities: A Deep Dive into Survey Insights
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground px-4">
            Exploring what our survey tells us about waste generation, segregation, and disposal.
          </p>
        </div>

        {/* Introduction */}
        <Card className="mb-6 sm:mb-8 animate-fade-in border-primary/20 hover:shadow-[var(--shadow-elegant)] transition-shadow">
          <CardHeader className="p-4 sm:p-6">
            <CardTitle className="flex items-center gap-2 text-lg sm:text-xl md:text-2xl">
              <span className="text-2xl sm:text-3xl">📝</span> Introduction
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm sm:text-base text-muted-foreground leading-relaxed space-y-3 sm:space-y-4 p-4 sm:p-6 pt-0">
            <p>
              Waste management is no longer just a civic responsibility — it is a global challenge. Every day, tons of waste are generated across households, schools, offices, labs, restaurants, and hospitals. If handled improperly, this waste not only pollutes the environment but also poses serious risks to human health and future generations.
            </p>
            <p className="font-medium text-foreground">
              Survey insights show that while awareness is high, actual implementation remains inconsistent.
            </p>
          </CardContent>
        </Card>

        {/* Who Participated */}
        <Card className="mb-6 sm:mb-8 animate-fade-in border-primary/20 hover:shadow-[var(--shadow-elegant)] transition-shadow">
          <CardHeader className="p-4 sm:p-6">
            <CardTitle className="flex items-center gap-2 text-lg sm:text-xl md:text-2xl">
              <Users className="h-5 w-5 sm:h-6 sm:w-6 text-primary" /> Who Participated?
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 sm:p-6 pt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-primary/5 rounded-lg hover-scale">
                <School className="h-6 w-6 sm:h-8 sm:w-8 text-primary flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm sm:text-base">Schools & Colleges</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Largest group</p>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-primary/5 rounded-lg hover-scale">
                <Home className="h-6 w-6 sm:h-8 sm:w-8 text-primary flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm sm:text-base">Homes & Households</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Second highest</p>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-primary/5 rounded-lg hover-scale">
                <Store className="h-6 w-6 sm:h-8 sm:w-8 text-primary flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm sm:text-base">Shops, Restaurants, Cafes</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Commercial spaces</p>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-primary/5 rounded-lg hover-scale">
                <Building2 className="h-6 w-6 sm:h-8 sm:w-8 text-primary flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm sm:text-base">Offices & Workplaces</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Corporate sector</p>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-primary/5 rounded-lg hover-scale">
                <FlaskConical className="h-6 w-6 sm:h-8 sm:w-8 text-primary flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm sm:text-base">Laboratories & Clinics</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Medical facilities</p>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-primary/5 rounded-lg hover-scale">
                <Trees className="h-6 w-6 sm:h-8 sm:w-8 text-primary flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm sm:text-base">Public Parks & Streets</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Public spaces</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center py-4 sm:py-6">
              <PlaceTypeChart />
            </div>
          </CardContent>
        </Card>

        {/* Waste Generation */}
        <Card className="mb-8 animate-fade-in border-primary/20 hover:shadow-[var(--shadow-elegant)] transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <TrendingUp className="h-6 w-6 text-primary" /> Waste Generation: How Much & What Kind?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 mb-6">
              <div className="p-4 bg-primary/5 rounded-lg">
                <p className="font-semibold mb-2">Daily Generation Rates:</p>
                <ul className="space-y-2 ml-4">
                  <li>🏠 <strong>Homes/small shops:</strong> 1–5 kg daily</li>
                  <li>🏫 <strong>Schools/offices/labs:</strong> 10+ kg daily</li>
                </ul>
              </div>
              <div className="p-4 bg-primary/5 rounded-lg">
                <p className="font-semibold mb-3">Types of waste reported:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 p-3 bg-background rounded-md">
                    <span className="text-2xl">🍲</span>
                    <span>Organic/Food waste</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-background rounded-md">
                    <span className="text-2xl">🛍️</span>
                    <span>Plastic waste</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-background rounded-md">
                    <span className="text-2xl">📦</span>
                    <span>Paper & cardboard</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-background rounded-md">
                    <span className="text-2xl">🥤</span>
                    <span>Glass & metals</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-background rounded-md col-span-full">
                    <span className="text-2xl">⚠️</span>
                    <span>Biomedical & chemical waste</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center py-4 sm:py-6">
              <PlaceTypeChart />
            </div>
          </CardContent>
        </Card>

        {/* Current Practices */}
        <Card className="mb-8 animate-fade-in border-primary/20 hover:shadow-[var(--shadow-elegant)] transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Trash2 className="h-6 w-6 text-primary" /> Current Practices: Segregation & Disposal
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <p className="font-semibold mb-3">Segregation Status:</p>
                <div className="w-full bg-muted rounded-full h-4 mb-2">
                  <div className="bg-destructive h-4 rounded-full" style={{ width: '35%' }}></div>
                </div>
                <p className="text-sm text-muted-foreground">Inconsistent - many respondents "rarely/never" segregate</p>
              </div>
              <div>
                <p className="font-semibold mb-3">Disposal Methods:</p>
                <div className="w-full bg-muted rounded-full h-4 mb-2">
                  <div className="bg-primary h-4 rounded-full" style={{ width: '65%' }}></div>
                </div>
                <p className="text-sm text-muted-foreground">Mostly municipal pickup; community bins common</p>
              </div>
              <div>
                <p className="font-semibold mb-3">Hazardous Waste Handling:</p>
                <div className="w-full bg-muted rounded-full h-4 mb-2">
                  <div className="bg-amber-500 h-4 rounded-full" style={{ width: '45%' }}></div>
                </div>
                <p className="text-sm text-muted-foreground">Some labs strict, others careless</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Problems Identified */}
        <Card className="mb-6 sm:mb-8 animate-fade-in border-destructive/20 hover:shadow-[var(--shadow-elegant)] transition-shadow">
          <CardHeader className="p-4 sm:p-6">
            <CardTitle className="flex items-center gap-2 text-lg sm:text-xl md:text-2xl">
              <AlertTriangle className="h-5 w-5 sm:h-6 sm:w-6 text-destructive" /> Problems Identified
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 sm:p-6 pt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              <div className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 bg-destructive/5 rounded-lg border border-destructive/20">
                <AlertTriangle className="h-4 w-4 sm:h-5 sm:w-5 text-destructive mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Lack of segregation at source</p>
                  <p className="text-sm text-muted-foreground">Mixed waste makes recycling difficult</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-destructive/5 rounded-lg border border-destructive/20">
                <AlertTriangle className="h-5 w-5 text-destructive mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Irregular municipal collection</p>
                  <p className="text-sm text-muted-foreground">Inconsistent pickup schedules</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-destructive/5 rounded-lg border border-destructive/20">
                <AlertTriangle className="h-5 w-5 text-destructive mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">High cost for hazardous waste</p>
                  <p className="text-sm text-muted-foreground">Disposal expenses are prohibitive</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-destructive/5 rounded-lg border border-destructive/20">
                <AlertTriangle className="h-5 w-5 text-destructive mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Low awareness in practice</p>
                  <p className="text-sm text-muted-foreground">Knowledge doesn't translate to action</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-destructive/5 rounded-lg border border-destructive/20">
                <AlertTriangle className="h-5 w-5 text-destructive mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Poor infrastructure</p>
                  <p className="text-sm text-muted-foreground">Few dustbins & recycling facilities</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-destructive/5 rounded-lg border border-destructive/20">
                <AlertTriangle className="h-5 w-5 text-destructive mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Health risks</p>
                  <p className="text-sm text-muted-foreground">From biomedical/food waste exposure</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Best Practices */}
        <Card className="mb-6 sm:mb-8 animate-fade-in border-primary/20 hover:shadow-[var(--shadow-elegant)] transition-shadow">
          <CardHeader className="p-4 sm:p-6">
            <CardTitle className="flex items-center gap-2 text-lg sm:text-xl md:text-2xl">
              <ShieldCheck className="h-5 w-5 sm:h-6 sm:w-6 text-primary" /> Precautions & Best Practices
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 sm:p-6 pt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              <div className="p-4 sm:p-5 bg-primary/5 rounded-lg hover-scale border border-primary/10">
                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                  <Home className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  <h3 className="font-bold text-sm sm:text-base">Households</h3>
                </div>
                <ul className="text-xs sm:text-sm space-y-1 text-muted-foreground">
                  <li>✓ Use 2 bins (wet & dry)</li>
                  <li>✓ Carry cloth bags</li>
                  <li>✓ Start composting</li>
                </ul>
              </div>
              <div className="p-5 bg-primary/5 rounded-lg hover-scale border border-primary/10">
                <div className="flex items-center gap-2 mb-3">
                  <School className="h-6 w-6 text-primary" />
                  <h3 className="font-bold">Schools</h3>
                </div>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>✓ Awareness campaigns</li>
                  <li>✓ Recycling drives</li>
                  <li>✓ Student involvement</li>
                </ul>
              </div>
              <div className="p-5 bg-primary/5 rounded-lg hover-scale border border-primary/10">
                <div className="flex items-center gap-2 mb-3">
                  <Building2 className="h-6 w-6 text-primary" />
                  <h3 className="font-bold">Offices</h3>
                </div>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>✓ Go paperless</li>
                  <li>✓ Partner with recyclers</li>
                  <li>✓ E-waste collection</li>
                </ul>
              </div>
              <div className="p-5 bg-primary/5 rounded-lg hover-scale border border-primary/10">
                <div className="flex items-center gap-2 mb-3">
                  <Store className="h-6 w-6 text-primary" />
                  <h3 className="font-bold">Shops/Restaurants</h3>
                </div>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>✓ Eco-friendly packaging</li>
                  <li>✓ Donate surplus food</li>
                  <li>✓ Avoid single-use plastic</li>
                </ul>
              </div>
              <div className="p-5 bg-primary/5 rounded-lg hover-scale border border-primary/10">
                <div className="flex items-center gap-2 mb-3">
                  <FlaskConical className="h-6 w-6 text-primary" />
                  <h3 className="font-bold">Labs/Clinics</h3>
                </div>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>✓ Color-coded bins</li>
                  <li>✓ Biomedical protocols</li>
                  <li>✓ Certified disposal</li>
                </ul>
              </div>
              <div className="p-5 bg-primary/5 rounded-lg hover-scale border border-primary/10">
                <div className="flex items-center gap-2 mb-3">
                  <Trees className="h-6 w-6 text-primary" />
                  <h3 className="font-bold">Public Spaces</h3>
                </div>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>✓ More dustbins</li>
                  <li>✓ Awareness boards</li>
                  <li>✓ Strict penalties</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Suggestions */}
        <Card className="mb-6 sm:mb-8 animate-fade-in border-primary/20 hover:shadow-[var(--shadow-elegant)] transition-shadow">
          <CardHeader className="p-4 sm:p-6">
            <CardTitle className="flex items-center gap-2 text-lg sm:text-xl md:text-2xl">
              <Lightbulb className="h-5 w-5 sm:h-6 sm:w-6 text-amber-500" /> Suggestions from Respondents
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 sm:p-6 pt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              <div className="relative p-4 sm:p-5 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl border-2 border-primary/20">
                <div className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 w-6 h-6 sm:w-8 sm:h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-base">💬</div>
                <p className="text-sm sm:text-base text-muted-foreground italic">"More dustbins in public spaces."</p>
              </div>
              <div className="relative p-5 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl border-2 border-primary/20">
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">💬</div>
                <p className="text-muted-foreground italic">"Educate people about segregation."</p>
              </div>
              <div className="relative p-5 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl border-2 border-primary/20">
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">💬</div>
                <p className="text-muted-foreground italic">"Stop wasting resources."</p>
              </div>
              <div className="relative p-5 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl border-2 border-primary/20">
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">💬</div>
                <p className="text-muted-foreground italic">"Strict guidelines for hazardous waste."</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Conclusion */}
        <Card className="mb-6 sm:mb-8 animate-fade-in border-primary/20 bg-gradient-to-br from-primary/10 to-background hover:shadow-[var(--shadow-elegant)] transition-shadow">
          <CardHeader className="p-4 sm:p-6">
            <CardTitle className="flex items-center gap-2 text-lg sm:text-xl md:text-2xl">
              <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-primary" /> Conclusion
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 sm:p-6 pt-0">
            <div className="space-y-3 sm:space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="text-center p-3 sm:p-4 bg-background rounded-lg">
                  <p className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">High</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Awareness</p>
                </div>
                <div className="text-center p-3 sm:p-4 bg-background rounded-lg">
                  <p className="text-2xl sm:text-3xl font-bold text-destructive mb-1 sm:mb-2">Low</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Implementation</p>
                </div>
                <div className="text-center p-3 sm:p-4 bg-background rounded-lg">
                  <p className="text-2xl sm:text-3xl font-bold text-amber-500 mb-1 sm:mb-2">Gap</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Practice vs Knowledge</p>
                </div>
              </div>
              <div className="p-4 sm:p-6 bg-primary/5 rounded-lg border-l-4 border-primary">
                <p className="font-semibold mb-2 text-sm sm:text-base">The Solution:</p>
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
                  Lifestyle changes + stronger systems + community participation = sustainable future
                </p>
              </div>
              <div className="text-center p-6 sm:p-8 bg-gradient-to-r from-primary to-primary-light rounded-xl text-white">
                <p className="text-lg sm:text-xl font-bold mb-2">📢 Call to Action</p>
                <p className="text-sm sm:text-base md:text-lg">
                  "Together, we can turn waste into a resource and build cleaner, greener cities."
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AnalysisSection;