import { Alert, AlertIcon, Button, Input } from "@chakra-ui/react";
import { useState } from "react";
import useLogin from "../../hooks/useLogin";

function Login() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const { login, loading, error } = useLogin();
  return (
    <>
      <Input
        placeholder="Email"
        type="email"
        fontSize={14}
        size={"sm"}
        value={inputs.email}
        onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
      />
      <Input
        placeholder="Password"
        type="password"
        fontSize={14}
        size={"sm"}
        value={inputs.password}
        onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
      />
      {error && (
        <Alert status="error" fontSize={13} p={2} borderRadius={4}>
          <AlertIcon fontSize={12} />
          {error.message}
        </Alert>
      )}
      <Button
        w={"full"}
        colorScheme="blue"
        size={"sm"}
        fontSize={14}
        isLoading={loading}
        onClick={() => login(inputs)}
      >
        Log In
      </Button>
    </>
  );
}

export default Login;
