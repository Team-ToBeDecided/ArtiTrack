import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import enhance from "../assets/icons/enhance.png";
import CustomButton from "../components/CustomButton/CustomButton";
import { Select, Option } from "@material-tailwind/react";
import { useDropzone } from "react-dropzone";
import axios from "axios";

const URLBox = () => {
    const [previewImage, setPreviewImage] = useState(null);

    const { getRootProps, getInputProps } = useDropzone({
        accept: "image/*, video/*",
        onDrop: (acceptedFiles) => {
            if (acceptedFiles && acceptedFiles.length > 0) {
                const file = acceptedFiles[0]; // Assuming you want to display only the first dropped file
                setPreviewImage(URL.createObjectURL(file));
            }
        },
    });
    
    return (
        <Box {...getRootProps()} className={` flex justify-center shadow-md w-[200px] h-[200px] cursor-pointer`}>
            <input {...getInputProps()} />
            <Box className="flex flex-col items-center gap-2">
                <div  className="cursor-pointer">
                    
                    {previewImage ? null : (
                        
                        <button className="p-2 w-full text-[8px] bg-green-200 border rounded-[20px]">
                            Add from URL
                        </button>
                    )}
                </div>
                {previewImage && (
                    <img
                        src={previewImage}
                        alt="Preview"
                        style={{ width: "180px", height: "180px" }}
                    />
                )}
                
            </Box>
        </Box>
    );
};
const BigURLBox = () => {
    const [previewImage, setPreviewImage] = useState(null);

    const { getRootProps, getInputProps } = useDropzone({
        accept: "image/*, video/*",
        onDrop: (acceptedFiles) => {
            if (acceptedFiles && acceptedFiles.length > 0) {
                const file = acceptedFiles[0]; // Assuming you want to display only the first dropped file
                setPreviewImage(URL.createObjectURL(file));
            }
        },
    });
    
    return (
        <Box {...getRootProps()} className={` flex justify-center shadow-md w-[500px] h-[440px] cursor-pointer`}>
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
                        style={{ width: "480px", height: "420px" }}
                    />
                )}
                
            </Box>
        </Box>
    );
};

