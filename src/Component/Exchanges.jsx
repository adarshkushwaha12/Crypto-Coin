import { Container, HStack } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { server } from '../index'
import Loader from './Loader'
import ExchangeCard from './ExchangeCard'
import Error from './Error'

const Exchanges = () => {

  const [exchanges, setexchanges] = useState([])
  const [loading, setloading] = useState(true)
  const [Errors, setError] = useState(false)

  useEffect(() => {
    const getexchanges = async () => {
      try {
        const { data } = await axios.get(`${server}/exchanges`)
        setexchanges(data)
        setloading(false)
      } catch (error) {
        setloading(false)
        setError(true)
      }
    }
    getexchanges();
  }, [])

  if (Errors) {
    return <>
      <Error />
    </>
  }

  return (
    <Container maxW={'container.xl'} padding={'10'}>
      {loading ? <Loader /> : <>
        <HStack wrap={'wrap'} justifyContent={'space-evenly'}>
          {exchanges.map((elem, i) => {
            return <ExchangeCard name={elem.name} image={elem.image} url={elem.url} rank={elem.trust_score_rank} key={i} />
          })}
        </HStack>
      </>
      }
    </Container>
  )
}

export default Exchanges