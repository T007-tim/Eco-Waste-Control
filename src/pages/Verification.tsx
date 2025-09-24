import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ShieldCheck, 
  Camera, 
  Upload, 
  CheckCircle, 
  Clock,
  AlertCircle,
  User,
  FileText,
  MapPin
} from "lucide-react";

const Verification = () => {
  const verificationSteps = [
    {
      id: 1,
      title: "Identity Verification",
      description: "Upload a clear photo of your national ID or passport",
      status: "completed",
      icon: User
    },
    {
      id: 2,
      title: "Address Verification",
      description: "Confirm your location for waste collection routing",
      status: "completed",
      icon: MapPin
    },
    {
      id: 3,
      title: "Waste Donation Proof",
      description: "Submit photos of your recent waste donations",
      status: "in-progress",
      icon: Camera
    },
    {
      id: 4,
      title: "Community Reference",
      description: "Get verification from a community leader or neighbor",
      status: "pending",
      icon: FileText
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="h-5 w-5 text-success" />;
      case 'in-progress': return <Clock className="h-5 w-5 text-accent" />;
      case 'pending': return <AlertCircle className="h-5 w-5 text-muted-foreground" />;
      default: return <Clock className="h-5 w-5 text-muted-foreground" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-success text-success-foreground';
      case 'in-progress': return 'bg-accent text-accent-foreground';
      case 'pending': return 'bg-muted text-muted-foreground';
      default: return 'bg-secondary text-secondary-foreground';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="gradient-eco text-white p-6 rounded-xl">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-white/20 rounded-lg">
            <ShieldCheck className="h-8 w-8" />
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-2">Account Verification</h1>
            <p className="text-lg opacity-90">Verify your account to earn maximum eco points and access premium features</p>
          </div>
        </div>
      </div>

      {/* Progress Overview */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Verification Progress</CardTitle>
          <CardDescription>Complete all steps to unlock full platform access</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4 mb-4">
            <div className="flex-1">
              <div className="w-full bg-muted rounded-full h-3">
                <div 
                  className="gradient-forest h-3 rounded-full transition-all duration-300" 
                  style={{ width: '50%' }}
                />
              </div>
            </div>
            <span className="text-sm font-medium">2 of 4 completed</span>
          </div>
          <p className="text-sm text-muted-foreground">
            You're halfway there! Complete the remaining steps to unlock all features.
          </p>
        </CardContent>
      </Card>

      {/* Verification Steps */}
      <div className="space-y-4">
        {verificationSteps.map((step) => (
          <Card key={step.id} className={`shadow-card ${step.status === 'completed' ? 'border-success/20 bg-success/5' : ''}`}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-lg ${
                    step.status === 'completed' ? 'bg-success/20' : 
                    step.status === 'in-progress' ? 'bg-accent/20' : 'bg-muted'
                  }`}>
                    <step.icon className={`h-6 w-6 ${
                      step.status === 'completed' ? 'text-success' : 
                      step.status === 'in-progress' ? 'text-accent' : 'text-muted-foreground'
                    }`} />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                    <CardDescription>{step.description}</CardDescription>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge className={getStatusColor(step.status)}>
                    {getStatusIcon(step.status)}
                    <span className="ml-2 capitalize">{step.status.replace('-', ' ')}</span>
                  </Badge>
                </div>
              </div>
            </CardHeader>
            
            {step.status !== 'completed' && (
              <CardContent>
                <div className="flex gap-3">
                  {step.status === 'in-progress' ? (
                    <>
                      <Button className="gradient-forest text-white">
                        <Camera className="w-4 h-4 mr-2" />
                        Take Photo
                      </Button>
                      <Button variant="outline">
                        <Upload className="w-4 h-4 mr-2" />
                        Upload File
                      </Button>
                    </>
                  ) : (
                    <Button variant="outline" disabled>
                      <Clock className="w-4 h-4 mr-2" />
                      Complete Previous Steps
                    </Button>
                  )}
                </div>
              </CardContent>
            )}
          </Card>
        ))}
      </div>

      {/* Benefits Card */}
      <Card className="shadow-card gradient-earth">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-primary" />
            Verification Benefits
          </CardTitle>
          <CardDescription>What you get with a verified account</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-success" />
              <span>Higher eco point multipliers</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-success" />
              <span>Priority waste collection</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-success" />
              <span>Access to premium tutorials</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-success" />
              <span>Community leader status</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Help Section */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Need Help?</CardTitle>
          <CardDescription>Having trouble with verification?</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            If you're experiencing issues with any verification step, our support team is here to help.
          </p>
          <div className="flex gap-3">
            <Button variant="outline">Contact Support</Button>
            <Button variant="outline">View FAQ</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Verification;