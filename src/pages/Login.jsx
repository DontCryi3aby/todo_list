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
    <Paper sx={{ p: 5, width: "500px", margin: "200px auto" }}>
      <Typography variant="h4">
        {isloginForm ? "Login Form" : "Register Form"}
      </Typography>
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
        <Typography variant="body2" sx={{ textDecoration: "underline", mt: 1 }}>
          Forgot your password?
        </Typography>
      )}

      <Typography variant="body2" sx={{ mt: 1 }}>
        By continuing with Google, Apple, or Email, you agree to Todoist’s Terms
        of Service and Privacy Policy.
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
  );
}
