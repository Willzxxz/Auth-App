import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthProvider";
import { Box, Button, Center, Flex, Heading, Text } from "@chakra-ui/react";

const Homepage = () => {
  const { auth, setAuth } = useContext(AuthContext);
  const isLoggedIn = !!auth.accessToken;

  const navigate = useNavigate();

  const logout = async () => {
    // if used in more components, this should be in context
    // axios to /logout endpoint
    setAuth({});
    navigate("/");
  };

  return (
    <Box>
      <Heading>
        <Center mt="15%">Hi, welcome to the Homepage.</Center>
      </Heading>
      <Text w="fit-content" mx="auto" mt="50rem">
        {!isLoggedIn
          ? "Please Create a user or login."
          : "Thanks for logging in, here are some of your options."}
      </Text>

      <Center>
        {!isLoggedIn ? (
          <Flex w="400rem" mt="100rem" justifyContent="space-between">
            <Link to="/login">
              <Button
                w="150rem"
                href="/login"
                size="lg"
                rounded="10rem"
                variant="solid"
                bgColor="white"
              >
                Login
              </Button>
            </Link>
            <Link to="/register">
              <Button
                w="150rem"
                size="lg"
                rounded="10rem"
                variant="outline"
                color="white"
                _hover={{ color: "black", bg: "white", border: "black" }}
              >
                Sign Up
              </Button>
            </Link>
          </Flex>
        ) : (
          <Flex w="400rem" mt="100rem" justifyContent="space-between">
            <Link to="/dashboard">
              <Button
                w="150rem"
                href="/login"
                size="lg"
                rounded="10rem"
                variant="solid"
                bgColor="white"
              >
                Dashboard
              </Button>
            </Link>
            <Link to="/register">
              <Button
                w="150rem"
                size="lg"
                rounded="10rem"
                variant="outline"
                color="white"
                _hover={{ color: "black", bg: "white", border: "black" }}
                onClick={logout}
              >
                Sign Out
              </Button>
            </Link>
          </Flex>
        )}
      </Center>
    </Box>
  );
};

export default Homepage;
