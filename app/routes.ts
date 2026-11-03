import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  layout("components/site-layout.tsx", [
    index("routes/home.tsx"),
    route("about", "routes/about.tsx"),
    route("products", "routes/products.tsx"),
    route("our-approach", "routes/approach.tsx"),
    route("contact", "routes/contact.tsx"),
  ]),
] satisfies RouteConfig;
