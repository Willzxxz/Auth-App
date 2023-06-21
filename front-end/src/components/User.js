import { useState, useEffect } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { useNavigate, useLocation } from "react-router-dom";
import { Box } from "@chakra-ui/react";

const Users = () => {
  const [users, setUsers] = useState();
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    let isMounted = true;
    // AbortController is javascript function used for cancelation tokens
    const controller = new AbortController();

    const getUsers = async () => {
      try {
        const response = await axiosPrivate.get("/users", {
          signal: controller.signal,
        });
        console.log(response.data);
        isMounted && setUsers(response.data);
      } catch (err) {
        console.error(err);
        navigate("/login", { state: { from: location }, replace: true });
      }
    };

    getUsers();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  return (
    <article>
      <Box mb="40rem" fontSize="20rem">
        Users List
      </Box>
      {users?.length ? (
        <Box>
          {users.map((user, i) => (
            <Box my="10rem">
              <Box key={i}>{user?.username}</Box>
            </Box>
          ))}
        </Box>
      ) : (
        <p>No users to display</p>
      )}
    </article>
  );
};

export default Users;
