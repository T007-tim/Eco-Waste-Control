import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Plus, 
  Search, 
  MapPin, 
  Clock, 
  CheckCircle, 
  AlertCircle, 
  Calendar,
  Truck,
  Users,
  Filter
} from "lucide-react";

const TaskManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const tasks = [
    {
      id: 1,
      title: "Westlands Collection Route A",
      location: "Westlands, Nairobi",
      status: "completed",
      priority: "high",
      assignedTo: "Team Alpha",
      dueDate: "Today 9:00 AM",
      progress: 100,
      description: "Regular waste collection from residential areas"
    },
    {
      id: 2,
      title: "Kibera Waste Assessment",
      location: "Kibera, Nairobi",
      status: "in-progress",
      priority: "high",
      assignedTo: "Team Beta",
      dueDate: "Today 11:30 AM",
      progress: 65,
      description: "Assess waste accumulation and recommend solutions"
    },
    {
      id: 3,
      title: "Eastleigh Recycling Center Setup",
      location: "Eastleigh, Nairobi",
      status: "pending",
      priority: "medium",
      assignedTo: "Team Gamma",
      dueDate: "Tomorrow 8:00 AM",
      progress: 0,
      description: "Set up new recycling center infrastructure"
    },
    {
      id: 4,
      title: "Karen Compost Distribution",
      location: "Karen, Nairobi",
      status: "completed",
      priority: "low",
      assignedTo: "Team Delta",
      dueDate: "Yesterday 3:00 PM",
      progress: 100,
      description: "Distribute compost to community gardens"
    },
    {
      id: 5,
      title: "Parklands Bulk Collection",
      location: "Parklands, Nairobi",
      status: "overdue",
      priority: "urgent",
      assignedTo: "Team Echo",
      dueDate: "Yesterday 2:00 PM",
      progress: 30,
      description: "Emergency bulk waste collection"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-success text-success-foreground';
      case 'in-progress': return 'bg-accent text-accent-foreground';
      case 'pending': return 'bg-muted text-muted-foreground';
      case 'overdue': return 'bg-destructive text-destructive-foreground';
      default: return 'bg-secondary text-secondary-foreground';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent': return 'border-l-4 border-l-red-500';
      case 'high': return 'border-l-4 border-l-orange-500';
      case 'medium': return 'border-l-4 border-l-yellow-500';
      case 'low': return 'border-l-4 border-l-green-500';
      default: return '';
    }
  };

  const filterTasks = (status: string) => {
    if (status === 'all') return tasks;
    return tasks.filter(task => task.status === status);
  };

  const TaskCard = ({ task }: { task: any }) => (
    <Card className={`shadow-card eco-hover ${getPriorityColor(task.priority)}`}>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <CardTitle className="text-lg">{task.title}</CardTitle>
            <CardDescription className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              {task.location}
            </CardDescription>
          </div>
          <Badge className={getStatusColor(task.status)}>
            {task.status === 'completed' && <CheckCircle className="w-3 h-3 mr-1" />}
            {task.status === 'overdue' && <AlertCircle className="w-3 h-3 mr-1" />}
            {task.status === 'in-progress' && <Clock className="w-3 h-3 mr-1" />}
            {task.status.replace('-', ' ')}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">{task.description}</p>
        
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-muted-foreground" />
            <span>{task.assignedTo}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span>{task.dueDate}</span>
          </div>
        </div>

        {task.status === 'in-progress' && (
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Progress</span>
              <span>{task.progress}%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div 
                className="gradient-forest h-2 rounded-full" 
                style={{ width: `${task.progress}%` }}
              />
            </div>
          </div>
        )}

        <div className="flex gap-2">
          <Button size="sm" variant="outline">View Details</Button>
          {task.status !== 'completed' && (
            <Button size="sm" className="gradient-forest text-white">
              Update Status
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Task Management</h1>
          <p className="text-muted-foreground">Manage waste collection tasks across Nairobi</p>
        </div>
        <Button className="gradient-forest text-white">
          <Plus className="w-4 h-4 mr-2" />
          New Task
        </Button>
      </div>

      {/* Search and Filter */}
      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search tasks..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button variant="outline">
          <Filter className="w-4 h-4 mr-2" />
          Filter
        </Button>
      </div>

      {/* Task Tabs */}
      <Tabs defaultValue="all" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="all">All ({tasks.length})</TabsTrigger>
          <TabsTrigger value="pending">Pending ({filterTasks('pending').length})</TabsTrigger>
          <TabsTrigger value="in-progress">In Progress ({filterTasks('in-progress').length})</TabsTrigger>
          <TabsTrigger value="completed">Completed ({filterTasks('completed').length})</TabsTrigger>
          <TabsTrigger value="overdue">Overdue ({filterTasks('overdue').length})</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {tasks.map((task) => (
              <TaskCard key={task.id} task={task} />
            ))}
          </div>
        </TabsContent>

        {['pending', 'in-progress', 'completed', 'overdue'].map((status) => (
          <TabsContent key={status} value={status} className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filterTasks(status).map((task) => (
                <TaskCard key={task.id} task={task} />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="shadow-card">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Truck className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Active Routes</p>
                <p className="text-xl font-bold">12</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <CheckCircle className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Completed Today</p>
                <p className="text-xl font-bold">8</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-orange-100 rounded-lg">
                <Clock className="h-5 w-5 text-orange-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">In Progress</p>
                <p className="text-xl font-bold">3</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-red-100 rounded-lg">
                <AlertCircle className="h-5 w-5 text-red-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Overdue</p>
                <p className="text-xl font-bold">1</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TaskManagement;