// routes.ts
import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  //   route("/", "./routes/login-page.tsx"),
  //   route("/logout", "./routes/logout.ts"),
  //   // Authenticated layout
  //   route("_auth", "./routes/_auth.tsx", [
  //     // Admin-only routes
  //     route("_admin", "./routes/_auth/_admin.tsx", [
  //       route("/admin/dashboard", "./routes/_auth/_admin/dashboard.tsx"),
  //       route("/admin/users", "./routes/_auth/_admin/users.tsx"),
  //     ]),
  //     // User-only routes
  //     route("_user", "./routes/_auth/_user.tsx", [
  //       route("/user/dashboard", "./routes/_auth/_user/dashboard.tsx"),
  //       route("/user/profile", "./routes/_auth/_user/profile.tsx"),
  //     ]),
  //   ]),
  //   route("*", "./routes/not-found.tsx"),

  index("./routes/login-page.tsx"),

  layout("./layouts/sidebar.tsx", [
    // index("./routes/journey-list.tsx"),
    route("/journeys", "./routes/journey-list.tsx"),
    route("/journey-details", "./routes/journey-details.tsx"),
    route("/badge-reward", "./routes/badge.tsx"),
  ]),
] satisfies RouteConfig;
