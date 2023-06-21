import { useNavigate, Link } from "react-router-dom";

import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";

const Unauthorized = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <>
      <Heading>
        <Center mt="10%">Unauthorized</Center>
      </Heading>
      <Text w="fit-content" mx="auto" mt="50rem">
        <Center>
          <Text>
            <p>You do not have access to the requested page.</p>
          </Text>
        </Center>
        <Center>
          <ButtonGroup variant="ghost" mt="100rem">
            <Button
              w="200rem"
              rounded="10rem"
              color="white"
              bgColor="black"
              onClick={goBack}
              variant="link"
            >
              Go Back
            </Button>
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

export default Unauthorized;
