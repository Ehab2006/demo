export default function Places(props) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 justify-items-center pt-6 pb-6 border-b-4 border-blue-800">
      <div className="col-span-1 md:col-span-3">
        <h2 className="text-blue-800 text-3xl font-bold">{props.title}</h2>
      </div>
      {props.places.map((i) => {
        return (
          <div
            key={i.id}
            className="card bg-base-100 rounded-none shadow-xl"
            
          >
            <figure className="px-10 pt-10">
              <img src={i.img} alt={i.name} className="rounded-xl" style={{height:"200px"}} />
            </figure>
            <div className="card-body text-center">
              <h3 className="font-bold text-3xl text-gray-800 text-center">
                {i.name}
              </h3>
              <div>
                <div>
                  <p className="text-gray-800 text-2xl">In {i.location}.</p>
                </div>
                <div className="grid grid-cols-2 m-2">
                  <div className="text-start">
                    <p className="text-gray-800 text-xl font-bold">Once:</p>
                    <p className="text-gray-800 text-xl font-bold">Per month:</p>
                    <p className="text-gray-800 text-xl font-bold">Per year:</p>
                  </div>
                  <div className="text-end">
                    <p className="text-gray-800 text-xl font-bold">{i.oncePrice}$</p>
                    <p className="text-gray-800 text-xl font-bold">{i.monthPrice}$</p>
                    <p className="text-gray-800 text-xl font-bold">{i.yearPrice}$</p>
                  </div>
                </div>
              </div>
              <div className="card-actions">
                <button className="btn w-full text-white bg-blue-800">
                  Visit Now
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
