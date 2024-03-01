import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const AboutUs = () => {
  return (
    <Box maxW="container.md" mx="auto" py="8">
      <Text fontSize="2xl" fontWeight="bold" mb="4">About Us</Text>
      <Text>
        Welcome to our furniture store! We are passionate about providing high-quality furniture to our customers at affordable prices. With a wide selection of modern and classic designs, we aim to make your home furnishing experience enjoyable and hassle-free.
      </Text>
      <Text mt="4">
        Our mission is to help you create a space that reflects your personal style and meets your needs. Whether you're furnishing a new home or updating your current space, we're here to help you every step of the way.
      </Text>
      <Text mt="4">
        At our store, customer satisfaction is our top priority. We strive to provide exceptional customer service and support to ensure that you have a positive shopping experience with us. If you have any questions or need assistance, our friendly team is always ready to help.
      </Text>
      <Text mt="4">
        Thank you for choosing us for your furniture needs. We look forward to serving you and helping you create the home of your dreams!
      </Text>
    </Box>
  );
}

export default AboutUs;
