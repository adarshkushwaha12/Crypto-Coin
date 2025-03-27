import {Spinner, VStack} from '@chakra-ui/react'
import React from 'react'
import '../styles/style.css'

const Loader = () => {
  return (
    <>  
    <VStack h="90vh" justifyContent={"center"}>
          {/* <Box transform={"scale(3)"}> */}
                <Spinner size={'xl'}/>
          {/* </Box> */}
    </VStack>
    </>
  )
}

export default Loader


{/* <Container maxW={'container.xl'}>
        <div className='loader'>
              <div className='load'></div>
              <p>Loading...</p>
        </div>
    </Container> */}