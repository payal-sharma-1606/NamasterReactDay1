import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useEffect } from "react";
import { ImageCdnUrl } from "../Constants/ApiUrls";

const RestaurantCard = (props) => {
  useEffect(() => {});

  return (
    <Card className="mx-2 mt-2 mb-2 h-100">
      <Card.Img variant="top" src={ImageCdnUrl + props.cloudinaryImageId} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.cuisines.join(", ")}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default RestaurantCard;
