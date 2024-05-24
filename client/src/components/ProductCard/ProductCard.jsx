import React, { useEffect } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { BASE_URL } from '../../constants/basUrl';
import { Typography, useMediaQuery } from '@mui/material';


export function ProductCard(
    { product }
) {
    // const dispatch = useDispatch();
    // console.log(product)
    const navigate = useNavigate();

    const [img, setImg] = React.useState('')

    const getImage = async () => {
        const response = await axios.get(BASE_URL + `/products/productimage/?search=${product.id}`)
        // console.log(response.data)
        setImg(response.data[0].image)
    }

    useEffect(() => {
        getImage()
    }, [])

    const md = useMediaQuery("(min-width:1024px)")

    return (
        <div onClick={() => navigate(`/products/${product.id}`)} className={`relative group ${md ? 'w-full' : 'w-[100%] justify-center align-center'}`}>
            <div
                // onClick={handleDetails} 
                className="w-full h-[500px] overflow-hidden cursor-pointer">
                <img
                    // src={product.Images && product.Images.length > 0 ? product.Images[0] : ''}
                    src={img}
                    alt="Image"
                    className="object-cover w-full h-full duration-500 hover:scale-110"
                />
            </div>
            <div className='w-full border-[1px] px-2 py-4'>
                <div className='flex justify-between align-center'>
                    <div>
                        <Typography sx={{
                            fontFamily: 'var(--heading)',
                        }} className='text-2xl'>
                            {product.name}
                        </Typography>
                    </div>
                    <div className='relative flex gap-2 overflow-hidden w-28'>
                        <div className='relative flex justify-end gap-2 px-2 mx-2 transition-transform duration-500 transform group-hover:translate-x-32 -text-sm w-28'>
                            <p className='font-semibold text-[16px]'>
                                Rs{product.price}
                            </p>
                        </div>
                        <p className='absolute text-[11px] z-20 w-[100px] text-gray-500 hover:text-gray-900 flex items-center 
                        gap-1 top-0 transform -translate-x-32 group-hover:translate-x-0 transition-transform 
                        cursor-pointer duration-500'
                        >
                            add to cart{" "}
                            <span>
                                <BsArrowRight size={7} />
                            </span>
                        </p>
                    </div>
                </div>
                <div>
                    <p>
                        {product.craft}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
