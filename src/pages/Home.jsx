import { Box, Heading } from '@chakra-ui/react'
import useTitle from '../Hook/useTitle';

const Home = () => {
    useTitle("Home");
  return (
    <Box mt={5}>
      <Heading textAlign="center" fontSize="3xl" color="tan" fontWeight={500}>
        Home
      </Heading>
    </Box>
  );
}

export default Home
