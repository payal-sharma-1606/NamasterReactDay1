import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RestaurantDetails_API_URL } from "../Constants/ApiUrls";
import { CircleFill } from "react-bootstrap-icons";

const RestaurantDetails = () => {
  const { id } = useParams();
  const [restaurantDetails, setRestaurantDetails] = useState(null);
  const [restaurantMenuItems, setRestaurantMenuItems] = useState([]);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  const getRestaurantInfo = async () => {
    const data = await fetch(RestaurantDetails_API_URL + id);
    const json = await data.json();
    console.log(json.data);
    setRestaurantDetails(json.data);

    const menuItems = json.data?.menu?.items;
    const test = [];

    Object.entries(menuItems).forEach(([key, value]) => {
      test.push(value);
    });

    setRestaurantMenuItems(test);
  };

  return (
    <>
      <div className="">{restaurantDetails?.name}</div>
      {restaurantMenuItems?.map((item, index) => {
        return (
          <div className="">
            <div className="col-sm-4">
              {item.isVeg === 1 ? (
                <CircleFill className="text-success" height={10} width={10} />
              ) : (
                <CircleFill className="text-danger" height={10} width={10} />
              )}
              &nbsp;&nbsp;&nbsp;
              {item.name}
            </div>
          </div>
        );
      })}

      {/* <div className="col-sm-3">
          <CircleFill className="text-success" height={10} width={10} />
        </div> */}
    </>
  );
};

export default RestaurantDetails;
