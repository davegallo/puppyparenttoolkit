import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Shield, TrendingUp, AlertCircle } from "lucide-react";

interface InsurancePlan {
  name: string;
  monthlyPremium: number;
  annualCost: number;
  deductible: number;
  reimbursement: number;
  coverage: string;
}

interface InsuranceResult {
  plans: InsurancePlan[];
  breedRisks: string[];
  potentialSavings: number;
  recommendation: string;
}

export default function InsuranceCalculator() {
  const [age, setAge] = useState<string>("");
  const [breed, setBreed] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [coverage, setCoverage] = useState<string>("");
  const [deductible, setDeductible] = useState<string>("");
  const [reimbursement, setReimbursement] = useState<string>("");
  const [result, setResult] = useState<InsuranceResult | null>(null);

  const calculateInsurance = () => {
    const puppyAge = parseInt(age);
    const deductibleAmount = parseInt(deductible);
    const reimbursementPercent = parseInt(reimbursement);

    // Base premium calculation (simplified)
    let basePremium = 30;

    // Age factor
    if (puppyAge < 12) basePremium *= 0.9; // Puppies slightly cheaper
    else if (puppyAge < 24) basePremium *= 1.0;
    else basePremium *= 1.1;

    // Breed factor
    let breedMultiplier = 1.0;
    const breedRisks: string[] = [];
    
    if (breed === "large") {
      breedMultiplier = 1.3;
      breedRisks.push("Hip dysplasia", "Bloat/GDV", "Joint issues");
    } else if (breed === "giant") {
      breedMultiplier = 1.5;
      breedRisks.push("Hip dysplasia", "Heart conditions", "Bloat/GDV", "Bone cancer");
    } else if (breed === "small") {
      breedMultiplier = 0.9;
      breedRisks.push("Dental issues", "Patellar luxation", "Tracheal collapse");
    } else if (breed === "brachycephalic") {
      breedMultiplier = 1.4;
      breedRisks.push("Breathing problems", "Eye issues", "Heat sensitivity", "Dental problems");
    } else {
      breedMultiplier = 1.0;
      breedRisks.push("General health monitoring recommended");
    }

    basePremium *= breedMultiplier;

    // Location factor
    if (location === "urban") basePremium *= 1.2;
    else if (location === "suburban") basePremium *= 1.0;
    else basePremium *= 0.9;

    // Coverage factor
    let coverageMultiplier = 1.0;
    let coverageType = "";
    
    if (coverage === "accident") {
      coverageMultiplier = 0.4;
      coverageType = "Accident Only";
    } else if (coverage === "accident-illness") {
      coverageMultiplier = 1.0;
      coverageType = "Accident + Illness";
    } else {
      coverageMultiplier = 1.3;
      coverageType = "Accident + Illness + Wellness";
    }

    basePremium *= coverageMultiplier;

    // Deductible factor
    let deductibleMultiplier = 1.0;
    if (deductibleAmount === 100) deductibleMultiplier = 1.2;
    else if (deductibleAmount === 250) deductibleMultiplier = 1.0;
    else if (deductibleAmount === 500) deductibleMultiplier = 0.85;
    else deductibleMultiplier = 0.75;

    basePremium *= deductibleMultiplier;

    // Reimbursement factor
    let reimbursementMultiplier = 1.0;
    if (reimbursementPercent === 70) reimbursementMultiplier = 0.85;
    else if (reimbursementPercent === 80) reimbursementMultiplier = 0.95;
    else reimbursementMultiplier = 1.0;

    basePremium *= reimbursementMultiplier;

    // Create plan options
    const plans: InsurancePlan[] = [
      {
        name: "Basic Plan",
        monthlyPremium: Math.round(basePremium * 0.8),
        annualCost: Math.round(basePremium * 0.8 * 12),
        deductible: deductibleAmount,
        reimbursement: reimbursementPercent,
        coverage: coverageType,
      },
      {
        name: "Standard Plan",
        monthlyPremium: Math.round(basePremium),
        annualCost: Math.round(basePremium * 12),
        deductible: deductibleAmount,
        reimbursement: reimbursementPercent,
        coverage: coverageType,
      },
      {
        name: "Premium Plan",
        monthlyPremium: Math.round(basePremium * 1.3),
        annualCost: Math.round(basePremium * 1.3 * 12),
        deductible: Math.max(100, deductibleAmount - 150),
        reimbursement: Math.min(90, reimbursementPercent + 10),
        coverage: coverage === "accident" ? "Accident + Illness" : coverageType,
      },
    ];

    // Calculate potential savings
    const avgVetCostFirstYear = 1500; // Average first-year vet costs
    const potentialSavings = Math.round(
      (avgVetCostFirstYear - deductibleAmount) * (reimbursementPercent / 100) - (basePremium * 12)
    );

    // Recommendation
    let recommendation = "";
    if (breedRisks.length > 2) {
      recommendation = "Given your breed's health risks, we strongly recommend comprehensive coverage with accident + illness protection.";
    } else if (puppyAge < 12) {
      recommendation = "Enrolling while your puppy is young locks in lower rates and ensures pre-existing conditions don't exclude future coverage.";
    } else {
      recommendation = "Consider starting with accident + illness coverage to protect against unexpected health issues.";
    }

    setResult({
      plans,
      breedRisks,
      potentialSavings,
      recommendation,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (age && breed && location && coverage && deductible && reimbursement) {
      calculateInsurance();
    }
  };

  return (
    <div className="w-full">
      <Card className="corner-flourish card-shadow">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <div>
              <CardTitle className="text-2xl">Pet Insurance Cost Calculator</CardTitle>
              <CardDescription>
                Estimate insurance costs and find the right coverage for your puppy
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="age">Puppy Age (weeks)</Label>
                <Input
                  id="age"
                  type="number"
                  placeholder="Enter age in weeks"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="breed">Breed Size/Type</Label>
                <Select value={breed} onValueChange={setBreed} required>
                  <SelectTrigger id="breed">
                    <SelectValue placeholder="Select breed type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="small">Small Breed (under 20 lbs)</SelectItem>
                    <SelectItem value="medium">Medium Breed (20-50 lbs)</SelectItem>
                    <SelectItem value="large">Large Breed (50-90 lbs)</SelectItem>
                    <SelectItem value="giant">Giant Breed (over 90 lbs)</SelectItem>
                    <SelectItem value="brachycephalic">Brachycephalic (flat-faced)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Location Type</Label>
                <Select value={location} onValueChange={setLocation} required>
                  <SelectTrigger id="location">
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="urban">Urban (higher vet costs)</SelectItem>
                    <SelectItem value="suburban">Suburban</SelectItem>
                    <SelectItem value="rural">Rural (lower vet costs)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="coverage">Coverage Level</Label>
                <Select value={coverage} onValueChange={setCoverage} required>
                  <SelectTrigger id="coverage">
                    <SelectValue placeholder="Select coverage" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="accident">Accident Only</SelectItem>
                    <SelectItem value="accident-illness">Accident + Illness</SelectItem>
                    <SelectItem value="comprehensive">Comprehensive (includes wellness)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="deductible">Annual Deductible</Label>
                <Select value={deductible} onValueChange={setDeductible} required>
                  <SelectTrigger id="deductible">
                    <SelectValue placeholder="Select deductible" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="100">$100 (higher premium)</SelectItem>
                    <SelectItem value="250">$250</SelectItem>
                    <SelectItem value="500">$500</SelectItem>
                    <SelectItem value="1000">$1,000 (lower premium)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="reimbursement">Reimbursement Rate</Label>
                <Select value={reimbursement} onValueChange={setReimbursement} required>
                  <SelectTrigger id="reimbursement">
                    <SelectValue placeholder="Select rate" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="70">70%</SelectItem>
                    <SelectItem value="80">80%</SelectItem>
                    <SelectItem value="90">90%</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button type="submit" className="w-full" size="lg">
              Calculate Insurance Costs
            </Button>
          </form>

          {result && (
            <div className="mt-8 space-y-6 animate-fade-up">
              <div className="p-6 bg-accent/30 rounded-lg border-2 border-accent">
                <h3 className="text-xl font-semibold mb-4 text-accent-foreground">Insurance Estimates</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-background p-4 rounded-md">
                    <p className="text-sm text-muted-foreground">Potential Annual Savings</p>
                    <p className="text-2xl font-bold text-primary flex items-center gap-2">
                      {result.potentialSavings > 0 ? (
                        <>
                          <TrendingUp className="h-5 w-5" />
                          ${result.potentialSavings}
                        </>
                      ) : (
                        "Variable"
                      )}
                    </p>
                  </div>
                  <div className="bg-background p-4 rounded-md">
                    <p className="text-sm text-muted-foreground">Breed-Specific Risks</p>
                    <p className="text-lg font-bold text-primary">{result.breedRisks.length} identified</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold">Available Plans</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {result.plans.map((plan, index) => (
                    <div
                      key={index}
                      className={`p-5 rounded-lg border-2 hover-lift ${
                        index === 1
                          ? "bg-primary/5 border-primary"
                          : "bg-card border-border"
                      }`}
                    >
                      {index === 1 && (
                        <div className="text-xs font-semibold text-primary mb-2">RECOMMENDED</div>
                      )}
                      <h5 className="text-lg font-bold text-foreground mb-3">{plan.name}</h5>
                      <div className="space-y-2 mb-4">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Monthly</span>
                          <span className="font-semibold">${plan.monthlyPremium}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Annual</span>
                          <span className="font-semibold">${plan.annualCost}</span>
                        </div>
                        <div className="pt-2 border-t">
                          <div className="text-xs text-muted-foreground space-y-1">
                            <p>Deductible: ${plan.deductible}</p>
                            <p>Reimbursement: {plan.reimbursement}%</p>
                            <p>Coverage: {plan.coverage}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {result.breedRisks.length > 0 && (
                <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg flex gap-3">
                  <AlertCircle className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-orange-900 mb-2">Breed-Specific Health Risks</h4>
                    <ul className="text-sm text-orange-800 space-y-1">
                      {result.breedRisks.map((risk, index) => (
                        <li key={index}>• {risk}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Our Recommendation</h4>
                <p className="text-sm text-blue-800">{result.recommendation}</p>
              </div>

              {/* Affiliate Section */}
              <div className="p-4 bg-primary/5 rounded-md border border-primary/20">
                <h4 className="font-semibold mb-2 text-primary">Get a Free Quote</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Compare personalized quotes from top-rated pet insurance providers:
                </p>
                <div className="flex flex-wrap gap-2">
                  <Button variant="default" size="sm" asChild>
                    <a href="https://www.aspcapetinsurance.com" target="_blank" rel="noopener noreferrer">
                      ASPCA Pet Insurance
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://www.petinsurer.com" target="_blank" rel="noopener noreferrer">
                      Compare All Providers
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://www.embracepetinsurance.com" target="_blank" rel="noopener noreferrer">
                      Embrace Pet Insurance
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
