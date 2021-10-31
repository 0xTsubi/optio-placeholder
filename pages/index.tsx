import { Flex, Heading, Text } from '@chakra-ui/react';
import Head from 'next/head';

export default function Home() {
  return (
    <Flex
      flexDir="column"
      w="100%"
      minH="100vh"
      justifyContent="center"
      alignItems="center"
      bgGradient="linear(to-b, gray.100, gray.400)"
    >
      <Head>
        <title>Optio DAO</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Heading
        as="h1"
        size="4xl"
        letterSpacing={10}
        color="gray.800"
        fontWeight="bold"
      >
        OPTIO
      </Heading>
      <Heading
        mt={3}
        as="h1"
        size="xl"
        letterSpacing={10}
        color="gray.800"
        fontWeight="light"
      >
        DAO
      </Heading>
    </Flex>
  );
}
