import { Box, Container, List, ListItem } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box as="nav" shadow="md" py={5}>
      <Container maxW="6xl">
        <List
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap={7}
        >
          <ListItem>
            <Link to="/">Home</Link>
          </ListItem>
          <ListItem>
            <Link to="/categories">Categories</Link>
          </ListItem>
          <ListItem>
            <Link to="/contactus">Contact Us</Link>
          </ListItem>
        </List>
      </Container>
    </Box>
  );
};

export default Navbar;
