import React, { useState, useContext } from 'react'; 

import {
  Box,
  Button,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { FormControl, FormErrorMessage, useToast } from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast, { Toaster } from 'react-hot-toast'

import { useNavigate } from "react-router-dom";
import { api } from '../utils/utils';

function SignupForm() {
  // const [showModal, setShowModal] = useState(true);
  const navigate = useNavigate();
  // const { setIsAuthenticated } = useContext(AuthContext);
  //const toast = useToast();

  const formik = useFormik({
    initialValues: {
      username: "",
      phone_number: "",
      email: "",
      address: "",
      password: "",
    },

    validationSchema: Yup.object({
      username: Yup.string().required("User Name cannot be empty"),
      address: Yup.string().required("Address cannot be empty"),
      phone_number: Yup.string().required("Phone number cannot be empty"),
      email: Yup.string()
        .required("Email Address cannot be empty")
        .email("Looks like this is not an email"),
      password: Yup.string().required("Password cannot be empty"),
    }),
    validateOnChange: true,

    onSubmit: async (values, { resetForm }) => {
      try {
        const res = await api.post("users", {...values, role:"member"});
        console.log(res);
        toast.success(res.data.message);
        resetForm();
        localStorage.setItem("session", JSON.stringify(res.data));
        setIsAuthenticated(true);
        navigate("/login");
        setShowModal(false);
      } catch (error) {
        const errorMessage =
          error.response?.data?.message
        console.log(errorMessage);
        toast.error(errorMessage);
      }
    },
  });

  return (
    <Box bg="white" w="50%" p={8} borderRadius="lg">
      <form autoComplete="off" onSubmit={formik.handleSubmit}>
      < Toaster position="top-right"/>
        <FormControl
          isInvalid={formik.touched.username && formik.errors.username}
          mb={5}
          color="black"
        >
          <InputGroup>
            <Input
              size="lg"
              type="text"
              name="username"
              placeholder="User Name"
              value={formik.values.username}
              onChange={formik.handleChange}
            />
            {formik.touched.username && formik.errors.username && (
              <InputRightElement
                h="full"
                children={<Image src={"images/icon-error.svg"} />}
              />
            )}
          </InputGroup>
          {formik.touched.username && formik.errors.username && (
            <FormErrorMessage>{formik.errors.username}</FormErrorMessage>
          )}
        </FormControl>

        <FormControl
          isInvalid={formik.touched.phone_number && formik.errors.phone_number}
          mb={5}
          color="black"
        >
          <InputGroup>
            <Input
              size="lg"
              type="text"
              name="phone_number"
              placeholder="Phone_number"
              value={formik.values.phone_number}
              onChange={formik.handleChange}
            />
            {formik.touched.phone_number && formik.errors.phone_number && (
              <InputRightElement
                h="full"
                children={<Image src={"images/icon-error.svg"} />}
              />
            )}
          </InputGroup>
          {formik.touched.phone_number && formik.errors.phone_number && (
            <FormErrorMessage>{formik.errors.phone_number}</FormErrorMessage>
          )}
        </FormControl>

        <FormControl
          isInvalid={formik.touched.email && formik.errors.email}
          mb={5}
          color="black"
        >
          <InputGroup>
            <Input
              size="lg"
              type="text"
              name="email"
              placeholder="Email Address"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            {formik.touched.email && formik.errors.email && (
              <InputRightElement
                h="full"
                children={<Image src={"images/icon-error.svg"} />}
              />
            )}
          </InputGroup>
          {formik.touched.email && formik.errors.email && (
            <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
          )}
        </FormControl>

        <FormControl
          isInvalid={formik.touched.address && formik.errors.address}
          mb={5}
          color="black"
        >
          <InputGroup>
            <Input
              size="lg"
              type="text"
              name="address"
              placeholder="Address"
              value={formik.values.address}
              onChange={formik.handleChange}
            />
            {formik.touched.address && formik.errors.address && (
              <InputRightElement
                h="full"
                children={<Image src={"images/icon-error.svg"} />}
              />
            )}
          </InputGroup>
          {formik.touched.address && formik.errors.address && (
            <FormErrorMessage>{formik.errors.address}</FormErrorMessage>
          )}
        </FormControl>

        <FormControl
          isInvalid={formik.touched.password && formik.errors.password}
          mb={5}
          color="black"
        >
          <InputGroup>
            <Input
              size="lg"
              type="password"
              name="password"
              placeholder="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            {formik.touched.password && formik.errors.password && (
              <InputRightElement
                h="full"
                children={<Image src={"images/icon-error.svg"} />}
              />
            )}
          </InputGroup>
          {formik.touched.password && formik.errors.password && (
            <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
          )}
        </FormControl>

        <Button
          type="submit"
          w="full"
          bg="brand.green"
          size={"lg"}
          textTransform="uppercase"
          fontWeight={"normal"}
          letterSpacing="wide"
          boxShadow="0 3px hsl(154, 59%, 65%)"
          _hover={{ filter: "brightness(0.9)" }}
        >
          Sign Up
        </Button>
      </form>
    </Box>
  );
}

export default SignupForm;
