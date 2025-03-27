import { Heading, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const ExchangeCard = ({name,image,url,rank}) => {
  return (
    <div>
     <a href={url} target={'_blank'}>
           <VStack w={'52'} shadow={'lg'} padding={'8'} borderRadius={'lg'} transition={"all 0.9"} margin={"3"} textAlign={'center'} alignItems={'center'}
        css={{
            "&:hover":{
                  transform:"scale(1.1)"
            }
        }}
        >
              <Image src={image} w={'10'} h={'10'} objectFit={'contain'} alt={'exchange'} margin={'2'} />
              <Heading size={'sm'} noOfLines={'1'}>{rank}</Heading>
              <Text noOfLines={'1'}>{name}</Text>
        
             </VStack>
        </a>
    </div>
  )
}

export default ExchangeCard