import { useEffect, useState } from "react";
import { ImageCdnUrl, Restaurant_API_URL } from "../Constants/ApiUrls";
import RestaurantCard from "./RestaurantCard";

const Restaurant = () => {
  const [originalRestaurents, setOriginalRestaurants] = useState([]);
  const [filteredRestaurents, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    fetchAllRestuarants();
  }, []);

  const fetchAllRestuarants = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&sortBy=RELEVANCE&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setOriginalRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    // const result = await fetch(Restaurant_API_URL);
    // const data = result?.data?.cards[2]?.data?.data?.cards;

    // if (data) {
    //   setOriginalRestaurants(data);
    // }
  };

  return (
    <>
      <>
        <div className="d-flex justify-content-center px-2">
          <input
            type="text"
            className="form-control w-50"
            placeholder="Search Restaurants here..."
          />
          <button type="button" className="btn btn-dark">
            Search
          </button>
        </div>
        <div className="d-flex flex-wrap px-2">
          {originalRestaurents.map((restaurant) => {
            return (
              // restaurant.data.id
              <RestaurantCard />
            );
          })}
        </div>
      </>
    </>
  );
};

export default Restaurant;
