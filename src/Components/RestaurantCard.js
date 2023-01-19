import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';

const RestaurantCard = () => {
  return (
    <Card style={{ width: "250px" }} className="mx-2 mt-2 mb-2">
      <Card.Img variant="top" src="../assets/images/mcdImg.jfif" />
      <Card.Body>
        <Card.Title>Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
};

export default RestaurantCard;
