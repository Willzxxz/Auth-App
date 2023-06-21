import { Link } from "react-router-dom";
import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Heading,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

const LinkPage = () => {
  return (
    <>
      <Heading>
        <Center mt="10%">Links</Center>
      </Heading>
      <Text w="fit-content" mx="auto" mt="50rem">
        <Center>
          <Text>
            <Text fontSize="25rem" mb="10rem">
              Public
            </Text>
            <Stack mb="40rem">
              <Link to="/">
                <Button variant="link" mb="10rem">
                  Homepage
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="link" mb="10rem">
                  Login
                </Button>
              </Link>
              <Link to="/register">
                <Button variant="link" mb="10rem">
                  Register
                </Button>
              </Link>
              <Link to="/linkpage">
                <Button variant="link" mb="10rem">
                  Linkpage
                </Button>
              </Link>
              <Link to="/unauthorized">
                <Button variant="link" mb="10rem">
                  Unauthorized
                </Button>
              </Link>
            </Stack>

            <Text fontSize="25rem" mb="10rem">
              Private
            </Text>
            <Stack>
              <Link to="/dashboard">
                <Button variant="link" mb="10rem">
                  Dashboard
                </Button>
              </Link>
              <Link to="/editor">
                <Button variant="link" mb="10rem">
                  Editors Page
                </Button>
              </Link>
              <Link to="/lounge">
                <Button variant="link" mb="10rem">
                  Lounge Page
                </Button>
              </Link>
              <Link to="/admin">
                <Button variant="link">Admin Page</Button>
              </Link>
            </Stack>
          </Text>
        </Center>
      </Text>
    </>
  );
};

export default LinkPage;
