import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'
import { useMediaQuery } from '@mui/material'
import { Link } from 'react-router-dom'

// import department1 from '../../assets/department/dep1.png'
// import department2 from '../../assets/department/dep2.png'
// import department3 from '../../assets/department/dep3.png'
// import department4 from '../../assets/department/dep4.png'
// import department5 from '../../assets/department/dep5.png'
// import department6 from '../../assets/department/dep6.png'
// import department7 from '../../assets/department/dep7.png'
// import department8 from '../../assets/department/dep8.png'

import ProductCard from '../ProductCard/ProductCard'

const DepartmentCard = ({ image, title }) => {
    const isSmallScreen = useMediaQuery('(max-width: 960px)')
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '10px',
                width: '150px',
                height: '150px',
                backgroundColor: '#77253f',
                borderRadius: '10px',
                padding: '10px',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                    backgroundColor: 'rgba(0,0,0,0.5)',
                }
            }}
        >
            <img src={image} alt="department1" style={{ width: '75px', height: '75px', objectFit: 'cover' }} />
            <Typography
                sx={{
                    color: 'white',
                    fontFamily: 'Poppins',
                    fontSize: '16px',
                    fontWeight: '500',
                    padding: '5px 10px',
                    textTransform: 'capitalize',
                    textAlign: 'center',
                }}
            >{title}</Typography>
        </Box>
    )
}

const DepartmentSlider = ({ departmentData }) => {
    // const departmentData = [
    //     { id: 1, image: department1, title: 'Department 1' },
    //     { id: 2, image: department2, title: 'Department 2' },
    //     { id: 3, image: department3, title: 'Department 3' },
    //     { id: 4, image: department4, title: 'Department 4' },
    //     { id: 5, image: department5, title: 'Department 5' },
    //     { id: 6, image: department6, title: 'Department 6' },
    //     { id: 7, image: department7, title: 'Department 7' },
    //     { id: 8, image: department8, title: 'Department 8' },
    // ];


    const isSmallScreen = useMediaQuery("(max-width: 960px )");

    const [currentSlide, setCurrentSlide] = useState(0);
    const slideCount = isSmallScreen ? 1 : 6;

    const handlePreviousSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? departmentData.length - 1 : prevSlide - 1));
    };

    const handleNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === departmentData.length - 1 ? 0 : prevSlide + 1));
    };

    const renderCards = () => {
        const startIndex = currentSlide;
        const endIndex = (currentSlide + slideCount) % departmentData.length;
        const slicedData = endIndex >= startIndex
            ? departmentData.slice(startIndex, endIndex)
            : [
                ...departmentData.slice(startIndex),
                ...departmentData.slice(0, endIndex),
            ];

        return slicedData.map((department) => (
            <ProductCard />
        ));
    };

    return (
        <div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '10px',
                    marginBottom: '20px',
                }}
            >
                <button
                    onClick={handlePreviousSlide}
                    style={{
                        padding: '10px',
                        border: 'none',
                        background: 'transparent',
                        fontSize: '24px',
                        color: '#555',
                        cursor: 'pointer',
                        outline: 'none',
                    }}
                >&lt;</button>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '10px',
                }}>
                    {renderCards()}
                </div>
                <button
                    onClick={handleNextSlide}
                    style={{
                        padding: '10px',
                        border: 'none',
                        background: 'transparent',
                        fontSize: '24px',
                        color: '#555',
                        cursor: 'pointer',
                        outline: 'none',
                    }}
                >&gt;</button>
            </div>
        </div>
    );
};

export default DepartmentSlider;
