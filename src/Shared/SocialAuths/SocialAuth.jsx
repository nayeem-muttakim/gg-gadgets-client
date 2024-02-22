import { Avatar, MenuItem, Typography } from "@mui/material";
import useAuth from "../../Hooks/useAuth";
import ggLogo from "/google.png";
const SocialAuth = () => {
  const { googleSignIn } = useAuth();
  return (
    <MenuItem
    onClick={()=>googleSignIn()}
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: 1,
        p: 1,
        border: 2,
        borderRadius: 2,
      }}
    >
      <Avatar
        alt="Google png"
        sx={{ width: 21, height: 21 }}
        src={`${ggLogo}`}
      />
      <Typography fontSize={15} fontWeight={"bold"}>
        Continue with Google
      </Typography>
    </MenuItem>
  );
};

export default SocialAuth;
