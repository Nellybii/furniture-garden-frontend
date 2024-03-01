import React, { useContext, useEffect, useState } from 'react'
import { EmailIcon, PhoneIcon, TimeIcon } from "@chakra-ui/icons";
import {
  Grid,
  Box,
  Badge,
  Text,
  Flex,
} from "@chakra-ui/react";
import { AuthContext } from '../components/Auth';
import { api } from '../utils/utils';
function Customers() {
const [customers, setCustomers ]= useState([])
const { credentials } = useContext(AuthContext)

const user = credentials.user; 
  

  if (!user || user.role !== 'admin') {
    console.error('User does not have permission to add a product.');
    return;
  }
const fetchCustomers = async () => {
  try {
    const response = await api.get('/users')
    setCustomers(response.data)
  } catch (error) {
    console.error(error)
  }
}
useEffect(()=>{
  fetchCustomers()
}, [])

  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          marginBottom: "20px",
          fontSize: "2rem",
          fontWeight: "bold",
        }}
      >
        Active Customers
      </h1>
      <Grid gap={6} templateColumns="repeat(auto-fit, minmax(300px, 1fr))">
        {customers.map((user) => (
          <Box
            key={user.id}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="md"
          >
            {/* <Avatar src={profile.avatarUrl} alt={user.username} size="xl" /> */}
            <Box p="6">
              <Badge borderRadius="full" px="2" colorScheme="teal">
                {user.username}
              </Badge>
              <Flex alignItems="center" mt="2">
                <EmailIcon mr="2" />
                <Text
                  fontSize="sm"
                  fontWeight="semibold"
                  lineHeight="tight"
                  color="gray.600"
                >
                  {user.email}
                </Text>
              </Flex>
              <Flex alignItems="center" mt="2">
                <EmailIcon mr="2" />
                <Text
                  fontSize="sm"
                  fontWeight="semibold"
                  lineHeight="tight"
                  color="gray.600"
                >
                  {user.address}
                </Text>
              </Flex>
              <Flex alignItems="center" mt="2">
                <PhoneIcon mr="2" />
                <Text
                  fontSize="sm"
                  fontWeight="semibold"
                  lineHeight="tight"
                  color="gray.600"
                >
                  {user.phone_number}
                </Text>
              </Flex>
              <Flex alignItems="center" mt="2">
                <TimeIcon mr="2" />
                <Text
                  fontSize="sm"
                  fontWeight="semibold"
                  lineHeight="tight"
                  color="gray.600"
                >
                  Created At: {user.created_at}
                </Text>
              </Flex>
            </Box>
          </Box>
        ))}
      </Grid>
    </div>
  );
};

export default Customers;

