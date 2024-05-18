import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  Box,
  Button,
  CircularProgress,
  Divider,
  IconButton,
  InputAdornment,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import AppleIcon from "@mui/icons-material/Apple";

export default function LoginPage() {
  //
  const [isloginForm, setIsLoginForm] = useState(true);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginSubmit = () => {
    console.log({ email, password });
    navigate("/upcoming");
  };
  const handleSignupSubmit = () => {
    console.log({ email, password });
  };
  const [isShowPassword, setIsShowPassword] = useState(false);

  return (
    <Box
      maxWidth="xl"
      margin="50px auto"
      sx={{ display: "flex", alignItems: "center", gap: 3 }}
    >
      <Paper sx={{ p: 5, flex: 1, minHeight: 630 }}>
        <Typography variant="h4">
          {isloginForm ? "Login Form" : "Register Form"}
        </Typography>
        <Box my={2}>
          <Box
            className="login__social"
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 2,
              alignItems: "center",
              p: 1,
              mt: 1,
              border: "1px solid rgba(0,0,0,0.1)",
              borderRadius: "4px",
              cursor: "pointer",

              "&:hover": {
                background: "#f5f5f5",
              },
            }}
          >
            <GoogleIcon fontSize="small" />
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              Continue with Google
            </Typography>
          </Box>
          <Box
            className="login__social"
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 2,
              alignItems: "center",
              p: 1,
              mt: 1,
              border: "1px solid rgba(0,0,0,0.1)",
              borderRadius: "4px",
              cursor: "pointer",

              "&:hover": {
                background: "#f5f5f5",
              },
            }}
          >
            <FacebookIcon fontSize="small" />
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              Continue with Facebook
            </Typography>
          </Box>
          <Box
            className="login__social"
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 2,
              alignItems: "center",
              p: 1,
              mt: 1,
              border: "1px solid rgba(0,0,0,0.1)",
              borderRadius: "4px",
              cursor: "pointer",

              "&:hover": {
                background: "#f5f5f5",
              },
            }}
          >
            <AppleIcon fontSize="small" />
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              Continue with Apple
            </Typography>
          </Box>
        </Box>
        <Box mt={2}>
          <TextField
            name="email"
            label="Email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Box>
        <Box mt={2}>
          <TextField
            type={isShowPassword ? "text" : "password"}
            name="password"
            label="Password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setIsShowPassword((prev) => !prev)}
                    edge="end"
                  >
                    {isShowPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-around"
          spacing={2}
          sx={{ mt: 2 }}
        >
          {isloginForm ? (
            <Button
              type="submit"
              variant="contained"
              disabled={false}
              startIcon={
                false ? <CircularProgress color="inherit" size="1em" /> : null
              }
              fullWidth
              size="large"
              onClick={handleLoginSubmit}
            >
              Log in
            </Button>
          ) : (
            <Button
              type="submit"
              variant="contained"
              disabled={false}
              startIcon={
                false ? <CircularProgress color="inherit" size="1em" /> : null
              }
              fullWidth
              size="large"
              onClick={handleSignupSubmit}
            >
              Sign up with Email
            </Button>
          )}
        </Stack>
        {isloginForm && (
          <Typography
            variant="body2"
            sx={{ textDecoration: "underline", mt: 1 }}
          >
            Forgot your password?
          </Typography>
        )}

        <Typography variant="body2" sx={{ mt: 1 }}>
          By continuing with Google, Apple, or Email, you agree to Todoist’s
          Terms of Service and Privacy Policy.
        </Typography>
        <Divider sx={{ pt: 2 }} />
        {isloginForm ? (
          <Typography
            variant="body2"
            sx={{
              mt: 1,
              display: "flex",
              alignItems: "center",
              gap: 1,
              justifyContent: "center",
            }}
          >
            Don’t have an account?
            <Typography
              variant="body2"
              sx={{ textDecoration: "underline", cursor: "pointer" }}
              onClick={() => {
                setEmail("");
                setPassword("");
                setIsLoginForm(false);
              }}
            >
              Sign up
            </Typography>
          </Typography>
        ) : (
          <Typography
            variant="body2"
            sx={{
              mt: 1,
              display: "flex",
              alignItems: "center",
              gap: 1,
              justifyContent: "center",
            }}
          >
            Already signed up?
            <Typography
              variant="body2"
              sx={{ textDecoration: "underline", cursor: "pointer" }}
              onClick={() => {
                setEmail("");
                setPassword("");
                setIsLoginForm(true);
              }}
            >
              Go to login
            </Typography>
          </Typography>
        )}
      </Paper>
      <Box flex="1">
        <img
          src="https://todoist.b-cdn.net/assets/images/44245fc51c3e2ab05ee6d92c13e2e08a.png"
          alt="bg-img"
        />
      </Box>
    </Box>
  );
}
