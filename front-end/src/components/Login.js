import { useRef, useState, useEffect } from "react";
import useAuth from "../hooks/useAuth";
import { Link, useNavigate, useLocation } from "react-router-dom";

import axios from "../api/axios";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  VStack,
} from "@chakra-ui/react";
const LOGIN_URL = "/login";

const Login = () => {
  const { setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/dashboard";

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ user, pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response?.data));
      //console.log(JSON.stringify(response));
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({ user, pwd, roles, accessToken });
      setUser("");
      setPwd("");
      navigate(from, { replace: true });
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <Box
      border="solid"
      w="fit-content"
      h="fit-content"
      m="auto"
      mt="8%"
      rounded="10rem"
    >
      <p
        ref={errRef}
        className={errMsg ? "errmsg" : "offscreen"}
        aria-live="assertive"
      >
        {errMsg}
      </p>
      <VStack h="inherit">
        <Box py="20rem">
          <Heading>Sign In</Heading>
        </Box>
        <form onSubmit={handleSubmit}>
          <FormControl>
            <Stack justifyContent="space-evenly" h="330rem" px="50rem">
              <Box>
                <FormLabel htmlFor="username">Username:</FormLabel>
                <Input
                  type="text"
                  id="username"
                  ref={userRef}
                  autoComplete="off"
                  onChange={(e) => setUser(e.target.value)}
                  value={user}
                  required
                />
              </Box>
              <Box>
                <FormLabel htmlFor="password">Password:</FormLabel>
                <Input
                  type="password"
                  id="password"
                  onChange={(e) => setPwd(e.target.value)}
                  value={pwd}
                  required
                />
              </Box>
              <Box>
                <Button w="100%" rounded="10rem" type="submit">
                  Sign In
                </Button>
              </Box>
            </Stack>
          </FormControl>
        </form>
        <Box py="30rem">
          <p>
            Need an Account?{" "}
            <span className="line">
              <Link to="/register">Sign Up</Link>
            </span>
          </p>
        </Box>
      </VStack>
    </Box>
  );
};

export default Login;