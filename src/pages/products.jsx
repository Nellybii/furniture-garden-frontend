import React, { useEffect, useState, useRef } from "react";
import { api } from "../utils/utils";
import {
 Image,
 Stack,
 Box,
 Heading,
 Text,
 Button,
 Divider,
 Grid,
 Input,
 Accordion,
 AccordionButton,
 AccordionItem,
 AccordionPanel,
 AccordionIcon,
 AspectRatio,
 useToast
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import emailjs from "@emailjs/browser";


const Items = () => {
 const [products, setProducts] = useState([]);
 const [searchTerm, setSearchTerm] = useState("");
 const [showEmailForm, setShowEmailForm] = useState(false);
 const [userEmail, setUserEmail] = useState("");
 const [selectedProduct, setSelectedProduct] = useState(null);
 const formRef = useRef();
 const toast = useToast();


 const fetchProducts = async () => {
   try {
     const response = await api.get("/products");
     setProducts(response.data);
   } catch (error) {
     console.error("Error fetching products", error);
   }
 };


 useEffect(() => {
   fetchProducts();
 }, []);


 const handleSearch = (event) => {
   setSearchTerm(event.target.value);
 };


 const handleOrderClick = (product) => {
   setSelectedProduct(product);
   setShowEmailForm(true);
 };


 const sendEmail = async (e, product) => {
   e.preventDefault();


   const formElement = formRef.current;


   try {
     const response = await emailjs.sendForm(
       "service_r9mzkrt",
       "template_r12dzsd",
       formElement,
       "W1W_2c_b85CHDRspH"
     );


     console.log("SUCCESS! Email sent", response);


     toast({
       title: "Email Sent",
       description: `Your order for ${product.title} has been confirmed. Check your email for details.`,
       status: "success",
       duration: 5000,
       isClosable: true,
     });


     setShowEmailForm(false);
     setUserEmail("");
   } catch (error) {
     console.error("FAILED...", error);


     toast({
       title: "Error",
       description: "Failed to send email.",
       status: "error",
       duration: 5000,
       isClosable: true,
     });
   }


   formElement.reset();
 };


 const confirmOrder = () => {
   console.log("Order confirmed for", userEmail);
 };


 const filteredProducts = products.filter((product) =>
   product.title.toLowerCase().includes(searchTerm.toLowerCase())
 );


 return (
   <div>
     <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
       Products Menu
     </h1>
     <FaSearch />
     <Input
       type="text"
       placeholder="Search products..."
       value={searchTerm}
       onChange={handleSearch}
       mb={4}
     />
     <Grid templateColumns="repeat(4, 1fr)" gap={4}>
       {filteredProducts.map((product) => (
         <Box
           key={product.id}
           borderWidth="1px"
           borderRadius="lg"
           overflow="hidden"
           _hover={{ boxShadow: "xl" }}
         >
           <AspectRatio ratio={4 / 3}>
             <Image src={product.image_url} borderRadius="lg" />
           </AspectRatio>
           <Stack p="4">
             <Heading size="md">{product.title}</Heading>
             <Box as="span" ml="2" color="gray.600" fontSize="sm">
               <Accordion allowToggle>
                 <AccordionItem>
                   <h2>
                     <AccordionButton>
                       <Box as="span" flex="1" textAlign="left">
                         Description
                       </Box>
                       <AccordionIcon />
                     </AccordionButton>
                   </h2>
                   <AccordionPanel pb={4}>
                     {product.description}
                   </AccordionPanel>
                 </AccordionItem>
               </Accordion>
             </Box>
             <Text color="blue.600" fontSize="2xl" fontWeight="bold">
               $ {product.price}
             </Text>
             {showEmailForm && selectedProduct === product ? (
               <form ref={formRef} onSubmit={(e) => sendEmail(e, product)}>
                 <Input
                   type="hidden"
                   name="productTitle"
                   value={product.title}
                 />
                 <Input
                   type="hidden"
                   name="productPrice"
                   value={product.price}
                 />
                 <Input
                   type="hidden"
                   name="productDescription"
                   value={product.description}
                 />
                 <Input
                   type="email"
                   placeholder="Enter your email"
                   value={userEmail}
                   onChange={(e) => setUserEmail(e.target.value)}
                   required
                 />
                 <Button type="submit" colorScheme="green" mt={2}>
                   Confirm Order
                 </Button>
               </form>
             ) : (
               <Button
                 variant="solid"
                 colorScheme="green"
                 mt="2"
                 _hover={{ bg: "emerald.600" }}
                 onClick={() => handleOrderClick(product)}
               >
                 Order
               </Button>
             )}
           </Stack>
           <Divider />
         </Box>
       ))}
     </Grid>
   </div>
 );
};


export default Items;



