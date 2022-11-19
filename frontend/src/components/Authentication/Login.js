import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from "@chakra-ui/react"
import { useState } from "react"
import { useToast } from '@chakra-ui/react';
import axios from "axios";
const Login = () => {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [show, setShow] = useState(false);
  const [uploading, setUploading] = useState(false);
  const toast = useToast();


  const handleClick = () => setShow(!show);

  const loginHandler = async () => {
    setUploading(true);
    if (!email || !password) {
      toast({
        title: "Please Fill all the Feilds",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setUploading(false);
      return;
    }

    // console.log(email, password);
    try {
      // const config = {
      //   headers: {
      //     "Content-type": "application/json",
      //   },
      // };

      const { data } = await axios.post(
        "/api/user/login",
        { email, password },
        // config
      );

      // console.log(JSON.stringify(data));
      toast({
        title: "Login Successful",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
      setUploading(false);
      // history.push("/chats");
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setUploading(false);
    };
  };
  

  return (
    <VStack spacing='5px' margin-top='1rem'>
      <FormControl isRequired>
        <FormLabel>Email</FormLabel>
        <Input 
          value={email}
          placeholder='Enter Your Email Address'
          onChange={(e)=> setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input 
            type={show ? "text" :"password"}
            placeholder='Enter Your Password'
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
          />
          <InputRightElement width="5rem">
            <Button size='sm' onClick={handleClick}>
              {show ? "Hide" : "Show" }
            </Button>
          </InputRightElement>
        </InputGroup>
        
      </FormControl>
      <Button
        colorScheme="blue"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={loginHandler}
        isLoading={uploading}
      >Login
      </Button>

      <Button
        variant="solid" 
        colorScheme="red"
        width="100%"
        onClick={() => {
          setEmail("welcome@chatupp.com");
          setPassword("123456");
        }}
      >
        Guest User 
      </Button>
    </VStack>
  )
}
export default Login