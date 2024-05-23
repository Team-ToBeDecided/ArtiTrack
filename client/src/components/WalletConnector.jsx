import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { IconButton } from '@mui/material';
import { WalletIcon } from '@heroicons/react/24/outline';
import { Auth } from '@arcana/auth-react';
import { useAuth } from '@arcana/auth-react';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'transparent',
    // border: '2px solid #000',
    // boxShadow: 24,
    // borderRadius: 10,
    p: 4,
    // backdropFilter: 'blur(10px)',
};


export default function WalletConnector() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const { user, loading, connect, logout, isLoggedIn } = useAuth();

    React.useEffect(() => {
        if (isLoggedIn) {
            handleClose();
        }
    }, [isLoggedIn])

    console.log(user);

    return (
        <div>
            {/* <Button onClick={handleOpen} sx={{
                color: 'white',
                fontFamily:  'var(--heading)',
            }} startIcon={<WalletIcon className='w-6 h-6 text-white' />}>Connect Wallet</Button> */}
            <IconButton onClick={handleOpen}>
                <WalletIcon className='w-6 h-6 text-white' />
                <Typography sx={{
                    color: 'white',
                    fontFamily: 'var(--heading)',
                    marginLeft: '5px'
                }}>
                    {isLoggedIn ?  "Wallet Connected" : 'Connect Wallet'}
                </Typography>
            </IconButton>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Auth />
                </Box>
            </Modal>
        </div>
    );
}
