import { Box, Container } from "@chakra-ui/react";
import FeedPosts from "../../components/FeedPosts/FeedPosts";
import SuggestedUsers from "../../components/SuggestedUsers/SuggestedUsers";

function HomePage() {
  return (
    <>
      <Container maxW={"full"} display={"flex"}>
        <Box flex={2} py={10}>
          <FeedPosts />
        </Box>
        <Box
          flex={0.6}
          borderLeft={"1px solid"}
          display={{ base: "none", lg: "block" }}
          height={"100vh"}
          borderColor={"whiteAlpha.300"}
          position={"sticky"}
          top={0}
          left={0}
          px={{ base: 2, md: 4 }}
        >
          <SuggestedUsers />
        </Box>
      </Container>
    </>
  );
}

export default HomePage;
