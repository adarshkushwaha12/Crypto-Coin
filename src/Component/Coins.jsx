import { Button, Container, HStack, RadioGroup,Radio, Flex ,VStack, Text} from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { server } from '../index'
import Loader from './Loader'
import CoinCard from './CoinCard'
import Error from './Error'

const Coins = () => {

  const [coins, setcoins] = useState([])
  const [loading, setloading] = useState(true)
  const [Errors, setError] = useState(false)
  const [page, setPage] = useState(1)
  const [currency,setCurrency]=useState('inr')
  var btn=new Array(132).fill(1)

  const currencySymbol= currency==='inr'?"₹":currency==='eur'?"€":"$"

  const changePage=(p)=>{
      setPage(p)
      setloading(true)
  }

  useEffect(() => {

     window.scrollTo({
          top: 0,
          behavior: "smooth"
        });

    const getcoins = async () => {
      try {
        const { data } = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`)

        setcoins(data)
        console.log(data)
        setloading(false)
      } catch (error) {
        setloading(false)
        setError(true)
      }
    }
    getcoins();
  }, [page,currency])

  if (Errors) {
    return <>
      <Error />
    </>
  }

  return (
    <Container maxW={'container.xl'} padding={'10'}>
      {loading ? <Loader /> : <>
        <VStack maxW={'full'} p={'4'}  alignItems="start" >
          
          <HStack mb={'2'}>
           <Text fontWeight={'bold'} noOfLines={'1'} >Page no.</Text>
           <Button h={'10'} w={'10'} marginBottom={'5'} bg={'white'} borderRadius={'full'} border={"1px solid #e5dcdc"} bgColor={'#1A202C'} color={'white'}>{page}</Button>
          </HStack>
        
          <RadioGroup value={currency} onChange={setCurrency}>
                <HStack>
                    <Radio value={"inr"}>₹ INR</Radio>
                    <Radio value={"usd"}>€ USD</Radio>
                    <Radio value={"eur"}>$ EURO</Radio>
                </HStack>
          </RadioGroup>
      
        </VStack>


        <HStack wrap={'wrap'} justifyContent={'space-evenly'}>
          {coins.map((elem, i) => {
            return <CoinCard id={elem.id} name={elem.name} image={elem.image} symbol={elem.symbol} price={elem.current_price} csymbol={currencySymbol} key={i} />
          })}
        </HStack>

        <HStack m={'3'} overflowX={'auto'} p={'3'}>
        {
          btn.map((elem,i)=>{
             return <Button key={i} onClick={()=>{changePage(i+1)}} bg={'blackAlpha.900'} color={'whiteAlpha.800'} css={{"&:hover":{color:"black",boxShadow:"5px 5px 20px #e5dede"}}}>
              {i+1}
          </Button>
          })
        }
        </HStack>
      </>
      }
    </Container>
  )
}

export default Coins