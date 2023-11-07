import {Heading, Image, Text, Input, Button} from '@chakra-ui/react';
import { Link } from "react-router-dom";  
import { ChevronRightIcon } from '@chakra-ui/icons';

const login = () => {
    return (
      <div className="Loginpage" style={{ 'overflow-x': 'hidden' }}>
      <Image src='/assets/login.svg' position={'relative'} height='800px' />
      <Image src='/assets/logo.svg' position={'relative'} bottom='760px' left='900px' />
      <Heading position={'relative'} fontSize='6xl' fontWeight='bold' color={'blue.900'} left="900px" top='-715px'>Welcome</Heading>
      <Heading position={'relative'} fontSize='6xl' fontWeight='bold' color={'blue.900'} left="900px" top='-730px'>back.</Heading>
      <Text position={'relative'} fontSize='18px' fontWeight='normal' color={'blue.700'} left="900px" top='-730px'>Log in to your CiTi Account</Text>
      <form>
          <Text position={'relative'} fontSize='18px' fontWeight='medium' color={'blue.800'} left="900px" top='-690px'>Username</Text>
          <Input type='text' name='username'placeholder='Enter your Username' variant={'filled'} size='md' width='500px' left="900px" top='-685px' />
          <Text position={'relative'} fontSize='18px' fontWeight='medium' color={'blue.800'} left="900px" top='-660px'>Password</Text>
          <Input type='password' name='password' placeholder='Enter your password' variant={'filled'} size='md' width='500px' left="900px" top='-655px' />
          <Link to={'/userhomepage'}>
              <Button type='submit' bgColor={'purple.400'} rightIcon={<ChevronRightIcon />} fontWeight='normal' fontSize='19px' width='500px' top="-555px" left="400px" colorScheme={'gray.500'}>Log In</Button>
          </Link>
          <Text textAlign={'left'} position={'relative'} fontSize='18px' fontWeight='normal' color={'red.800'} left="900px" top='-640px'>{Error}</Text>
      </form>
      <Link to={'/signin'}>
          <Text position={'relative'} fontSize='18px' fontWeight='normal' color={'purple.800'} left="1010px" top='-550px'>Don’t have an account?</Text>
          <Text position={'relative'} fontSize='18px' fontWeight='bold' color={'purple.800'} left="1205px" top='-577px'>Sign up?</Text>
      </Link>
  </div>
    );
  }
  
  export default login;