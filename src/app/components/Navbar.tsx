import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Navbar = () => {
  return (
    <nav className="sticky z-[100] h-14 inset-x-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper className="flex h-14 items-center justify-between border-b border-zinc-100">
        <Link href="/" className="flex z-40 font-semibold">
          im<span className="text-orange-600">Printo</span>
        </Link>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
