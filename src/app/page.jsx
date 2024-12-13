import Link from "next/link";

import Button from "../components/UI/Button";

const Home = () => {
  return (
    <section className="container mx-auto mt-24">
      <section>
        <h1 className="text-8xl font-extrabold text-center">BookVerse</h1>
        <p className="text-xl font-light text-center">
          Best place to buy books
        </p>
      </section>
      <section className="flex justify-center mt-12">
        <Link href="/">
          <Button className={"text-xl rounded-full"}>Explore Now</Button>
        </Link>
      </section>
    </section>
  );
};

export default Home;
