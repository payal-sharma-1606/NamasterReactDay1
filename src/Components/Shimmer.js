import Card from "react-bootstrap/Card";

const Shimmer = () => {
    //mx-2 mt-2 mb-2 h-100 shadow
  return (
    <>
      {Array(8)
        .fill("")
        .map((e, index) => (
          <Card key={index}
            className="mx-2 mt-2 mb-2 h-100 shadow col-sm-3"> 
            <Card.Body className="">
              <Card.Text>
                <div class="box border-bottom"></div>
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
                <div class="shimmer"></div>
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
    </>
  );
};

export default Shimmer;
