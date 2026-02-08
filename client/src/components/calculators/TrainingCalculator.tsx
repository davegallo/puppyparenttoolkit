import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { GraduationCap, CheckCircle2 } from "lucide-react";

interface TrainingMilestone {
  week: number;
  skill: string;
  description: string;
}

interface TrainingResult {
  timeline: TrainingMilestone[];
  totalWeeks: number;
  dailyMinutes: number;
  completionDate: string;
}

export default function TrainingCalculator() {
  const [currentAge, setCurrentAge] = useState<string>("");
  const [hoursPerWeek, setHoursPerWeek] = useState<string>("");
  const [hasExperience, setHasExperience] = useState<boolean>(false);
  const [goals, setGoals] = useState<string[]>([]);
  const [result, setResult] = useState<TrainingResult | null>(null);

  const trainingGoals = [
    { id: "potty", label: "Potty Training" },
    { id: "crate", label: "Crate Training" },
    { id: "basic", label: "Basic Commands (Sit, Stay, Come)" },
    { id: "leash", label: "Leash Training" },
    { id: "socialization", label: "Socialization" },
    { id: "bite", label: "Bite Inhibition" },
  ];

  const toggleGoal = (goalId: string) => {
    setGoals(prev =>
      prev.includes(goalId)
        ? prev.filter(g => g !== goalId)
        : [...prev, goalId]
    );
  };

  const calculateTimeline = () => {
    const age = parseInt(currentAge);
    const weeklyHours = parseFloat(hoursPerWeek);
    const dailyMinutes = Math.round((weeklyHours * 60) / 7);

    const milestones: TrainingMilestone[] = [];
    let currentWeek = 0;

    // Adjust timeline based on experience
    const experienceMultiplier = hasExperience ? 0.8 : 1.0;

    // Build timeline based on selected goals
    if (goals.includes("potty")) {
      milestones.push(
        { week: currentWeek + 2, skill: "Potty Training Begins", description: "Establish routine, take puppy out frequently" },
        { week: currentWeek + Math.round(6 * experienceMultiplier), skill: "Daytime Consistency", description: "Puppy understands outdoor potty routine" },
        { week: currentWeek + Math.round(12 * experienceMultiplier), skill: "Fully Potty Trained", description: "Reliable indoor/outdoor distinction" }
      );
      currentWeek = Math.round(12 * experienceMultiplier);
    }

    if (goals.includes("crate")) {
      const startWeek = Math.max(currentWeek - 10, 1);
      milestones.push(
        { week: startWeek, skill: "Crate Introduction", description: "Make crate comfortable and inviting" },
        { week: startWeek + Math.round(3 * experienceMultiplier), skill: "Short Stays", description: "Puppy comfortable for 30-60 minutes" },
        { week: startWeek + Math.round(6 * experienceMultiplier), skill: "Overnight Comfort", description: "Sleeps through the night in crate" }
      );
      currentWeek = Math.max(currentWeek, startWeek + Math.round(6 * experienceMultiplier));
    }

    if (goals.includes("basic")) {
      const startWeek = Math.max(currentWeek - 8, 2);
      milestones.push(
        { week: startWeek, skill: "Name Recognition", description: "Puppy responds to their name" },
        { week: startWeek + Math.round(2 * experienceMultiplier), skill: "Sit Command", description: "Reliable sit on command" },
        { week: startWeek + Math.round(4 * experienceMultiplier), skill: "Stay & Come", description: "Basic impulse control established" },
        { week: startWeek + Math.round(8 * experienceMultiplier), skill: "Advanced Commands", description: "Down, leave it, drop it mastered" }
      );
      currentWeek = Math.max(currentWeek, startWeek + Math.round(8 * experienceMultiplier));
    }

    if (goals.includes("leash")) {
      const startWeek = Math.max(currentWeek - 6, 3);
      milestones.push(
        { week: startWeek, skill: "Leash Introduction", description: "Get comfortable wearing collar and leash" },
        { week: startWeek + Math.round(3 * experienceMultiplier), skill: "Loose Leash Walking", description: "Walks without pulling" },
        { week: startWeek + Math.round(6 * experienceMultiplier), skill: "Distraction Training", description: "Maintains focus during walks" }
      );
      currentWeek = Math.max(currentWeek, startWeek + Math.round(6 * experienceMultiplier));
    }

    if (goals.includes("socialization")) {
      const startWeek = Math.max(currentWeek - 10, 1);
      milestones.push(
        { week: startWeek, skill: "Early Socialization", description: "Safe exposure to new sights and sounds" },
        { week: startWeek + Math.round(4 * experienceMultiplier), skill: "Dog Interactions", description: "Positive experiences with other dogs" },
        { week: startWeek + Math.round(8 * experienceMultiplier), skill: "Public Confidence", description: "Comfortable in various environments" }
      );
      currentWeek = Math.max(currentWeek, startWeek + Math.round(8 * experienceMultiplier));
    }

    if (goals.includes("bite")) {
      const startWeek = Math.max(currentWeek - 8, 1);
      milestones.push(
        { week: startWeek, skill: "Bite Inhibition Starts", description: "Redirect biting to appropriate toys" },
        { week: startWeek + Math.round(4 * experienceMultiplier), skill: "Gentle Mouth", description: "Reduced biting intensity" },
        { week: startWeek + Math.round(8 * experienceMultiplier), skill: "No Biting", description: "Puppy understands not to bite humans" }
      );
      currentWeek = Math.max(currentWeek, startWeek + Math.round(8 * experienceMultiplier));
    }

    // Sort milestones by week
    milestones.sort((a, b) => a.week - b.week);

    // Calculate completion date
    const completionDate = new Date();
    completionDate.setDate(completionDate.getDate() + (currentWeek * 7));

    setResult({
      timeline: milestones,
      totalWeeks: currentWeek,
      dailyMinutes,
      completionDate: completionDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentAge && hoursPerWeek && goals.length > 0) {
      calculateTimeline();
    }
  };

  return (
    <div className="w-full">
      <Card className="corner-flourish card-shadow">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <GraduationCap className="h-6 w-6 text-primary" />
            </div>
            <div>
              <CardTitle className="text-2xl">Training Timeline Calculator</CardTitle>
              <CardDescription>
                Create a personalized training schedule for your puppy
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="currentAge">Puppy's Current Age (weeks)</Label>
                <Input
                  id="currentAge"
                  type="number"
                  placeholder="Enter age in weeks"
                  value={currentAge}
                  onChange={(e) => setCurrentAge(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="hoursPerWeek">Training Time (hours per week)</Label>
                <Select value={hoursPerWeek} onValueChange={setHoursPerWeek} required>
                  <SelectTrigger id="hoursPerWeek">
                    <SelectValue placeholder="Select weekly hours" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="3">3 hours (beginner)</SelectItem>
                    <SelectItem value="5">5 hours (moderate)</SelectItem>
                    <SelectItem value="7">7 hours (dedicated)</SelectItem>
                    <SelectItem value="10">10+ hours (intensive)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-3">
              <Label>Training Goals (select all that apply)</Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {trainingGoals.map((goal) => (
                  <div key={goal.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={goal.id}
                      checked={goals.includes(goal.id)}
                      onCheckedChange={() => toggleGoal(goal.id)}
                    />
                    <label
                      htmlFor={goal.id}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                    >
                      {goal.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="experience"
                checked={hasExperience}
                onCheckedChange={(checked) => setHasExperience(checked === true)}
              />
              <label
                htmlFor="experience"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
              >
                I have previous dog training experience
              </label>
            </div>

            <Button type="submit" className="w-full" size="lg">
              Generate Training Timeline
            </Button>
          </form>

          {result && (
            <div className="mt-8 space-y-6 animate-fade-up">
              <div className="p-6 bg-accent/30 rounded-lg border-2 border-accent">
                <h3 className="text-xl font-semibold mb-4 text-accent-foreground">Your Training Plan</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-background p-4 rounded-md">
                    <p className="text-sm text-muted-foreground">Total Duration</p>
                    <p className="text-2xl font-bold text-primary">{result.totalWeeks} weeks</p>
                  </div>
                  <div className="bg-background p-4 rounded-md">
                    <p className="text-sm text-muted-foreground">Daily Training</p>
                    <p className="text-2xl font-bold text-primary">{result.dailyMinutes} min</p>
                  </div>
                  <div className="bg-background p-4 rounded-md">
                    <p className="text-sm text-muted-foreground">Est. Completion</p>
                    <p className="text-lg font-bold text-primary">{result.completionDate}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold">Training Milestones</h4>
                <div className="space-y-3">
                  {result.timeline.map((milestone, index) => (
                    <div
                      key={index}
                      className="flex gap-4 p-4 bg-card rounded-lg border hover-lift"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-sm font-bold text-primary">W{milestone.week}</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <h5 className="font-semibold text-foreground">{milestone.skill}</h5>
                          <CheckCircle2 className="h-5 w-5 text-muted-foreground" />
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">{milestone.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Affiliate Section */}
              <div className="p-4 bg-primary/5 rounded-md border border-primary/20">
                <h4 className="font-semibold mb-2 text-primary">Recommended Training Resources</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Accelerate your puppy's training with expert courses and quality equipment:
                </p>
                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://www.example.com/training-courses" target="_blank" rel="noopener noreferrer">
                      Online Training Courses
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://www.chewy.com" target="_blank" rel="noopener noreferrer">
                      Training Equipment
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
