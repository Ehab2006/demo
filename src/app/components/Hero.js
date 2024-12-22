export default function Hero() {
  return (
    <div className="hero pt-6 pb-6 border-b-4 border-blue-800">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          width="350"
          src={"https://i.ibb.co/K55r80S/hero-img.png"}
          className="rounded-lg"
        />
        <div>
          <p className="pt-6 text-4xl text-center sm:text-start text-gray-800">
            Your guide to the city&rsquo;s attractions and services in Egypt
            wherever you are with an amazing VR experience.
          </p>
          <p className="text-sm pb-6 text-center sm:text-start text-gray-800">
            In alliance with the Ministry of Interior and Tourism of the Arab
            Republic of Egypt.
          </p>

          <div className="grid justify-items-center sm:justify-items-start">
            <a href="#main" className="btn text-white bg-blue-800">
              Explore Now <i className="fa-solid fa-angles-down"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
