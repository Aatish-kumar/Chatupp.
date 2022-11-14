import '../Homepage.css';
import Login from "../components/Authentication/Login";
import Signup from '../components/Authentication/Signup';
import { Tab, TabList, TabPanels, Tabs, TabPanel } from '@chakra-ui/react';
const Homepage = () => {
  return (
    <>
      <div className='img-container'>
        <h2>Discover the Chat Difference !</h2>
        <img src="https://cdni.iconscout.com/illustration/premium/thumb/web-chat-4486101-3838783.png" alt="chat"/>
      </div>
      <div className='wrapper'>
        <div className='main-content'>
          
          <h1>ChatUpp.</h1>
          <div className='tabs'>
            <Tabs variant='soft-rounded'>
              <TabList>
                <Tab width="50%">Login</Tab>
                <Tab width="50%">Sign Up</Tab>
              </TabList>
              <TabPanels style={{ marginTop: 20 }}>
                <TabPanel>
                  <Login />
                </TabPanel>
                <TabPanel>
                  <Signup />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </div>
        </div>
      </div>
    </>
    
    
  )
}
export default Homepage; 