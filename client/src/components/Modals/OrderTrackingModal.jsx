import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useContext } from 'react';
import { TransactionContext } from '../Transactions';
import SmallButton from '../CustomButton/SmallButton';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: '100vw',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: 5,
};

export default function OrderDetailsModal(orderId) {
  const [open, setOpen] = React.useState(false);
  const [orderDetails, setOrderDetails] = React.useState({});
  const handleOpen = async () => {
    const orderDetail = await trackOrder(orderId.orderId);
    setOrderDetails(orderDetail);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  console.log("Order ID",orderId);

  const { createOrder, trackOrder } = useContext(TransactionContext);

  return (
    <div>
      <SmallButton
        text={"Track Order"}
        click={()=>{handleOpen()}}
        bgcolor={"var(--dark-blue)"}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Artisan is : {orderDetails.merchant}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Is order Completed?: {orderDetails.isCompleted? "Yes" : "No"}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Order is in transit with : {orderDetails.tokenOwner}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
