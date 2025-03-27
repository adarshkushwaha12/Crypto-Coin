import { Badge, HStack, Progress, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const CustomBar = ({high,low}) => {
  return (
      <>
        <VStack w={'full'}>
        <Progress value={50} colorScheme={'teal'} w={'full'}/>
        <HStack justifyContent={'space-evenly'}>
            <Badge colorScheme={'red'} children={low}/>
            <Text size={'sm'}>24H range</Text>
            <Badge colorScheme={'green'} children={high}/>
        </HStack>
        </VStack>
      </>
  )
}

export default CustomBar