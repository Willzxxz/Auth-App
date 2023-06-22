import { useRef, useState, useEffect } from "react";
import { faCheck, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "../api/axios";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Center,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Stack,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = "/register";

const Register = () => {
  useBreakpointValue({ m: true, d: false });

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const isUserError = user === "";
  const isPwdError = pwd === "";
  const isMatchPwdError = matchPwd === "";
  const isError = (isUserError, isPwdError, isMatchPwdError);
  const isValid = (validName, validPwd, validMatch);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidName(USER_REGEX.test(user));
  }, [user]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if button enabled with JS hack
    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }
    try {
      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify({ user, pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      // TODO: remove console.logs before deployment
      console.log(JSON.stringify(response?.data));
      //console.log(JSON.stringify(response))
      setSuccess(true);
      //clear state and controlled inputs
      setUser("");
      setPwd("");
      setMatchPwd("");
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 409) {
        setErrMsg("Username Taken");
      } else {
        setErrMsg("Registration Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      {success ? (
        <Center>
          <VStack mt="100rem">
            <Heading>Success!</Heading>
            <Link to="/login">
              <Button
                w="150rem"
                size="lg"
                rounded="10rem"
                variant="solid"
                mt="50rem"
              >
                Sign In
              </Button>
            </Link>
          </VStack>
        </Center>
      ) : (
        <>
          <Box
            border="solid"
            w="fit-content"
            h="fit-content"
            m="auto"
            mt={{ d: "100rem", m: "100rem" }}
            rounded="10rem"
          >
            <p
              ref={errRef}
              className={errMsg ? "errmsg" : "offscreen"}
              aria-live="assertive"
            >
              {errMsg}
            </p>
            <VStack h="inherit">
              <Box py="20rem">
                <Heading>Register</Heading>
              </Box>

              <form onSubmit={handleSubmit}>
                <FormControl h="fit-content" isInvalid={isError || !isValid}>
                  <Stack
                    justifyContent="space-evenly"
                    h="fit-content"
                    px="50rem"
                    gap="31rem"
                  >
                    <Formik>
                      {(props) => (
                        <Form>
                          <Field name="name">
                            {({ field }) => (
                              <FormControl mb="31rem">
                                <FormLabel htmlFor="username">
                                  Username:
                                </FormLabel>
                                <Input
                                  {...field}
                                  placeholder="Username"
                                  type="text"
                                  id="username"
                                  ref={userRef}
                                  autoComplete="off"
                                  onChange={(e) => setUser(e.target.value)}
                                  value={user}
                                  required
                                  aria-invalid={validName ? "false" : "true"}
                                  aria-describedby="uidnote"
                                  onFocus={() => setUserFocus(true)}
                                  onBlur={() => setUserFocus(false)}
                                  isInvalid={!validName && !isUserError}
                                />
                                {!validName && !isUserError ? (
                                  <FormErrorMessage
                                    w="350rem"
                                    border="solid 1rem"
                                    fontSize={"14rem"}
                                    position="absolute"
                                    left="310rem"
                                    mt="-44rem"
                                    bgColor="black"
                                    p="10rem"
                                  >
                                    <p
                                      id="uidnote"
                                      className={
                                        userFocus && user && !validName
                                          ? "instructions"
                                          : "offscreen"
                                      }
                                    >
                                      <FontAwesomeIcon icon={faInfoCircle} />
                                      4 to 24 characters.
                                      <br />
                                      Must begin with a letter.
                                      <br />
                                      Letters, numbers, underscores, hyphens
                                      allowed.
                                    </p>
                                  </FormErrorMessage>
                                ) : (
                                  ""
                                )}
                              </FormControl>
                            )}
                          </Field>
                          {!validName && !isUserError ? (
                            <FormErrorMessage
                              w="350rem"
                              border="solid 1rem"
                              fontSize={"14rem"}
                              position="absolute"
                              left="310rem"
                              mt="-75rem"
                              bgColor="black"
                              p="10rem"
                            >
                              <p
                                id="uidnote"
                                className={
                                  userFocus && user && !validName
                                    ? "instructions"
                                    : "offscreen"
                                }
                              >
                                <FontAwesomeIcon icon={faInfoCircle} />
                                4 to 24 characters.
                                <br />
                                Must begin with a letter.
                                <br />
                                Letters, numbers, underscores, hyphens allowed.
                              </p>
                            </FormErrorMessage>
                          ) : (
                            ""
                          )}
                          {validName ? (
                            <FormHelperText
                              position="absolute"
                              left="295rem"
                              mt="-70rem"
                              p="10rem"
                            >
                              <FontAwesomeIcon
                                icon={faCheck}
                                className={validName ? "valid" : "hide"}
                              />
                            </FormHelperText>
                          ) : (
                            ""
                          )}
                          <Field name="pwd">
                            {(field) => (
                              <FormControl mb="31rem">
                                <FormLabel htmlFor="password">
                                  Password:{" "}
                                </FormLabel>

                                <Input
                                  {...field}
                                  type="password"
                                  id="password"
                                  placeholder="**********"
                                  onChange={(e) => setPwd(e.target.value)}
                                  value={pwd}
                                  required
                                  aria-invalid={validPwd ? "false" : "true"}
                                  aria-describedby="pwdnote"
                                  onFocus={() => setPwdFocus(true)}
                                  onBlur={() => setPwdFocus(false)}
                                  // isInvalid={!validPwd}
                                />
                              </FormControl>
                            )}
                          </Field>
                          {validPwd ? (
                            <FormHelperText
                              position="absolute"
                              left="295rem"
                              mt="-70rem"
                              p="10rem"
                            >
                              <FontAwesomeIcon
                                icon={faCheck}
                                className={validName ? "valid" : "hide"}
                              />
                            </FormHelperText>
                          ) : (
                            ""
                          )}
                          {!validPwd && !isPwdError ? (
                            <FormErrorMessage
                              w="350rem"
                              border="solid 1rem"
                              fontSize={"14rem"}
                              position="absolute"
                              left="310rem"
                              mt="-75rem"
                              bgColor="black"
                              p="10rem"
                            >
                              <p
                                id="pwdnote"
                                className={
                                  pwdFocus && !validPwd
                                    ? "instructions"
                                    : "offscreen"
                                }
                              >
                                <FontAwesomeIcon icon={faInfoCircle} />
                                8 to 24 characters.
                                <br />
                                Must include uppercase and lowercase letters, a
                                number and a special character.
                                <br />
                                Allowed special characters:{" "}
                                <span aria-label="exclamation mark">
                                  !
                                </span>{" "}
                                <span aria-label="at symbol">@</span>{" "}
                                <span aria-label="hashtag">#</span>{" "}
                                <span aria-label="dollar sign">$</span>{" "}
                                <span aria-label="percent">%</span>
                              </p>
                            </FormErrorMessage>
                          ) : (
                            ""
                          )}
                          <Field name="confirm_pwd">
                            {(field) => (
                              <FormControl mb="31rem">
                                <FormLabel htmlFor="confirm_pwd">
                                  Confirm Password:
                                </FormLabel>

                                <Input
                                  {...field}
                                  type="password"
                                  placeholder="**********"
                                  id="confirm_pwd"
                                  onChange={(e) => setMatchPwd(e.target.value)}
                                  value={matchPwd}
                                  required
                                  aria-invalid={validMatch ? "false" : "true"}
                                  aria-describedby="confirmnote"
                                  onFocus={() => setMatchFocus(true)}
                                  onBlur={() => setMatchFocus(false)}
                                  isInvalid={!validMatch}
                                />
                                {!validMatch && !isMatchPwdError ? (
                                  <FormErrorMessage
                                    w="350rem"
                                    border="solid 1rem"
                                    fontSize={"14rem"}
                                    position="absolute"
                                    left="310rem"
                                    mt="-44rem"
                                    bgColor="black"
                                    p="10rem"
                                  >
                                    <p
                                      id="uidnote"
                                      className={
                                        userFocus && user && !validMatch
                                          ? "instructions"
                                          : "offscreen"
                                      }
                                    >
                                      <FontAwesomeIcon icon={faInfoCircle} />
                                      4 to 24 characters.
                                      <br />
                                      Must begin with a letter.
                                      <br />
                                      Letters, numbers, underscores, hyphens
                                      allowed.
                                    </p>
                                  </FormErrorMessage>
                                ) : (
                                  ""
                                )}
                              </FormControl>
                            )}
                          </Field>
                          {validMatch && !isMatchPwdError ? (
                            <FormHelperText
                              position="absolute"
                              left="295rem"
                              mt="-70rem"
                              p="10rem"
                            >
                              <FontAwesomeIcon
                                icon={faCheck}
                                className={validMatch ? "valid" : "hide"}
                              />
                            </FormHelperText>
                          ) : (
                            ""
                          )}
                          {!validMatch && !isMatchPwdError ? (
                            <FormErrorMessage
                              w="350rem"
                              border="solid 1rem"
                              fontSize={"14rem"}
                              position="absolute"
                              left="310rem"
                              mt="-75rem"
                              bgColor="black"
                              p="10rem"
                            >
                              <p
                                id="confirmnote"
                                className={
                                  matchFocus && !validMatch
                                    ? "instructions"
                                    : "offscreen"
                                }
                              >
                                <FontAwesomeIcon icon={faInfoCircle} />
                                Must match the first password input field.
                              </p>
                            </FormErrorMessage>
                          ) : (
                            ""
                          )}
                        </Form>
                      )}
                    </Formik>

                    <Box>
                      <Button
                        w="100%"
                        rounded="10rem"
                        type="submit"
                        disabled={
                          !validName || !validPwd || !validMatch ? true : false
                        }
                      >
                        Register
                      </Button>
                    </Box>
                  </Stack>
                </FormControl>
              </form>
              <Box py="30rem">
                <p>
                  Already registered?{" "}
                  <span className="line">
                    <Link to="/login">Sign In</Link>
                  </span>
                </p>
              </Box>
            </VStack>
          </Box>
        </>
      )}
    </>
  );
};

export default Register;
