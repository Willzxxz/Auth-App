import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthProvider";
import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Flex,
  Heading,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

const Home = () => {
  const { setAuth } = useContext(AuthContext);
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
        <Center mt="10%">Dashboard</Center>
      </Heading>
      <Text w="fit-content" mx="auto" mt="50rem">
        <ButtonGroup variant="ghost">
          <VStack gap="15rem">
            <Link to="/editor">
              <Button
                rounded="10rem"
                color="white"
                bgColor="black"
                _hover={{ color: "black", bg: "white", border: "black" }}
              >
                Go to the Editor page
              </Button>
            </Link>
            <Link to="/admin">
              <Button
                rounded="10rem"
                color="white"
                bgColor="black"
                _hover={{ color: "black", bg: "white", border: "black" }}
              >
                Go to the Admin page
              </Button>
            </Link>
            <Link to="/lounge">
              <Button
                rounded="10rem"
                color="white"
                bgColor="black"
                _hover={{ color: "black", bg: "white", border: "black" }}
              >
                Go to the Lounge
              </Button>
            </Link>
            <Link to="/">
              <Button
                rounded="10rem"
                color="white"
                bgColor="black"
                _hover={{ color: "black", bg: "white", border: "black" }}
              >
                Go to the Home page
              </Button>
            </Link>{" "}
            <Link to="/linkpage">
              <Button
                rounded="10rem"
                color="white"
                bgColor="black"
                _hover={{ color: "black", bg: "white", border: "black" }}
              >
                Go to the Link page
              </Button>
            </Link>
            <Button
              variant="solid"
              mt="100rem"
              rounded="10rem"
              onClick={logout}
            >
              Sign Out
            </Button>
          </VStack>
        </ButtonGroup>
      </Text>
    </Box>
  );
};

export default Home;
