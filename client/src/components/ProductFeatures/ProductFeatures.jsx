import React from 'react'
import { Box, Typography } from '@mui/material'
import COD from '../../assets/e-commerce/cod.png'
import sizeGuide from '../../assets/e-commerce/sizeguide.png'
import freedelivery from '../../assets/e-commerce/freedelivery.png'
import fashionGuide from '../../assets/e-commerce/fashion.png'
import returnExchange from '../../assets/e-commerce/return.png'

const Feature = ({ src, text }) => {
    return (
        <Box
            sx={{
                display:'flex',
                flexDirection:'column',
                alignItems:'center',
            }}
        >
            <img src={src} width={64} height={64} alt='Cash-on-Delivery' />
            <Box height={10} />
            <Typography
                sx={{
                    fontSize:'12px',
                    fontFamily:'Poppins',
                    fontWeight:'500'
                }}
            >{text}
            </Typography>
        </Box>
    )
}

const ProductFeatures = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '20px',
            }}
        >
            <Feature src={COD} text="Cash on Delivery" />
            <Feature src={sizeGuide} text="Size Chart Guide" />
            <Feature src={returnExchange} text="Return and Exchange" />
            <Feature src={freedelivery} text="Free Delivery in India" />
            <Feature src={fashionGuide} text="Fashion Tips" />
        </Box>
    )
}

export default ProductFeatures  