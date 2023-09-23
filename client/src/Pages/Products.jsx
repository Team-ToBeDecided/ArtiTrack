import { Typography } from '@material-tailwind/react'
import React from 'react'
import ProductCard from '../components/ProductCard/ProductCard'
import { Box } from '@mui/material'
const ProductRow = () => {
    return (
        <Box className="w-full">
            <div className="grid gap-10 mt-10 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </div>
        </Box>
    )
}
const Products = () => {
    return (
        <Box className="flex justify-center w-full">
            <Box className="m-10">
                <Box>
                    <Typography color="Black" className="text-3xl font-semibold">
                        Trending & New
                    </Typography>
                    <ProductRow />
                    <ProductRow />
                </Box>
                <Box height={30} />
                <Box>
                    <Typography color="Black" className="text-3xl font-semibold">
                        New Arrivals
                    </Typography>
                    <ProductRow />
                    <ProductRow />
                </Box>
            </Box>
        </Box>
    )
}

export default Products