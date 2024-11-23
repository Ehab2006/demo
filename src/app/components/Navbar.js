import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar bg-yellow-100 text-neutral border-blue-800 border-b-4">
      <div className="flex-1">
        <Link href={"/"} className="text-xl flex justify-center items-center">
        <img
            src="https://mota.gov.eg/media/y2fh3r0i/ta.png"
            alt="logo"
            className="h-24"
          />
        <div className="text-left font-bold md:visible invisible">
            <p className="text-gray-800">Arab Republic of Egypt</p>
            <p className="text-gray-800">Ministry of Tourism and Antiquities</p>
          </div>


        </Link>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
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
            className="menu menu-sm rounded-none dropdown-content bg-yellow-100 text-neutral z-[1] mt-3 w-52 p-2 shadow"
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
    </div>
  );
}
