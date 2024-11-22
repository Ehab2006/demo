export default function VR(props) {
  let products = [
    {
      id: 1,
      name: "Product01",
      img: "https://i.ibb.co/gyPdmFf/2761591867.jpg",
      price: 7,
    },
    {
      id: 2,
      name: "Product02",
      img: "https://i.ibb.co/gyPdmFf/2761591867.jpg",
      price: 12,
    },
    {
      id: 3,
      name: "Product03",
      img: "https://i.ibb.co/gyPdmFf/2761591867.jpg",
      price: 20,
    },
  ];
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 justify-items-center pt-6 pb-6 border-b-4 border-orange-500">
      <div className="col-span-1 md:col-span-3">
        <h2 className="text-orange-500 text-3xl font-bold">The products ( VRs )</h2>
      </div>
      {products.map((i) => {
        return (
          <div
          key={i.id}
            className="card bg-base-100 rounded-none shadow-xl"
            style={{ width: "18rem" }}
          >
            <figure className="px-10 pt-10">
              <img src={i.img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body">
              <h3 className="card-title text-gray-800 flex justify-between">
                <span>{i.name}</span>
              <span>{i.price}$</span>
              </h3>
              <p className="text-gray-800 text-xl"></p>
              <div className="card-actions">
                <button className="btn w-full text-gray-800 bg-orange-500">
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
