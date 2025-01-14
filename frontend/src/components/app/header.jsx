import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

const Header = () => {
  return (
    <header className="py-5 border-b-[1px] border-zinc-800">
      <div className="container">
        <div className="flex justify-between">
          <h1 className="text-xl">Next + Sanity Blog</h1>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem className="me-5">
                <Link href="/">Home</Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/blog">Blog</Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;
