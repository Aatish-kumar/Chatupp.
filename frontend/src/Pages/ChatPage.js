import { Box } from "@chakra-ui/layout";
import { useState } from "react";
import Chatbox from "../components/ChatBox";
import MyChats from "../components/MyChats";
import SliderInfo from "../components/misc/SliderInfo";
import { ChatState } from "../Context/ChatProvider";

const Chatpage = () => {
  // const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = ChatState();

  return (
    <div style={{ width: "100%" }}>
      {user && <SliderInfo />}
      <Box display="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
        {user && <MyChats />} 
        {user && (
          <Chatbox  />   
        )}
      </Box>
    </div>
  );
};


export default Chatpage;

