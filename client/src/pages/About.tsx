import { Heart, ArrowLeft, Shield, Users, BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SEO from "@/components/SEO";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-mesh">
      <SEO
        title="About PuppyParent Toolkit - Our Mission & Affiliate Disclosure"
        description="Learn about PuppyParent Toolkit's mission to help first-time dog owners. Read our transparent affiliate disclosure and commitment to providing trustworthy puppy care resources."
        keywords="about puppyparent toolkit, affiliate disclosure, puppy care resources, first time dog owner help"
      />
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container">
          <div className="flex h-16 items-center justify-between">
            <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Heart className="h-6 w-6 text-primary" fill="currentColor" />
              <span className="text-xl font-semibold" style={{ fontFamily: 'var(--font-display)' }}>
                PuppyParent Toolkit
              </span>
            </a>
            
            <a href="/" className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-12">
        <div className="container max-w-4xl">
          <div className="text-center mb-12 animate-fade-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About PuppyParent Toolkit
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your trusted companion on the journey of raising a happy, healthy puppy
            </p>
          </div>

          <div className="space-y-8">
            {/* Mission */}
            <Card className="corner-flourish card-shadow animate-fade-up">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Heart className="h-6 w-6 text-primary" fill="currentColor" />
                  </div>
                  <CardTitle className="text-2xl">Our Mission</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none">
                <p className="text-foreground leading-relaxed">
                  PuppyParent Toolkit was created to empower first-time dog owners with the knowledge, 
                  tools, and confidence they need to provide exceptional care for their new puppies. 
                  We understand that bringing home a puppy is both exciting and overwhelming—there's so 
                  much to learn, from proper nutrition and training schedules to health care and grooming routines.
                </p>
                <p className="text-foreground leading-relaxed mt-4">
                  Our mission is simple: to make puppy care accessible, understandable, and stress-free. 
                  We provide science-backed calculators and comprehensive guides that take the guesswork 
                  out of puppy parenting, helping you make informed decisions that benefit your furry friend's 
                  health and happiness.
                </p>
              </CardContent>
            </Card>

            {/* Why We Created This */}
            <Card className="corner-flourish card-shadow animate-fade-up">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Why We Created This</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none">
                <p className="text-foreground leading-relaxed">
                  As experienced dog owners ourselves, we remember the challenges of those early days with 
                  a new puppy. Questions like "Am I feeding enough?" or "When should the next vaccination be?" 
                  kept us up at night. We spent countless hours researching, consulting veterinarians, and 
                  learning from trial and error.
                </p>
                <p className="text-foreground leading-relaxed mt-4">
                  We created PuppyParent Toolkit to be the resource we wish we'd had—a single, trusted 
                  destination where new puppy parents can find accurate, easy-to-use tools and expert-backed 
                  information. Our goal is to help you avoid common mistakes, save time on research, and 
                  focus on what matters most: building a loving bond with your new companion.
                </p>
              </CardContent>
            </Card>

            {/* What We Offer */}
            <Card className="corner-flourish card-shadow animate-fade-up">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">What We Offer</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg text-foreground">Interactive Calculators</h3>
                    <p className="text-sm text-muted-foreground">
                      Five essential calculators covering feeding, training, vaccinations, grooming, 
                      and insurance—all personalized to your puppy's unique needs.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg text-foreground">Expert Guides</h3>
                    <p className="text-sm text-muted-foreground">
                      Comprehensive, easy-to-follow guides on nutrition, training, health, grooming, 
                      and first-time owner essentials.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg text-foreground">Science-Backed Information</h3>
                    <p className="text-sm text-muted-foreground">
                      All our recommendations are based on veterinary research and best practices 
                      from animal health professionals.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg text-foreground">Curated Resources</h3>
                    <p className="text-sm text-muted-foreground">
                      Carefully selected product recommendations and service providers to help you 
                      find quality supplies and care for your puppy.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Affiliate Disclosure */}
            <Card id="disclosure" className="corner-flourish card-shadow animate-fade-up border-primary/30">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Affiliate Disclosure</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none">
                <p className="text-foreground leading-relaxed">
                  <strong>Transparency is important to us.</strong> PuppyParent Toolkit participates in 
                  affiliate marketing programs, which means we may earn a commission when you purchase 
                  products or services through links on our site. This comes at no additional cost to you.
                </p>
                <p className="text-foreground leading-relaxed mt-4">
                  We only recommend products and services that we genuinely believe will benefit you and 
                  your puppy. Our affiliate partnerships help us keep all our calculators and guides 
                  completely free for users while covering the costs of maintaining and improving this resource.
                </p>
                <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <h4 className="font-semibold text-foreground mb-2">Our Commitment to You:</h4>
                  <ul className="space-y-2 text-sm text-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">✓</span>
                      <span>We never recommend products solely for commission purposes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">✓</span>
                      <span>Our calculator results are never influenced by affiliate relationships</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">✓</span>
                      <span>We clearly disclose affiliate links wherever they appear</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">✓</span>
                      <span>Your trust is more valuable to us than any commission</span>
                    </li>
                  </ul>
                </div>
                <p className="text-foreground leading-relaxed mt-4">
                  If you have any questions about our affiliate relationships or the products we recommend, 
                  please don't hesitate to reach out. We're here to help you make the best decisions for 
                  your puppy's well-being.
                </p>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card className="corner-flourish card-shadow animate-fade-up">
              <CardHeader>
                <CardTitle className="text-2xl">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground leading-relaxed">
                  Have questions, suggestions, or feedback? We'd love to hear from you! While we're a 
                  small team, we read every message and do our best to respond promptly.
                </p>
                <p className="text-sm text-muted-foreground mt-4">
                  Please note: We provide educational resources and tools, but we cannot offer personalized 
                  veterinary advice. For specific health concerns about your puppy, always consult with a 
                  licensed veterinarian.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 bg-card border-t border-border mt-16">
        <div className="container text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="h-5 w-5 text-primary" fill="currentColor" />
            <span className="font-semibold" style={{ fontFamily: 'var(--font-display)' }}>
              PuppyParent Toolkit
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2026 PuppyParent Toolkit. All rights reserved. Made with ❤️ for puppy parents everywhere.
          </p>
        </div>
      </footer>
    </div>
  );
}
