import { type RouteConfig,
     route,
     index,
     layout 
    } from "@react-router/dev/routes";

export default [
  layout( "./components/Layout.tsx",[
     route("/","./routes/Home.tsx"),
      route("/about","./routes/About.tsx"),
      route("/contact", "./routes/Contact.tsx"),
  ]),
] satisfies RouteConfig;
