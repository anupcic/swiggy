import { useEffect, useState } from "react";

import { MENU_API } from "./constants";
const useResturantMenu = (resId) => {
  const [resInfo, setresInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const resturantMenu = await fetch(MENU_API + resId);
    const jsondata = await resturantMenu.json();
    setresInfo(jsondata?.data);
  };
  //   const fetchMenu = async () => {
  //     const resturantMenu = await fetch(MENU_API + resId);
  //     const data = await resturantMenu.json();
  //     console.log(data);
  //     const { name, cuisines, cloudinaryImageId, costForTwoMessage } =
  //       data.data?.cards[2].card.card.info;
  //     setresInfo(data?.data);
  //     console.log("resinfo--", resInfo);
  //   };
  return resInfo;
};

export default useResturantMenu;
