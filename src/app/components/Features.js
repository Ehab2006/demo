export default function Features() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 justify-items-center pt-6 pb-6 border-b-4 border-orange-500">
      <div className="col-span-1 md:col-span-2">
        <h2 className="text-orange-500 text-3xl font-bold">The Features</h2>
      </div>

      <div className="h-fit flex items-center justify-center">
        <div>
          <img
            src="https://i.ibb.co/xCRyx6s/hint-demo.png"
            width="145"
            alt=""
          />
        </div>
        <div className="pl-6">
          <h3 className="text-gray-800 text-2xl font-bold">Easy</h3>
          <p className="text-gray-800 text-xl">
            This is a section. This is a section. This is a section.
          </p>
        </div>
      </div>

      <div className="h-fit flex items-center justify-center">
        <div>
          <img
            src="https://i.ibb.co/xCRyx6s/hint-demo.png"
            width="145"
            alt=""
          />
        </div>
        <div className="pl-6">
          <h3 className="text-gray-800 text-2xl font-bold">Fast</h3>
          <p className="text-gray-800 text-xl">
            This is a section. This is a section. This is a section.
          </p>
        </div>
      </div>

      <div className="h-fit flex items-center justify-center">
        <div>
          <img
            src="https://i.ibb.co/xCRyx6s/hint-demo.png"
            width="145"
            alt=""
          />
        </div>
        <div className="pl-6">
          <h3 className="text-gray-800 text-2xl font-bold">Support</h3>
          <p className="text-gray-800 text-xl">
            This is a section. This is a section. This is a section.
          </p>
        </div>
      </div>
    </div>
  );
}
