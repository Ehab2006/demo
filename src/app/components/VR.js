export default function VR(props) {
  let products = [
    {
      id: 1,
      name: "Product01",
      img: "https://i.ibb.co/gyPdmFf/2761591867.jpg",
      priceEgy: 3500,
      priceUSA: 69,
    },
  ];
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 justify-items-center pt-6 pb-6 border-b-4 border-blue-800">
      <div className="col-span-1 md:col-span-3">
        <h2 className="text-blue-800 text-3xl font-bold">The products ( VRs )</h2>
      </div>
      {products.map((i) => {
        return (
          <div
          key={i.id}
            className="card bg-base-100 rounded-none shadow-xl"
          >
            <figure className="px-10 pt-10">
            <img src={i.img} alt={i.name} className="rounded-xl" style={{height:"200px"}} />
            </figure>
            <div className="card-body">
              <h3 className="card-title text-gray-800 flex justify-between">
                <span>{i.name}</span>
              <span>{i.priceEgy}L.E</span>
              <span>{i.priceUSA}$</span>
              </h3>
              <p className="text-gray-800 text-xl"></p>
              <div className="card-actions">
                <button className="btn w-full text-white bg-blue-800">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
