import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Syringe, Calendar, AlertCircle } from "lucide-react";

interface VaccineAppointment {
  week: number;
  date: string;
  vaccines: string[];
  type: "core" | "non-core";
  cost: number;
}

interface VaccinationResult {
  schedule: VaccineAppointment[];
  totalCost: number;
  nextAppointment: string;
}

export default function VaccinationCalculator() {
  const [birthDate, setBirthDate] = useState<string>("");
  const [lifestyle, setLifestyle] = useState<string>("");
  const [region, setRegion] = useState<string>("");
  const [result, setResult] = useState<VaccinationResult | null>(null);

  const calculateSchedule = () => {
    const birth = new Date(birthDate);
    const schedule: VaccineAppointment[] = [];

    // Core vaccines schedule
    const coreVaccines = [
      { week: 6, vaccines: ["DHPP (Distemper, Hepatitis, Parvovirus, Parainfluenza) - 1st dose"], cost: 25 },
      { week: 9, vaccines: ["DHPP - 2nd dose"], cost: 25 },
      { week: 12, vaccines: ["DHPP - 3rd dose", "Rabies - 1st dose"], cost: 45 },
      { week: 16, vaccines: ["DHPP - 4th dose (final puppy series)"], cost: 25 },
    ];

    coreVaccines.forEach(({ week, vaccines, cost }) => {
      const appointmentDate = new Date(birth);
      appointmentDate.setDate(appointmentDate.getDate() + (week * 7));
      
      schedule.push({
        week,
        date: appointmentDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        vaccines,
        type: "core",
        cost,
      });
    });

    // Non-core vaccines based on lifestyle and region
    if (lifestyle === "active" || lifestyle === "social") {
      const bordatellaDate = new Date(birth);
      bordatellaDate.setDate(bordatellaDate.getDate() + (12 * 7));
      schedule.push({
        week: 12,
        date: bordatellaDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        vaccines: ["Bordetella (Kennel Cough)"],
        type: "non-core",
        cost: 20,
      });
    }

    if (region === "midwest" || region === "northeast") {
      const lymeDate = new Date(birth);
      lymeDate.setDate(lymeDate.getDate() + (12 * 7));
      schedule.push({
        week: 12,
        date: lymeDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        vaccines: ["Lyme Disease - 1st dose"],
        type: "non-core",
        cost: 30,
      });
      
      const lymeBooster = new Date(birth);
      lymeBooster.setDate(lymeBooster.getDate() + (16 * 7));
      schedule.push({
        week: 16,
        date: lymeBooster.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        vaccines: ["Lyme Disease - 2nd dose"],
        type: "non-core",
        cost: 30,
      });
    }

    if (lifestyle === "outdoor" || region === "southwest") {
      const leptDate = new Date(birth);
      leptDate.setDate(leptDate.getDate() + (12 * 7));
      schedule.push({
        week: 12,
        date: leptDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        vaccines: ["Leptospirosis - 1st dose"],
        type: "non-core",
        cost: 25,
      });
      
      const leptBooster = new Date(birth);
      leptBooster.setDate(leptBooster.getDate() + (16 * 7));
      schedule.push({
        week: 16,
        date: leptBooster.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        vaccines: ["Leptospirosis - 2nd dose"],
        type: "non-core",
        cost: 25,
      });
    }

    // Sort by week
    schedule.sort((a, b) => a.week - b.week);

    // Merge appointments on same week
    const mergedSchedule: VaccineAppointment[] = [];
    schedule.forEach(appt => {
      const existing = mergedSchedule.find(m => m.week === appt.week);
      if (existing) {
        existing.vaccines.push(...appt.vaccines);
        existing.cost += appt.cost;
        if (appt.type === "core") existing.type = "core";
      } else {
        mergedSchedule.push({ ...appt });
      }
    });

    const totalCost = mergedSchedule.reduce((sum, appt) => sum + appt.cost, 0);
    
    // Find next appointment
    const today = new Date();
    const nextAppt = mergedSchedule.find(appt => new Date(appt.date) > today);

    setResult({
      schedule: mergedSchedule,
      totalCost,
      nextAppointment: nextAppt ? nextAppt.date : "All appointments complete",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (birthDate && lifestyle && region) {
      calculateSchedule();
    }
  };

  return (
    <div className="w-full">
      <Card className="corner-flourish card-shadow">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <Syringe className="h-6 w-6 text-primary" />
            </div>
            <div>
              <CardTitle className="text-2xl">Vaccination Schedule Calculator</CardTitle>
              <CardDescription>
                Generate a complete vaccination timeline for your puppy
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="birthDate">Puppy's Date of Birth</Label>
              <Input
                id="birthDate"
                type="date"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="lifestyle">Lifestyle</Label>
              <Select value={lifestyle} onValueChange={setLifestyle} required>
                <SelectTrigger id="lifestyle">
                  <SelectValue placeholder="Select lifestyle" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="indoor">Mostly Indoor</SelectItem>
                  <SelectItem value="outdoor">Outdoor/Hiking</SelectItem>
                  <SelectItem value="social">Dog Parks/Daycare</SelectItem>
                  <SelectItem value="active">Very Active/Travel</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="region">Geographic Region</Label>
              <Select value={region} onValueChange={setRegion} required>
                <SelectTrigger id="region">
                  <SelectValue placeholder="Select region" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="northeast">Northeast US</SelectItem>
                  <SelectItem value="southeast">Southeast US</SelectItem>
                  <SelectItem value="midwest">Midwest US</SelectItem>
                  <SelectItem value="southwest">Southwest US</SelectItem>
                  <SelectItem value="west">West Coast US</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button type="submit" className="w-full" size="lg">
              Generate Vaccination Schedule
            </Button>
          </form>

          {result && (
            <div className="mt-8 space-y-6 animate-fade-up">
              <div className="p-6 bg-accent/30 rounded-lg border-2 border-accent">
                <h3 className="text-xl font-semibold mb-4 text-accent-foreground">Vaccination Overview</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-background p-4 rounded-md">
                    <p className="text-sm text-muted-foreground">Total Appointments</p>
                    <p className="text-2xl font-bold text-primary">{result.schedule.length}</p>
                  </div>
                  <div className="bg-background p-4 rounded-md">
                    <p className="text-sm text-muted-foreground">Estimated Total Cost</p>
                    <p className="text-2xl font-bold text-primary">${result.totalCost}</p>
                  </div>
                  <div className="bg-background p-4 rounded-md md:col-span-2">
                    <p className="text-sm text-muted-foreground">Next Appointment</p>
                    <p className="text-xl font-bold text-primary flex items-center gap-2">
                      <Calendar className="h-5 w-5" />
                      {result.nextAppointment}
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold">Complete Vaccination Schedule</h4>
                <div className="space-y-3">
                  {result.schedule.map((appointment, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-lg border-2 ${
                        appointment.type === "core"
                          ? "bg-primary/5 border-primary/30"
                          : "bg-accent/5 border-accent/30"
                      }`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <span className="text-sm font-semibold text-muted-foreground">
                            Week {appointment.week}
                          </span>
                          <p className="text-lg font-bold text-foreground">{appointment.date}</p>
                        </div>
                        <div className="text-right">
                          <span className={`text-xs font-medium px-2 py-1 rounded ${
                            appointment.type === "core"
                              ? "bg-primary text-primary-foreground"
                              : "bg-accent text-accent-foreground"
                          }`}>
                            {appointment.type === "core" ? "Core" : "Recommended"}
                          </span>
                          <p className="text-sm font-semibold text-primary mt-1">${appointment.cost}</p>
                        </div>
                      </div>
                      <ul className="space-y-1">
                        {appointment.vaccines.map((vaccine, vIndex) => (
                          <li key={vIndex} className="text-sm text-foreground flex items-start gap-2">
                            <Syringe className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
                            <span>{vaccine}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg flex gap-3">
                <AlertCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="font-semibold text-blue-900 mb-1">Important Notes:</p>
                  <ul className="text-blue-800 space-y-1 list-disc list-inside">
                    <li>Core vaccines are essential for all puppies</li>
                    <li>Non-core vaccines are recommended based on your lifestyle and location</li>
                    <li>Consult your veterinarian for personalized recommendations</li>
                    <li>Costs are estimates and may vary by location and clinic</li>
                  </ul>
                </div>
              </div>

              {/* Affiliate Section */}
              <div className="p-4 bg-primary/5 rounded-md border border-primary/20">
                <h4 className="font-semibold mb-2 text-primary">Protect Your Puppy's Health</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Pet insurance can help cover unexpected vet costs and give you peace of mind:
                </p>
                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://www.aspcapetinsurance.com" target="_blank" rel="noopener noreferrer">
                      ASPCA Pet Insurance
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://www.petinsurer.com" target="_blank" rel="noopener noreferrer">
                      Compare Insurance Plans
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
