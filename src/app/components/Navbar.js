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
        <div className="drawer">
          
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label
              htmlFor="my-drawer"
              className="btn btn-ghost drawer-button"
            >
              <i className="fa-solid fa-bars text-2xl"></i>
            </label>
          </div>
          <div className="drawer-side" style={{zIndex:"999"}}>
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul
              tabIndex={0}
              className="menu bg-yellow-100 text-neutral min-h-full w-80 p-4"
            >
              <li>
                <Link href={"/"}><i class="fa-solid fa-house"></i> Home</Link>
              </li>
              <li>
                <Link href={"/vr"}><i class="fa-solid fa-vr-cardboard"></i> VR</Link>
              </li>
              <li>
                <details>
                  <summary><i class="fa-solid fa-globe"></i> Places</summary>
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
                <Link href={"/faq"}><i class="fa-solid fa-circle-question"></i> FAQ</Link>
              </li>
              <li>
                <Link href={"/contact"}><i class="fa-solid fa-comment"></i> Contact</Link>
              </li>
              <li>
                <Link href={"/about"}><i class="fa-solid fa-circle-info"></i> About</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
