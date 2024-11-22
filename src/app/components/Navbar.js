import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar bg-orange-500 text-neutral">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm rounded-none dropdown-content bg-gray-800 text-neutral-content z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/vr"}>VR</Link>
            </li>
            <li>
              <details>
                <summary>Places</summary>
                <ul>
                  <li>
                    <Link href={"/museum"}>Museum</Link>
                  </li>
                  <li>
                    <Link href={"/famous"}>Famous places</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link href={"/faq"}>FAQ</Link>
            </li>
            <li>
              <Link href={"/contact"}>Contact</Link>
            </li>
            <li>
              <Link href={"/about"}>About</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link href={"/"} className="btn btn-ghost text-xl">Demo</Link>
      </div>
      <div className="navbar-end">
        <Link href={"/vr"} className="btn text-gray-800">
          Order Now <i className="fa-solid fa-bag-shopping"></i>
        </Link>
      </div>
    </div>
  );
}
