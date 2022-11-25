import { Box } from "@chakra-ui/layout";
import { useState } from "react";
import Chatbox from "../components/ChatBox";
import MyChats from "../components/MyChats";
import SliderInfo from "../components/misc/SliderInfo";
import { ChatState } from "../Context/ChatProvider";

const Chatpage = () => {
  
  const { user } = ChatState();
  const [fetchAgain, setFetchAgain] = useState(false);
  return (
    <div style={{ width: "100%" }}>
      {user && <SliderInfo />}
      <Box display="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
        {user && <MyChats />} 
        {user && (
          <Chatbox  fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />   
        )}
      </Box>
    </div>
  );
};


export default Chatpage;

