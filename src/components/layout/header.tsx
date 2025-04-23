import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "lucide-react";

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  const [theme, setTheme] = React.useState<"light" | "dark">("light");

  React.useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b",
        className
      )}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <div className="font-bold text-xl">Lucien Lu</div>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                className="cursor-pointer"
                onClick={() => scrollToSection("hero")}
              >
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className="cursor-pointer"
                onClick={() => scrollToSection("about")}
              >
                About
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className="cursor-pointer"
                onClick={() => scrollToSection("skills")}
              >
                Skills
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className="cursor-pointer"
                onClick={() => scrollToSection("projects")}
              >
                Projects
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className="cursor-pointer"
                onClick={() => scrollToSection("experience")}
              >
                Experience
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className="cursor-pointer"
                onClick={() => scrollToSection("contact")}
              >
                Contact
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Menu</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="flex flex-col gap-2 p-4 w-[200px]">
                    <NavigationMenuLink
                      className="cursor-pointer"
                      onClick={() => scrollToSection("hero")}
                    >
                      Home
                    </NavigationMenuLink>
                  <NavigationMenuLink
                      className="cursor-pointer"
                      onClick={() => scrollToSection("about")}
                    >
                      About
                    </NavigationMenuLink>
                    <NavigationMenuLink
                      className="cursor-pointer"
                      onClick={() => scrollToSection("skills")}
                    >
                      Skills
                    </NavigationMenuLink>
                    <NavigationMenuLink
                      className="cursor-pointer"
                      onClick={() => scrollToSection("projects")}
                    >
                      Projects
                    </NavigationMenuLink>
                    <NavigationMenuLink
                      className="cursor-pointer"
                      onClick={() => scrollToSection("experience")}
                    >
                      Experience
                    </NavigationMenuLink>
                    <NavigationMenuLink
                      className="cursor-pointer"
                      onClick={() => scrollToSection("contact")}
                    >
                      Contact
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={toggleTheme}
          className="ml-4 cursor-pointer"
        >
          {theme === "light" ? (
            <MoonIcon className="h-5 w-5" />
          ) : (
            <SunIcon className="h-5 w-5" />
          )}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>
    </header>
  );
}
