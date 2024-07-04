import ResturantCard from "./ResturantCard";
import data1 from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
  const [listOfResturants, setListOfResturant] = useState([]);
  const [filterResturants, setfilterfResturant] = useState([]);

  const [searchText, setSearchText] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const url =
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING";
  const proxyUrl = "https://cors-anywhere.herokuapp.com/" + url;
  const fetchData = async () => {
    const data = await fetch(proxyUrl);
    const jsonrest = await data.json();
    setListOfResturant(
      jsonrest?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setfilterfResturant(
      jsonrest?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus == false) {
    return <div>internt is off</div>;
  }
  return listOfResturants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filteredrest = listOfResturants.filter((val) =>
                val.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilterfResturant(filteredrest);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="button-filter"
          onClick={() => {
            const listOfResturantsfilter = listOfResturants.filter(
              (res) => res.info.avgRating > 4.2
            );
            setListOfResturant(listOfResturantsfilter);
          }}
        >
          {" "}
          Top Rated Resturant
        </button>
      </div>
      <div className="res-container">
        {filterResturants.map((val) => (
          <Link key={val.info.id} to={"/resturants/" + val?.info?.id}>
            <ResturantCard data1={val} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
