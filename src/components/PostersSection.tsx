import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import posterSegregate from "@/assets/poster-segregate.jpg";
import posterCompost from "@/assets/poster-compost.jpg";
import posterNoPlastic from "@/assets/poster-no-plastic.jpg";
import posterBins from "@/assets/poster-bins.jpg";
import poster3Rs from "@/assets/poster-3rs.jpg";
import posterCleanEarth from "@/assets/poster-clean-earth.jpg";

const PostersSection = () => {
  const posters = [
    {
      id: 1,
      title: "Segregate Waste – Save the Planet ♻️",
      quote: "Every piece of waste sorted is a step towards a cleaner tomorrow",
      image: posterSegregate,
      filename: "segregate-waste-poster.jpg"
    },
    {
      id: 2,
      title: "Compost Today for a Greener Tomorrow 🌱",
      quote: "Turn your organic waste into black gold for the earth",
      image: posterCompost,
      filename: "compost-poster.jpg"
    },
    {
      id: 3,
      title: "Say No to Plastic 🚫",
      quote: "Our oceans don't need more plastic, they need our protection",
      image: posterNoPlastic,
      filename: "no-plastic-poster.jpg"
    },
    {
      id: 4,
      title: "Every Bin Counts – Keep It Clean 🗑️",
      quote: "Use the right bin, make a big difference",
      image: posterBins,
      filename: "every-bin-counts-poster.jpg"
    },
    {
      id: 5,
      title: "Reduce, Reuse, Recycle 🔄",
      quote: "The three Rs that can save our planet",
      image: poster3Rs,
      filename: "3rs-poster.jpg"
    },
    {
      id: 6,
      title: "Clean Earth, Green Earth 🌍",
      quote: "Together we can create a sustainable future for all",
      image: posterCleanEarth,
      filename: "clean-earth-poster.jpg"
    }
  ];

  const handleDownload = async (imageUrl: string, filename: string) => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
    }
  };

  return (
    <section className="section-padding container-padding bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-gradient font-bold mb-4">
            🎨 Awareness Posters — Download & Share for a Cleaner Tomorrow!
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Beautiful eco-friendly posters to spread awareness about waste management and sustainability
          </p>
        </div>

        {/* Poster Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {posters.map((poster, index) => (
            <div
              key={poster.id}
              className="card-eco hover-lift group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Poster Image */}
              <div className="relative overflow-hidden rounded-xl mb-4">
                <img
                  src={poster.image}
                  alt={poster.title}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-primary">
                  {poster.title}
                </h3>
                <p className="text-sm text-muted-foreground italic">
                  "{poster.quote}"
                </p>

                {/* Download Button */}
                <Button
                  onClick={() => handleDownload(poster.image, poster.filename)}
                  className="w-full bg-primary hover:bg-primary-dark text-primary-foreground transition-all duration-300 hover:shadow-lg"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Poster
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center animate-fade-in">
          <p className="text-muted-foreground">
            Share these posters on social media to spread awareness! 
            <span className="text-primary font-semibold ml-2">#EcoWaste #Sustainability</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PostersSection;
