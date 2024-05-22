import { Container, Flex, VStack } from "@chakra-ui/react";
import AuthForm from "../../components/AuthForm/AuthForm";

function AuthPage() {
  return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
      <Container
        maxW={"container.md"}
        padding={0}
        w={{ base: "300px", md: "500px" }}
      >
        {/* Right Hand Side */}
        <VStack spacing={4} align={"stretch"}>
          <AuthForm />
        </VStack>
      </Container>
    </Flex>
  );
}

export default AuthPage;
