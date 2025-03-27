import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import img1 from '../assets/btc.png'
import {motion} from 'framer-motion'

const Home = () => {
  return (
    <>
      <Box w={'full'} h={'90vh'} bg={'black'}>
      <motion.div style={{height:"80vh"}} animate={{translateY:"20px"}} transition={{duration:2,repeat:Infinity,repeatType:'reverse'}}>
              <Image h={'full'} w={'full'} objectFit={'contain'} src={img1} filter={"grayscale(1)"}/>
              <Text fontSize={'6xl'} color={'whiteAlpha.700'} mt={'-20'} textAlign={'center'} fontWeight={''}>CRYPTO</Text>
      </motion.div>    
      </Box>
    </>
  )
}

export default Home