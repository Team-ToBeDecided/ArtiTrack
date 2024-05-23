import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { IconButton } from '@mui/material';
import { WalletIcon } from '@heroicons/react/24/outline';
import { Auth } from '@arcana/auth-react';
import { useAuth } from '@arcana/auth-react';
import { useContext } from 'react';
import { AuthContext } from './AuthContext';
import axios from 'axios';
// import { ArcanaProvider  } from './Transactions';
import { ArcanaProvider } from '../main';
import { BASE_URL } from '../constants/basUrl';

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
    const [userWallet, setUserWallet] = React.useState();
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const { user, loading, connect, logout, isLoggedIn } = useAuth();

    const { accessToken, userData } = useContext(AuthContext);

    async function getWalletAddress() {
        const user = await ArcanaProvider.getUser();
        const walletAddress = user.address;
        setUserWallet(walletAddress)
        console.log('User Wallet Address:', walletAddress);
    }


    const addUserWallet = async () => {
        const response = await axios.patch(BASE_URL + `users/update/` + userData.id + `/`, {
            wallet_address: userWallet
        })
        console.log(response);
    }

    console.log(userData)


    React.useEffect(() => {
        if (isLoggedIn) {
            if (userData.wallet_address === null) {
                getWalletAddress();
            }
            handleClose();
        }
    }, [isLoggedIn])

    React.useEffect(() => {
        if (userWallet) {
            addUserWallet();
        }
    }, [userWallet])

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
                    {isLoggedIn ? "Wallet Connected" : 'Connect Wallet'}
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
