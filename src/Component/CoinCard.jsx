import { Heading, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import {Link} from 'react-router-dom'


const CoinCard = ({id,name,image,symbol,price,csymbol="₹"}) => {
  return (
    <div>
     <Link to={`/coin/${id}`}>
           <VStack w={'52'} shadow={'lg'} padding={'8'} borderRadius={'lg'} transition={"all 0.9"} margin={"3"} textAlign={'center'} alignItems={'center'}
        css={{
            "&:hover":{
                  transform:"scale(1.1)"
            }
        }}
        >
              <Image src={image} w={'10'} h={'10'} objectFit={'contain'} alt={'exchange'} margin={'2'} />
              <Text noOfLines={'1'}>{name}</Text>
              <Heading size={'md'} noOfLines={'1'}>{symbol}</Heading>
              <Text noOfLines={'1'}>{price?`${csymbol} ${price}`:'NA'}</Text>
        
             </VStack>
         </Link>    
    </div>
  )
}

export default CoinCard