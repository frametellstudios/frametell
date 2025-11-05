
import { useRoute } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, Film, Camera } from "lucide-react";
import { trpc } from "@/lib/trpc";

interface ServiceData {
  title: string;
  description: string;
  category: string;
}

interface PortfolioItem {
  title: string;
  slug: string;
  date: string;
  featuredImage?: string;
  categories: string[];
  types: string[];
}

export default function ServicePage() {
  const [, params] = useRoute("/services/:slug");
  const slug = params?.slug || "";
  
  const { data: service, isLoading: serviceLoading } = trpc.content.service.useQuery(
    { slug },
    { enabled: !!slug }
  );
  
  const { data: allPortfolioItems = [], isLoading: portfolioLoading } = trpc.content.portfolioIndex.useQuery();
  
  const portfolioItems = allPortfolioItems.filter((item: PortfolioItem) =>
    item.categories.includes(service?.category || slug)
  );
  
  const loading = serviceLoading || portfolioLoading;

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
        <Link href="/">
          <Button>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-20">
        <div className="container">
          <Link href="/">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">{service.title}</h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            {service.description}
          </p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20">
        <div className="container">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Our Work</h2>
              <p className="text-muted-foreground">
                Explore our {service.title.toLowerCase()} portfolio
              </p>
            </div>
            <Link href="/portfolio">
              <Button variant="outline">View All Projects</Button>
            </Link>
          </div>

          {portfolioItems.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioItems.map((item) => (
                <Link key={item.slug} href={`/portfolio/${item.slug}`}>
                  <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div className="aspect-video bg-muted relative overflow-hidden">
                      {item.featuredImage ? (
                        <img
                          src={item.featuredImage}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          {item.types.includes('video') ? (
                            <Film className="h-16 w-16 text-muted-foreground/30" />
                          ) : (
                            <Camera className="h-16 w-16 text-muted-foreground/30" />
                          )}
                        </div>
                      )}
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {new Date(item.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long'
                        })}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <Card className="p-12 text-center">
              <p className="text-muted-foreground">
                No portfolio items yet. Check back soon!
              </p>
            </Card>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's create something extraordinary together. Get in touch to discuss your project.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary">
              Start Your Project
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
