// components/AdminSidebar.jsx

import { Link, NavLink, Outlet } from "react-router-dom";
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
  GalleryVertical,
  Plus,
  ArrowRight,
  ChevronRightCircle,
  ChevronDownCircle,
  InboxIcon

} from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Item, ItemActions, ItemContent, ItemDescription, ItemMedia, ItemTitle } from "@/components/ui/item";
import { Button } from "@/components/ui/button";

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
    submenu: [
      {
        title: "All Project",
        path: "/admin/project",
        icon: Building2
      },
      {
        title: "New Project",
        path: "/admin/create-project",
        icon: Plus
      },
    ]
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
  const [close, setClose] = useState(false)
  return (
    <>
      <div className="flex relative">
        <aside className="w-64 h-screen sticky top-0 border-r bg-background flex flex-col">
          {/* Logo */}
          <div className="h-16 flex items-center px-6 border-b">
            <h1 className="text-xl font-bold  my-4">Admin Panel</h1>

          </div>

          {/* Menu */}
          <nav className="flex-1 p-4 space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;

              return (
                <>
                  <NavLink
                    key={item.title}
                    to={item.path}
                    end={item.path === "/admin"}
                    className={({ isActive }) =>
                      `flex items-center gap-3 rounded-lg py-2 text-sm font-medium transition-colors
                      ${isActive
                        ? item.path === "/admin/project" ? "" : "px-3 bg-primary text-primary-foreground"
                        : item.path === "/admin/project" ? "" : "hover:bg-accent hover:text-accent-foreground px-3 "
                      }`
                    }
                  >
                    {
                      item.submenu ? (
                        <div className="w-full">

                          <Collapsible className="w-full">
                            <CollapsibleTrigger className="flex gap-3 hover:bg-accent rounded-lg hover:text-accent-foreground w-full px-3 py-2">
                              <Icon size={18} />
                              <span>{item.title}</span>
                            </CollapsibleTrigger>
                            <CollapsibleContent className="px4">
                              <div id="project-items" className="space-y-0">
                                {
                                  item.submenu.map(sub => {
                                    const Icon = sub.icon
                                    return (
                                      <>
                                        <Link to={sub.path}>
                                          <Item className=" hover:bg-secondary m-1 ">
                                            <ItemMedia variant="icon">
                                              <Icon />
                                            </ItemMedia>
                                            <ItemContent>
                                              <ItemTitle>{sub.title}</ItemTitle>
                                            </ItemContent>
                                          </Item>
                                        </Link>
                                      </>
                                    )
                                  })
                                }

                              </div>
                            </CollapsibleContent>
                          </Collapsible>
                        </div>
                      ) : (
                        <>
                          <Icon size={18} />
                          <span>{item.title}</span>
                        </>
                      )
                    }

                  </NavLink>

                </>
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

        <div className="w-full p-5">
          <Outlet />
        </div>
      </div>
    </>
  );
}