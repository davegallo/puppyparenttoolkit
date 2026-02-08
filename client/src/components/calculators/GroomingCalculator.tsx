import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Scissors, Sparkles } from "lucide-react";

interface GroomingTask {
  task: string;
  frequency: string;
  description: string;
}

interface GroomingResult {
  tasks: GroomingTask[];
  professionalFrequency: string;
  annualCost: number;
  recommendations: string[];
}

export default function GroomingCalculator() {
  const [coatType, setCoatType] = useState<string>("");
  const [coatLength, setCoatLength] = useState<string>("");
  const [activityLevel, setActivityLevel] = useState<string>("");
  const [environment, setEnvironment] = useState<string>("");
  const [result, setResult] = useState<GroomingResult | null>(null);

  const calculateGrooming = () => {
    const tasks: GroomingTask[] = [];
    const recommendations: string[] = [];
    let professionalFrequency = "";
    let professionalCostPerVisit = 0;
    let visitsPerYear = 0;

    // Brushing frequency
    let brushingFreq = "";
    if (coatLength === "long" || coatType === "curly") {
      brushingFreq = "Daily";
      recommendations.push("Invest in a quality slicker brush and metal comb");
    } else if (coatLength === "medium") {
      brushingFreq = "2-3 times per week";
      recommendations.push("Use a bristle brush or deshedding tool");
    } else {
      brushingFreq = "Weekly";
      recommendations.push("A rubber curry brush works well for short coats");
    }

    tasks.push({
      task: "Brushing",
      frequency: brushingFreq,
      description: "Prevents matting, reduces shedding, distributes natural oils",
    });

    // Bathing frequency
    let bathingFreq = "";
    if (environment === "outdoor" || activityLevel === "high") {
      bathingFreq = "Every 2-3 weeks";
    } else if (coatType === "curly" || coatLength === "long") {
      bathingFreq = "Every 3-4 weeks";
    } else {
      bathingFreq = "Every 4-6 weeks";
    }

    tasks.push({
      task: "Bathing",
      frequency: bathingFreq,
      description: "Use puppy-specific shampoo, avoid over-bathing to preserve coat oils",
    });

    // Nail trimming
    tasks.push({
      task: "Nail Trimming",
      frequency: "Every 2-3 weeks",
      description: "Start early to build comfort, trim just before the quick",
    });

    // Ear cleaning
    let earFreq = "";
    if (coatType === "curly" || environment === "outdoor") {
      earFreq = "Weekly";
      recommendations.push("Check ears regularly for signs of infection");
    } else {
      earFreq = "Every 2 weeks";
    }

    tasks.push({
      task: "Ear Cleaning",
      frequency: earFreq,
      description: "Use vet-approved ear cleaner, never insert anything into ear canal",
    });

    // Teeth brushing
    tasks.push({
      task: "Teeth Brushing",
      frequency: "Daily (ideal) or 3-4 times per week",
      description: "Use dog-specific toothpaste, start early for best results",
    });

    // Professional grooming
    if (coatType === "curly" || (coatLength === "long" && coatType === "straight")) {
      professionalFrequency = "Every 6-8 weeks";
      professionalCostPerVisit = 75;
      visitsPerYear = 7;
      recommendations.push("Professional grooming is essential for coat health and comfort");
    } else if (coatLength === "long") {
      professionalFrequency = "Every 8-12 weeks";
      professionalCostPerVisit = 60;
      visitsPerYear = 5;
      recommendations.push("Consider professional grooming for seasonal coat changes");
    } else if (coatLength === "medium") {
      professionalFrequency = "Every 12-16 weeks (optional)";
      professionalCostPerVisit = 50;
      visitsPerYear = 3;
      recommendations.push("Professional grooming can help with shedding management");
    } else {
      professionalFrequency = "As needed (1-2 times per year)";
      professionalCostPerVisit = 45;
      visitsPerYear = 2;
      recommendations.push("Short coats typically need minimal professional grooming");
    }

    tasks.push({
      task: "Professional Grooming",
      frequency: professionalFrequency,
      description: "Includes full bath, haircut, nail trim, and ear cleaning",
    });

    const annualCost = professionalCostPerVisit * visitsPerYear;

    // Additional recommendations
    if (activityLevel === "high") {
      recommendations.push("Check paws and coat for debris after outdoor activities");
    }
    
    if (coatType === "curly") {
      recommendations.push("Regular trimming prevents matting and keeps your puppy comfortable");
    }

    setResult({
      tasks,
      professionalFrequency,
      annualCost,
      recommendations,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (coatType && coatLength && activityLevel && environment) {
      calculateGrooming();
    }
  };

  return (
    <div className="w-full">
      <Card className="corner-flourish card-shadow">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <Scissors className="h-6 w-6 text-primary" />
            </div>
            <div>
              <CardTitle className="text-2xl">Grooming Frequency Calculator</CardTitle>
              <CardDescription>
                Determine the ideal grooming schedule for your puppy
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="coatType">Coat Type</Label>
                <Select value={coatType} onValueChange={setCoatType} required>
                  <SelectTrigger id="coatType">
                    <SelectValue placeholder="Select coat type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="straight">Straight/Smooth</SelectItem>
                    <SelectItem value="wavy">Wavy</SelectItem>
                    <SelectItem value="curly">Curly/Poodle-like</SelectItem>
                    <SelectItem value="wire">Wire/Rough</SelectItem>
                    <SelectItem value="double">Double Coat</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="coatLength">Coat Length</Label>
                <Select value={coatLength} onValueChange={setCoatLength} required>
                  <SelectTrigger id="coatLength">
                    <SelectValue placeholder="Select coat length" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="short">Short (less than 1 inch)</SelectItem>
                    <SelectItem value="medium">Medium (1-3 inches)</SelectItem>
                    <SelectItem value="long">Long (over 3 inches)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="activityLevel">Activity Level</Label>
                <Select value={activityLevel} onValueChange={setActivityLevel} required>
                  <SelectTrigger id="activityLevel">
                    <SelectValue placeholder="Select activity level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low (mostly indoors)</SelectItem>
                    <SelectItem value="moderate">Moderate (daily walks)</SelectItem>
                    <SelectItem value="high">High (hiking, swimming, etc.)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="environment">Living Environment</Label>
                <Select value={environment} onValueChange={setEnvironment} required>
                  <SelectTrigger id="environment">
                    <SelectValue placeholder="Select environment" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="indoor">Primarily Indoor</SelectItem>
                    <SelectItem value="mixed">Indoor/Outdoor Mix</SelectItem>
                    <SelectItem value="outdoor">Frequently Outdoor</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button type="submit" className="w-full" size="lg">
              Calculate Grooming Schedule
            </Button>
          </form>

          {result && (
            <div className="mt-8 space-y-6 animate-fade-up">
              <div className="p-6 bg-accent/30 rounded-lg border-2 border-accent">
                <h3 className="text-xl font-semibold mb-4 text-accent-foreground">Grooming Summary</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-background p-4 rounded-md">
                    <p className="text-sm text-muted-foreground">Professional Grooming</p>
                    <p className="text-lg font-bold text-primary">{result.professionalFrequency}</p>
                  </div>
                  <div className="bg-background p-4 rounded-md">
                    <p className="text-sm text-muted-foreground">Estimated Annual Cost</p>
                    <p className="text-2xl font-bold text-primary">${result.annualCost}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold">Your Grooming Schedule</h4>
                <div className="space-y-3">
                  {result.tasks.map((task, index) => (
                    <div
                      key={index}
                      className="p-4 bg-card rounded-lg border hover-lift"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <Sparkles className="h-5 w-5 text-primary" />
                          <h5 className="font-semibold text-foreground">{task.task}</h5>
                        </div>
                        <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                          {task.frequency}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">{task.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {result.recommendations.length > 0 && (
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-3">Grooming Tips</h4>
                  <ul className="space-y-2">
                    {result.recommendations.map((rec, index) => (
                      <li key={index} className="text-sm text-blue-800 flex items-start gap-2">
                        <span className="text-blue-600 mt-0.5">•</span>
                        <span>{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Affiliate Section */}
              <div className="p-4 bg-primary/5 rounded-md border border-primary/20">
                <h4 className="font-semibold mb-2 text-primary">Essential Grooming Supplies</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Get professional-quality grooming tools for your puppy:
                </p>
                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://www.chewy.com" target="_blank" rel="noopener noreferrer">
                      Grooming Tools & Supplies
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://www.petco.com" target="_blank" rel="noopener noreferrer">
                      Shampoos & Conditioners
                    </a>
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  * We may earn a commission from purchases made through these links
                </p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
