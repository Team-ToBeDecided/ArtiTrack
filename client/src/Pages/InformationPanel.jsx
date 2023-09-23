import React from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { Box, Typography } from '@mui/material'
const InformationPanel = () => {
    return (
        <Box>
            <Box height={30} />
            <Box className="flex flex-col">
                <Box className="flex gap-10">
                    <AiOutlineArrowLeft className="text-4xl" />
                    <Box className="flex gap-2">
                        <Typography variant="h4">Artisan's Username</Typography>
                        <Typography variant="subtitle1" sx={
                            {
                                color: "black",
                                backgroundColor: "",
                            }
                        }>Active</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default InformationPanel