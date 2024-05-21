import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { BASE_URL } from '../../constants/basUrl';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SmallButton from '../CustomButton/SmallButton';
import { AuthContext } from '../AuthContext';
import { useContext } from 'react';

export default function OrderCard(order) {
    const [product, setProduct] = useState({});
    const [productImage, setProductImage] = useState('');

    const navigate = useNavigate();

    const { userData } = useContext(AuthContext);

    console.log(order);

    const getProduct = async () => {
        console.log(order.product);
        const response = await axios.get(`${BASE_URL}products/product/${order.order.product}`);
        setProduct(response.data);
        console.log(response.data);
    }

    const getProductImage = async () => {
        const response = await axios.get(`${BASE_URL}products/productimage/?search=${product.id}`);
        setProductImage(response.data[0].image);
        console.log(response);
    }

    useEffect(() => {
        getProduct();
    }, [order]);

    useEffect(() => {
        getProductImage();
    }, [product])

    return (
        <Card sx={{ maxWidth: 450 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={productImage}
                title="product image"
            />
            <CardContent>
                <Typography gutterBottom variant="h4" component="div" sx={
                    { fontFamily: 'var(--heading)' }}
                >
                    {product.name}
                </Typography>
                <Typography gutterBottom variant="h5" component="div" sx={
                    { fontFamily: 'var(--heading)' }}
                >
                    {product.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {order.order.delivery_address}
                </Typography>
            </CardContent>
            <CardActions sx={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '20px'
            }}>

                {userData.role === 'consumer' ?
                    <SmallButton text={"Track Order"} click={() => { navigate(`/orders/${order.order.id}`) }} bgcolor={"var(--dark-blue)"} />
                    : userData.role === 'supplyChain' ?
                        <SmallButton text={"Start Supplying"} click={() => { navigate(`/supplyChainDashboard`) }} bgcolor={"var(--dark-blue)"} />
                        : null}
                <SmallButton text={"Product Details"} click={() => { navigate(`/products/${product.id}`) }} bgcolor={"var(--authentic)"} />
            </CardActions>
        </Card>
    );
}