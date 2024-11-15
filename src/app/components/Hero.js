export default function Hero() {
  return (
    <div className="hero pt-6 pb-6 border-b-4 border-orange-500">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img width="300"
          src={"https://i.ibb.co/Wncj41x/hero-img.png"}
          className="rounded-lg"
        />
        <div>
          <h1 className="text-5xl font-bold text-center sm:text-start text-orange-500">Demo for you!</h1>
          <p className="pt-6 text-4xl text-center sm:text-start text-gray-800">
            Your guide to the city&rsquo;s attractions and services in Egypt wherever you are with an amazing VR experience.
          </p>
          <p className="text-sm pb-6 text-center sm:text-start text-gray-800">
            In alliance with the Ministry of Interior and Tourism of the Arab Republic of Egypt.
          </p>
          
          <div className="grid justify-items-center sm:justify-items-start">
            <button className="btn text-gray-800 bg-orange-500">Explore Now</button>
          </div>
          
        </div>
      </div>
    </div>
  );
}
