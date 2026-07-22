// components/AdminSidebar.jsx

import { NavLink, Outlet } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Building2,
  BriefcaseBusiness,
  FileText,
  ChartColumn,
  MessageSquare,
  Bell,
  Settings,
  LogOut,
  Component,
  StarIcon,
  GalleryVertical
  
} from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    path: "/admin",
    icon: LayoutDashboard,
  },
  {
    title: "Users",
    path: "/admin/users",
    icon: Users,
  },
  {
    title: "Projects",
    path: "/admin/project",
    icon: Building2,
  },
  {
    title: "Service",
    path: "/admin/service",
    icon: BriefcaseBusiness,
  },
  {
    title: "Gallery",
    path: "/admin/gallery",
    icon: GalleryVertical,
  },
  {
    title: "Skill",
    path: "/admin/skills",
    icon: Component,
    
  },
  {
    title: "Content",
    path: "/admin/content",
    icon: FileText,
  },
  {
    title: "Analytics",
    path: "/admin/analytics",
    icon: ChartColumn,
  },
  {
    title: "Reviews",
    path: "/admin/review",
    icon: StarIcon,
  },
  {
    title: "Messages",
    path: "/admin/message",
    icon: MessageSquare,
  },
  {
    title: "Notifications",
    path: "/admin/notification",
    icon: Bell,
  },
  {
    title: "Settings",
    path: "/admin/setting",
    icon: Settings,
  },
];

export default function Layout() {
  return (
    <>
    <div className="flex">
    <aside className="w-64 h-screen border-r bg-background flex flex-col">
      {/* Logo */}
      <div className="h-16 flex items-center px-6 border-b">
        <h1 className="text-xl font-bold">Admin Panel</h1>
        
      </div>

      {/* Menu */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.title}
              to={item.path}
              end={item.path === "/admin"}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors
                ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-accent hover:text-accent-foreground"
                }`
              }
            >
              <Icon size={18} />
              <span>{item.title}</span>
            </NavLink>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="border-t p-4">
        <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-red-500 hover:bg-red-100 dark:hover:bg-red-950">
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
    
    <br />

    <div className="w-full p-3">
        <Outlet/>
    </div>
    </div>
    </>
  );
}