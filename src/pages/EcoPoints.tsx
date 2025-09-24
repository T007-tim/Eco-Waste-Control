import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Award, 
  Recycle, 
  Leaf, 
  Trash2,
  Gift,
  Star,
  TrendingUp,
  Plus
} from "lucide-react";

const EcoPoints = () => {
  const donationOptions = [
    {
      title: "Donate Plastic Waste",
      description: "Contribute plastic bottles, containers, and packaging",
      points: 150,
      icon: Recycle,
      color: "bg-blue-500"
    },
    {
      title: "Donate Compost Materials",
      description: "Organic waste for composting programs",
      points: 200,
      icon: Leaf,
      color: "bg-green-500"
    },
    {
      title: "Donate Recyclable Materials",
      description: "Paper, cardboard, glass, and metal items",
      points: 120,
      icon: Trash2,
      color: "bg-purple-500"
    }
  ];

  const achievements = [
    { title: "Eco Warrior", points: "1,000+ points", unlocked: true },
    { title: "Plastic Hero", points: "500+ plastic items", unlocked: true },
    { title: "Compost Champion", points: "50kg organic waste", unlocked: false },
    { title: "Recycling Master", points: "100+ donations", unlocked: false },
  ];

  const leaderboard = [
    { rank: 1, name: "Sarah Kamau", points: 2450, avatar: "SK" },
    { rank: 2, name: "John Mwangi", points: 2201, avatar: "JM" },
    { rank: 3, name: "Grace Wanjiku", points: 1998, avatar: "GW" },
    { rank: 4, name: "David Ochieng", points: 1876, avatar: "DO" },
    { rank: 5, name: "You", points: 1654, avatar: "ME", isCurrentUser: true },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="gradient-eco text-white p-6 rounded-xl">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Your Eco Points</h1>
            <p className="text-lg opacity-90">Make a difference while earning rewards</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold">1,654</div>
            <div className="text-sm opacity-80">Total Points</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Donation Options */}
        <div className="lg:col-span-2 space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Donation Options</h2>
            <div className="grid gap-4">
              {donationOptions.map((option, index) => (
                <Card key={index} className="shadow-card eco-hover">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`p-3 rounded-lg ${option.color}`}>
                          <option.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{option.title}</CardTitle>
                          <CardDescription>{option.description}</CardDescription>
                        </div>
                      </div>
                      <Badge className="gradient-forest text-white">
                        +{option.points} pts
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full gradient-forest text-white hover:opacity-90">
                      <Plus className="w-4 h-4 mr-2" />
                      Donate Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Progress to Next Reward */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Gift className="h-5 w-5 text-primary" />
                Next Reward Progress
              </CardTitle>
              <CardDescription>500 more points to unlock Premium Eco Kit</CardDescription>
            </CardHeader>
            <CardContent>
              <Progress value={76} className="h-3 mb-2" />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>1,654 / 2,154 points</span>
                <span>76% complete</span>
              </div>
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5 text-primary" />
                Achievements
              </CardTitle>
              <CardDescription>Your environmental milestones</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div 
                    key={index} 
                    className={`p-4 rounded-lg border ${
                      achievement.unlocked 
                        ? 'bg-success/10 border-success/20' 
                        : 'bg-muted/50 border-muted'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Star 
                        className={`h-5 w-5 ${
                          achievement.unlocked ? 'text-success' : 'text-muted-foreground'
                        }`} 
                      />
                      <div>
                        <p className="font-medium">{achievement.title}</p>
                        <p className="text-xs text-muted-foreground">{achievement.points}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Leaderboard */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Leaderboard
            </CardTitle>
            <CardDescription>Top eco contributors this month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {leaderboard.map((user) => (
                <div 
                  key={user.rank}
                  className={`flex items-center gap-3 p-3 rounded-lg ${
                    user.isCurrentUser ? 'gradient-earth border border-primary/20' : 'hover:bg-muted/50'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    user.rank <= 3 ? 'gradient-forest text-white' : 'bg-muted text-muted-foreground'
                  }`}>
                    {user.rank}
                  </div>
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-medium text-primary">
                    {user.avatar}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">{user.name}</p>
                    <p className="text-sm text-muted-foreground">{user.points} points</p>
                  </div>
                  {user.rank <= 3 && (
                    <Award className="h-5 w-5 text-accent" />
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EcoPoints;