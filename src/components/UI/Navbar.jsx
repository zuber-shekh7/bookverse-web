import Link from "next/link";
import Input from "./Input";

const Navbar = () => {
  return (
    <nav className="px-5 py-5">
      <section className="container mx-auto grid grid-cols-12 items-center">
        {/* LOGO */}
        <section className="col-span-1">
          <section className="flex justify-start items-center">
            <div className="bg-black p-2 rounded-tr-md rounded-br-md hover:cursor-pointer">
              <Link href="/">
                <h1 className="font-bold text-white text-2xl">BV</h1>
              </Link>
            </div>
          </section>
        </section>
        <section className="col-span-10 mx-12">
          <section>
            <Input
              className="text-center rounded-full border-black border-2"
              placeholder={"Search Books, Authors & Genres."}
            />
          </section>
        </section>

        {/* LINKS */}
        <section className="col-span-1">
          <ul className="flex justify-around items-center gap-x-2">
            <li>
              <div className="bg-black p-2 px-5 rounded-xl text-white">
                <Link href="/users/register">Login</Link>
              </div>
            </li>
          </ul>
        </section>
      </section>
    </nav>
  );
};

export default Navbar;
