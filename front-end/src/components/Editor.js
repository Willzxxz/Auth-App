import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Editor = () => {
  return (
    <>
      <Heading>
        <Center mt="10%">
          <h1>Editors Page</h1>
        </Center>
      </Heading>
      <Text w="fit-content" mx="auto" mt="50rem">
        <Center>
          <Text>You have been assigned an Editor or Admin role.</Text>
        </Center>
        <Center>
          <ButtonGroup variant="ghost" mt="100rem">
            <Link to="/">
              <Button
                w="200rem"
                rounded="10rem"
                color="white"
                bgColor="black"
                variant="link"
              >
                Home
              </Button>
            </Link>
            <Link to="/linkpage">
              <Button
                w="200rem"
                rounded="10rem"
                color="white"
                bgColor="black"
                variant="link"
              >
                Go to the link page
              </Button>
            </Link>
          </ButtonGroup>
        </Center>
      </Text>
    </>
  );
};

export default Editor;
