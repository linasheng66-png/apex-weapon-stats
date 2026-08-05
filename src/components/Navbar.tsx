import Link from "next/link";


export default function Navbar() {

  return (

    <nav className="bg-zinc-900 text-white p-5 flex gap-8">


      <Link
        href="/"
        className="font-bold text-xl"
      >
        Apex Weapon Stats
      </Link>



      <Link href="/">
        Home
      </Link>



      <Link href="/weapons">
        Weapons
      </Link>



      <Link href="/compare">
        Compare
      </Link>


    </nav>

  );

}