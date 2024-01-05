import { Box, Container, Heading, Image,LinkBox, LinkOverlay, SimpleGrid } from "@chakra-ui/react"
import { Link as RouterLink } from "react-router-dom";
import useTitle from "../Hook/useTitle";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import SkeletonLoading from "../components/SkeletonLoading";
const url = "https://api.escuelajs.co/api/v1/categories";
const getCategories = () => {
  return axios.get(url)
}
const Categories = () => {
  const { data: categories ,isLoading} = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });
  console.log(isLoading);

    useTitle("Categories");

  return (
    <>
      <Box mt={5}>
        <Heading
          as="h1"
          textAlign="center"
          fontSize="3xl"
          color="tan"
          fontWeight={500}
        >
          Categories
        </Heading>
      </Box>
      <Box>
        <Container maxW="6xl" mt={7} p={3}>
          <SimpleGrid columns={{ base: 1, md: 3, lg: 4 }} gap={8}>
            {isLoading ? 
              Array.from({ length: 8 }).map((_, index) => (
                <SkeletonLoading key={index} />
              ))
             : (
              <>
                {categories?.data.map((category) => (
                  <LinkBox
                    shadow="md"
                    rounded="lg"
                    p={4}
                    bg="#F1F1F1"
                    key={category.id}
                  >
                    <Image
                      src={category.image}
                      alt={category.name}
                      boxSize={350}
                      backgroundSize="cover"
                      mx="auto"
                      rounded="lg"
                    />
                    <LinkOverlay
                      as={RouterLink}
                      to={`/categories/${category.id}/products`}
                    >
                      <Heading as="h4" my={3} textAlign="center" fontSize="2xl">
                        {category.name}
                      </Heading>
                    </LinkOverlay>
                  </LinkBox>
                ))}
              </>
            )}
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
}

export default Categories
