import { Link } from "react-router-dom";
import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";

const Lounge = () => {
  return (
    <>
      <Heading>
        <Center mt="10%">The Lounge</Center>
      </Heading>
      <Text w="fit-content" mx="auto" mt="50rem">
        <Center>
          <Text>Only Admins and Editors can hang out here.</Text>
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

export default Lounge;
