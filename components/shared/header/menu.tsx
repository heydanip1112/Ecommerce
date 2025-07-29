import { Button } from "@/components/ui/button";
import ModeToggle from "./mode-toggle";
import { EllipsisVertical, ShoppingCart, UserIcon } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
const Menu = () => {
  return (
    <div className="flex justify-end items-center">
      <nav className="hidden md:flex items-center gap-4">
        <ModeToggle />
        <Button asChild variant="ghost" className="flex items-center gap-1">
          <Link href="/cart">
            <ShoppingCart className="w-4 h-4" />
            <span className="hidden sm:inline">Cart</span>
          </Link>
        </Button>
        <Button asChild className="flex items-center gap-1">
          <Link href="/sign-in">
            <UserIcon className="w-4 h-4" />
            <span className="hidden sm:inline">Sign In</span>
          </Link>
        </Button>
      </nav>
      <nav className="md:hidden">
        <Sheet>
            <SheetTrigger className="align-middle">
                <EllipsisVertical />
            </SheetTrigger>
            <SheetContent className="flex flex-col items-start pl-6 pt-6">
                <SheetTitle>
                    Menu
                </SheetTitle>
                <ModeToggle />
                <Button asChild variant="ghost" >
                    <Link href='/cart'>
                    <ShoppingCart /> Cart
                    </Link>
                </Button>
                <Button asChild className="flex items-center gap-1">
                    <Link href="/sign-in">
                        <UserIcon className="w-4 h-4" />
                        <span className="hidden sm:inline">Sign In</span>
                    </Link>
                </Button>
                <SheetDescription></SheetDescription>
            </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};

export default Menu;
