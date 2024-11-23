import Link from "next/link";

export default function about() {
  return (
    <div className="pt-6 pb-6 grid grid-cols-1 gap-4">
      <div
        className="card bg-base-100 rounded-none shadow-xl"
        style={{ width: "100%" }}
      >
        <div className="card-body">
          <h1 className="card-title text-blue-800 text-3xl font-bold flex justify-center">
            About Us
          </h1>
          <p className="text-gray-800 text-2xl py-6">
            Welcome to your ultimate guide to exploring Egypt &apos;s
            incredible attractions and services! Since 2024, we&apos;ve been
            dedicated to bringing you an immersive virtual reality experience
            that transports you to the heart of this magnificent country, no
            matter where you are. Our mission is to help you discover the rich
            history, vibrant culture, and stunning landscapes of Egypt. Whether
            you&apos;re planning a visit to the iconic pyramids, cruising the Nile,
            or enjoying the local cuisine, our platform offers you a unique way
            to experience it all from the comfort of your home. With detailed
            insights, interactive maps, and engaging VR tours, we aim to enhance
            your journey, making it more enjoyable and informative. Join us in
            uncovering the wonders of Egypt, where every step brings the past to
            life and every experience is unforgettable! Explore, learn, and
            immerse yourself in the beauty of Egypt with us!
          </p>
          <div className="card-actions">
            <Link href="/contact" className="btn text-white bg-blue-800">Contact Us</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
