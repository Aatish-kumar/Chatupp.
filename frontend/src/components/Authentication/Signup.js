import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from "@chakra-ui/react"
import { useState } from "react"

const Signup = () => {

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [confirmpassword, setConfirmpassword] = useState();
  const [password, setPassword] = useState();
  const [photo, setPhoto] = useState();
  const [show, setShow] = useState(false);
  
  const handleClick = () => setShow(!show);

  const postDetails = (photos) => {};

  const submitHandler = () => {};

  return (
    <VStack spacing='5px'>
      <FormControl isRequired>
        <FormLabel>Name</FormLabel>
        <Input 
          placeholder='Enter Your Name'
          onChange={(e)=> setName(e.target.value)}
        />
      </FormControl>
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
      <FormControl isRequired>
        <FormLabel>Confirm Password</FormLabel>
        <InputGroup>
          <Input 
            type={show ? "text" :"password"}
            placeholder='Confirm Password'
            onChange={(e)=> setConfirmpassword(e.target.value)}
          />
          <InputRightElement width="5rem">
            <Button size='sm' onClick={handleClick}>
              {show ? "Hide" : "Show" }
            </Button>
          </InputRightElement>
        </InputGroup>
        
      </FormControl>

      <FormControl id="photo">
        <FormLabel>Upload your Photo</FormLabel>
        <Input
          type ="file"
          p={1.8}
          accept="image/*" 
          onChange={(e)=> postDetails(e.target.files[0])}
        />
      </FormControl>

      <Button
        colorScheme="blue"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={submitHandler}
      >Sign Up
      </Button>
    </VStack>
  )
}
export default Signup