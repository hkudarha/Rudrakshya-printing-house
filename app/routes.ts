import { type RouteConfig,
     route,
     index,
     layout 
    } from "@react-router/dev/routes";

export default [
  layout( "components/Layout.tsx",[
      index("routes/Home.tsx"),
      route("about","routes/About.tsx"),
      route("contact", "routes/Contact.tsx"),
      route("shop", "routes/Shop.tsx"),
      route("cart", "routes/Cart.tsx"),
      route("checkout","routes/checkout.tsx")
  ]),
] satisfies RouteConfig;
