import { useFormik } from "formik";
import { Toaster, toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Input,
  VStack,
} from "@chakra-ui/react";
import { api } from "../utils/utils";
import { AuthContext } from "../components/Auth";

function SignIn() {
  const navigate = useNavigate();
  const { setIsAuthenticated, setUser, setCredentials } = useContext(AuthContext);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    onSubmit: async (values, { resetForm }) => {
      try {
        const data = await api.post("/login", values);
        console.log(data);
        toast.success(data.data.message);
        setUser(data.data.user);
       

        resetForm();

        localStorage.setItem("session", JSON.stringify(data.data));
        navigate("/Home");
        setIsAuthenticated(true)
      } catch (error) {
        const data = error.response.data;
        toast.error(data.message);
      }
    },
  });

  return (
    <Flex bg="gray.100" align="center" justify="center" h="100vh">
      <Box bg="white" p={6} rounded="md">
        <form onSubmit={formik.handleSubmit}>
          <Toaster position="top-right" />
          <VStack spacing={4} align="flex-start">
            <FormControl>
              <FormLabel htmlFor="email">Email Address</FormLabel>
              <Input
                id="email"
                name="email"
                type="email"
                variant="filled"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input
                id="password"
                name="password"
                type="password"
                variant="filled"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
            </FormControl>
            <Checkbox
              id="rememberMe"
              name="rememberMe"
              onChange={formik.handleChange}
              isChecked={formik.values.rememberMe}
              colorScheme="purple"
            >
              Remember me?
            </Checkbox>
            <Button type="submit">Login</Button>
            <p>
              Dont have an account?
              <Link to="/signup">Signup</Link>
            </p>
          </VStack>
        </form>
      </Box>
    </Flex>
  );
}

export default SignIn;
