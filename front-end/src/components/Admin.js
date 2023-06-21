import { Link, useNavigate } from "react-router-dom";
import Users from "./User";
import { Button, ButtonGroup, Center, Heading, Text } from "@chakra-ui/react";
const Admin = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

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

export default Admin;
