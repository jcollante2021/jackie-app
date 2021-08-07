import React from 'react'
import './card.css'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
    root: {
        width: 250,
        },
    media: {
        height: 150,
        },
    });

export default function ItemCard({productos}) {
    const classes = useStyles();
    return (
        <div className="itemCard">
            {productos.stock === 0 && <img className="soldOut" src="https://firebasestorage.googleapis.com/v0/b/jackie-app-74305.appspot.com/o/soldout.png?alt=media&token=efef7ca0-4abe-48b1-a37d-9a91fc2d53cb" alt="Vendido SoldOut" />}
            <Card className={classes.root}>
                <CardMedia
                className={classes.media}
                image={productos.pictureURL}
                title="Joyas Jackie"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {productos.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {productos.description}
                    </Typography>
                    <Typography className="textPrice" variant="h5"> 
                        ${productos.price}
                    </Typography>
                    <br/>
                    <Link to={`/productos/${productos.id}`}>
                        <Button variant="contained" color="secondary">
                        VER ARTICULO
                        </Button>
                    </Link>
                </CardContent>
            </Card>
        </div>
    )
}
