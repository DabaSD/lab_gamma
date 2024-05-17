import Link from "next/link";

function Home () {
  return (
    <div>
      <h1 className="font-bold text-2xl py-5 text-blue-700">Lab Gamma Final</h1>

      <Link
       className="px-3 transition hover:text-red-500 font-bold"
       href="/products">
        Products
        </Link>

      <Link
       className="px-3 transition hover:text-teal-500 font-bold"
       href="/MoviesList">
        Movies
        </Link>

      <Link
       className="px-3 transition hover:text-teal-500 font-bold"
       href="/about">
        About
        </Link>
        

    </div>
  );
};

export default Home;