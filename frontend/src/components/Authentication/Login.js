import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from "@chakra-ui/react"
import { useState } from "react"

const Login = () => {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [show, setShow] = useState(false);
  
  const handleClick = () => setShow(!show);

  const loginHandler = () => {};

  return (
    <VStack spacing='5px' margin-top='1rem'>
      <FormControl isRequired>
        <FormLabel>Email</FormLabel>
        <Input 
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
      >Login
      </Button>

      <Button
        variant="solid" 
        colorScheme="red"
        width="100%"
        style={{ marginTop: 15 }}
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