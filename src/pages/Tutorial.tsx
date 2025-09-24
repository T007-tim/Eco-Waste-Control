import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  BookOpen, 
  Play, 
  CheckCircle, 
  Clock,
  Recycle,
  Leaf,
  Users,
  Award,
  Video,
  FileText
} from "lucide-react";

const Tutorial = () => {
  const tutorialSections = [
    {
      id: 1,
      title: "Getting Started",
      description: "Learn the basics of waste management and the EcoWaste platform",
      lessons: [
        { title: "Platform Overview", duration: "5 min", completed: true, type: "video" },
        { title: "Creating Your Profile", duration: "3 min", completed: true, type: "interactive" },
        { title: "Understanding Eco Points", duration: "4 min", completed: false, type: "video" },
      ],
      icon: BookOpen,
      color: "bg-blue-500"
    },
    {
      id: 2,
      title: "Waste Sorting & Recycling",
      description: "Master the art of proper waste separation and recycling techniques",
      lessons: [
        { title: "Types of Waste Materials", duration: "6 min", completed: false, type: "video" },
        { title: "Proper Sorting Techniques", duration: "8 min", completed: false, type: "interactive" },
        { title: "Recycling Best Practices", duration: "7 min", completed: false, type: "article" },
        { title: "Common Sorting Mistakes", duration: "5 min", completed: false, type: "video" },
      ],
      icon: Recycle,
      color: "bg-green-500"
    },
    {
      id: 3,
      title: "Composting & Organic Waste",
      description: "Learn how to turn organic waste into valuable compost",
      lessons: [
        { title: "Introduction to Composting", duration: "6 min", completed: false, type: "video" },
        { title: "Setting Up Your Compost Bin", duration: "10 min", completed: false, type: "interactive" },
        { title: "Maintaining Your Compost", duration: "8 min", completed: false, type: "article" },
        { title: "Using Finished Compost", duration: "5 min", completed: false, type: "video" },
      ],
      icon: Leaf,
      color: "bg-green-600"
    },
    {
      id: 4,
      title: "Community Engagement",
      description: "Build a sustainable community and influence others",
      lessons: [
        { title: "Organizing Cleanup Events", duration: "12 min", completed: false, type: "video" },
        { title: "Educating Your Neighbors", duration: "8 min", completed: false, type: "article" },
        { title: "Building Eco Teams", duration: "10 min", completed: false, type: "interactive" },
      ],
      icon: Users,
      color: "bg-purple-500"
    }
  ];

  const quickTips = [
    "Always clean containers before recycling",
    "Compost browns and greens in a 3:1 ratio",
    "Check local recycling guidelines regularly",
    "Lead by example in your community"
  ];

  const getTotalProgress = () => {
    const totalLessons = tutorialSections.reduce((acc, section) => acc + section.lessons.length, 0);
    const completedLessons = tutorialSections.reduce(
      (acc, section) => acc + section.lessons.filter(lesson => lesson.completed).length, 
      0
    );
    return Math.round((completedLessons / totalLessons) * 100);
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video': return <Video className="h-4 w-4" />;
      case 'interactive': return <Play className="h-4 w-4" />;
      case 'article': return <FileText className="h-4 w-4" />;
      default: return <BookOpen className="h-4 w-4" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="gradient-eco text-white p-6 rounded-xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white/20 rounded-lg">
              <BookOpen className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold mb-2">Learning Center</h1>
              <p className="text-lg opacity-90">Master waste management and earn eco points</p>
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">{getTotalProgress()}%</div>
            <div className="text-sm opacity-80">Complete</div>
          </div>
        </div>
      </div>

      {/* Overall Progress */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5 text-primary" />
            Your Learning Progress
          </CardTitle>
          <CardDescription>Keep learning to unlock more eco point multipliers</CardDescription>
        </CardHeader>
        <CardContent>
          <Progress value={getTotalProgress()} className="h-3 mb-4" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-3 rounded-lg bg-success/10">
              <div className="text-2xl font-bold text-success">2</div>
              <p className="text-sm text-success">Completed</p>
            </div>
            <div className="text-center p-3 rounded-lg bg-accent/10">
              <div className="text-2xl font-bold text-accent">13</div>
              <p className="text-sm text-accent">In Progress</p>
            </div>
            <div className="text-center p-3 rounded-lg bg-primary/10">
              <div className="text-2xl font-bold text-primary">2.5x</div>
              <p className="text-sm text-primary">Point Multiplier</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tutorial Sections */}
      <div className="space-y-6">
        {tutorialSections.map((section) => {
          const completedLessons = section.lessons.filter(lesson => lesson.completed).length;
          const progressPercentage = Math.round((completedLessons / section.lessons.length) * 100);
          
          return (
            <Card key={section.id} className="shadow-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg ${section.color}`}>
                      <section.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{section.title}</CardTitle>
                      <CardDescription>{section.description}</CardDescription>
                    </div>
                  </div>
                  <Badge variant={progressPercentage === 100 ? "default" : "secondary"}>
                    {completedLessons}/{section.lessons.length} lessons
                  </Badge>
                </div>
                <Progress value={progressPercentage} className="h-2 mt-4" />
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {section.lessons.map((lesson, index) => (
                    <div 
                      key={index}
                      className={`flex items-center justify-between p-3 rounded-lg border ${
                        lesson.completed ? 'bg-success/5 border-success/20' : 'hover:bg-muted/50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {lesson.completed ? (
                          <CheckCircle className="h-5 w-5 text-success" />
                        ) : (
                          <Clock className="h-5 w-5 text-muted-foreground" />
                        )}
                        <div>
                          <p className="font-medium">{lesson.title}</p>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            {getTypeIcon(lesson.type)}
                            <span>{lesson.duration}</span>
                          </div>
                        </div>
                      </div>
                      <Button 
                        size="sm" 
                        variant={lesson.completed ? "outline" : "default"}
                        className={!lesson.completed ? "gradient-forest text-white" : ""}
                      >
                        {lesson.completed ? "Review" : "Start"}
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Quick Tips */}
      <Card className="shadow-card gradient-earth">
        <CardHeader>
          <CardTitle>Quick Tips</CardTitle>
          <CardDescription>Essential waste management tips to remember</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {quickTips.map((tip, index) => (
              <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-white/50">
                <Leaf className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-sm">{tip}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Tutorial;