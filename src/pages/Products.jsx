import { Box, Container, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react"
import useTitle from "../Hook/useTitle";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import SkeletonLoading from "../components/SkeletonLoading";
const Products = () => {
  useTitle("Products");
  const { id } = useParams()
  const getProducts = (id) => {
    return axios.get(`https://api.escuelajs.co/api/v1/products/?categoryId=${id}`);
  }
  const { data: products, isLoading } = useQuery({
    queryKey: ["products",id],
    queryFn: ()=>getProducts(id),
  });
  return (
    <>
      <Box mt={5}>
        <Heading textAlign="center" fontSize="3xl" color="tan" fontWeight={500}>
          Products
        </Heading>
      </Box>
      <Box>
        <Container maxW="6xl" mt={7} p={3}>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={8}>
            {isLoading ? (
             Array.from({length:8}).map((_,index)=><SkeletonLoading key={index}/>)
            ) : (
              <>
                {products?.data.map((product) => (
                  <>
                    <Box shadow="md" rounded="lg" p={4} key={product.id}>
                      <Image
                        src={product.images}
                        alt={product.title}
                        boxSize={350}
                        backgroundSize="cover"
                        mx="auto"
                        rounded="lg"
                      />
                      <Heading as="h4" my={3} textAlign="center" fontSize="xl">
                        {product.title}
                      </Heading>
                      <Text textAlign="center" fontWeight={700}>
                        Price:
                        <span style={{ color: "chocolate" }}>
                          {product.price}$
                        </span>
                      </Text>
                    </Box>
                  </>
                ))}
              </>
            )}
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
}

export default Products
