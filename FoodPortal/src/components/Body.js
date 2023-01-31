import { useState, useContext } from "react";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import { filterRestaurant } from "../utils/helper";
import useRestaurant from "../utils/useRestaurant";
import UserContext from "../utils/UserContext";
import useOnline from "../utils/useOnline";

const Body = () => {
  let { user } = useContext(UserContext);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurantList, setFilteredRestaurantList] = useRestaurant();
  const isOnline = useOnline();

  if (!isOnline)
    return (
      <>
        <h1>OOps Network error</h1>
      </>
    );

  return filteredRestaurantList?.length === 0 ? (
    <div className="body">
      <Shimmer />
    </div>
  ) : (
    <div className="body">
      <h1>{isOnline ? "✅" : "🔴"}</h1>
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
        <input
          type="text"
          placeholder="user name"
          value="kumar"
          onChange={(e) => {
            user = e.target.value;
          }}
        />
      </div>
      {filteredRestaurantList?.map((restaurant) => {
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
