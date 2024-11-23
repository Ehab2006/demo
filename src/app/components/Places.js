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
            style={{ width: "18rem" }}
          >
            <figure className="px-10 pt-10">
              <img src={i.img} alt={i.name} className="rounded-xl" />
            </figure>
            <div className="card-body">
              <h3 className="card-title text-gray-800">{i.name}</h3>
              <div className="flex justify-between">
                <div>
                  <p className="text-gray-800 text-xl">In {i.location}.</p>
                </div>
                <div>
                  <p className="text-gray-800 text-xl">{i.price}$</p>
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
