import { useEffect, useState } from "react";
import {  FETCH_RESTAURANT_MENU } from "../constants";


const useRestaurantMenu = (resId) => {
  const [restaurant, setRestauraunt] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    console.log(FETCH_RESTAURANT_MENU + resId);
    const data = await fetch(FETCH_RESTAURANT_MENU + resId);
    const json = await data.json();
    console.log(json.data);
    setRestauraunt(json.data);
  }

  return restaurant
}

export default useRestaurantMenu