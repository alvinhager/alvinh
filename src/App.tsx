import "./App.css";
import FullScreenContainer from "./components/FullScreenContainer";
import PageLayout from "./components/PageLayout";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./components/shadcn/ui/navigation-menu";

function App() {
  const navigationMenu = (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>Link</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );

  return (
    <FullScreenContainer className="bg-custom-background">
      <PageLayout>{navigationMenu}</PageLayout>
    </FullScreenContainer>
  );
}

export default App;
