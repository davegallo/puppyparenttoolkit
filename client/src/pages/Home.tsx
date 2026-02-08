import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, GraduationCap, Syringe, Scissors, Shield, ArrowRight, Heart, BookOpen } from "lucide-react";
import SEO from "@/components/SEO";

/*
  Design: Soft Maximalism with Editorial Elegance
  - Magazine-inspired hero with large-format imagery
  - Gradient mesh backgrounds
  - Decorative corner flourishes
  - Fraunces display font for headings
*/

const HERO_IMAGE = "https://private-us-east-1.manuscdn.com/sessionFile/1euOgi9miyF7G9hasgQmXw/sandbox/usp0hE0mDgHuBKgEbNo8rT-img-1_1770511500000_na1fn_aGVyby1wdXBweS1wYXJlbnQ.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvMWV1T2dpOW1peUY3RzloYXNnUW1Ydy9zYW5kYm94L3VzcDBoRTBtRGdIdUJLZ0ViTm84clQtaW1nLTFfMTc3MDUxMTUwMDAwMF9uYTFmbl9hR1Z5Ynkxd2RYQndlUzF3WVhKbGJuUS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=ZvBzg0KzZbg6g6ImygjXUwBCxp4nohb4hr~EbXicvjQV0uNfdIrva4zv-N3SpPe7VaMWnQYCCbNo46~42hYoSh1bzeFY7q~WH~gyTVP02Ub8QWuXAmiseCY-D1jXpm8v-vaQCdY00cIvpldQvQeFChBZ0NI7L2VS1LbiiEV2gzSIuWP-~3ULkZ4xYb7W4dyExxHX41VmYc6wC038xbLAUB7xyM6ZRlSIk~2SNl0SrZmdxeSJKRxBAQjMSVSiFlmerQ0bjp5nS~1wj0i8ndnfOykM~47pn0jJcJ2Ppbc-MMSKC8psrPlALrp5oJz0Uxnj7XCA~mr95O5hWDIr~lV4YA__";

