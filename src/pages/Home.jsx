import { Box, Heading } from '@chakra-ui/react'
import useTitle from '../Hook/useTitle';

const Home = () => {
    useTitle("Home");
  return (
    <Box mt={5}>
      <Heading
        as="h1"
        textAlign="center"
        fontSize="3xl"
        color="tan"
        fontWeight={500}
      >
        Home
      </Heading>
    </Box>
  );
}

export default Home
