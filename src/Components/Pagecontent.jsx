import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



function PageContent({image,title}){
    return(
        
        <Card >
        <Card.Img variant="top" src={image} />
        <Card.Body>
          {/* <Card.Title>{title}</Card.Title> */}
          <Card.Text>
          {title}
          </Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
     
    );
}

export default PageContent;