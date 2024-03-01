import React, { useEffect, useState } from "react";
import "../components/searchBar.css";
import { FaSearch } from "react-icons/fa";
import { api } from "../utils/utils";
import {
    Card,
    Image,
    AccordionItem,
    AccordionButton,
    AccordionIcon,
    AccordionPanel,
    Accordion,
    Button,
    Wrap,
    Badge,
    Box,
    Grid,
    GridItem,
    Stack,
    SimpleGrid,
    Heading,
  } from "@chakra-ui/react";

const SearchBar = () => {
  const [products, setProducts] = useState([]);
  const [searchFilter, setSearchFilter] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/product");
        setProducts(response.data);
        setSearchFilter([]);
      } catch (error) {
        throw new Error(error);
      }
    };
    fetchData();
  }, []);

  const onChange = (e) => {
    // setResult(e.target.value);
    const {value} = e.target
    setSearchTerm(value)
    filteredData(value)
  };


    const filteredData = (searchTerm) => {
        const searchFilter = products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchFilter(searchFilter);
 
    }

  

  return (
    <div className="input-wrapper">
      <FaSearch id="Search-icon" />
      <input
        type="text"
        placeholder="Type your search..."
        value={searchTerm}
        onChange={onChange}
      />
      {searchFilter.map((product) => (
        <Box
        key={product.id}
        maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
      >
        <Box>
          <Image src={product.image_url} />
        </Box>

        <Box p="6">
          <Box display="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" colorScheme="teal">
              New
            </Badge>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
              {/* {property.beds} beds &bull; {property.baths} baths */}
            </Box>
          </Box>

          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            noOfLines={1}
          >
            {product.title}
          </Box>

          <Box>
            $ {product.price}
            <Box as="span" color="gray.600" fontSize="sm">
              / on Offer
            </Box>
          </Box>

          <Box display="flex" mt="2" alignItems="center">
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
              <Box>
                <Button colorScheme="blue">Order Now</Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      ))}
    </div>
  );
};

export default SearchBar;
