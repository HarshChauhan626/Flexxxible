import Image from "next/image";
import Link from "next/link";

import AuthProviders from "./AuthProviders";
import Button from "./Button";
import ProfileMenu from "./ProfileMenu";
import { NavLinks } from "@/constants";
import { getCurrentUser } from "../../../lib/session";

const Navbar = async () => {
  const session = await getCurrentUser();

  return (
    <nav className="flexBetween navbar">
      <div className="flex-1 flexStart gap-10">
        <Link href="/">
          <Image src="/logo.svg" width={116} height={43} alt="logo" />
        </Link>
        <ul className="xl:flex hidden text-small gap-7">
          {NavLinks.map((link) => (
            <Link href={link.href} key={link.text}>
              {link.text}
            </Link>
          ))}
        </ul>
      </div>

      <div className="flexCenter gap-4">
        {session?.user ? (
          <>
            <ProfileMenu session={session} />

            <Link href="/create-project">
              <Button title="Share work" />
            </Link>
          </>
        ) : (
          // <AuthProviders />
          <div className="flex flex-row gap-6">
            <Link href="/sign-in">
              <button className="px-4 py-2 rounded-lg">Sign In</button>
            </Link>
            <Link href="/sign-up">
              <button className="bg-black text-white px-4 py-2 rounded-lg">
                Sign Up
              </button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
