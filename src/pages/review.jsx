import React, { useState, useEffect } from "react";
import { Box, Button, FormControl, FormLabel, Input, Stack, Text, VStack } from "@chakra-ui/react";
import { api } from "../utils/utils"; 

const Review = () => {
  const [reviews, setReviews] = useState([]);
  const [text, setText] = useState("");
  const [rating, setRating] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    // Fetch reviews when the component mounts
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const response = await api.get("/reviews");
      setReviews(response.data);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Post review to backend
      const response = await api.post("/reviews", {
        text,
        rating: parseInt(rating),
      });
      // Refresh reviews after posting
      fetchReviews();
      // Clear form fields
      setText("");
      setRating("");
      setError("");
    } catch (error) {
      setError("Error posting review: " + error.message);
    }
  };

  return (
    <VStack spacing={8} alignItems="flex-start" padding={4}>
      <Stack direction="row" spacing={4}>
        <FormControl>
          <FormLabel>Text</FormLabel>
          <Input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        </FormControl>
        <FormControl>
          <FormLabel>Rating</FormLabel>
          <Input type="number" value={rating} onChange={(e) => setRating(e.target.value)} />
        </FormControl>
        <Button colorScheme="blue" onClick={handleSubmit}>
          Submit
        </Button>
      </Stack>
      {error && <Text color="red">{error}</Text>}
      <Box>
        <Text fontSize="xl" fontWeight="bold" mb={4}>
          Reviews
        </Text>
        <Stack spacing={4}>
          {reviews.map((review) => (
            <Box key={review.id} borderWidth="1px" borderRadius="lg" p={4}>
              <Text>{review.text}</Text>
              <Text>Rating: {review.rating}</Text>
            </Box>
          ))}
        </Stack>
      </Box>
    </VStack>
  );
};

export default Review;
