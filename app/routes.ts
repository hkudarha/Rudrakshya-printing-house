import { type RouteConfig,
     route,
     index,
     layout 
    } from "@react-router/dev/routes";

export default [
  layout( "layouts/main.tsx",[
      index("routes/home.tsx"),
      route("about","routes/about_page.tsx"),
      route("contact", "routes/contact_page.tsx"),
      route("shop", "routes/shop_page.tsx"),
      route("cart", "routes/cart_page.tsx"),
      route("checkout","routes/checkout_page.tsx")
  ]),
] satisfies RouteConfig;
