import React from 'react';
import { Box, Text, HStack, Link } from '@chakra-ui/react';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';


const Footer = () => {
 const linkStyles = {
   textDecoration: 'none',
   color: 'blue',
   _hover: { color: 'blue.500' },
 };


 return (
   <Box as="footer" bg="#5F8575" py="4">
     <Box maxW="container.lg" mx="auto">
       <Text textAlign="center" color="gray.600">Connect with us:</Text>
       <HStack spacing="4" justify="center" mt="2">
         <Link href="#" color="gray.600" _hover={{ color: 'blue.500' }}><FaTwitter /></Link>
         <Link href="#" color="gray.600" _hover={{ color: 'blue.500' }}><FaFacebook /></Link>
         <Link href="#" color="gray.600" _hover={{ color: 'blue.500' }}><FaInstagram /></Link>
       </HStack>
       <div>
         <HStack spacing="4" justify="center" mt="2">
           <Link href="/AboutUs" style={linkStyles}>About us</Link>
           <Link href="/FAQ" style={linkStyles}>FAQ</Link>
           <Link href="/ShippingPolicy" style={linkStyles}>Shipping Policy</Link>
           <Link href="/RefundPolicy" style={linkStyles}>Refund Policy</Link>
         </HStack>
       </div>
       <Text textAlign="center" color="gray.600">Copyright © 2024 </Text>
       <Text textAlign="center" color="gray.600">All Rights Reserved</Text>
     </Box>
   </Box>
 );
}


export default Footer;


