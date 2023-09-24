import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import enhance from "../assets/icons/enhance.png";
import CustomButton from "../components/CustomButton/CustomButton";
import { Select, Option, Button } from "@material-tailwind/react";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../components/AuthContext";
import { BASE_URL } from "../constants/basUrl";

const URLBox = ({ onFileDrop }) => {
    const [previewImage, setPreviewImage] = useState(null);

    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/*, video/*',
        onDrop: (acceptedFiles) => {
            if (acceptedFiles && acceptedFiles.length > 0) {
                const file = acceptedFiles[0]; // Assuming you want to display only the first dropped file
                setPreviewImage(URL.createObjectURL(file));
                onFileDrop(file);
            }
        },
    });

    return (
        <Box {...getRootProps()} className="flex justify-center shadow-xl w-[200px] h-[200px] cursor-pointer">
            <input {...getInputProps()} />
            <Box className="flex flex-col items-center gap-2">
                <div className="cursor-pointer">
                    {previewImage ? null : (
                        <button className="p-2 w-full text-[8px] bg-green-100 border rounded-[20px]">
                            Add from URL
                        </button>
                    )}
                </div>
                {previewImage && (
                    <img
                        src={previewImage}
                        alt="Preview"
                        style={{ width: '180px', height: '180px' }}
                    />
                )}
            </Box>
        </Box>
    );
};

const BigURLBox = ({ onFileDrop }) => {
    const [previewImage, setPreviewImage] = useState(null);

    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/*, video/*',
        onDrop: (acceptedFiles) => {
            if (acceptedFiles && acceptedFiles.length > 0) {
                const file = acceptedFiles[0]; // Assuming you want to display only the first dropped file
                setPreviewImage(URL.createObjectURL(file));
                onFileDrop(file);
            }
        },
    });

    return (
        <Box {...getRootProps()} className="flex justify-center shadow-xl w-[500px] h-[440px] cursor-pointer">
            <input {...getInputProps()} />
            <Box className="flex flex-col items-center gap-2">
                <div className="cursor-pointer">
                    {previewImage ? null : (
                        <button className="p-2 w-full text-[8px] bg-green-100 border rounded-[20px]">
                            Add from URL
                        </button>
                    )}
                </div>
                {previewImage && (
                    <img
                        src={previewImage}
                        alt="Preview"
                        style={{ width: '480px', height: '420px' }}
                    />
                )}
            </Box>
        </Box>
    );
};

const ProductUpload = () => {
    const [status, setStatus] = useState("Active");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [material, setMaterial] = useState("");
    const [craft, setCraft] = useState("");
    const [district, setDistrict] = useState("");
    const [measurements, setMeasurements] = useState("");
    const [productWeight, setProductWeight] = useState("");
    const [stock, setStock] = useState("");
    const [availableForSale, setAvailableForSale] = useState("");
    const [price, setPrice] = useState(0);

    const [enhancedDescription, setEnhancedDescription] = useState("");
    const [hashtags, setHashtags] = useState([]);

    const [files, setFiles] = useState([]);

    const [imgUrl, setImgUrl] = useState("");


    const { accessToken, user, userData } = useContext(AuthContext);

    const enhanceDesc = async () => {
        const API_ENDPOINT =
            "https://api.openai.com/v1/engines/text-davinci-003/completions";
        try {
            const response = await axios.post(
                API_ENDPOINT, {
                prompt: `Enhanced version of this : ${description} ; for social media is  : `,
                max_tokens: 60,
                temperature: 0.7,
                n: 4,
                stop: null,
            },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization:
                            "Bearer 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",
                    },
                }
            );

            const enhancedDescription = response.data.choices[0].text.trim("");
            setDescription(enhancedDescription);
            generateHashTags();
        } catch (error) {
            console.error(error);
        }
    };

    const generateHashTags = async () => {
        const API_ENDPOINT =
            "https://api.openai.com/v1/engines/text-davinci-003/completions";

        try {
            const response = await axios.post(
                API_ENDPOINT,
                {
                    prompt: `Generate influential social media hashtags based on the following description: ${enhancedDescription}. Make sure the hashtags are catchy, relevant, and optimized for social media engagement. Please provide at least 5 hashtags.`,
                    max_tokens: 15,
                    n: 15,
                    // stop: '.',
                    temperature: 0.7,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization:
                            "Bearer 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",
                    },
                }
            );

            console.log(response.data);
            let hashtags = response.data.choices.map((choice) => choice.text.trim());
            const consecutiveHashtags = hashtags.join(" ").replace(/\n/g, "");
            console.log(consecutiveHashtags);

            console.log(hashtags);
        } catch (error) {
            console.error(error);
            setHashtags([]);
        }
    };

    const handleDrop = (acceptedFiles) => {
        console.log("Files accepted: ", acceptedFiles);
        files.push(acceptedFiles);
    };


    const handleStatusChange = (e) => {
        setStatus(e.target.value);
    };

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handleMaterialChange = (e) => {
        setMaterial(e.target.value);
    };

    const handleCraftChange = (e) => {
        setCraft(e.target.value);
    };

    const handleDistrictChange = (e) => {
        setDistrict(e.target.value);
    };

    const handleMeasurementsChange = (e) => {
        setMeasurements(e.target.value);
    };

    const handleProductWeightChange = (e) => {
        setProductWeight(e.target.value);
    };

    const handleStockChange = (e) => {
        setStock(e.target.value);
    };

    const handleAvailableForSaleChange = (e) => {
        setAvailableForSale(e.target.value);
    };

    const handleMediaChange = (e) => {
        setMedia(e.target.files);
    };

    const handlePriceChange = (e) => {
        setPrice(e.target.value);
    };

    const handleSubmit = () => {
        const formData = {
            title: title,
            description: enhancedDescription,
            material: material,
            craft: craft,
            district: district,
            measurements: measurements,
            product_weight: productWeight,
            stock: stock,
            available_for_sale: availableForSale,
            price: price,
        };

        social_id.forEach((value, index) => {
            formData["social_id[" + index + "]"] = value;
        });

        post_heading.forEach((value, index) => {
            formData["post_heading[" + index + "]"] = value;
        });

        post_type_id.forEach((value, index) => {
            formData["post_type_id[" + index + "]"] = value;
        });

        console.log(formData);
    };

    console.log(price);


    const handlePublishWebPage = () => {
        const productData = {
            name: title,
            price: parseInt(price),
            stock: parseInt(stock),
            description: description,
            district: district,
            address: userData.address,
            material: material,
            craft: craft,
            measurement: measurements,
            weight: productWeight,
            is_active: true,
            artisan: userData.id
        };
        console.log(productData);
        axios.post(BASE_URL + "products/product/", productData).then((response) => {
            console.log(response.data);
            const product_id = response.data.id;
            files.forEach((file) => {
                console.log("product_id:", product_id);
                console.log("file:", file);
                // const data = new FormData();
                const formData = {
                    product: product_id,
                    image: file
                }
                console.log(formData);
                axios.post(BASE_URL + "products/productimage/", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }).then((response) => {
                    console.log(response.data);
                    setImgUrl(response.data.image);
                }).catch((error) => {
                    console.log(error);
                });
            });
        }).catch((error) => {
            console.log(error);
        });

        useEffect(() => {
            console.log("Files in the array: ", files);
        }, [])

    }
    // console.log(media1);

    const createPost = async (pageId, message) => {
        const url = `https://graph.facebook.com/${pageId}/feed`;
        const data = {
            message,
            access_token: "EAAHarU0FJvcBO1G7ZA0IDK982gRmCC7udmkZBJtY3XWZAD1T3pYKT5XZBHSEhM1MgPZCGnX7AGqaeZAaOrA9Ez0oE3iof1VoS2vSIiNfs9q7sRCgruetICZAdPYljn6Ca4CbFwDXXLxBP2ZBju1IefyXZCMiiCqoZBNuMizrF8CUKzLqL8pYcZCLw5urYBt6uFhV0IZD",
        };
        const response = await axios.post(url, data);
        return response;
    };

    const createPostWithImage = async (pageId, message, imageUrl) => {
        const url = `https://graph.facebook.com/${pageId}/photos`;
        const data = {
            message,
            url: imageUrl,
            access_token: "EAAHarU0FJvcBO1G7ZA0IDK982gRmCC7udmkZBJtY3XWZAD1T3pYKT5XZBHSEhM1MgPZCGnX7AGqaeZAaOrA9Ez0oE3iof1VoS2vSIiNfs9q7sRCgruetICZAdPYljn6Ca4CbFwDXXLxBP2ZBju1IefyXZCMiiCqoZBNuMizrF8CUKzLqL8pYcZCLw5urYBt6uFhV0IZD"
        };
        const response = await axios.post(url, data);
        return response;
    };

    const publishToFacebook = async () => {
        const pageId = "100669336396193";
        const message = description;
        const imageUrl = "http://144.126.253.88:8000/media/product_images/linkedinBG_LqGHVlz.jpg";
        const response = await createPostWithImage(pageId, message, imageUrl);
        console.log(response);
    }


    return (
        <Box className="flex flex-wrap gap-10 m-16 lg:flex-nowrap">
            <Box height={30} />
            <Box className="flex flex-col w-4/5 gap-10">
                <Box className="flex gap-10">
                    <AiOutlineArrowLeft className="text-4xl" />
                    <Box className="flex gap-2">
                        <Typography sx={{
                            fontFamily: 'var(--font-heading)'
                        }} variant="h4">{userData.first_name + " " + userData.last_name}</Typography>
                        <Typography
                            sx={{
                                fontSize: "12px",
                                color: "black",
                                backgroundColor: "lightgreen",
                                padding: "5px",
                                display: "flex",
                                alignItems: "center",
                                borderRadius: "20px",
                                width: "70px",
                                justifyContent: "center",
                                height: "25px",
                                fontFamily: 'var(--font-body)'
                            }}
                            className="font-body"
                        >
                            Active
                        </Typography>
                    </Box>
                </Box>
                <Box className="flex flex-col p-10 border-black shadow-lg border-1">
                    <Box className="flex flex-col gap-10">
                        <Box className="flex flex-col w-full">
                            <Typography sx={{
                                fontFamily: 'var(--font-heading)'
                            }} variant="h5">Title:</Typography>
                            <input
                                type="text"
                                value={title}
                                placeholder="Enter title here"
                                className="p-3 bg-gray-100 font-body"
                                onChange={handleTitleChange}
                            />
                        </Box>
                        <Box className="relative flex flex-col w-full">
                            <Typography sx={{
                                fontFamily: 'var(--font-heading)'
                            }} variant="h5">Description:</Typography>
                            <textarea
                                value={description}
                                placeholder="Enter description here"
                                type="text"
                                rows={7}
                                onChange={handleDescriptionChange}
                                className="p-3 bg-gray-100"
                            />
                            <button
                                className="absolute bottom-[10px] right-[10px]"
                                onClick={() => enhanceDesc()}
                            >
                                <div className="flex items-center gap-1 p-5">
                                    <img
                                        src={enhance}
                                        style={{}}
                                        alt="enhance icon"
                                        width="30px"
                                        height="30px"
                                    />
                                    <Typography sx={{
                                        fontFamily: 'var(--font-heading)'
                                    }} variant="h6">Enhance</Typography>
                                </div>
                            </button>
                        </Box>
                    </Box>
                </Box>
                <Box className="flex p-10 border-black shadow-lg border-1">
                    <Box className="flex flex-col gap-10">
                        <Typography sx={{
                            fontFamily: 'var(--font-heading)'
                        }} variant="h5">Media</Typography>
                        <Box className="flex gap-10">
                            <Box className="flex flex-col gap-10">
                                <Box className="flex flex-wrap gap-12 lg:flex-nowrap">
                                    <URLBox onFileDrop={handleDrop} />
                                    <URLBox onFileDrop={handleDrop} />
                                </Box>
                                <Box className="flex flex-wrap gap-12 lg:flex-nowrap">
                                    <URLBox onFileDrop={handleDrop} />
                                    <URLBox onFileDrop={handleDrop} />
                                </Box>
                            </Box>
                            <Box className="flex flex-wrap gap-12">
                                <BigURLBox onFileDrop={handleDrop} padding="p-44" />
                            </Box>
                        </Box>
                        <Box className="flex flex-wrap gap-12 lg:flex-nowrap">
                            <URLBox onFileDrop={handleDrop} />
                            <URLBox onFileDrop={handleDrop} />
                            <URLBox onFileDrop={handleDrop} />
                            <URLBox onFileDrop={handleDrop} />
                        </Box>
                    </Box>
                </Box>
                <Box className="flex flex-col p-10 border-black shadow-lg border-1">
                    <Box className="flex flex-col gap-10">
                        <Box className="flex flex-col w-full">
                            <Typography sx={{
                                fontFamily: 'var(--font-heading)'
                            }} variant="h5">Stock:</Typography>
                            <Typography sx={{
                                fontFamily: 'var(--font-body)'
                            }} variant="h5">Available for Sale</Typography>
                            <input
                                type="text"
                                placeholder="Enter title here"
                                className="p-3 bg-gray-100"
                                value={stock}
                                onChange={handleStockChange}
                            />
                        </Box>
                    </Box>
                </Box>
                <Box className="flex justify-start gap-10 m-10">
                    <CustomButton
                        text="Publish to WebPage"
                        bgcolor="black"
                        padding="5px"
                        click={handlePublishWebPage}
                    />
                    {imgUrl === "" ? <Button disabled className="rounded-none w-72" 
                    >
                        Publish to ODOP Social Media
                    </Button> : <CustomButton
                        text="Publish to ODOP Social Media"
                        bgcolor="black"
                        padding="5px"
                        click={publishToFacebook}
                    />}
                </Box>
            </Box>
            <Box className="flex gap-12 flex-col w-1/5 h-[100%]">
                <Box className="flex flex-col justify-center gap-10 p-8 shadow-xl">
                    <Typography sx={{
                        fontFamily: 'var(--font-heading)'
                    }} variant="h5">Status</Typography>
                    <Select label="Status">
                        <Option>Active</Option>
                        <Option>Inactive</Option>
                    </Select>
                </Box>
                <Box className="flex flex-col justify-center gap-10 p-8 shadow-xl">
                    <Typography sx={{
                        fontFamily: 'var(--heading)'
                    }} variant="h5">Product Details</Typography>
                    <Box className="flex flex-col gap-10">
                        <Box className="flex flex-col w-full">
                            <Typography sx={{
                                fontFamily: 'var(--heading)'
                            }} variant="h5">Material:</Typography>
                            <input
                                type="text"
                                placeholder="Enter material here"
                                className="p-3 bg-gray-100"
                                value={material}
                                onChange={handleMaterialChange}
                            />
                        </Box>
                        <Box className="flex flex-col w-full">
                            <Typography sx={{
                                fontFamily: 'var(--heading)'
                            }} variant="h5">Craft:</Typography>
                            <input
                                type="text"
                                placeholder="Enter craft here"
                                className="p-3 bg-gray-100"
                                value={craft}
                                onChange={handleCraftChange}
                            />
                        </Box>
                        <Box className="flex flex-col w-full">
                            <Typography sx={{
                                fontFamily: 'var(--heading)'
                            }} variant="h5">District:</Typography>
                            <input
                                type="text"
                                placeholder="Enter district here"
                                className="p-3 bg-gray-100"
                                value={district}
                                onChange={handleDistrictChange}
                            />
                        </Box>
                        <Box className="flex flex-col w-full">
                            <Typography sx={{
                                fontFamily: 'var(--heading)'
                            }} variant="h5">Measurements:</Typography>
                            <input
                                type="text"
                                placeholder="Enter measurements here"
                                className="p-3 bg-gray-100"
                                value={measurements}
                                onChange={handleMeasurementsChange}
                            />
                        </Box>
                        <Box className="flex flex-col w-full">
                            <Typography sx={{
                                fontFamily: 'var(--heading)'
                            }} variant="h5">Product Weight:</Typography>
                            <input
                                type="text"
                                placeholder="Enter product weight here"
                                className="p-3 bg-gray-100"
                                value={productWeight}
                                onChange={handleProductWeightChange}
                            />
                        </Box>
                        <Box className="flex flex-col w-full">
                            <Typography sx={{
                                fontFamily: 'var(--heading)'
                            }} variant="h5">Price</Typography>
                            <input
                                type="text"
                                placeholder="Enter product weight here"
                                className="p-3 bg-gray-100"
                                value={price}
                                onChange={handlePriceChange}
                            />
                        </Box>
                    </Box>
                </Box>

                <Box className="flex flex-col justify-center gap-10 p-8 shadow-xl">
                    <Typography sx={{
                        fontFamily: 'var(--heading)'
                    }} variant="h5">Insights</Typography>
                    <Typography sx={{
                        fontFamily: 'var(--body)'
                    }} variant="p">
                        Insights will be displayed when the product has recent sales
                    </Typography>
                </Box>

            </Box>
        </Box>
    );
};

export default ProductUpload;
