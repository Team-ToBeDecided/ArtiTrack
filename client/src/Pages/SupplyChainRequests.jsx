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
import { TransactionContext } from '../components/Transactions';



const SupplyChainRequests = () => {

    const [supplyRequests, setSupplyRequests] = useState([{}]);
    const [products, setProducts] = useState([{}]);
    const [supplierId, setSupplierId] = useState(0);

    const { userData } = useContext(AuthContext);

    const { createOrder, trackOrder, transferNFT } = useContext(TransactionContext);

    const getSupplyRequests = async () => {
        const response = await axios.get(BASE_URL + `products/supplyrequest/${userData.role == "artisan" ? `?search=${userData.id}` : ``}`);
        setSupplyRequests(response.data);
        console.log("Supply Requests:", response.data);
    }

    const getProductDetails = async () => {
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

    const getSupplierId = async (index) => {
        console.log(index)
        try {
            const response = await axios.get(BASE_URL + `users/search/${supplyRequests[index].new_supplier_address}`);
            setSupplierId(response.data.id);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    const deleteSupplyRequest = async (index) => {
        const response = await axios.delete(BASE_URL + `products/supplyrequest/${supplyRequests[index].id}/`);
        console.log(response);
    }


    const handleTransfer = async ({ orderId, index }) => {
        try {
            await getSupplierId(index);
            await transferNFT(orderId, supplierId);
            console.log("Supplier ID:", supplierId);
            const response = await axios.patch(BASE_URL + `products/order/${supplyRequests[index].order}/`, {
                supplier: supplierId,
            });
            await deleteSupplyRequest(index);
            console.log(response);
        } catch (error) {
            console.error('Error handling transfer:', error);
        }
    }


    useEffect(() => {
        getSupplyRequests();
    }, [])

    useEffect(() => {
        getProductDetails();
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
                {products.map((product, index) => {
                    return (
                        <Card className='flex flex-col items-stat justify-center gap-5 p-5 max-w-2xl rounded none'>
                            {/* <img src="https://img.icons8.com/ios/452/box.png" className='h-24 rounded-xl border-4' alt="box" /> */}
                            <h2 className='text-5xl'>{product.name}</h2>
                            <h2 className='text-3xl'>{product.price}</h2>
                            <h2 className='text-2xl'>Supplier Address:</h2>
                            <h2 className='text-2xl font-serif'>{supplyRequests[index].new_supplier_address}</h2>
                            <SmallButton text='Transfer Token' click={() => { handleTransfer(supplyRequests[index].order, index) }} bgcolor='var(--dark-blue)' />
                        </Card>
                    )
                })}
            </Box>
        </>
    )
}

export default SupplyChainRequests;