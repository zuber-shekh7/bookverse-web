import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="border-b border-gray-200 px-5 py-5">
      <section className="container mx-auto flex justify-between items-center">
        <section>
          <Link href="/">
            <h1 className="font-bold text-2xl underline">BookVerse</h1>
          </Link>
        </section>
        <section>
          <ul className="flex justify-around items-center gap-x-2">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/admin/dashboard">Dashbord</Link>
            </li>
            <li>
              <Link href="/admin/login">Login</Link>
            </li>
          </ul>
        </section>
      </section>
    </nav>
  );
};

export default Navbar;
