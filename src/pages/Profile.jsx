
import {
  Grid,
  Box,
  Badge,
  Text,
  Flex,
} from "@chakra-ui/react";
import { EmailIcon, PhoneIcon, TimeIcon } from "@chakra-ui/icons";
import React, { useState, useEffect, useContext } from "react";
import { api } from "../utils/utils";
import { AuthContext } from "../components/Auth";

const Profile = () => {
  const [userData, setUserData] = useState([]);
  const { credentials } = useContext(AuthContext)
  // const [user, setUser] = useState(null)
  //console.log(credentials)
  const user = (credentials.user)
  console.log(user.id)
  //console.log(user)

  const fetchUserData = async () => {
    try {
      const response = await api.get(`/users/${user.id}`);
        const data = response.data;
        //const userProfile = Object.values(data)
       
        const userDataArray = [data];
        setUserData(userDataArray);
      
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

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
        Your profile
      </h1>
      <Grid gap={6} templateColumns="repeat(auto-fit, minmax(300px, 1fr))">
        {userData.map((user) => (
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

export default Profile;
