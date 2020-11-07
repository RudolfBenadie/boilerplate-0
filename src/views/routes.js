import Dashboard from "./dashboard";
import Biography from "./biography";

const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "tachometer-alt",
    component: Dashboard,
    layout: "/terminal"
  },
  {
    path: "/biography",
    name: "Biography",
    icon: "tachometer-alt",
    component: Biography,
    layout: "/terminal"
  }
];

export default routes;

