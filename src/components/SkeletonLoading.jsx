import { Box, Skeleton, SkeletonText } from "@chakra-ui/react";

const SkeletonLoading = () => {
  return (
    <Box>
      <Skeleton w="250" h="250" />
      <SkeletonText mt="4" noOfLines={1} spacing="4" skeletonHeight="2" />
    </Box>
  );
}

export default SkeletonLoading
