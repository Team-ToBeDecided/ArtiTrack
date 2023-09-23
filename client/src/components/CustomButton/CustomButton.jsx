import React from 'react'
import { Button } from '@mui/material'


const CustomButton = ({ text, click , bgcolor }) => {
    return (
        <Button
            variant='contained'
            onClick={click}
            sx={{
                backgroundColor: bgcolor ? bgcolor : 'var(--authentic)',
                width:'300px',
                color: 'white',
                border: 'none',
                borderRadius: '0px',
                fontSize: '15px',
                padding: '20px',
                '&:hover': {
                    transitionDuration: '500',
                    backgroundColor: 'white',
                    color: bgcolor ? bgcolor : 'var(--authentic)',
                    borderWidth: '1px',
                    borderColor: bgcolor ? bgcolor : 'var(--authentic)', 
                    borderStyle: 'solid',
                    padding:'20px'
                },
            }}
        >
            {text}
        </Button>
    )
}

export default CustomButton