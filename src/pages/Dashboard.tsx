import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Recycle, 
  Users, 
  TrendingUp, 
  Award,
  Leaf,
  MapPin,
  Calendar,
  CheckCircle
} from "lucide-react";
import ecoHero from "@/assets/eco-hero.jpg";

const Dashboard = () => {
  const stats = [
    { label: "Total Users", value: "2,847", icon: Users, change: "+12%" },
    { label: "Waste Collected", value: "45.2T", icon: Recycle, change: "+8%" },
    { label: "Eco Points Earned", value: "128K", icon: Award, change: "+15%" },
    { label: "Trees Saved", value: "1,234", icon: Leaf, change: "+23%" },
  ];

  const recentTasks = [
    { id: 1, task: "Westlands Collection Route", status: "completed", date: "Today 9:00 AM" },
    { id: 2, task: "Kibera Waste Assessment", status: "in-progress", date: "Today 11:30 AM" },
    { id: 3, task: "Eastleigh Recycling Center", status: "pending", date: "Tomorrow 8:00 AM" },
    { id: 4, task: "Karen Compost Distribution", status: "completed", date: "Yesterday 3:00 PM" },
  ];

  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-xl gradient-eco p-8 text-white">
        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-2">Welcome to EcoWaste Control</h1>
          <p className="text-lg opacity-90 mb-6">
            Managing Nairobi's waste efficiently for a cleaner, greener future
          </p>
          <div className="flex gap-4">
            <Button variant="secondary" className="bg-white/20 hover:bg-white/30 border-white/30">
              <MapPin className="w-4 h-4 mr-2" />
              View Map
            </Button>
            <Button variant="outline" className="border-white/30 hover:bg-white/10">
              <Calendar className="w-4 h-4 mr-2" />
              Schedule Collection
            </Button>
          </div>
        </div>
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-20">
          <img 
            src={ecoHero} 
            alt="Eco-friendly waste management" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="shadow-card eco-hover">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.label}
              </CardTitle>
              <stat.icon className="h-5 w-5 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <Badge variant={stat.change.startsWith('+') ? 'default' : 'secondary'} className="mt-2">
                <TrendingUp className="w-3 h-3 mr-1" />
                {stat.change}
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Weekly Progress */}
        <Card className="lg:col-span-2 shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Recycle className="h-5 w-5 text-primary" />
              Weekly Waste Collection Progress
            </CardTitle>
            <CardDescription>
              Current week: 78% of target reached
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Westlands</span>
                <span>90%</span>
              </div>
              <Progress value={90} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Kibera</span>
                <span>65%</span>
              </div>
              <Progress value={65} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Eastleigh</span>
                <span>82%</span>
              </div>
              <Progress value={82} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Karen</span>
                <span>95%</span>
              </div>
              <Progress value={95} className="h-2" />
            </div>
          </CardContent>
        </Card>

        {/* Recent Tasks */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Recent Tasks</CardTitle>
            <CardDescription>Latest waste management activities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentTasks.map((task) => (
                <div key={task.id} className="flex items-start space-x-3">
                  <div className="mt-1">
                    {task.status === 'completed' ? (
                      <CheckCircle className="h-4 w-4 text-success" />
                    ) : task.status === 'in-progress' ? (
                      <div className="h-4 w-4 rounded-full bg-accent animate-pulse" />
                    ) : (
                      <div className="h-4 w-4 rounded-full bg-muted" />
                    )}
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium">{task.task}</p>
                    <p className="text-xs text-muted-foreground">{task.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;