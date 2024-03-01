import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const RefundPolicy = () => {
  return (
    <Box maxW="container.md" mx="auto" py="8">
      <Text fontSize="2xl" fontWeight="bold" mb="4">Refund Policy</Text>
      <Text>
        <Text fontWeight="bold">30-Day Return Policy:</Text> We want you to be completely satisfied with your purchase. If for any reason you are not satisfied, you may return the item(s) within 30 days of delivery for a full refund. Please note that the item(s) must be unused and in the same condition that you received them. 
      </Text>
      <Text mt="4">
        <Text fontWeight="bold">Return Process:</Text> To initiate a return, please contact our customer support team with your order details. We will provide you with a return authorization and instructions on how to return the item(s). You will be responsible for return shipping costs unless the return is due to a defective or damaged product.
      </Text>
      <Text mt="4">
        <Text fontWeight="bold">Refund Timeline:</Text> Once we receive your return and inspect the item(s), we will process your refund within 5-7 business days. The refund will be issued to the original payment method used for the purchase.
      </Text>
      <Text mt="4">
        <Text fontWeight="bold">Damaged or Defective Items:</Text> If you receive a damaged or defective item, please contact us immediately. We will arrange for a replacement or refund, depending on the situation. Please provide photos of the damaged or defective item(s) to expedite the process.
      </Text>
      <Text mt="4">
        <Text fontWeight="bold">Non-Refundable Items:</Text> Some items are non-refundable, including clearance or final sale items, personalized items, and gift cards. These items are sold as-is and cannot be returned or exchanged.
      </Text>
      <Text mt="4">
        <Text fontWeight="bold">Contact Us:</Text> If you have any questions or concerns regarding our refund policy, please don't hesitate to contact our customer support team. We're here to help!
      </Text>
    </Box>
  );
}

export default RefundPolicy;
