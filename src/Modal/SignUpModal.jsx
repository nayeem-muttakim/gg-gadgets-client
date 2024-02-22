import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import SocialAuth from "../Shared/SocialAuths/SocialAuth";
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import useAuth from "../Hooks/useAuth";
import { imageUpload } from "../Utils/Utils";

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

export default function SignUpModal({ openUp, handleCloseUp }) {
  const { signUp, updateUser } = useAuth();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    console.log(data.image["0"]);
    const imageData = await imageUpload(data.image['0'])
    console.log(imageData.url);
  };
  return (
    <div>
      <Modal
        open={openUp}
        onClose={handleCloseUp}
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
              label="Name"
              type="text"
              {...register("name")}
              fullWidth
            />
            <TextField
              label="Email"
              type="text"
              {...register("email")}
              fullWidth
            />
            <TextField type="file" {...register("image")} fullWidth />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              {...register("pass")}
              fullWidth
            />
            <input value={"Create Account"} type="submit" />
          </form>
        </Box>
      </Modal>
    </div>
  );
}
