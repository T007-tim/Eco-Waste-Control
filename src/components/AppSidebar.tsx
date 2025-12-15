import { 
  User, 
  Award, 
  ShieldCheck, 
  BookOpen, 
  Settings, 
  LogOut,
  Recycle,
  Trash2,
  CheckSquare,
  Calculator
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const menuItems = [
  { title: "Dashboard", url: "/", icon: CheckSquare },
  { title: "Profile", url: "/profile", icon: User },
  { title: "Eco Points", url: "/eco-points", icon: Award },
  { title: "Verification", url: "/verification", icon: ShieldCheck },
  { title: "Tutorial", url: "/tutorial", icon: BookOpen },
  { title: "Task Management", url: "/tasks", icon: Trash2 },
  { title: "Calculator", url: "/calculator", icon: Calculator },
  { title: "Settings", url: "/settings", icon: Settings },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const collapsed = state === "collapsed";

  const isActive = (path: string) => currentPath === path;
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive 
      ? "bg-sidebar-accent text-sidebar-primary font-medium shadow-sm" 
      : "hover:bg-sidebar-accent/50 transition-colors";

  return (
    <Sidebar className={collapsed ? "w-16" : "w-72"} collapsible="icon">
      <SidebarContent>
        {/* Logo Section */}
        <div className="p-4 border-b border-sidebar-border">
          <div className="flex items-center gap-3">
            <div className="gradient-forest p-2 rounded-lg">
              <Recycle className="h-6 w-6 text-white" />
            </div>
            {!collapsed && (
              <div>
                <h2 className="font-bold text-lg text-sidebar-foreground">EcoWaste</h2>
                <p className="text-sm text-sidebar-foreground/70">Nairobi Control</p>
              </div>
            )}
          </div>
        </div>

        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground/70">
            Main Menu
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} end className={getNavCls}>
                      <item.icon className="h-5 w-5" />
                      {!collapsed && <span className="ml-3">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Logout Section */}
        <div className="mt-auto p-4 border-t border-sidebar-border">
          <SidebarMenuButton className="w-full justify-start hover:bg-destructive/10 hover:text-destructive">
            <LogOut className="h-5 w-5" />
            {!collapsed && <span className="ml-3">Log Out</span>}
          </SidebarMenuButton>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}