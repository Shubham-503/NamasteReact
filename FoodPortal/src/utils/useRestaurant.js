import { useEffect, useState } from "react";
import { FETCH_RESTAURANT_URL } from "../constants";


const useRestaurant = () => {
  const [restaurantsList, setRestaurantsList] = useState(null);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetchRestaurantsList();
      console.log(res);
      setRestaurantsList(res?.data?.cards[2]?.data?.data?.cards);
      setFilteredRestaurantList(res?.data?.cards[2]?.data?.data?.cards);
    })();
  }, []);

  const fetchRestaurantsList2 = async () => {
    const data = await fetch(FETCH_RESTAURANT_URL);
    const json = data.json();
    console.log(typeof json, json);
    return json;
  };

  const fetchRestaurantsList = async () => {
    return await fetch(FETCH_RESTAURANT_URL)
      .then((res) => {
        const data = res.json();
        console.log(typeof data, data);
        return data;
      })
      .then((res) => {
        // console.log(res?.data?.cards[2]?.data?.data?.cards);
        // return (res?.data?.cards[2]?.data?.data?.cards);
        console.log(res?.data?.cards[2]?.data?.data?.cards);

        return res;
      })
      .catch((err) => {
        console.log(err.message);
      });
    // return result
  };

  return [filteredRestaurantList, setFilteredRestaurantList]
}

export default useRestaurant