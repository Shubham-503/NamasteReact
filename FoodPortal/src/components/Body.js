import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { FETCH_RESTAURANT_URL } from "../constants";
import { Link } from "react-router-dom";

const Body = () => {
  const [restaurantsList, setRestaurantsList] = useState(null);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState("");

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

  const filterRestaurant = (searchText, restaurantsList) => {
    const filteredRes = restaurantsList.filter((item) => {
      console.log(item.data?.name, searchText);
      return item?.data?.name.toLowerCase().includes(searchText.toLowerCase());
    });
    console.log(filteredRes);
    return filteredRes;
  };

  return filteredRestaurantList?.length === 0 ? (
    <div className="body">
      {Array(12)
        .fill("0")
        .map((item) => (
          <Shimmer />
        ))}
    </div>
  ) : (
    <div className="body">
      <div>
        <input
          type="text"
          placeholder="Search Restaurant"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          onClick={() => {
            const data = filterRestaurant(searchText, restaurantsList);
            setFilteredRestaurantList(data);
          }}
        >
          Search
        </button>
      </div>
      {filteredRestaurantList.map((restaurant) => {
        return (
          <Link
            to={`/restaurant/${restaurant?.data.id}`}
            key={restaurant?.data?.id}
          >
            <RestaurantCard {...restaurant?.data} />
          </Link>
        );
      })}
    </div>
  );
};
export default Body;
