export default function Mail() {
  return (
    <div
      className="card rounded-none grid grid-cols-1 md:grid-cols-2 shadow-lg mt-6 mb-6 p-3 bg-base-100 items-center text-left"
    >
      <div className="">
        <h3 className="text-gray-800 text-3xl font-bold py-4">Get in touch</h3>
        <p className="text-gray-800 text-2xl py-4 font-normal">
          Send us a message and we &rsquo;ll get back to you as soon as we can.
        </p>
      </div>
      <div className="">
        <form
        >
          <div className="mb-4">
            <div className="flex flex-wrap -mx-2">
              <div className="w-full md:w-1/2 px-2">
                <label htmlFor="Name" className="text-gary-800">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="text-gray-800 border border-gray-800 rounded w-full p-2 text-xl"
                />
              </div>
              <div className="w-full md:w-1/2 px-2">
                <label htmlFor="Email" className="text-gary-800">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className= "text-gray-800 border border-gray-800 rounded w-full p-2 text-xl"
                />
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="Message" className="text-gary-800">
              Message
            </label>
            <textarea
              name="message"
              className="text-gray-800 border border-gray-800 rounded w-full p-2 text-xl"
              style={{ height: 150 }}
              defaultValue={""}
            />
          </div>
          <div className="flex flex-wrap items-center">
            <div className="w-full lg:w-9/12 mb-2 lg:mb-0">
              <p className="text-gray-800 text-sm">
                This site is protected by reCAPTCHA and the Google Privacy
                Policy and Terms of Service apply.
              </p>
            </div>
            <div className="w-full lg:w-3/12 flex justify-end">
              <button
                type="submit"
                className="bg-orange-500 text-white px-4 py-2">
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
