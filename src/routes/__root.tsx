import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export const Route = createRootRoute({
  component: () => (
    <>
      <Header />
      <main className="min-h-screen pt-16">
        <Outlet />
      </main>
      <Footer />
      <TanStackRouterDevtools />
    </>
  ),
});
