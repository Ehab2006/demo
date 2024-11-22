import Mail from "../components/Mail";
import Places from "../components/Places";

export default function famous() {
  let places = [
    {
      id:1,
      name:"Pyramids",
      img:"https://i.ibb.co/Zh56PqB/licensed-image-q-tbn-ANd9-Gc-Qnb-Ck6-KQDVm-Abx-QUg-3j0-NIj-X1-Ldqtb4-MNy-Hi-OODmz0-Yy-PDj-SMHP28-Ca.jpg",
      location:"Giza",
      price:1,
    },
    {
      id:2,
      name:"Abu Simbel",
      img:"https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRDxjpm3MLdVgXX2boXMCNrAJx1gq7R_QMkcmtUQkf4YZBECs4L3e-WVM0XM6GELp1u5awuf35ieebc_coJ4419eeFiRidLRO5vGYUfHg",
      location:"Aswan",
      price:1,
    }
  ]
  return (
    <div>
      <Places title={"The famous places"} places={places}/>
      <Mail />
    </div>
  );
}
