import { Box, Link, Text } from '@chakra-ui/react';

export default function Index() {
  return (
    <Box>
      <Text id="zero-state" marginTop={10}>
        Select a skill from the list to see more information about it. Check out{' '}
      </Text>
      <Text>
        <Link href="https://sfia-online.org/en" isExternal>
          {' '}
          at the https://sfia-online.org/en to find out more about the SFIA skills
        </Link>
      </Text>
    </Box>
  );
}
