import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
const Header = () => {
  return (
    <header className="py-6 xl:py-8 bg-slate-500/15 ">
      <div className="container mx-auto flex justify-between items-center">
        {/* LOGO */}
        <Link href="/">
          <h1 className="text-4xl tracking-tight font-semibold">
            Bijay<span className="text-accent-hover">.</span>
          </h1>
        </Link>

        {/* NAV links */}
        {/* midium er theke choto hole, display flex, r jode  boro hoi tahole kichu dekha jabe na */}
        <div className="hidden md:flex  items-center gap-8">
          <Nav />
          <Link href={"/contact"}>
            <Button>Hire me</Button>
          </Link>
        </div>

        {/* mobile nav bar, large er theke beshi hole hide kore debe */}
        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
