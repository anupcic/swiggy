import { CDN_URL } from "../utils/constants";
const ResturantCard = (props) => {
  const { data1 } = props;
  const { name, cuisines, avgRating, cloudinaryImageId, sla } = data1.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />

      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
};

export default ResturantCard;
