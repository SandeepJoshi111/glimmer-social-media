import { Box, Flex, Link, Text, VStack } from "@chakra-ui/react";
import SuggestedHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";
import useGetSuggestedUser from "../../hooks/useGetSuggestedUser";

function SuggestedUsers() {
  const { isLoading, suggeestedUsers } = useGetSuggestedUser();

  if (isLoading) return null;
  return (
    <>
      <VStack py={8} px={6} gap={4}>
        <SuggestedHeader />

        {suggeestedUsers.length !== 0 && (
          <Flex
            alignItems={"center"}
            justifyContent={"space-between"}
            w={"full"}
          >
            <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
              {" "}
              Suggested for you
            </Text>
            {/* <Text
            fontSize={12}
            fontWeight={"bold"}
            _hover={{ color: "gray.400" }}
            cursor={"pointer"}
          >
            {" "}
            See All
          </Text> */}
          </Flex>
        )}
        {suggeestedUsers.map((user) => (
          <SuggestedUser user={user} key={user.id} />
        ))}
      </VStack>
      <Box
        py={8}
        px={6}
        gap={4}
        fontSize={12}
        color={"gray.500"}
        position={"absolute"}
        bottom={"0"}
      >
        &copy;2023 Built By{" "}
        <Link
          href="https://sandeepjoshi.vercel.app/"
          target="_blank"
          color={"blue.500"}
          fontSize={14}
        >
          Sandeep Joshi
        </Link>
      </Box>
    </>
  );
}

export default SuggestedUsers;
