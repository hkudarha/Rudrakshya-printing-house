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
      route("/shop", "./routes/Shop.tsx"),
      route("/cart", "./routes/Cart.tsx"),
      route("/checkout","./routes/CheckOut.tsx")
  ]),
] satisfies RouteConfig;
