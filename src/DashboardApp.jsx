import "./App.css";
import DashboardList from "remote/DashboardList";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

const content = [
  {
    title: "Add Project",
    text: `First, add a project that you
        would like to work on.`,
    value: "$22k",
  },
  {
    title: "Add Issue ",
    text: `Finally, add issues that you would like to work on.`,
    value: "$10k",
  },
  {
    title: "Total Projects ",
    text: `The project key is a unique identifier for a project.`,
    value: "15",
  },
  {
    title: "Ongoing  ",
    text: `You've probably heard of a project post-mortem.`,
    value: "03",
  },
];

// Main app - /dashboard
// Dashboard - / /:id /list
export const dashboardRoutes = [
  {
    path: "",
    element: (
      <div style={{ color: "#fff"}}>
        Dashboard main page
        <DashboardList contentList={content} />
      </div>
    ),
  },
  {
    path: "settings",
    element: <div>Dashboard - settings page</div>
  }
];


function DashboardApp() {
  return (
    <RouterProvider router={createBrowserRouter(dashboardRoutes)} />
  );
}

export default DashboardApp;
