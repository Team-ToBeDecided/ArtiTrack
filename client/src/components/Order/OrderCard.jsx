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
import { TransactionContext } from '../Transactions';
import OrderDetailsModal from '../Modals/OrderTrackingModal';

export default function OrderCard(order) {
    const [product, setProduct] = useState({});
    const [productImage, setProductImage] = useState('');

    const navigate = useNavigate();

    const { createOrder, trackOrder, deliverOrder } = useContext(TransactionContext);

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


    console.log("Systum",userData.id === order.order.supplier);

    const createRequest = async () => {
        const response = await axios.post(BASE_URL + `products/supplyrequest/`, {
            new_supplier_address: userData.wallet_address,
            artisan: order.order.artisan,
            order: order.order.id,
            amount: product.price,
        });
        console.log(response);
        alert('Request Created');
    }

    const amount = (2500 * 0.00001).toString();

   const handleDeliver = () => {
    deliverOrder(order.order.id)
        .then(() => {
            return axios.patch(BASE_URL + `products/order/` + order.order.id, {
                delivered: true
            });
        })
        .then(response => {
            console.log(response);
            alert('Order Delivered');
        })
        .catch(error => {
            console.error('Error delivering order:', error);
        });
}




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
                    <OrderDetailsModal orderId={order.order.id} />
                    // <SmallButton text={"Track Order"} click={() => { createOrder("0x3cB51a218772fe46c415e5FE5Ee16cc74999d172", amount) }} bgcolor={"var(--dark-blue)"} />
                    : userData.role === 'supplyChain' ?
                        userData.id == order.order.supplier ? 
                        <>
                            <SmallButton text={"Deliver Product"} click={() => { handleDeliver() }} bgcolor={"var(--dark-blue)"} />
                        </> :
                            <SmallButton text={"Start Supplying"} click={() => { createRequest() }} bgcolor={"var(--dark-blue)"} />
                        : null}
                <SmallButton text={"Product Details"} click={() => { navigate(`/products/${product.id}`) }} bgcolor={"var(--authentic)"} />
            </CardActions>
        </Card>
    );
}