import { Link } from "@radix-ui/react-navigation-menu";
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
          <NavigationMenuLink className="px-3 py-3  rounded-md hover:bg-accent hover:text-accent-foreground font-">
            Home
          </NavigationMenuLink>
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
