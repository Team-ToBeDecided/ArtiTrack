import React, { useEffect } from 'react';
import Header from '../components/Header/Header';
import { Card } from '@material-tailwind/react';
import { Box } from '@mui/material';
import SmallButton from '../components/CustomButton/SmallButton';
import { useContext } from 'react';
import { AuthContext } from '../components/AuthContext';
import { useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../constants/basUrl';
import { Auth } from '@arcana/auth-react';



const SupplyChainRequests = () => {

    const [supplyRequests, setSupplyRequests] = useState([{}]);
    const [products, setProducts] = useState([{}]);

    const { userData } = useContext(AuthContext);

    const getSupplyRequests = async () => {
        const response = await axios.get(BASE_URL + `products/supplyrequest/${userData.role == "artisan" ? `?search=${userData.id}` : ``}`);
        setSupplyRequests(response.data);
        console.log(response.data);
    }

    const getOrderDetails = async () => {
        if (supplyRequests.length > 0 && supplyRequests[0].order) {
            const requests = supplyRequests.map(async (request) => {
                const response = await axios.get(`${BASE_URL}products/order/${request.order}`);
                const data = await axios.get(`${BASE_URL}products/product/${response.data.product}`);
                return data.data;
            });

            const productsData = await Promise.all(requests);
            setProducts(productsData);
        }
    }

    useEffect(() => {
        getSupplyRequests();
    }, [])

    useEffect(() => {
        getOrderDetails();
    }, [supplyRequests])

    useEffect(() => {
        console.log(products);
    }, [products])

    // const handleTransfer = async (index) => {


    return (
        <>
            <div className="flex p-16 justify-center">
                <Header text="Supply Chain Requests" />
            </div>
            <Box sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 10,
                padding: '20px',
                paddingLeft: '100px',
                margin: '20px',
            }}>
                {products.map((product,index) => {
                    return (
                        <Card className='flex flex-col items-stat justify-center gap-5 p-5 max-w-xl rounded none'>
                            {/* <img src="https://img.icons8.com/ios/452/box.png" className='h-24 rounded-xl border-4' alt="box" /> */}
                            <h2 className='text-5xl'>{product.name}</h2>
                            <h2 className='text-3xl'>{product.price}</h2>
                            <SmallButton text='Transfer' click={() => { }} bgcolor='var(--dark-blue)' />
                        </Card>
                    )
                })}
            </Box>
        </>
    )
}

export default SupplyChainRequests;