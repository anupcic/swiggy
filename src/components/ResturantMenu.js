import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResturantMenu from "../utils/useResturantMenu";

const ResturantMenu = () => {
  //const [resInfo, setresInfo] = useState(null);
  const { resId } = useParams();
  const resInfo = useResturantMenu(resId);

  //const { itemCards } = resInfo.cards;
  if (resInfo === null) {
    return <Shimmer />;
  }
  return (
    <div className="menu">
      <h1>{resInfo.name}</h1>
      <h3>
        {resInfo?.cards[2]?.card?.card?.info?.cuisines}:
        {resInfo?.cards[2]?.card?.card?.info?.costForTwoMessage}
      </h3>
      <h2>Menu</h2>
      <ul>
        {/* <li>
          resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[0]?
        </li> */}
        {resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards?.map(
          (item, index) => (
            <li key={item?.card?.info?.id}>
              {item?.card?.info?.name} : {item?.card?.info?.price / 100} {"Rs"}
            </li>
          )
        )}
        {/* <li>Biryani</li>
        <li>Burgers</li>
        <li>Diet Coke</li> */}
      </ul>
    </div>
  );
};
export default ResturantMenu;
