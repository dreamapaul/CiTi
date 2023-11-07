import {Box, Button, Image,Text} from '@chakra-ui/react';
import { Link } from "react-router-dom";         

const HomePage = () => {
  return (
    <Box className="Homepage" bg={'purple.100'} minHeight='100vh' p={4} >
      <Box bg={'purple.50'} minHeight='80vh' p={4}>
      <header>
          <Image src='/assets/logo.svg' position={'relative'} left='50px' top='40px' width='100px' />
          <Text position={'absolute'} width='96px' height='33px' left='900px' fontSize='17px' fontStyle='normal' fontWeight='600'top='40px'>Contact Us</Text>
          <Text position={'absolute'} width='96px' height='33px' left='1070px' fontSize='17px' fontStyle='normal' fontWeight='600' top='40px'>Home</Text>
          <Text position={'absolute'} width='96px' height='33px' left='1220px' fontSize='17px' fontStyle='normal' fontWeight='600' top='40px'>About Us</Text>
          <Link to={'/login'} >
             <Button position={'absolute'} variant={'outline'} colorScheme={'purple'} textColor={'purple.900'} width='96px' height='33px' left='1350px' fontSize='17px' fontStyle='normal' fontWeight='600' top='36px'>Sign in</Button> 
          </Link>
      </header>
      <div>
        <Text position={'absolute'} fontSize='60px' textColor={'purple.800'} fontWeight='bold' left='82px' top='139px'>Lights Camera</Text>
        <Text position={'absolute'} fontSize='60px' textColor={'purple.800'} fontWeight='bold' left='82px' top='223px'>Book Now</Text>
        <Text position={'absolute'} fontSize='60px' textColor={'purple.700'} fontWeight='bold' left='82px' top='307px'>Your Cinematic Ticket</Text>
        <Text position={'absolute'} fontSize='18px' textColor={'purple.900'} fontWeight='normal' left='85px' top='430px'>CiTi- your go-to online cinema ticket hub! Seamless booking,</Text>
        <Text position={'absolute'} fontSize='18px' textColor={'purple.900'} fontWeight='normal' left='85px' top='455px'>exclusive deals, and a real good time—experience the future of </Text>
        <Text position={'absolute'} fontSize='18px' textColor={'purple.900'} fontWeight='normal' left='85px' top='480px'>movie magic with CiTi.</Text>
        <Image src='/assets/home.png' position={'relative'} width='550px' height='550px' flexShrink='0px' left='900px' top='50px' />
        <Link to={'/login'} >
                  <Button position={'absolute'} bg={'purple.700'} textColor={'purple.100'} width='440px' height='58px' padding='0px 24px' borderRadius='6px' left='82px' top='535px' justifyContent={'center'} alignItems={'center'}>Begin Your Journey Here</Button>
        </Link>          
      </div>
      </Box>
    </Box>
  );
}

export default HomePage;
