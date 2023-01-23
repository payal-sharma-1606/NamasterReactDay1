import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import { Restaurant_API_URL } from "../Constants/ApiUrls";
import Shimmer from "./Shimmer";

const Restaurant = () => {
  const [originalRestaurents, setOriginalRestaurants] = useState([]);
  const [filteredRestaurents, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchAllRestuarants();
  }, []);

  const fetchAllRestuarants = async () => {
    const data = await fetch(Restaurant_API_URL);
    const json = await data.json();
    const dataToFill = json?.data?.cards[2]?.data?.data?.cards;
    setOriginalRestaurants(dataToFill);
    setFilteredRestaurants(dataToFill);
  };

  const handleSearchTextChange = (e) => {
    setSearchText(e.target.value);

    const text = e.target.value;
    const cloneData = [...originalRestaurents];

    if (text.length > 1) {
      const filetredData = cloneData.filter((x) =>
        x.data.name.toUpperCase().includes(text.toUpperCase())
      );
      setFilteredRestaurants(filetredData);
    }

    if (text.length === 0) {
      setFilteredRestaurants(cloneData);
    }
  };
  const handleSearchClick = () => {
    console.log(searchText);

    const cloneData = [...originalRestaurents];

    const filetredData = cloneData.filter((x) =>
      x.data.name.toUpperCase().includes(searchText.toUpperCase())
    );

    setFilteredRestaurants(filetredData);
  };

  return (
    <>
      <div className="mx-5">
        <div className="d-flex justify-content-center px-2 mt-2">
          <input
            type="text"
            className="form-control w-50"
            placeholder="Search Restaurants here..."
            defaultValue={searchText}
            onChange={handleSearchTextChange}
          />
        </div>
        <div className="d-flex flex-wrap px-2">
          {originalRestaurents?.length === 0 ? <Shimmer /> : null}

          {searchText.length > 0 && filteredRestaurents.length === 0 && (
            <div>Sorry.. No data matched the filter criteria</div>
          )}
          
          {filteredRestaurents?.map((restaurant, index) => {
            return (
              <Link
                to={"/restaurant/" + restaurant.data.id}
                key={restaurant.data.id}
                className="col-sm-3 py-2 text-decoration-none text-dark"
              >
                <RestaurantCard key={index} {...restaurant.data} />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Restaurant;
