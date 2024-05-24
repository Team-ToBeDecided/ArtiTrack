import React, { useEffect, useState, useContext } from 'react';
import Header from '../components/Header/Header';
import { Card } from '@material-tailwind/react';
import { Box } from '@mui/material';
import SmallButton from '../components/CustomButton/SmallButton';
import { AuthContext } from '../components/AuthContext';
import axios from 'axios';
import { BASE_URL } from '../constants/basUrl';
import { ethers } from 'ethers';  // Import ethers for address validation
import { TransactionContext } from '../components/Transactions';

const SupplyChainRequests = () => {
    const [supplyRequests, setSupplyRequests] = useState([]);
    const [products, setProducts] = useState([]);
    const [supplierId, setSupplierId] = useState(0);
    const { userData } = useContext(AuthContext);
    const { transferNFT } = useContext(TransactionContext);

    const getSupplyRequests = async () => {
        try {
            const response = await axios.get(BASE_URL + `products/supplyrequest/${userData.role === "artisan" ? `?search=${userData.id}` : ``}`);
            setSupplyRequests(response.data);
            console.log("Supply Requests:", response.data);
        } catch (error) {
            console.error('Error fetching supply requests:', error);
        }
    }

    const getProductDetails = async () => {
        try {
            if (supplyRequests.length > 0 && supplyRequests[0].order) {
                const requests = supplyRequests.map(async (request) => {
                    const response = await axios.get(`${BASE_URL}products/order/${request.order}`);
                    const data = await axios.get(`${BASE_URL}products/product/${response.data.product}`);
                    return data.data;
                });

                const productsData = await Promise.all(requests);
                setProducts(productsData);
            }
        } catch (error) {
            console.error('Error fetching product details:', error);
        }
    }

    const getSupplierId = async (index) => {
        try {
            console.log('Fetching supplier ID for index:', index);
            const response = await axios.get(BASE_URL + `users/search/${supplyRequests[index].new_supplier_address}`);
            const supplierId = response.data.id;
            setSupplierId(supplierId);
            console.log('Supplier ID response:', response);
            return supplierId;
        } catch (error) {
            console.error('Error fetching supplier ID:', error);
            throw error;
        }
    }

    const deleteSupplyRequest = async (index) => {
        try {
            const response = await axios.delete(BASE_URL + `products/supplyrequest/${supplyRequests[index].id}/`);
            console.log('Supply request deleted:', response);
        } catch (error) {
            console.error('Error deleting supply request:', error);
            throw error;
        }
    }

    const handleTransfer = async ({ orderId, index }) => {
        try {
            console.log("Order ID:", orderId);
            console.log("Index:", index);

            // Get the new supplier address directly
            const newSupplierAddress = supplyRequests[index].new_supplier_address;

            if (!ethers.utils.isAddress(newSupplierAddress)) {
                throw new Error(`Invalid Ethereum address: ${newSupplierAddress}`);
            }

            console.log("New Supplier Address:", newSupplierAddress);

            const supplierId = await getSupplierId(index);
            console.log("Supplier ID:", supplierId);

            await transferNFT(orderId, newSupplierAddress);

            const response = await axios.patch(BASE_URL + `products/order/${supplyRequests[index].order}/`, {
                supplier: supplierId,
            });
            console.log('Patch response:', response);

            await deleteSupplyRequest(index);
            console.log('Supply request deleted successfully');
        } catch (error) {
            console.error('Error handling transfer:', error);
        }
    };

    useEffect(() => {
        getSupplyRequests();
    }, []);

    useEffect(() => {
        getProductDetails();
    }, [supplyRequests]);

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
                    const supplyRequest = supplyRequests[index];
                    if (!supplyRequest) {
                        console.error(`No supply request found at index ${index}`);
                        return null;
                    }
                    const { new_supplier_address, order } = supplyRequest;
                    if (!new_supplier_address) {
                        console.error(`No new supplier address found for supply request at index ${index}`);
                        return null;
                    }
                    return (
                        <Card key={index} className='flex flex-col items-stat justify-center gap-5 p-5 max-w-2xl rounded none'>
                            <h2 className='text-5xl'>{product.name}</h2>
                            <h2 className='text-3xl'>{product.price}</h2>
                            <h2 className='text-2xl'>Supplier Address:</h2>
                            <h2 className='text-2xl font-serif'>{new_supplier_address}</h2>
                            <SmallButton
                                text='Transfer Token'
                                click={() => handleTransfer({ orderId: order, index })}
                                bgcolor='var(--dark-blue)'
                            />
                        </Card>
                    )
                })}
            </Box>
        </>
    );
}

export default SupplyChainRequests;
