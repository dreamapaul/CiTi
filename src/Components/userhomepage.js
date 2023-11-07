import { Image, Input, Text, Button, Box, Modal, Grid, ModalOverlay, ModalContent, ModalBody, ModalFooter, useDisclosure, Heading, Flex } from '@chakra-ui/react';
import { Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, Select } from '@chakra-ui/react'
import { ChevronRightIcon, AddIcon, ChevronLeftIcon } from '@chakra-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import { useState} from 'react';

const Userhomepage = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isOuterDrawerOpen, setIsOuterDrawerOpen] = useState(false);
    const [isInnerDrawerOpen, setIsInnerDrawerOpen] = useState(false);
  
    const openOuterDrawer = () => {
      setIsOuterDrawerOpen(true);
    };
  
    const closeOuterDrawer = () => {
      setIsOuterDrawerOpen(false);
    };
  
    const openInnerDrawer = () => {
      setIsInnerDrawerOpen(true);
    };
  
    const closeInnerDrawer = () => {
      setIsInnerDrawerOpen(false);
    };

  const textStyle = {
    transform: 'rotate(270deg)',
  };
    return (
        <div className="UserhomePage" style={{ 'overflow-x': 'hidden', 'overflow-y': 'hidden', 'marginBottom': '80px' }}>
          <header className="home-header">
            <Box bg={'purple.50'} maxW="1242px" maxH="68px" m='32px' marginLeft="140px" borderColor={'blue.100'} borderWidth={'thin'} borderRadius="md" color={'purple.800'}>
              <Image src='/assets/logo.svg' position={'relative'} top='13px' left='30px' zIndex='20' />
              <Button bgColor={'purple.100'} rightIcon={<ChevronRightIcon />} top="-18px" left="1075px" textColor={'purple.500'} onClick={onOpen}>Abishek Gery</Button>
              <Link to={'/'}>
                <Button bgColor={'purple.50'} textColor={'purple.500'} position={'relative'} left="795px" top='-18px' fontWeight='semibold'>Log Out</Button>
              </Link>
            </Box>
          </header>
          <Button bgColor={'purple.400'} leftIcon={<AddIcon marginTop={'1'} h='2' />} borderRadius='5px' zIndex='10' top="20px" left="1200px" onClick={openOuterDrawer} textColor={'purple.50'} _hover={{ bg: "purple.300" }}>Purchase Tickets</Button>
          <Heading position={'relative'} fontSize='4xl' fontWeight='bold' color={'blue.800'} left="160px" top='-25px'>Your Tickets</Heading>
          <Modal size={'xs'} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalBody>
                <Text fontWeight='semibold' fontSize={'medium'} mb='1rem'><br></br>Name: Abishek Gery <br></br> Username: abishek123<br></br>Password: 123456789</Text>
              </ModalBody>
              <ModalFooter>
                <Button colorScheme='purple' mr={3} onClick={onClose}>Close</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
            <Flex bgColor={'purple.50'} height='70px' marginTop='20px' width='1228px' marginLeft='148px' borderColor={'purple.100'} borderWidth={'thin'} borderRadius='6px'>
              <Flex>
                <Box bgColor={'purple.200'} width='70px' height='36px' marginLeft='-17px' marginTop='17px' textAlign={'center'} borderRadius='6px' lineHeight={'7'} fontSize={'xs'} style={textStyle}>Ticket  no</Box>
                <Box bgColor={'purple.100'} width='80px' height='70px' marginLeft='-22px' textColor={'purple.500'} position={'relative'} lineHeight='65px' fontWeight={'medium'} fontSize={'5xl'} textAlign={'center'}>001</Box>
              </Flex>
    
              <Grid templateColumns='2fr 3fr 3fr' gap={6} width='100%' marginLeft='64px'>
                <div>
                  <Text position={'relative'} textColor={'gray.400'} top='10px' fontSize={'smaller'} fontWeight='normal'>Ticket No</Text>
                  <Text position={'relative'} textColor={'purple.700'} top='10px' fontSize={'lg'} fontWeight='semibold'>001</Text>
                </div>
                <div>
                  <Text position={'relative'} textColor={'gray.400'} top='10px' fontSize={'smaller'} fontWeight='normal'>Name</Text>
                  <Text position={'relative'} textColor={'purple.700'} top='10px' fontSize={'lg'} fontWeight='semibold'>Conjuring</Text>
                </div>
                <div>
                  <Text position={'relative'} textColor={'gray.400'} top='10px' fontSize={'smaller'} fontWeight='normal'>No. of tickets</Text>
                  <Text position={'relative'} textColor={'purple.700'} top='10px' fontSize={'lg'} fontWeight='semibold'>2</Text>
                </div>
              </Grid>
              <Button position={'relative'} top='16px' width='120px' height='36px' marginRight='40px' fontSize={'xs'} fontWeight={'semibold'} bgColor={'purple.100'}>Download Ticket</Button>
            </Flex>
          <div>
            <Drawer closeOnOverlayClick={false} size={'md'} isOpen={isOuterDrawerOpen} onClose={closeOuterDrawer} placement='right'>
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>
                  <Box width='130px' marginTop='25px' marginLeft='15px' height='6px' bgColor={'purple.400'}></Box>
                  <Box width='130px' marginTop='-6px' marginLeft='160px' height='6px' bgColor={'purple.100'}></Box>
                  <Box width='130px' marginTop='-6px' marginLeft='305px' height='6px' bgColor={'purple.100'}></Box>
                </DrawerHeader>
                <DrawerBody style={{ overflow: 'hidden' }}>
                  <Heading position={'relative'} left='14px' top='10px' color={'purple.900'} fontSize={'5xl'}>Purchase</Heading>
                  <Heading position={'relative'} left='14px' top='12px' color={'purple.900'} fontSize={'5xl'}>Ticket</Heading>
                  <Text position={'relative'} left='18px' top='40px' fontSize={'md'} textColor={'blue.800'}>Name</Text>
                  <Select maxWidth='425px' left='17px' top='55px' placeholder='Select Movie'>
                    <option value='option1'>Conjuring</option>
                    <option value='option2'>Nun 1</option>
                    <option value='option3'>Nun 2</option>
                    <option value='option4'>Conjuring 2</option>
                    <option value='option5'>Conjuring 3</option>
                  </Select>
    
                  <Text position={'relative'} left='18px' top='80px' fontSize={'md'} textColor={'purple.800'}>Time</Text>
                  <Select maxWidth='425px' left='17px' top='95px' placeholder='Select Time'>
                    <option value='0'>12.00 PM</option>
                    <option value='50'>3.00 PM</option>
                    <option value='50'>5.00 PM</option>
                    <option value='50'>9.00 PM</option>
                    <option value='60'>11.00 PM</option>
                  </Select>
    
                  <Text position={'relative'} left='18px' top='130px' fontSize={'md'} textColor={'purple.800'}>Number of tickets</Text>
                  <Input type='text' position={'relative'} width='200px' top='140px' left='17px' maxWidth='425px' placeholder={'Enter number of tickets'} />
                  <Text position={'relative'} left='245px' top='66px' fontSize={'md'} textColor={'purple.800'}>Seat No.</Text>
                  <Input type='text'position={'relative'} width='200px' top='76px' left='240px' maxWidth='425px' placeholder={'Enter seat number'} />
                </DrawerBody>
                <DrawerFooter>
                  <Button borderWidth={'thin'} borderColor={'purple.200'} top='2' textAlign={'start'} width='150px' height='60px' left='-30px' borderRadius={'sm'} bgColor={'purple.100'} leftIcon={<ChevronLeftIcon />} onClick={closeOuterDrawer}>Cancel</Button>
                  <Button onClick={openInnerDrawer} width='270px' height='60px' left='-23px' top='2' borderRadius={'sm'} bgColor={'purple.400'} rightIcon={<ChevronRightIcon />}>Proceed</Button>
    
                  <Drawer isOpen={isInnerDrawerOpen} onClose={closeInnerDrawer} closeOnOverlayClick={false} size={'md'} placement="right">
                    <DrawerOverlay />
                    <DrawerContent>
                      <DrawerCloseButton />
                      <DrawerHeader>
                        <Box width='130px' marginTop='25px' marginLeft='15px' height='6px' bgColor={'purple.400'}></Box>
                        <Box width='130px' marginTop='-6px' marginLeft='160px' height='6px' bgColor={'purple.400'}></Box>
                        <Box width='130px' marginTop='-6px' marginLeft='305px' height='6px' bgColor={'purple.100'}></Box>
                      </DrawerHeader>
                      <DrawerBody style={{ 'overflow-x': 'hidden' }}>
                        <Text position={'relative'} top='10px' left='20px' textColor={'purple.800'} textAlign={'left'} fontWeight={'bold'} fontSize={'4xl'}>Payment</Text>
                        <Text position={'relative'} top='5px' left='20px' textColor={'purple.800'} textAlign={'left'} fontWeight={'bold'} fontSize={'4xl'}>Details</Text>
                        <Box borderRadius={'lg'} bgColor={'gray.100'} marginLeft='25' marginTop='30px' width='400px' height='400px'>
                          <Text position={'relative'} textColor={'purple.700'} fontSize={'md'} fontWeight={'medium'} top='30px' left='40px' >Total Payment</Text>
                          <Heading position={'relative'} textColor={'purple.900'} left='40px' top='30px' fontSize={'5xl'} fontWeight={'bold'} >Rs 500</Heading>
                          <Text position={'relative'} top='15px' left='15px' fontSize={'4xl'} textColor={'gray.300'}>-------------------------</Text>
                          <Text position={'relative'} top='20px' left='40px' textColor={'purple.800'} fontSize={'md'} letterSpacing={'wide'} fontWeight={'medium'}>Bill Number</Text>
                          <Text position={'relative'} top='40px' left='40px' textColor={'purple.800'} fontSize={'md'} letterSpacing={'wide'} fontWeight={'medium'}>Name</Text>
                          <Text position={'relative'} top='60px' left='40px' textColor={'purple.800'} fontSize={'md'} letterSpacing={'wide'} fontWeight={'medium'}>Seat Number</Text>
                          <Text position={'relative'} top='80px' left='40px' textColor={'purple.800'} fontSize={'md'} letterSpacing={'wide'} fontWeight={'medium'}>Movie Name</Text>
                          <Text position={'relative'} top='100px' left='40px' textColor={'purple.800'} fontSize={'md'} letterSpacing={'wide'} fontWeight={'medium'}>Number of tickets</Text>
                          <Text position={'relative'} top='-100px' left='220px' textColor={'gray.500'} fontSize={'md'} letterSpacing={'wide'} fontWeight={'medium'}>001</Text>
                          <Text position={'relative'} top='-80px' left='220px' textColor={'gray.500'} fontSize={'md'} letterSpacing={'wide'} fontWeight={'medium'}>Abishek Gery</Text>
                          <Text position={'relative'} top='-60px' left='220px' textColor={'gray.500'} fontSize={'md'} letterSpacing={'wide'} fontWeight={'medium'}>14G</Text>
                          <Text position={'relative'} top='-40px' left='220px' textColor={'gray.500'} fontSize={'md'} letterSpacing={'wide'} fontWeight={'medium'}>Conjuring</Text>
                          <Text position={'relative'} top='-20px' left='220px' textColor={'gray.500'} fontSize={'md'} letterSpacing={'wide'} fontWeight={'medium'}>2</Text>
                        </Box>
                      </DrawerBody>
                      <DrawerFooter>
                        <Button borderWidth={'thin'} borderColor={'purple.200'} top='2' textAlign={'start'} width='150px' height='60px' left='-30px' borderRadius={'sm'} bgColor={'purple.100'} leftIcon={<ChevronLeftIcon />} onClick={closeInnerDrawer}>Back</Button>
                          <Button width='270px' height='60px' left='-23px' top='2' borderRadius={'sm'} bgColor={'purple.400'} rightIcon={<ChevronRightIcon />}>Proceed</Button>
                      </DrawerFooter>
                    </DrawerContent>
                  </Drawer>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      );
    }
    
    export default Userhomepage;