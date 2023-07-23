import { useRouteError, useNavigate } from 'react-router-dom';
import { Box, Heading, Text, Button } from '@chakra-ui/react';

interface RouteError {
  statusText?: string;
  message?: string;
}
export default function ErrorPage() {
  const error: RouteError = useRouteError();
  const navigate = useNavigate();
  const navigateHome = () => navigate('/');
  return (
    <Box textAlign="center" py={10} px={6} id="error-page">
      <Heading
        display="inline-block"
        as="h2"
        size="2xl"
        bgGradient="linear(to-r, teal.400, teal.600)"
        backgroundClip="text"
      >
        Oops!
      </Heading>
      <Text fontSize="18px" mt={3} mb={2}>
        Sorry, an unexpected error has occurred.
      </Text>
      <Text color={'gray.500'} mb={6}>
        {error.statusText || error.message}
      </Text>

      <Button
        colorScheme="teal"
        bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
        color="white"
        variant="solid"
        onClick={navigateHome}
      >
        Go to Home
      </Button>
    </Box>
  );
}
