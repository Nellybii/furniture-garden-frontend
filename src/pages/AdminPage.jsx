import React, { useState, useEffect, useContext } from 'react';
import {
 Box,
 Button,
 Input,
 FormControl,
 FormLabel,
 Heading,
 Grid,
 Accordion,
 AccordionItem,
 AccordionButton,
 AccordionPanel
} from "@chakra-ui/react";
import { api } from "../utils/utils";
import { AuthContext } from '../components/Auth';


const AdminProductManagement = () => {
 const [products, setProducts] = useState([]);
 const [formData, setFormData] = useState({
   title: '',
   description: '',
   price: '',
   category_id: '',
   image_url: ''
 });
 const { credentials } = useContext(AuthContext)

 const fetchProducts = async () => {
   try {
     const response = await api.get('/products');
     setProducts(response.data);
   } catch (error) {
     console.error('Error fetching products:', error);
   }
 };


 const handleInputChange = (e) => {
   const { name, value } = e.target;
   setFormData({ ...formData, [name]: value });
 };


 const handleFormSubmit = async (e) => {
  e.preventDefault();
  
  const user = credentials.user; 
  console.log(user);

  if (!user || user.role !== 'admin') {
    console.error('User does not have permission to add a product.');
    return;
  }

  try {
    const response = await api.post('/product', formData);
    console.log('Response from server:', response.data); // Log the response
    fetchProducts();
    setFormData({
      title: '',
      description: '',
      price: '',
      category_id: '',
      image_url: ''
    });
  } catch (error) {
    console.error('Error creating product:', error);
    if (error.response) {
      console.error('Response from server:', error.response.data); // Log detailed error messages
    }
  }
};



 // const handleEditProduct = async (id, newData) => {
 //   try {
 //     await api.put(`/product/${id}`, newData, { headers: { 'Content-Type': 'application/json' } });
 //     fetchProducts();
 //   } catch (error) {
 //     console.error('Error updating product:', error);
 //   }
 // };


 const handleDeleteProduct = async (id) => {
   try {
     await api.delete(`/product/${id}`);
     fetchProducts();
   } catch (error) {
     console.error('Error deleting product:', error);
   }
 };


 useEffect(() => {
   fetchProducts();
 }, []);


 return (
   <Box>
     <Heading as="h1" mb="4">Admin Product Management</Heading>
     <Box>
       <Heading as="h2" mb="2">Add New Product</Heading>
       <form onSubmit={handleFormSubmit}>
         <FormControl mb="2">
           <FormLabel>Title</FormLabel>
           <Input type="text" name="title" value={formData.title} onChange={handleInputChange} required />
         </FormControl>
         <FormControl mb="2">
           <FormLabel>Description</FormLabel>
           <Input type="text" name="description" value={formData.description} onChange={handleInputChange} required />
         </FormControl>
         <FormControl mb="2">
           <FormLabel>Price</FormLabel>
           <Input type="number" name="price" value={formData.price} onChange={handleInputChange} required />
         </FormControl>
         <FormControl mb="2">
           <FormLabel>Category ID</FormLabel>
           <Input type="number" name="category_id" value={formData.category_id} onChange={handleInputChange} required />
         </FormControl>
         <FormControl mb="2">
           <FormLabel>Image URL</FormLabel>
           <Input type="text" name="image_url" value={formData.image_url} onChange={handleInputChange} required />
         </FormControl>
         <Button type="submit" colorScheme="blue">Add Product</Button>
       </form>
     </Box>
     <Box mt="4">
       <Grid templateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap={6}>
         {products.map(product => (
           <Box key={product.id} borderWidth="1px" borderRadius="lg" p="4">
             <img src={product.image_url} alt={product.title} style={{ width: '100px', height: 'auto' }} />
             <Heading as="h3" size="md" my="2">{product.title}</Heading>
             <Box>
               <strong>Price:</strong> ${product.price}
             </Box>
             <Accordion allowToggle>
               <AccordionItem>
                 <h2>
                   <AccordionButton>
                     <Box flex="1" textAlign="left">
                       Description
                     </Box>
                   </AccordionButton>
                 </h2>
                 <AccordionPanel pb={4}>
                   {product.description}
                 </AccordionPanel>
               </AccordionItem>
             </Accordion>
             {/* <Button onClick={() => handleEditProduct(product.id, { title: 'New Title' })} colorScheme="yellow">Edit</Button> */}
             <Button onClick={() => handleDeleteProduct(product.id)} colorScheme="red">Delete</Button>
           </Box>
         ))}
       </Grid>
     </Box>
   </Box>
 );
};


export default AdminProductManagement;



