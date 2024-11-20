import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Navbar = () => {
  const user = undefined;
  const isAdmin = false;

  return (
    <nav className="sticky z-[100] top-0 inset-x-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper className="flex h-14 items-center justify-between border-b border-zinc-100">
        <Link href="/" className="flex z-40 font-semibold">
          im<span className="text-orange-600">Printo</span>
        </Link>
        <div className="h-full flex items-center space-x-4">
          {user ? (
            <>
              <Link
                href="/api/auth/logout"
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                  className: "font-semibold",
                })}
              >
                Sign Out
              </Link>

              {isAdmin ? (
                <Link
                  href="/api/auth/logout"
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                    className: "font-semibold",
                  })}
                >
                  ✨Dashboard
                </Link>
              ) : null}

              <Link
                href="/api/auth/logout"
                className={buttonVariants({
                  size: "sm",
                  className: "hidden sm:flex items-center gap-1 font-semibold",
                })}
              >
                Create T-shirt
                <ArrowRight className="ml-1.5 h-5 w-5 " />
              </Link>
            </>
          ) : (
            <>
              <Link
                href="/configure/upload"
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                  className: "font-semibold",
                })}
              >
                Sign up
              </Link>

              <Link
                href="/api/auth/login"
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                  className: "font-semibold",
                })}
              >
                Login
              </Link>

              <div className="h-8 w-px bg-zinc-200 hidden sm:block" />

              <Link
                href="/api/auth/logout"
                className={buttonVariants({
                  size: "sm",
                  className: "hidden sm:flex items-center gap-1 font-semibold",
                })}
              >
                Create T-shirt
                <ArrowRight className="ml-1.5 h-5 w-5" />
              </Link>
            </>
          )}
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
