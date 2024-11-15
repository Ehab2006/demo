export default function Places() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 justify-items-center pt-6 pb-6 border-b-4 border-orange-500">
      <div className="col-span-1 md:col-span-3">
        <h2 className="text-orange-500 text-3xl font-bold">Some places</h2>
      </div>
      <div className="card bg-base-100 rounded-none shadow-xl" style={{width:"18rem"}}>
        <figure className="px-10 pt-10">
          <img
            src="https://i.ibb.co/Zh56PqB/licensed-image-q-tbn-ANd9-Gc-Qnb-Ck6-KQDVm-Abx-QUg-3j0-NIj-X1-Ldqtb4-MNy-Hi-OODmz0-Yy-PDj-SMHP28-Ca.jpg"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h3 className="card-title text-gray-800">Pyramids</h3>
          <p className="text-gray-800 text-xl">The pyramids is in Giza.</p>
          <div className="card-actions">
            <button className="btn text-gray-800 bg-orange-500">Buy Now</button>
          </div>
        </div>
      </div>
      <div className="card bg-base-100 rounded-none shadow-xl" style={{width:"18rem"}}>
        <figure className="px-10 pt-10">
          <img
            src="https://i.ibb.co/Zh56PqB/licensed-image-q-tbn-ANd9-Gc-Qnb-Ck6-KQDVm-Abx-QUg-3j0-NIj-X1-Ldqtb4-MNy-Hi-OODmz0-Yy-PDj-SMHP28-Ca.jpg"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h3 className="card-title text-gray-800">Pyramids</h3>
          <p className="text-gray-800 text-xl">The pyramids is in Giza.</p>
          <div className="card-actions">
            <button className="btn text-gray-800 bg-orange-500">Buy Now</button>
          </div>
        </div>
      </div>
      <div className="card bg-base-100 rounded-none shadow-xl" style={{width:"18rem"}}>
        <figure className="px-10 pt-10">
          <img
            src="https://i.ibb.co/Zh56PqB/licensed-image-q-tbn-ANd9-Gc-Qnb-Ck6-KQDVm-Abx-QUg-3j0-NIj-X1-Ldqtb4-MNy-Hi-OODmz0-Yy-PDj-SMHP28-Ca.jpg"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h3 className="card-title text-gray-800">Pyramids</h3>
          <p className="text-gray-800 text-xl">The pyramids is in Giza.</p>
          <div className="card-actions">
            <button className="btn text-gray-800 bg-orange-500">Buy Now</button>
          </div>
        </div>
      </div>
      
    </div>
  );
}
