import { Button, HStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <HStack p={'4'} bgColor={'#00ffbf'}>
              <Button variant={'unstyled'} color={'black'} fontSize={'sm'} fontWeight={'medium'}>
                  <Link to='/home'>Home</Link>
              </Button>
               <Button variant={'unstyled'} color={'black'} fontSize={'sm'} fontWeight={'medium'}>
                  <Link to='/exchanges'>Exchanges</Link>
              </Button>
               <Button variant={'unstyled'} color={'black'} fontSize={'sm'} fontWeight={'medium'}>
                  <Link to='/coins'>Coins</Link>
              </Button>
        </HStack>
    </div>
  )
}

export default Header