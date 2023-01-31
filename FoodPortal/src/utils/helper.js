export const filterRestaurant = (searchText, restaurantsList) => {
  const filteredRes = restaurantsList.filter((item) => {
    console.log(item.data?.name, searchText);
    return item?.data?.name.toLowerCase().includes(searchText.toLowerCase());
  });
  console.log(filteredRes);
  return filteredRes;
};