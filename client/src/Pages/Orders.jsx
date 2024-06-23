import React from 'react'
import OrderCard from '../components/Order/OrderCard'
import axios from 'axios'
import { BASE_URL } from '../constants/basUrl'
import { useEffect, useState, useContext } from 'react'
import { AuthContext } from '../components/AuthContext'
import Header from '../components/Header/Header'
import { Box } from '@mui/material'

const OrderPage = () => {
    const [orders, setOrders] = useState([]);

    const { userData } = useContext(AuthContext);

    const getOrders = async () => {
        const response = await axios.get(BASE_URL + `products/order/${userData.role == "consumer" ? `?user=${userData.email}` : ``}`);
        setOrders(response.data);
        console.log(response.data);
    }

    useEffect(() => {
        getOrders();
    }, [])

    return (
        <>
            <div className="flex p-16 justify-center">
                <Header text="Orders" />
            </div>
            <Box sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 10,
                padding: '20px',
                paddingLeft: '100px',
                margin: '20px',
            }}>
                {orders.map((order) => {
                    return (
                        <>
                            {order.delivered !== true &&
                                order.supplier !== userData.id ?
                                <OrderCard order={order} /> : null
                            }
                        </>
                    )
                })}
            </Box>
            {userData.role == "supplyChain" ?
                <>
                    <div className="flex p-16 justify-center">
                        <Header text="Supply Chain Request" />
                    </div>
                    <Box sx={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: 10,
                        padding: '20px',
                        paddingLeft: '100px',
                        margin: '20px',
                    }}>
                        {orders.map((order) => {
                            return (
                                <>
                                    {order.delivered !== true &&
                                        order.supplier == userData.id ?
                                            <OrderCard order={order} /> : null
                                    }
                                </>
                            )
                        })}
                    </Box>
                </> : null}
        </>
    )
}

export default OrderPage