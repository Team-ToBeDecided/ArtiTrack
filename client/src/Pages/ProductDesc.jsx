import React, { useEffect, useState } from 'react'
import { Box, Typography, Button } from '@mui/material'
import { useMediaQuery } from '@mui/material'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductCard from '../components/ProductCard/ProductCard';

import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

import CustomButton from '../components/CustomButton/CustomButton'

import Header from '../components/Header/Header';
import SocialMediaBox from '../components/SocialMediaBox/SocialMediaBox';
// import { Carousel } from 'react-responsive-carousel'
import DepartmentSlider from '../components/DepartmentSlider/DepartmentSlider';

const Breakerline = ({ bgcolor, width }) => {
    return (
        <Box height={2} sx={{
            backgroundColor: bgcolor ? bgcolor : 'black',
            width: width ? width : '80%'
        }} />
    )
}

const DetailType = ({ name, value }) => {
    return (
        <div className='flex flex-col'>
            <Typography
                sx={{
                    fontSize: 'var(--authentic-font-size)',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                    color: 'var(--authentic)',
                    letterSpacing: 'var(--authentic-letter-spacing)',
                    fontFamily: 'var(--heading)'
                }}
            >
                {/* {details.Name} */}
                {name}:
            </Typography>
            <Typography
                sx={{
                    fontSize: 'var(--product-desc)',
                    color: 'black',
                    lineHeight: 'var(--product-desc-line-height)',
                    fontFamily: 'var(--body)'
                }}
            >
                {value}
            </Typography>
        </div>

    )
}

