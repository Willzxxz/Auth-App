// import { useNavigate } from "react-router-dom";
// import { useContext } from "react";
// import AuthContext from "../context/AuthProvider";
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Link,
  Text,
} from "@chakra-ui/react";

const Homepage = () => {
  // const { setAuth } = useContext(AuthContext);
  // const navigate = useNavigate();

  // const logout = async () => {
  //   // if used in more components, this should be in context
  //   // axios to /logout endpoint
  //   setAuth({});
  //   navigate("/linkpage");
  // };

  return (
    <Box>
      <Heading>
        <Center mt="15%">Hi, welcome to the Homepage.</Center>
      </Heading>
      <Text w="fit-content" mx="auto" mt="50rem">
        Please Create a user or login.
      </Text>
      <Center>
        <Flex w="400rem" mt="100rem" justifyContent="space-between">
          <Link href="/login">
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
          <Link href="/register">
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
      </Center>
    </Box>
  );
};

export default Homepage;
