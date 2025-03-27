import { Container,Image } from '@chakra-ui/react'
import React from 'react'
import img1 from '../assets/404.png'

const Error = () => {
  return (
    <Container maxW={'container.xl'} minH={'85vh'} p={'4'}>
        <div className='errorpage'>
            <h1>404 Error page</h1>
            <Image src={img1} ></Image>
        </div>
    </Container>
  )
}

export default Error