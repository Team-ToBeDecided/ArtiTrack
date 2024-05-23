import { Typography } from '@material-tailwind/react'
import React, { useEffect } from 'react'
import ProductCard from '../components/ProductCard/ProductCard'
import { Box } from '@mui/material'
import axios from 'axios'
import { BASE_URL } from '../constants/basUrl'
import Header from '../components/Header/Header'
const ProductRow = () => {
    const [products, setProducts] = React.useState([]);
    const getProducts = async () => {
        const response = await axios.get(BASE_URL + "/products/product/")
        console.log(response.data)
        setProducts(response.data)
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <Box className="w-full">
            <div className="grid gap-10 mt-10 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
                {/* <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard /> */}
                {products.map((product) => (
                    <ProductCard product={product} />
                ))
                }
            </div>
        </Box>
    )
}
const Products = () => {
    return (
        <Box className="flex justify-center w-full">
            <Box className="m-10">
                <Box>
                    <Header text={"Products"} />
                    <ProductRow />
                    <ProductRow />
                </Box>
                <Box height={30} />
                <Box>
                <Header text={"New Arrials"} />
                    <ProductRow />
                    <ProductRow />
                </Box>
            </Box>
        </Box>
    )
}

export default Products