export default function Home() {
  const calculators = [
    {
      icon: Calculator,
      title: "Puppy Feeding Calculator",
      description: "Calculate the perfect portion sizes and feeding schedule based on your puppy's age, weight, and breed.",
      link: "/calculators/feeding",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: GraduationCap,
      title: "Training Timeline",
      description: "Get a personalized training roadmap with milestones tailored to your puppy's age and your goals.",
      link: "/calculators/training",
      color: "bg-accent/30 text-accent-foreground",
    },
    {
      icon: Syringe,
      title: "Vaccination Schedule",
      description: "Never miss a shot with a complete vaccination timeline customized for your puppy's lifestyle.",
      link: "/calculators/vaccination",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: Scissors,
      title: "Grooming Frequency",
      description: "Discover how often to brush, bathe, and groom based on your puppy's coat type and activity level.",
      link: "/calculators/grooming",
      color: "bg-accent/30 text-accent-foreground",
    },
    {
      icon: Shield,
      title: "Pet Insurance Cost",
      description: "Compare insurance plans and estimate costs to protect your puppy's health and your wallet.",
      link: "/calculators/insurance",
      color: "bg-primary/10 text-primary",
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "PuppyParent Toolkit",
    "description": "Essential calculators and guides for first-time puppy owners",
    "url": "https://puppyparenttoolkit.manus.space",
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="PuppyParent Toolkit - Essential Calculators & Guides for First-Time Dog Owners"
        description="Free puppy care calculators and comprehensive guides for new dog owners. Calculate feeding amounts, training timelines, vaccination schedules, grooming frequency, and pet insurance costs."
        keywords="puppy care guide, puppy feeding calculator, puppy training timeline, puppy vaccination schedule, pet insurance cost calculator, puppy grooming schedule, first time dog owner, new puppy checklist"
        structuredData={structuredData}
      />
      {/* Header Navigation */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container">
          <div className="flex h-16 items-center justify-between">
            <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Heart className="h-6 w-6 text-primary" fill="currentColor" />
              <span className="text-xl font-semibold" style={{ fontFamily: 'var(--font-display)' }}>
                PuppyParent
              </span>
            </a>
            
            <nav className="hidden md:flex items-center gap-6">
              <a href="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Home
              </a>
              <a href="/calculators" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Calculators
              </a>
              <a href="/guides" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Guides
              </a>
              <a href="/about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                About
              </a>
            </nav>

            <Button asChild size="sm" className="hidden md:inline-flex">
              <a href="/calculators">Try Calculators</a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="gradient-mesh py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-up">
              <div className="inline-block">
                <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                  For First-Time Puppy Parents
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Your Complete Toolkit for Raising a Happy, Healthy Puppy
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Navigate the journey of puppy parenthood with confidence using our free interactive calculators, 
                expert guides, and curated resources designed specifically for first-time dog owners.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="text-base">
                  <a href="/calculators" className="flex items-center gap-2">
                    Explore Calculators
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-base">
                  <a href="/guides" className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    Read Guides
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="corner-flourish">
                <img
                  src={HERO_IMAGE}
                  alt="Happy puppy with caring owner"
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculators Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Essential Calculators for Puppy Care
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Take the guesswork out of puppy care with our science-backed calculators. 
              Get personalized recommendations in seconds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {calculators.map((calc, index) => (
              <Card
                key={index}
                className="hover-lift card-shadow transition-all duration-400"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg ${calc.color} flex items-center justify-center mb-3`}>
                    <calc.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{calc.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {calc.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="w-full">
                    <a href={calc.link} className="flex items-center justify-center gap-2">
                      Try Calculator
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="py-16 md:py-24 gradient-mesh">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Why PuppyParent Toolkit?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Bringing home a puppy is one of life's greatest joys—but it can also feel overwhelming. 
              We created PuppyParent Toolkit to give first-time dog owners the confidence and knowledge 
              they need to provide the best care for their new furry family member.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Calculator className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Science-Backed</h3>
                <p className="text-sm text-muted-foreground">
                  Our calculators use veterinary-approved formulas and research-based recommendations.
                </p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Heart className="h-6 w-6 text-primary" fill="currentColor" />
                </div>
                <h3 className="font-semibold text-lg">Made with Love</h3>
                <p className="text-sm text-muted-foreground">
                  Created by experienced dog owners who remember the challenges of puppyhood.
                </p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Always Free</h3>
                <p className="text-sm text-muted-foreground">
                  All our calculators and guides are completely free—no hidden fees or paywalls.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary/5">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Start Your Puppy Journey?
            </h2>
            <p className="text-lg text-muted-foreground">
              Join thousands of puppy parents who trust our tools and guides to raise happy, healthy dogs.
            </p>
            <Button asChild size="lg" className="text-base">
              <a href="/calculators" className="flex items-center gap-2">
                Get Started Free
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-card border-t border-border">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-primary" fill="currentColor" />
                <span className="font-semibold" style={{ fontFamily: 'var(--font-display)' }}>
                  PuppyParent Toolkit
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                Essential tools and guides for first-time puppy owners.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Calculators</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/calculators/feeding" className="hover:text-primary transition-colors">Feeding Calculator</a></li>
                <li><a href="/calculators/training" className="hover:text-primary transition-colors">Training Timeline</a></li>
                <li><a href="/calculators/vaccination" className="hover:text-primary transition-colors">Vaccination Schedule</a></li>
                <li><a href="/calculators/grooming" className="hover:text-primary transition-colors">Grooming Frequency</a></li>
                <li><a href="/calculators/insurance" className="hover:text-primary transition-colors">Insurance Cost</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/guides" className="hover:text-primary transition-colors">Care Guides</a></li>
                <li><a href="/about" className="hover:text-primary transition-colors">About Us</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/about#disclosure" className="hover:text-primary transition-colors">Affiliate Disclosure</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2026 PuppyParent Toolkit. All rights reserved. Made with ❤️ for puppy parents everywhere.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
