import Link from "next/link";

export default function faq() {
  return (
    <div className="pt-6 pb-6 grid grid-cols-1 gap-4">
      <div
        className="card bg-base-100 rounded-none shadow-xl"
        style={{ width: "100%" }}
      >
        <div className="card-body">
          <h1 className="card-title text-blue-800 text-3xl font-bold flex justify-center">
            FAQ
          </h1>
          <ul>
            <li className="py-1">
              <div
                tabIndex={0}
                className="collapse  collapse-arrow"
              >
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                  {" "}
                  <p className="text-gray-800">What is demo?</p>
                </div>
                <div className="collapse-content">
                  <p className="text-gray-800 text-xl py-1">Demo is VR tech.</p>
                </div>
              </div>
            </li>
            <li className="py-1">
              <div
                tabIndex={0}
                className="collapse  collapse-arrow"
              >
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                  {" "}
                  <p className="text-gray-800">What is demo?</p>
                </div>
                <div className="collapse-content">
                  <p className="text-gray-800 text-xl py-1">Demo is VR tech.</p>
                </div>
              </div>
            </li>
            <li className="py-1">
              <div
                tabIndex={0}
                className="collapse  collapse-arrow"
              >
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                  {" "}
                  <p className="text-gray-800">What is demo?</p>
                </div>
                <div className="collapse-content">
                  <p className="text-gray-800 text-xl py-1">Demo is VR tech.</p>
                </div>
              </div>
            </li>
            <li className="py-1">
              <div
                tabIndex={0}
                className="collapse  collapse-arrow"
              >
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                  {" "}
                  <p className="text-gray-800">What is demo?</p>
                </div>
                <div className="collapse-content">
                  <p className="text-gray-800 text-xl py-1">Demo is VR tech.</p>
                </div>
              </div>
            </li>
            <li className="py-1">
              <div
                tabIndex={0}
                className="collapse  collapse-arrow"
              >
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                  {" "}
                  <p className="text-gray-800">What is demo?</p>
                </div>
                <div className="collapse-content">
                  <p className="text-gray-800 text-xl py-1">Demo is VR tech.</p>
                </div>
              </div>
            </li>
            <li className="py-1">
              <div
                tabIndex={0}
                className="collapse  collapse-arrow"
              >
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                  {" "}
                  <p className="text-gray-800">What is demo?</p>
                </div>
                <div className="collapse-content">
                  <p className="text-gray-800 text-xl py-1">Demo is VR tech.</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
