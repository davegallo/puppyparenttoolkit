import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Calculator } from "lucide-react";

/*
  Design: Soft Maximalism with Editorial Elegance
  - Card-based layout with decorative corners
  - Fraunces headings, Manrope body text
  - Terracotta accents for CTAs
*/

interface FeedingResult {
  dailyAmount: number;
  mealsPerDay: number;
  amountPerMeal: number;
  calories: number;
  expectedAdultWeight: number;
}

export default function FeedingCalculator() {
  const [age, setAge] = useState<string>("");
  const [ageUnit, setAgeUnit] = useState<string>("weeks");
  const [weight, setWeight] = useState<string>("");
  const [breedSize, setBreedSize] = useState<string>("");
  const [activityLevel, setActivityLevel] = useState<string>("");
  const [foodType, setFoodType] = useState<string>("");
  const [result, setResult] = useState<FeedingResult | null>(null);

  const calculateFeeding = () => {
    const ageInWeeks = ageUnit === "months" ? parseFloat(age) * 4 : parseFloat(age);
    const currentWeight = parseFloat(weight);

    // Simplified calculation logic (would be more sophisticated in production)
    let expectedAdultWeight = currentWeight;
    
    // Estimate adult weight based on breed size and current age
    if (breedSize === "small") {
      expectedAdultWeight = ageInWeeks < 16 ? currentWeight * (12 / ageInWeeks) : currentWeight * 1.2;
    } else if (breedSize === "medium") {
      expectedAdultWeight = ageInWeeks < 20 ? currentWeight * (30 / ageInWeeks) : currentWeight * 1.3;
    } else if (breedSize === "large") {
      expectedAdultWeight = ageInWeeks < 24 ? currentWeight * (60 / ageInWeeks) : currentWeight * 1.4;
    } else if (breedSize === "giant") {
      expectedAdultWeight = ageInWeeks < 28 ? currentWeight * (100 / ageInWeeks) : currentWeight * 1.5;
    }

    // Calculate daily calorie needs (RER * growth factor)
    const rer = 70 * Math.pow(currentWeight * 0.453592, 0.75); // Convert lbs to kg
    let growthFactor = 3.0;
    
    if (ageInWeeks < 16) growthFactor = 3.0;
    else if (ageInWeeks < 40) growthFactor = 2.5;
    else growthFactor = 2.0;

    if (activityLevel === "high") growthFactor *= 1.2;
    else if (activityLevel === "low") growthFactor *= 0.9;

    const dailyCalories = rer * growthFactor;

    // Calculate food amount based on type (calories per cup)
    let caloriesPerCup = 350; // Default for dry kibble
    if (foodType === "wet") caloriesPerCup = 250;
    else if (foodType === "raw") caloriesPerCup = 400;

    const dailyAmount = dailyCalories / caloriesPerCup;

    // Determine meals per day based on age
    let mealsPerDay = 4;
    if (ageInWeeks >= 12 && ageInWeeks < 24) mealsPerDay = 3;
    else if (ageInWeeks >= 24) mealsPerDay = 2;

    const amountPerMeal = dailyAmount / mealsPerDay;

    setResult({
      dailyAmount: parseFloat(dailyAmount.toFixed(2)),
      mealsPerDay,
      amountPerMeal: parseFloat(amountPerMeal.toFixed(2)),
      calories: Math.round(dailyCalories),
      expectedAdultWeight: Math.round(expectedAdultWeight),
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (age && weight && breedSize && activityLevel && foodType) {
      calculateFeeding();
    }
  };

  return (
    <div className="w-full">
      <Card className="corner-flourish card-shadow">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <Calculator className="h-6 w-6 text-primary" />
            </div>
            <div>
              <CardTitle className="text-2xl">Puppy Feeding Calculator</CardTitle>
              <CardDescription>
                Calculate the right amount of food for your growing puppy
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Age Input */}
              <div className="space-y-2">
                <Label htmlFor="age">Puppy Age</Label>
                <div className="flex gap-2">
                  <Input
                    id="age"
                    type="number"
                    placeholder="Enter age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    required
                    className="flex-1"
                  />
                  <Select value={ageUnit} onValueChange={setAgeUnit}>
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="weeks">Weeks</SelectItem>
                      <SelectItem value="months">Months</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Weight Input */}
              <div className="space-y-2">
                <Label htmlFor="weight">Current Weight (lbs)</Label>
                <Input
                  id="weight"
                  type="number"
                  step="0.1"
                  placeholder="Enter weight"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  required
                />
              </div>

              {/* Breed Size */}
              <div className="space-y-2">
                <Label htmlFor="breedSize">Breed Size</Label>
                <Select value={breedSize} onValueChange={setBreedSize} required>
                  <SelectTrigger id="breedSize">
                    <SelectValue placeholder="Select breed size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="small">Small (under 20 lbs adult)</SelectItem>
                    <SelectItem value="medium">Medium (20-50 lbs adult)</SelectItem>
                    <SelectItem value="large">Large (50-90 lbs adult)</SelectItem>
                    <SelectItem value="giant">Giant (over 90 lbs adult)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Activity Level */}
              <div className="space-y-2">
                <Label htmlFor="activityLevel">Activity Level</Label>
                <Select value={activityLevel} onValueChange={setActivityLevel} required>
                  <SelectTrigger id="activityLevel">
                    <SelectValue placeholder="Select activity level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low (mostly resting)</SelectItem>
                    <SelectItem value="moderate">Moderate (normal play)</SelectItem>
                    <SelectItem value="high">High (very active)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Food Type */}
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="foodType">Food Type</Label>
                <Select value={foodType} onValueChange={setFoodType} required>
                  <SelectTrigger id="foodType">
                    <SelectValue placeholder="Select food type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="dry">Dry Kibble</SelectItem>
                    <SelectItem value="wet">Wet Food</SelectItem>
                    <SelectItem value="raw">Raw Diet</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button type="submit" className="w-full" size="lg">
              Calculate Feeding Amount
            </Button>
          </form>

          {result && (
            <div className="mt-8 p-6 bg-accent/30 rounded-lg border-2 border-accent animate-fade-up">
              <h3 className="text-xl font-semibold mb-4 text-accent-foreground">Your Feeding Plan</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-background p-4 rounded-md">
                  <p className="text-sm text-muted-foreground">Daily Food Amount</p>
                  <p className="text-2xl font-bold text-primary">{result.dailyAmount} cups</p>
                </div>
                <div className="bg-background p-4 rounded-md">
                  <p className="text-sm text-muted-foreground">Meals Per Day</p>
                  <p className="text-2xl font-bold text-primary">{result.mealsPerDay} meals</p>
                </div>
                <div className="bg-background p-4 rounded-md">
                  <p className="text-sm text-muted-foreground">Amount Per Meal</p>
                  <p className="text-2xl font-bold text-primary">{result.amountPerMeal} cups</p>
                </div>
                <div className="bg-background p-4 rounded-md">
                  <p className="text-sm text-muted-foreground">Daily Calories</p>
                  <p className="text-2xl font-bold text-primary">{result.calories} kcal</p>
                </div>
                <div className="bg-background p-4 rounded-md md:col-span-2">
                  <p className="text-sm text-muted-foreground">Expected Adult Weight</p>
                  <p className="text-2xl font-bold text-primary">{result.expectedAdultWeight} lbs</p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-background rounded-md">
                <h4 className="font-semibold mb-2">Feeding Schedule Recommendation</h4>
                <p className="text-sm text-muted-foreground">
                  Feed your puppy {result.mealsPerDay} times per day at consistent times. 
                  {result.mealsPerDay === 4 && " Try feeding at 7am, 12pm, 5pm, and 9pm."}
                  {result.mealsPerDay === 3 && " Try feeding at 7am, 1pm, and 7pm."}
                  {result.mealsPerDay === 2 && " Try feeding at 8am and 6pm."}
                </p>
              </div>

              {/* Affiliate Section */}
              <div className="mt-6 p-4 bg-primary/5 rounded-md border border-primary/20">
                <h4 className="font-semibold mb-2 text-primary">Recommended Products</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Get high-quality puppy food and feeding supplies from our trusted partners:
                </p>
                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://www.chewy.com" target="_blank" rel="noopener noreferrer">
                      Shop Puppy Food on Chewy
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://www.innovetpet.com" target="_blank" rel="noopener noreferrer">
                      Puppy Supplements
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
