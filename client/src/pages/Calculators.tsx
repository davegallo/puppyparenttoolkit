import { Heart, ArrowLeft } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SEO from "@/components/SEO";
import FeedingCalculator from "@/components/calculators/FeedingCalculator";
import TrainingCalculator from "@/components/calculators/TrainingCalculator";
import VaccinationCalculator from "@/components/calculators/VaccinationCalculator";
import GroomingCalculator from "@/components/calculators/GroomingCalculator";
import InsuranceCalculator from "@/components/calculators/InsuranceCalculator";

export default function Calculators() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "PuppyParent Toolkit Calculators",
    "applicationCategory": "LifestyleApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "Free interactive calculators for puppy feeding, training, vaccination, grooming, and insurance planning"
  };

  return (
    <div className="min-h-screen bg-gradient-mesh">
      <SEO
        title="Puppy Care Calculators - Free Tools for New Dog Owners | PuppyParent Toolkit"
        description="Free interactive puppy calculators: feeding amounts, training timeline, vaccination schedule, grooming frequency, and pet insurance costs. Get personalized recommendations in seconds."
        keywords="puppy feeding calculator, dog training timeline, puppy vaccination schedule calculator, grooming frequency calculator, pet insurance cost estimator"
        structuredData={structuredData}
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
        <div className="container max-w-5xl">
          <div className="text-center mb-8 animate-fade-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Puppy Care Calculators
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get personalized recommendations for feeding, training, health, grooming, and insurance. 
              All calculators are free and based on veterinary science.
            </p>
          </div>

          <Tabs defaultValue="feeding" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8">
              <TabsTrigger value="feeding">Feeding</TabsTrigger>
              <TabsTrigger value="training">Training</TabsTrigger>
              <TabsTrigger value="vaccination">Vaccination</TabsTrigger>
              <TabsTrigger value="grooming">Grooming</TabsTrigger>
              <TabsTrigger value="insurance">Insurance</TabsTrigger>
            </TabsList>

            <TabsContent value="feeding" className="animate-fade-up">
              <FeedingCalculator />
            </TabsContent>

            <TabsContent value="training" className="animate-fade-up">
              <TrainingCalculator />
            </TabsContent>

            <TabsContent value="vaccination" className="animate-fade-up">
              <VaccinationCalculator />
            </TabsContent>

            <TabsContent value="grooming" className="animate-fade-up">
              <GroomingCalculator />
            </TabsContent>

            <TabsContent value="insurance" className="animate-fade-up">
              <InsuranceCalculator />
            </TabsContent>
          </Tabs>

          {/* Disclaimer */}
          <div className="mt-12 p-6 bg-card rounded-lg border text-sm text-muted-foreground">
            <p className="font-semibold text-foreground mb-2">Important Disclaimer</p>
            <p>
              These calculators provide general guidance based on typical puppy care recommendations. 
              Always consult with your veterinarian for personalized advice specific to your puppy's health, 
              breed, and individual needs. The information provided is for educational purposes and should 
              not replace professional veterinary care.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
