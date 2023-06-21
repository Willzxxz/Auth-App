import { Link } from "react-router-dom";
import Users from "./User";
import { Button, ButtonGroup, Center, Heading, Text } from "@chakra-ui/react";
const Admin = () => {
  return (
    <>
      <Heading>
        <Center mt="10%">
          <h1>Admins Page</h1>
        </Center>
      </Heading>
      <Text w="fit-content" mx="auto" mt="50rem">
        <Center>
          <Text>You have been assigned an Admin role.</Text>
        </Center>
        <Center mt="50rem" gap="100rem">
          <Users />
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

export default Admin;
