import React from 'react'
import {Card,Button} from 'react-bootstrap'
import StarRatingComponent from 'react-star-rating-component';


function MovieCard({Movie}) {
    console.log(Movie)
    return (
        <div >
            
            <Card text="white" bg="dark" border="dark" style={{ marginTop:"1rem",width: '25rem',height:"40rem",fontFamily:""}} >
               <Card.Img variant="top" src={Movie.posterURL} style={{width:"397px",height:"300px"}}/>
               <Card.Body className="MovieCardBody">
               <Card.Title>{Movie.title}</Card.Title>
                <Card.Text >
                {Movie.description}
                
                </Card.Text >
                <Card.Text ><Button variant="warning" style={{marginButtom:"2rem"}}>Watch Movie</Button></Card.Text>
                
                </Card.Body>
                <Card.Footer style={{fontSize:"25px"}}>
           <StarRatingComponent value={Movie.rating.toNumber} starCount={5}  name=''/>
                </Card.Footer>
            </Card>
        </div>
    )
}

export default MovieCard
