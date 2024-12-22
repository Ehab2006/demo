import Link from "next/link";

export default function contact() {
  return (
    <div className="pt-6 pb-6 grid grid-cols-1 gap-4">
      <div
        className="card bg-base-100 rounded-none shadow-xl"
        style={{ width: "100%" }}
      >
        <div className="card-body">
          <h1 className="card-title text-blue-800 text-3xl font-bold flex justify-center">
            Contact Us
          </h1>
          <ul>
            <li>
              <p className="text-gray-800 text-xl py-6">
              <i class="fa-solid fa-phone"></i> HotLine: 19654
              </p>
            </li>
            <li>
              <p className="text-gray-800 text-xl py-6">
              <i class="fa-solid fa-envelope"></i> moa.portal@mota.gov.eg
              </p>
            </li>
            <li>
              <p className="text-gray-800 text-xl py-6">
              <i class="fa-solid fa-location-dot"></i> El-Minya , Egypt
              </p>
            </li>
            <li>
              <p className="text-gray-800 text-xl py-6">
              <i class="fa-brands fa-facebook"></i> @TourismandAntiq
              </p>
            </li>
            <li>
              <p className="text-gray-800 text-xl py-6">
              <i class="fa-brands fa-square-twitter"></i> @TourismandAntiq
              </p>
            </li>
            
          </ul>

          <div className="card-actions">
            <Link href="/contact" className="btn text-white bg-blue-800">
              Call Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
