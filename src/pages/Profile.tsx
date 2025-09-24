import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar,
  Award,
  Edit,
  Camera,
  Recycle,
  Leaf
} from "lucide-react";

const Profile = () => {
  const userStats = [
    { label: "Total Donations", value: "47", icon: Recycle },
    { label: "Eco Points", value: "1,654", icon: Award },
    { label: "Trees Saved", value: "23", icon: Leaf },
    { label: "Days Active", value: "89", icon: Calendar },
  ];

  const recentActivity = [
    { date: "2024-01-15", action: "Donated plastic waste", points: "+150 pts" },
    { date: "2024-01-14", action: "Completed verification", points: "+50 pts" },
    { date: "2024-01-12", action: "Donated compost materials", points: "+200 pts" },
    { date: "2024-01-10", action: "Participated in cleanup", points: "+300 pts" },
  ];

  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <Card className="shadow-card">
        <CardContent className="p-6">
          <div className="flex items-start gap-6">
            <div className="relative">
              <Avatar className="w-24 h-24">
                <AvatarImage src="/placeholder-avatar.jpg" />
                <AvatarFallback className="text-2xl gradient-forest text-white">
                  JD
                </AvatarFallback>
              </Avatar>
              <Button size="sm" className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full p-0">
                <Camera className="w-4 h-4" />
              </Button>
            </div>

            <div className="flex-1 space-y-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-3xl font-bold">John Doe</h1>
                  <Badge className="gradient-forest text-white">Verified</Badge>
                </div>
                <p className="text-muted-foreground">Eco Warrior • Member since January 2024</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span>john.doe@email.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span>+254 712 345 678</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>Westlands, Nairobi</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span>Joined Jan 2024</span>
                </div>
              </div>

              <Button className="gradient-forest text-white">
                <Edit className="w-4 h-4 mr-2" />
                Edit Profile
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Stats */}
        <div className="lg:col-span-2 space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {userStats.map((stat, index) => (
              <Card key={index} className="shadow-card eco-hover">
                <CardContent className="p-4 text-center">
                  <stat.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Recent Activity */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Your latest contributions to the environment</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                    <div>
                      <p className="font-medium">{activity.action}</p>
                      <p className="text-sm text-muted-foreground">{activity.date}</p>
                    </div>
                    <Badge className="gradient-forest text-white">
                      {activity.points}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Environmental Impact */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Leaf className="h-5 w-5 text-primary" />
                Environmental Impact
              </CardTitle>
              <CardDescription>Your contribution to a cleaner Nairobi</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="gradient-earth p-4 rounded-lg">
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-primary">2.5 Tons</div>
                  <p className="text-sm text-muted-foreground">Total waste diverted from landfills</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 rounded-lg bg-blue-50">
                  <div className="text-xl font-bold text-blue-600">156kg</div>
                  <p className="text-xs text-blue-600">Plastic Recycled</p>
                </div>
                <div className="text-center p-3 rounded-lg bg-green-50">
                  <div className="text-xl font-bold text-green-600">89kg</div>
                  <p className="text-xs text-green-600">Organic Composted</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Achievements */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              Achievements
            </CardTitle>
            <CardDescription>Your eco milestones</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-success/10 border border-success/20">
                <div className="w-10 h-10 rounded-full bg-success/20 flex items-center justify-center">
                  <Award className="h-5 w-5 text-success" />
                </div>
                <div>
                  <p className="font-medium text-success">Eco Warrior</p>
                  <p className="text-xs text-muted-foreground">1,000+ points earned</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/10 border border-primary/20">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Recycle className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-primary">Plastic Hero</p>
                  <p className="text-xs text-muted-foreground">50+ plastic donations</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 border border-muted">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                  <Leaf className="h-5 w-5 text-muted-foreground" />
                </div>
                <div>
                  <p className="font-medium text-muted-foreground">Compost Champion</p>
                  <p className="text-xs text-muted-foreground">Progress: 23/50 donations</p>
                </div>
              </div>
            </div>

            <Button variant="outline" className="w-full">
              View All Achievements
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Profile;