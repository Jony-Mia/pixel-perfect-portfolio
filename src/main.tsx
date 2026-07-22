import "./index.css";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import Layout from "./dashboard/Layout.tsx";
import Overview from "./dashboard/overview.tsx";
import Projects from "./dashboard/pages/Projects.tsx";
import UsersTable from "./dashboard/pages/UsersTable.tsx";
import Notification from "./dashboard/pages/Notification.tsx";
import Service from "./dashboard/pages/Service.tsx";
import Gallery from "./dashboard/pages/Gallery.tsx";
import Album from "./dashboard/pages/Album.tsx";
import Content from "./dashboard/pages/Content.tsx";
import Review from "./dashboard/pages/Review.tsx";
import Settings from "./dashboard/pages/Settings.tsx";
import Message from "./dashboard/pages/Message.tsx";
import Skills from "./dashboard/pages/Skills.tsx";


const routers = createBrowserRouter([
    {
        path: "/",
        Component: App
    },
    {
        path: "/admin",
        Component: Layout,
        children: [
            {
                index: true,
                Component: Overview
            },
            {
                path: "/admin/analytics",
                Component: Overview
            },
            {
                path: "/admin/users",
                Component: UsersTable
            },
            {
                path: "/admin/message",
                Component: Message
            },
            {
                path: "/admin/notifications",
                Component: Notification
            },
            {
                path: "/admin/service",
                Component: Service
            },
            {
                path: "/admin/gallery",
                Component: Gallery
            },
            {
                path: "/admin/project",
                Component: Projects
            },
            {
                path: "/admin/album",
                Component: Album
            },
            {
                path: "/admin/content",
                Component: Content
            },
            {
                path: "/admin/setting",
                Component: Settings
            },
            {
                path: "/admin/skills",
                Component: Skills
            },
            {
                path: "/admin/notification",
                Component: Notification
            },
            {
                path: "/admin/review",
                Component: Review
            },
        ]
    },

])
createRoot(document.getElementById("root")!).render(
    <RouterProvider router={routers} />
);
