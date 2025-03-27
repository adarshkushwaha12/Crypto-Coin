import { Avatar, Box, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
   <>
    <Box minH={'48'} w={'full'} bg={'#00ffbf'} px={'16'} py={['16','8']}> 
          <Stack direction={['column','row']} height={'full'} alignItems={'center'}>
               <VStack w={'full'} alignItems={["center",'flex-start']} color={'whiteAlpha.1000'}>
                   <Text fontWeight={'bold'} color={'(255,255,255,0.9)'}>About us</Text>
                   <Text fontSize={'sm'} letterSpacing={'widest'} textAlign={['center','left']}>We are the best crypto provider at a very cheap cost.</Text>
               </VStack>
               <VStack w={'full'} alignItems={["center",'flex-end']}>
                  <Avatar boxSize={'28'} mt={["4","0"]}></Avatar>
                  <Text color={'black'}>Our Founder</Text>
               </VStack>
          </Stack>
    </Box>
   </>
  )
}

export default Footer