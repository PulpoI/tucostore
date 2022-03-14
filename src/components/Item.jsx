import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

export default function Item({ producto }) {
  return (
    <Card sx={{ maxWidth: 200 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={producto.img}
          alt={producto.title}
        />
        <CardContent>
          <Typography gutterBottom variant="body2" component="div">
            {producto.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Categoria: {producto.categoria}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Agregar al carrito
        </Button>
      </CardActions>
    </Card>
  );
}
