import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import "./Item.css";

import React from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  const precioRemeras = 1800;

  return (
    <Link className="Card" to={`/detail/${producto.id}`}>
      <Card style={{ width: "17rem" }}>
        <Card.Img className="ImgCard" variant="top" src={producto.img} />
        <Card.Body>
          <Card.Title as={"h6"}>{producto.title}</Card.Title>
          <Card.Text>
            Categoria: {producto.categoria}
            <br />
            Precio: ${precioRemeras}
          </Card.Text>
          <br />
          <ItemCount stock={5} />
          <Button variant="secondary">Ver detalles</Button>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default Item;

// import * as React from "react";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
// import { Button, CardActionArea, CardActions } from "@mui/material";

// export default function Item({ producto }) {
//   return (
//     <Card sx={{ maxWidth: 200 }}>
//       <CardActionArea>
//         <CardMedia
//           component="img"
//           height="250"
//           image={producto.img}
//           alt={producto.title}
//         />
//         <CardContent>
//           <Typography gutterBottom variant="body2" component="div">
//             {producto.title}
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             Categoria: {producto.categoria}
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//       <CardActions>
//         <Button size="small" color="primary">
//           Agregar al carrito
//         </Button>
//       </CardActions>
//     </Card>
//   );
// }

////////////////////////////////////////////////////////////

// import * as React from "react";
// import { styled } from "@mui/material/styles";
// import Card from "@mui/material/Card";
// import CardHeader from "@mui/material/CardHeader";
// import CardMedia from "@mui/material/CardMedia";
// import CardContent from "@mui/material/CardContent";
// import CardActions from "@mui/material/CardActions";
// import Collapse from "@mui/material/Collapse";
// import Avatar from "@mui/material/Avatar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import { red, yellow } from "@mui/material/colors";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import ShareIcon from "@mui/icons-material/Share";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import MoreVertIcon from "@mui/icons-material/MoreVert";

// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
//   marginLeft: "auto",
//   transition: theme.transitions.create("transform", {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

// export default function Item({ producto }) {
//   const [expanded, setExpanded] = React.useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <Card sx={{ maxWidth: 300 }}>
//       <CardHeader
//         avatar={
//           <Avatar sx={{ bgcolor: yellow[700] }} aria-label="recipe">
//             T
//           </Avatar>
//         }
//         // action={
//         //   <IconButton aria-label="settings">
//         //     <MoreVertIcon />
//         //   </IconButton>
//         // }
//         title={producto.title}
//         // subheader="September 14, 2016"
//       />
//       <CardMedia
//         component="img"
//         height="280"
//         image={producto.img}
//         alt={producto.title}
//       />
//       <CardContent>
//         <Typography variant="body2" color="text.secondary">
//           Categoria: {producto.categoria}
//         </Typography>
//       </CardContent>
//       <CardActions disableSpacing>
//         <IconButton aria-label="add to favorites">
//           <FavoriteIcon />
//         </IconButton>
//         <IconButton aria-label="share">
//           <ShareIcon />
//         </IconButton>
//         <ExpandMore
//           expand={expanded}
//           onClick={handleExpandClick}
//           aria-expanded={expanded}
//           aria-label="show more"
//         >
//           <ExpandMoreIcon />
//         </ExpandMore>
//       </CardActions>
//     </Card>
//   );
// }
