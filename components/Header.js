// Next Image
import Image from "next/image";

// Next Link
import Link from "next/link";

// Components
import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-4 md:px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-row lg:flex-row justify-between items-center md:py-3">
          {/* Logo */}
          <Link href="/" >
            <Image
              src={"/logo.svg"}
              width={120}
              height={80}
              alt="logo"
              priority={true}
              className=" md:w-[170px] md:h-[120px] h-[80px] w-[120px] "
            />
          </Link>
          {/* Socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
