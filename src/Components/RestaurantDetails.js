import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RestaurantDetails_API_URL } from "../Constants/ApiUrls";
import { CircleFill, CurrencyRupee } from "react-bootstrap-icons";

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
      <div className="mx-2 p-2 mt-2 mb-2 d-flex">
        <div className="col-sm-3">
          <img
            alt={restaurantDetails?.name}
            style={{ height: "165px", width: "254px" }}
            src={
              "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
              restaurantDetails?.cloudinaryImageId
            }
          />
        </div>
        <div className="col-sm-9 align-items-center px-2">
          <div className="fs-3 lh-lg">{restaurantDetails?.name}</div>
          <div className="">{restaurantDetails?.costForTwoMsg}</div>
        </div>

        {/* <div className="mx-2 align-items-center">{restaurantDetails?.name}</div> */}
      </div>
      {restaurantMenuItems?.map((item, index) => {
        return (
          <div
            key={index}
            className="row mx-2 mt-2 mb-2 p-2 align-items-center border-bottom h-50 shadow-sm"
          >
            <div className="col-sm-6">
              <>
                {item.isVeg === 1 ? (
                  <CircleFill className="text-success" height={10} width={10} />
                ) : (
                  <CircleFill className="text-danger" height={10} width={10} />
                )}
                &nbsp;&nbsp;&nbsp;
                {item.name}
              </>
              <div className="font-italic">{item.description}</div>
              <div>
                <CurrencyRupee /> {item.price}
              </div>
            </div>
            <div className="col-sm-2">
              {item.cloudinaryImageId ? (
                <img
                  alt={item.name}
                  style={{ height: "96px", width: "118px" }}
                  src={
                    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
                    item.cloudinaryImageId
                  }
                />
              ) : null}
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
