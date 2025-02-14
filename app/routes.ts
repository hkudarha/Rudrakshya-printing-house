import { type RouteConfig,
     route,
     index,
     layout 
    } from "@react-router/dev/routes";

export default [
  layout( "layouts/main.tsx",[
      index("routes/home.tsx"),
      route("about","routes/about.tsx"),
      route("contact", "routes/contact.tsx"),
      route("shop", "routes/shop.tsx"),
      route("cart", "routes/cart.tsx"),
      route("checkout","routes/checkout.tsx")
  ]),
] satisfies RouteConfig;
