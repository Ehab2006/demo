import Features from "./components/Features";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Mail from "./components/Mail";
import Places from "./components/Places";

export default function Home() {
  let places = [
    {
      id: 1,
      name: "Pyramids",
      img: "https://i.ibb.co/Zh56PqB/licensed-image-q-tbn-ANd9-Gc-Qnb-Ck6-KQDVm-Abx-QUg-3j0-NIj-X1-Ldqtb4-MNy-Hi-OODmz0-Yy-PDj-SMHP28-Ca.jpg",
      location: "Giza",
      oncePrice: 250,
      monthPrice: 500,
      yearPrice: 5000,
    },
    {
      id: 2,
      name: "Abu Simbel",
      img: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRDxjpm3MLdVgXX2boXMCNrAJx1gq7R_QMkcmtUQkf4YZBECs4L3e-WVM0XM6GELp1u5awuf35ieebc_coJ4419eeFiRidLRO5vGYUfHg",
      location: "Aswan",
      oncePrice: 250,
      monthPrice: 500,
      yearPrice: 5000,
    },
    {
      id: 3,
      name: "THE GEM",
      img: "https://media.cnn.com/api/v1/images/stellar/prod/ap24289540283488.jpg?q=w_1110,c_fill/f_webp",
      location: "Cairo",
      oncePrice: 250,
      monthPrice: 500,
      yearPrice: 5000,
    },
  ];
  return (
    <div>
      <Hero />
      <div id="main">
        <Features />
        <Places title={"Some places"} places={places} />
        <Mail />
      </div>
    </div>
  );
}
