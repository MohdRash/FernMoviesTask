// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { imageUrl } from "./Constants/Constant";
// import {
//   Col,
//   Row,
//   Card,
//   CardBody,
//   CardTitle,
//   CardImg,
//   CardText,
// } from "reactstrap";

// const MovieCard = (props) => {
//   const [movie, setMovie] = useState([]);
//   const [urlId, setUrlId] = useState("");
//   useEffect(() => {
//     axios.get(props.url).then((response) => {
//       setMovie(response.data.results);
//       console.log(response.data.results.id);
//     });
//   });

//   return (
//     <Col lg={6}>
//       <Card>
//         <Row className="no-gutters align-items-center">
//           <Col md={12}>
//             <CardImg
//               className="img-fluid"
//               src={`${imageUrl + movie.backdrop_path}`}
//               alt={movie.name}
//             />
//           </Col>
//           <Col md={8}>
//             <CardBody>
//               <CardTitle>
//                 {" "}
//                 {movie.original_title || movie.original_name}
//               </CardTitle>
//               <CardText>{movie.overview}</CardText>
//               <CardText>{movie.first_air_date || movie.release_date}</CardText>
//             </CardBody>
//           </Col>
//         </Row>
//       </Card>
//     </Col>
//   );
// };

// export default MovieCard;