const Product2 = ({ item }) => {
    const Images = [
        "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8f",
        "https://1.bp.blogspot.com/-ecJjBSPg2Vo/UUl54ael9iI/AAAAAAAATsA/TvDk_AzUdFE/w1200-h630-p-k-no-nu/Achi+Baat+Koi+Bhi+Kahey+To+Usay+Palu+Say+Band+Lo.jpg",
        "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8f",
    ]
    const Images2 = [
        "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8f",
        "https://1.bp.blogspot.com/-ecJjBSPg2Vo/UUl54ael9iI/AAAAAAAATsA/TvDk_AzUdFE/w1200-h630-p-k-no-nu/Achi+Baat+Koi+Bhi+Kahey+To+Usay+Palu+Say+Band+Lo.jpg",
        "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8f",
        "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8f",
        "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8f",
        "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8f",
        "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8f",
        "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8f",
    ]
    const [counter, setCounter] = useState(1)
    const [currentImg, setCurrentImg] = useState(0)
    const stock = 20
    // useEffect(() => {
    //     setDetails(location.state.item)
    // }, [])

    const handleMinus = () => {
        if (counter >= 2) {
            setCounter((prev) => prev - 1)
        }
    }
    const handlePlus = () => {
        if (counter < stock) {
            setCounter((prev) => prev + 1)
        }
    }

    const md = useMediaQuery('(min-width:1024px)')

    return (
        <>
            <Box height={50} />
            <div>
                <Header text='Product Details' />
            </div>
            <Box height={50} />
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: md ? 'row' : 'column',
                    alignItems: md ? 'flex-start' : 'center',
                    gap: '20px',
                    justifyContent: 'center',
                }}
                className="m-0 md:m-20"
            >
                <Box
                    sx={{
                        display: 'flex',
                        // flexDirection: md ? 'row' : 'column-reverse',
                        flexDirection: 'column-reverse',
                        alignItems: 'center',
                        gap: '20px',
                    }}
                >
                    <Box width={30} />
                    <Box
                        sx={{
                            display: 'flex',
                            // flexDirection: md ? 'column' : 'row',
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: '15px'
                        }}
                    >
                        {Images.map((image, index) => (
                            <Box
                                sx={{
                                    cursor: 'pointer',
                                    opacity: '0.5'
                                }}
                                key={index}
                            >
                                <img
                                    className={`${md ? 'max-w-[150px] h-[150px]' : 'w-[150px] h-[150px]'} flex-wrap`}
                                    onClick={() => setCurrentImg(index)} // Fix this line
                                    src={image}
                                    alt={'Image'}
                                />
                            </Box>
                        ))}
                    </Box>
                    <Box
                        sx={{
                            position: 'relative',
                            height: '100%',
                            width: '100%'
                        }}
                    >
                        <Box className="flex justify-center">
                            <img src={Images[currentImg]}
                                // className={`${md ? 'min-w-[600px]' : 'w-[100%]'} ${md ? 'h-[100vh]' : 'h-[70vh]'}`}
                                className='object-cover h-[80vh] w-[90%]'
                            />
                        </Box>
                    </Box>
                </Box>
                <Box width={50} />
                <Box className="flex justify-center">
                    <Box
                        sx={{
                            width: '80%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            gap: '30px',

                        }}
                    // className="items-center lg:items-start"
                    >
                        <Typography
                            sx={{
                                fontSize: 'var(--authentic-font-size)',
                                textTransform: 'uppercase',
                                fontWeight: 600,
                                color: 'var(--authentic)',
                                letterSpacing: 'var(--authentic-letter-spacing)'
                            }}
                        >
                            | AUTHENTIC CRAFT. CREATED IN INDIA.
                        </Typography>
                        <Box className="flex justify-center w-full">
                            <Typography
                                sx={{
                                    fontSize: 'var(--product-name)',
                                    fontWeight: 'bold',
                                    color: 'black',
                                    lineHeight: 'var(--product-name-line-height)',
                                    fontFamily: 'var(--heading)'
                                }}
                            >
                                Kalighat Painting With Mount - The Couple (25" x 17")
                            </Typography>
                        </Box>
                        <Typography
                            sx={{
                                fontSize: 'var(--authentic-font-size)',
                                textTransform: 'uppercase',
                                fontWeight: 600,
                                color: 'var(--authentic)',
                                letterSpacing: 'var(--authentic-letter-spacing)'
                            }}
                        >
                            {/* {details.Name} */}
                            PRODUCT CODE: SNYKG9A
                        </Typography>
                        <Typography
                            sx={{
                                width: '75%',
                                fontSize: 'var(--product-desc)',
                                color: 'black',
                                lineHeight: 'var(--product-desc-line-height)',
                                fontFamily: 'var(--body)'
                            }}
                        >
                            A beautifully stylised and relatively contemporary art form. Kalighat Painting evolved as a unique painting style in the rapidly urbanizing cityscape of 19th-century Kolkata, West Bengal. The style of these paintings is characterized by their bold sweeping brush lines, bold colours and a simplification of forms.
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: 'var(--authentic-font-size)',
                                textTransform: 'uppercase',
                                fontWeight: 600,
                                color: 'var(--authentic)',
                                letterSpacing: 'var(--authentic-letter-spacing)'
                            }}
                            className='underline'
                        >
                            {/* {details.Name} */}
                            Artisan's Info
                        </Typography>
                        <SocialMediaBox />
                        <Box height={2} sx={{
                            backgroundColor: 'black',
                            width: '100%'
                        }} />
                        <Box
                            className='flex flex-wrap items-center justify-between w-full gap-10'
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    gap: '5px',
                                    padding: '10px',
                                    color: 'gray',
                                    borderWidth: '1px',
                                    borderColor: 'black',
                                    borderStyle: 'solid',
                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '20px',
                                    }}
                                >
                                    <Button
                                        variant='text'
                                        onClick={handleMinus}
                                        sx={{
                                            color: 'var(--authentic)',
                                            '&:hover': {
                                                backgroundColor: 'var(--authentic)',
                                                color: 'white'
                                            }
                                        }}
                                    >
                                        <RemoveIcon />
                                    </Button>
                                    <Typography
                                        sx={{
                                            fontSize: 15
                                        }}
                                    >{counter}</Typography>
                                    <Button
                                        variant='text'
                                        onClick={handlePlus}
                                        sx={{
                                            color: 'var(--authentic)',
                                            '&:hover': {
                                                backgroundColor: 'var(--authentic)',
                                                color: 'white'
                                            }
                                        }}
                                    >
                                        <AddIcon />
                                    </Button>
                                </Box>
                            </Box>
                            <CustomButton text='Add to Cart' bgcolor="black" />
                        </Box>
                    </Box>
                    <Box height={20} />
                </Box>
            </Box>
            <Box height={30} />
            <Box className="flex justify-center w-[100%] justify-center gap-20 flex-wrap lg:flex-nowrap xl:flex-nowrap">
                <Box className="flex justify-center">
                    <Box className="flex flex-col items-center lg:items-start gap-20 w-[90%]">
                        <CustomButton text="Preserve Artisan's Heritage" bgcolor="#383330" />
                        <Typography sx={{
                            fontFamily: 'var(--heading)'
                        }} variant='h3'>Support the Artisan's</Typography>
                        <Typography sx={{
                            fontFamily: 'var(--body)'
                        }} variant='p' width="90%">
                            Over the years, we have cultivated direct relationships with a
                            wide network of artisans and craft centric enterprises across the
                            country. Our primary mission is to empower the Indian artisan
                            and do our bit in contributing to the sustenance of artisan
                            livelihoods as also the preservation of an amazing craft heritage.
                        </Typography>
                        <CustomButton text="Donate" bgcolor="#383330" />
                    </Box>
                </Box>
                <Box className="flex justify-center w-[90%]">
                    <Box className="flex flex-col w-full gap-7">
                        <Typography sx={{
                            fontFamily: 'var(--heading)'
                        }} variant='h3'>Product Details</Typography>
                        <DetailType name='Material' value='Cotton' />
                        <Breakerline />
                        <DetailType name='Color' value='Black' />
                        <Breakerline />
                        <DetailType name='Size' value='25" x 17"' />
                        <Breakerline />
                        <DetailType name='Weight' value='0.5 kg' />
                        <Breakerline />
                        <DetailType name='Care' value='Dry Clean Only' />
                    </Box>
                </Box>
            </Box>
            <Box height={30} />
            <Box className="flex flex-col justify-center m-20">
                <Typography sx={{
                    fontFamily: 'var(--heading)'
                }} variant='h3'>Similar Products</Typography>
                <Box>
                    <div className="grid gap-10 mt-10 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
                        <ProductCard
                        />
                        <ProductCard
                        />
                        <ProductCard
                        />
                        <ProductCard
                        />
                    </div>
                </Box>
            </Box >
        </>
    )
}

export default Product2