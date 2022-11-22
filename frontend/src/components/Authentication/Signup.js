import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { useToast } from '@chakra-ui/react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Signup = () => {

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [confirmpassword, setConfirmpassword] = useState();
  const [password, setPassword] = useState();
  const [photo, setPhoto] = useState();
  const [show, setShow] = useState(false);
  const [uploading, setUploading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();
  const handleClick = () => setShow(!show);

  const postDetails = (photos) => {
      setUploading(true);
      if(photos === undefined) {
        toast({
          title: "Please Select a Photo",
          status: "warning",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
        return;
      }

      if(photos.type === "image/jpeg" || photos.type === "image/png") {
        const data = new FormData();
        data.append("file", photos);
        data.append("upload_preset", "chatupp");
        data.append("cloud_name", "doyu8qdin");
        fetch("https://api.cloudinary.com/v1_1/doyu8qdin/image/upload", {
          method: "POST",
          body: data,
        })
          .then((res) => res.json())
          .then((data) => {
            setPhoto(data.url.toString());
            setUploading(false);
          })
          .catch((err)=> {
            console.log(err);
            setUploading(false);

          })
      } else {
        toast({
          title: "Please Select a Photo",
          status: "warning",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
        setUploading(false);
        return;

      };
  };

  const submitHandler = async () => {
    setUploading(true);
    if (!name || !email || !password || !confirmpassword) {
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
    if (password !== confirmpassword) {
      toast({
        title: "Passwords Do Not Match",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }
    console.log(name, email, password, photo);
    try {
      // const config = {
      //   headers: {
      //     "Content-type": "application/json",
      //   },
      // };
      const { data } = await axios.post(
        "/api/user",
        {
          name,
          email,
          password,
          photo,
        },
        
      );
      console.log(data);
      toast({
        title: "Registration Successful",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
      setUploading(false);
      navigate("/chats");
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
    }
  };

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
        color= "white"
        style={{ marginTop: 15 }}
        onClick={submitHandler}
        isLoading={uploading}
      >Sign Up
      </Button>
    </VStack>
  )
}
export default Signup