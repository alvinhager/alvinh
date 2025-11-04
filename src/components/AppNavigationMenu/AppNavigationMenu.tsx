import type React from "react";
import {
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenu as _NavigationMenu,
} from "../shadcn/ui/navigation-menu";

interface AppNavigationMenuProps {}

const AppNavigationMenu: React.FC<AppNavigationMenuProps> = () => {
  const navigationMenu = (
    <_NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink href="/home" className="px-3 py-3 ">
            Home
          </NavigationMenuLink>
          <NavigationMenuLink href="/about-me" className="px-3 py-3  ">
            About me
          </NavigationMenuLink>
          <NavigationMenuLink href="/blog" className="px-3 py-3 ">
            Blog
          </NavigationMenuLink>
          <NavigationMenuLink href="portfolio" className="px-3 py-3  ">
            Portfolio
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </_NavigationMenu>
  );

  return navigationMenu;
};

export default AppNavigationMenu;
