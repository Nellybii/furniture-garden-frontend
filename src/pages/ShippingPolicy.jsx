import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const ShippingPolicy = () => {
  return (
    <Box maxW="container.md" mx="auto" py="8">
      <Text fontSize="2xl" fontWeight="bold" mb="4">Shipping Policy</Text>
      <div>
        <Text>
          <Text fontWeight="bold">Shipping Zones:</Text> We currently offer shipping within Kenya only. We do not ship to international addresses.
        </Text>
        <Text mt="4">
          <Text fontWeight="bold">Shipping Methods:</Text> We offer standard shipping for most of our products. Some large or bulky items may require freight shipping. Expedited shipping options are available for select products.
        </Text>
        <Text mt="4">
          <Text fontWeight="bold">Processing Time:</Text> Orders are typically processed and shipped within 1-3 business days after payment confirmation. Please note that processing time may vary during peak seasons or promotional periods.
        </Text>
        <Text mt="4">
          <Text fontWeight="bold">Shipping Time:</Text> Standard shipping within the contiguous United States generally takes 3-7 business days. Shipping to Alaska, Hawaii, and other non-contiguous states may take longer. Freight shipping for oversized items may take 5-10 business days.
        </Text>
        <Text mt="4">
          <Text fontWeight="bold">Shipping Costs:</Text> Shipping costs are calculated based on the weight, size, and destination of your order. You can view the shipping cost at checkout before completing your purchase. We offer free standard shipping on orders over a certain amount (if applicable).
        </Text>
        <Text mt="4">
          <Text fontWeight="bold">Tracking Your Order:</Text> Once your order is shipped, you will receive a shipping confirmation email with tracking information. You can track your order using the provided tracking number on our website or the carrier's website.
        </Text>
        <Text mt="4">
          <Text fontWeight="bold">Delivery Process:</Text> For standard shipping, the carrier will deliver your package to your doorstep. For freight shipping, the carrier will schedule a delivery appointment with you. Please ensure someone is available to receive and inspect the delivery.
        </Text>
        <Text mt="4">
          <Text fontWeight="bold">Damaged or Missing Items:</Text> If your order arrives damaged or if any items are missing, please contact our customer support team within 48 hours of delivery. We will work with you to resolve the issue as quickly as possible.
        </Text>
        <Text mt="4">
          <Text fontWeight="bold">Shipping Restrictions:</Text> Certain items may be subject to shipping restrictions due to size, weight, or delivery address. Please review the product details and shipping information carefully before placing your order.
        </Text>
        <Text mt="4">
          <Text fontWeight="bold">Contact Us:</Text> If you have any questions or concerns regarding our shipping policy, please don't hesitate to contact our customer support team. We're here to help!
        </Text>
      </div>
    </Box>
  );
}

export default ShippingPolicy;
