import { Outlet, createRootRoute } from "@tanstack/react-router";
import FullScreenContainer from "../components/FullScreenContainer";
import AppNavigationMenu from "../components/AppNavigationMenu";
import type React from "react";
import type { HTMLAttributes, ReactNode } from "react";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <AppPage>
        <Outlet />
      </AppPage>
    </>
  );
}

interface ApplicationPageProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

const AppPage: React.FC<ApplicationPageProps> = ({ children }) => {
  return (
    <FullScreenContainer className="bg-custom-background">
      <header className="w-full flex-shrink-0 navigation-menu">
        <AppNavigationMenu />
      </header>
      <main className="flex-1 overflow-auto">{children}</main>
    </FullScreenContainer>
  );
};