const InformationPanel = () => {
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
    const [price, setPrice] = useState("");

    const [enhancedDescription, setEnhancedDescription] = useState("");
    const [hashtags, setHashtags] = useState([]);

    const [files1, setFiles1] = useState([]);
    const [media1, setMedia1] = useState([]);

    const [files2, setFiles2] = useState([]);
    const [media2, setMedia2] = useState([]);

    const [files3, setFiles3] = useState([]);
    const [media3, setMedia3] = useState([]);

    const [files4, setFiles4] = useState([]);
    const [media4, setMedia4] = useState([]);

    const [files5, setFiles5] = useState([]);
    const [media5, setMedia5] = useState([]);

    const [files6, setFiles6] = useState([]);
    const [media6, setMedia6] = useState([]);

    const [files7, setFiles7] = useState([]);
    const [media7, setMedia7] = useState([]);

    const [files8, setFiles8] = useState([]);
    const [media8, setMedia8] = useState([]);
    
    const [files9, setFiles9] = useState([]);
    const [media9, setMedia9] = useState([]);

    useEffect(() => {
        console.log(files1);
        console.log(files2);
        console.log(files3);
    }, []);

    const enhanceDesc = async () => {
        const API_ENDPOINT =
            "https://api.openai.com/v1/engines/text-davinci-003/completions";
        try {
            const response = await axios.post(
                API_ENDPOINT,
                {
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
            // let hashtags = response.data.choices[2];
            let hashtags = response.data.choices.map((choice) => choice.text.trim());
            // setHashtags(hashtags);
            const consecutiveHashtags = hashtags.join(" ").replace(/\n/g, "");
            console.log(consecutiveHashtags);
            // console.log(response.data.choices[2])
            // setDescription(enhancedDescription+consecutiveHashtags);
            console.log(hashtags);
        } catch (error) {
            console.error(error);
            setHashtags([]);
        }
    };

    const handleDrop1 = (acceptedFiles) => {
        console.log("Files accepted: ", acceptedFiles);
        setFiles1([...files1, ...acceptedFiles]);

        const processedMedia = acceptedFiles.map((file) => ({
            ...file,
            preview: URL.createObjectURL(file),
        }));

        setMedia1([...media1, ...processedMedia]);
    };

    const handleDrop2 = (acceptedFiles) => {
        setFiles2([...files2, ...acceptedFiles]);

        const processedMedia = acceptedFiles.map((file) => ({
            ...file,
            preview: URL.createObjectURL(file),
        }));

        setMedia2([...media2, ...processedMedia]);
    };

    const handleDrop3 = (acceptedFiles) => {
        setFiles3([...files3, ...acceptedFiles]);

        const processedMedia = acceptedFiles.map((file) => ({
            ...file,
            preview: URL.createObjectURL(file),
        }));

        setMedia3([...media3, ...processedMedia]);
    };

    const handleDrop4 = (acceptedFiles) => {
        setFiles4([...files4, ...acceptedFiles]);

        const processedMedia = acceptedFiles.map((file) => ({
            ...file,
            preview: URL.createObjectURL(file),
        }));

        setMedia4([...media4, ...processedMedia]);
    };

    const handleDrop5 = (acceptedFiles) => {
        setFiles5([...files5, ...acceptedFiles]);

        const processedMedia = acceptedFiles.map((file) => ({
            ...file,
            preview: URL.createObjectURL(file),
        }));

        setMedia5([...media5, ...processedMedia]);
    };

    const handleDrop6 = (acceptedFiles) => {
        setFiles6([...files6, ...acceptedFiles]);

        const processedMedia = acceptedFiles.map((file) => ({
            ...file,
            preview: URL.createObjectURL(file),
        }));

        setMedia6([...media6, ...processedMedia]);
    };

    const handleDrop7 = (acceptedFiles) => {
        setFiles7([...files7, ...acceptedFiles]);

        const processedMedia = acceptedFiles.map((file) => ({
            ...file,
            preview: URL.createObjectURL(file),
        }));

        setMedia7([...media7, ...processedMedia]);
    };

    const handleDrop8 = (acceptedFiles) => {
        setFiles8([...files8, ...acceptedFiles]);

        const processedMedia = acceptedFiles.map((file) => ({
            ...file,
            preview: URL.createObjectURL(file),
        }));

        setMedia8([...media8, ...processedMedia]);
    };

    const handleDrop9 = (acceptedFiles) => {
        setFiles9([...files9, ...acceptedFiles]);

        const processedMedia = acceptedFiles.map((file) => ({
            ...file,
            preview: URL.createObjectURL(file),
        }));

        setMedia9([...media9, ...processedMedia]);
    }

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
        setPrice(e.target.files);
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
            files1: files1,
            files2: files2,
            files3: files3,
            files4: files4,
            files5: files5,
            files6: files6,
            files7: files7,
            files8: files8,
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

    return (
        <Box className="flex flex-wrap gap-10 m-16 lg:flex-nowrap">
            <Box height={30} />
            <Box className="flex flex-col w-4/5 gap-10">
                <Box className="flex gap-10">
                    <AiOutlineArrowLeft className="text-4xl" />
                    <Box className="flex gap-2">
                        <Typography variant="h4">Artisan's Username</Typography>
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
                            }}
                        >
                            Active
                        </Typography>
                    </Box>
                </Box>
                <Box className="flex flex-col p-10 border-black shadow-md border-1">
                    <Box className="flex flex-col gap-10">
                        <Box className="flex flex-col w-full">
                            <Typography variant="h5">Title:</Typography>
                            <input
                                type="text"
                                value={title}
                                placeholder="Enter title here"
                                className="p-3 bg-gray-100"
                            />
                        </Box>
                        <Box className="relative flex flex-col w-full">
                            <Typography variant="h5">Description:</Typography>
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
                                    <Typography variant="h6">Enhance</Typography>
                                </div>
                            </button>
                        </Box>
                    </Box>
                </Box>
                <Box className="flex p-10 border-black shadow-md border-1">
                    <Box className="flex flex-col gap-10">
                        <Typography variant="h5">Media</Typography>
                        <Box className="flex gap-10">
                            <Box className="flex flex-col gap-10">
                                <Box className="flex flex-wrap gap-12 lg:flex-nowrap">
                                    <URLBox onDrop={handleDrop1} />
                                    <URLBox onDrop={handleDrop2} />
                                </Box>
                                <Box className="flex flex-wrap gap-12 lg:flex-nowrap">
                                    <URLBox onDrop={handleDrop3} />
                                    <URLBox onDrop={handleDrop9} />
                                </Box>
                            </Box>
                            <Box className="flex flex-wrap gap-12">
                                <BigURLBox onDrop={handleDrop8} padding="p-44" />
                            </Box>
                        </Box>
                        <Box className="flex flex-wrap gap-12 lg:flex-nowrap">
                            <URLBox onDrop={handleDrop4} />
                            <URLBox onDrop={handleDrop5} />
                            <URLBox onDrop={handleDrop6} />
                            <URLBox onDrop={handleDrop7} />
                        </Box>
                    </Box>
                </Box>
                <Box className="flex flex-col p-10 border-black shadow-md border-1">
                    <Box className="flex flex-col gap-10">
                        <Box className="flex flex-col w-full">
                            <Typography variant="h5">Stock:</Typography>
                            <Typography variant="h5">Available for Sale</Typography>
                            <input
                                type="text"
                                placeholder="Enter title here"
                                className="p-3 bg-gray-100"
                                value={stock}
                            />
                        </Box>
                    </Box>
                </Box>
                <Box className="flex justify-start gap-10 m-10">
                    <CustomButton
                        text="Publish to WebPage"
                        bgcolor="black"
                        padding="5px"
                    />
                    <CustomButton
                        text="Publish to ODOP Social Media"
                        bgcolor="black"
                        padding="5px"
                    />
                </Box>
            </Box>
            <Box className="flex gap-12 flex-col w-1/5 h-[100%]">
                <Box className="flex flex-col justify-center gap-10 p-8 shadow-md">
                    <Typography variant="h5">Status</Typography>
                    <Select label="Status">
                        <Option>Active</Option>
                        <Option>Inactive</Option>
                    </Select>
                </Box>
                <Box className="flex flex-col justify-center gap-10 p-8 shadow-md">
                    <Typography variant="h5">Product Details</Typography>
                    <Box className="flex flex-col gap-10">
                        <Box className="flex flex-col w-full">
                            <Typography variant="h7">Material:</Typography>
                            <input
                                type="text"
                                placeholder="Enter material here"
                                className="p-3 bg-gray-100"
                                value={material}
                                onChange={handleMaterialChange}
                            />
                        </Box>
                        <Box className="flex flex-col w-full">
                            <Typography variant="h7">Craft:</Typography>
                            <input
                                type="text"
                                placeholder="Enter craft here"
                                className="p-3 bg-gray-100"
                                value={craft}
                                onChange={handleCraftChange}
                            />
                        </Box>
                        <Box className="flex flex-col w-full">
                            <Typography variant="h7">District:</Typography>
                            <input
                                type="text"
                                placeholder="Enter district here"
                                className="p-3 bg-gray-100"
                                value={district}
                                onChange={handleDistrictChange}
                            />
                        </Box>
                        <Box className="flex flex-col w-full">
                            <Typography variant="h7">Measurements:</Typography>
                            <input
                                type="text"
                                placeholder="Enter measurements here"
                                className="p-3 bg-gray-100"
                                value={measurements}
                                onChange={handleMeasurementsChange}
                            />
                        </Box>
                        <Box className="flex flex-col w-full">
                            <Typography variant="h7">Product Weight:</Typography>
                            <input
                                type="text"
                                placeholder="Enter product weight here"
                                className="p-3 bg-gray-100"
                                value={productWeight}
                                onChange={handleProductWeightChange}
                            />
                        </Box>
                        <Box className="flex flex-col w-full">
                            <Typography variant="h7">Price</Typography>
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

                <Box className="flex flex-col justify-center gap-10 p-8 shadow-md">
                    <Typography variant="h5">Insights</Typography>
                    <Typography variant="p">
                        Insights will be displayed when the product has recent sales
                    </Typography>
                </Box>
                
            </Box>
        </Box>
    );
};

export default InformationPanel;
