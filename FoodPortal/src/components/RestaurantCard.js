import {IMG_CDN_URL} from "../constants"

const RestaurantCard = ({name,cuisines,cloudinaryImageId}) => {
  return (
    <div className="restaurantCard">
    <div className="res__img-container">
      <img
        src={`${IMG_CDN_URL}${cloudinaryImageId}`}
        alt="restaurant_img"
        className="res__img"
      />
    </div>
    <h2>{name}</h2>
    <h4>{cuisines?.join(", ")}</h4>
  </div>
  )
}

export default RestaurantCard;