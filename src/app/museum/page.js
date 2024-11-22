import Mail from "../components/Mail";
import Places from "../components/Places";

export default function museum() {
    let places = [
        {
          id:1,
          name:"THE GEM",
          img:"https://media.cnn.com/api/v1/images/stellar/prod/ap24289540283488.jpg?q=w_1110,c_fill/f_webp",
          location:"Cairo",
          price:1,
        }
      ]
  return (
    <div>
      <Places title={"The museum"} places={places}/>
      <Mail />
    </div>
  );
}
