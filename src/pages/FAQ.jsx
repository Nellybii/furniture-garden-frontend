import React from 'react';
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box, Text, Link } from '@chakra-ui/react';

const FAQ = () => {
  return (
    <Box maxW="container.md" mx="auto" py="8">
      <Text fontSize="2xl" fontWeight="bold" mb="4">Frequently Asked Questions</Text>
      <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Can I return my furniture if I'm not satisfied with it?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Yes, we offer a 30-day return policy for all our furniture. Please check our <Link href="/returns">returns policy</Link> for more details.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Do you offer international shipping?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Currently, we only offer shipping within the United States. We plan to expand our shipping options in the future.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                How can I track my order?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Once your order is shipped, you will receive a tracking number via email. You can track your order using this number on our <Link href="/track">order tracking</Link> page.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Do you offer assembly services?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Yes, we offer assembly services for an additional fee. You can select this option during checkout.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                What payment methods do you accept?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            We accept all major credit cards, PayPal, and Apple Pay.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
}

export default FAQ;
