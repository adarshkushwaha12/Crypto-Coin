import { HStack, Text } from '@chakra-ui/react'
import React from 'react'

const Title = ({name,value}) => {
  return (
    <>
        <HStack w={'full'} justifyContent={'space-between'} my={'4'}>
            <Text fontFamily={'Bebas Neue'} letterSpacing={'widest'}>{name}</Text>
            <Text>{value}</Text>
        </HStack>
    </>
  )
}

export default Title