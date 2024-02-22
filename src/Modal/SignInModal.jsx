import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import SocialAuth from "../Shared/SocialAuths/SocialAuth";
import { useForm } from "react-hook-form";
import { TextField } from "@mui/material";
import useAuth from "../Hooks/useAuth";
import SignUpModal from "./SignUpModal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  maxWidth: 400,
  borderRadius: 3,
};

export default function SignInModal({ openIn, handleCloseIn }) {
  const { signIn } = useAuth();
  const { register, handleSubmit } = useForm();
  const [openUp, setOpenUp] = React.useState(false);
  const handleOpenUp = () => {
    setOpenUp(true);
    handleCloseIn();
  };
  const handleCloseUp = () => setOpenUp(false);

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Box>
      <Modal
        open={openIn}
        onClose={handleCloseIn}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <SocialAuth />
          <Typography
            my={1}
            fontSize={16}
            fontWeight={200}
            textAlign={"center"}
          >
            or
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              label="Email"
              type="text"
              {...register("email")}
              fullWidth
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              {...register("pass")}
              fullWidth
            />
            <input value={"Log in"} type="submit" />
          </form>
          No account?<Button onClick={handleOpenUp}>Create one</Button>
        </Box>
      </Modal>
      <SignUpModal openUp={openUp} handleCloseUp={handleCloseUp} />
    </Box>
  );
}
