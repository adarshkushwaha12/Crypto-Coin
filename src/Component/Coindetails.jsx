import { Badge, Box, Button, Container, HStack, Image, Radio, RadioGroup, Stat, StatArrow, StatHelpText, StatLabel, StatNumber, Text, VStack } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import {server} from '../index'
import Loader from './Loader'
import CustomBar from './CustomBar'
import Title from './Title'
import Chart from './Chart'



const Coindetails = () => {
  const [coins, setcoin] = useState({})
  const [loading, setloading] = useState(true)
  const [Errors, setError] = useState(false)
  const [currency,setCurrency]=useState('inr')
  const [days,setDays]=useState('24h')
  const [chartArray,setChartArray]=useState([])
  const param=useParams()
  const btn=['24h','7d','14d','30d','60d','200d','1y','max']

   const currencySymbol= currency==='inr'?"₹":currency==='eur'?"€":"$"

   function setChartDets(key){
       setDays(key)
       setloading(true)
   }

   useEffect(() => {

     window.scrollTo({
          top: 0,
          behavior: "smooth"
        });

    const getcoin = async () => {
      try {
        const { data } = await axios.get(`${server}/coins/${param.id}`)
        const {data:Chartdata}=await axios.get(`${server}/coins/${param.id}/market_chart?vs_currency=${currency}&days=${days}`)
        setcoin(data)
        setChartArray(Chartdata.prices)
        setloading(false)
      } catch (error) {
        setloading(false)
        setError(true)
      }
    }
    getcoin();
  },[param.id,currency,days])

  return (
    <>   
    <Container maxW={'container.lg'} p={'15'}>
         { 
              loading?<Loader/>:(<>
                <Box borderWidth= {1} textAlign={'center'}>
                  <Chart arr={chartArray} currency={currencySymbol} day={days}/>
                </Box>

                <HStack w={'full'} alignSelf={['center','flex-start']} overflowX={'auto'} p={'4'}>
                        {btn.map((elem,i)=>{
                            return <Button colorScheme={'blue'} key={i} onClick={()=>{setChartDets(elem)}}>{elem}</Button>
                        })}
                </HStack>

               <RadioGroup value={currency} onChange={setCurrency} alignSelf={'flex-start'}>
                <HStack m={'4'}>
                    <Radio value={"inr"}>₹ INR</Radio>
                    <Radio value={"usd"}>€ USD</Radio>
                    <Radio value={"eur"}>$ EURO</Radio>
                </HStack>
               </RadioGroup>

          <VStack spacing={'5'} padding={'16'} alignItems={'flex-start'}>
              <Text size={'small'} opacity={0.7} textAlign={['center','center']}>{`Last updated on ${coins.market_data.last_updated.split('T')[0]}  ${coins.market_data.last_updated.split('T')[1]}`}</Text>
              <Image h={'16'} w={'16'} objectFit={'contain'} src={coins.image.large}/>
             
                  <Stat>
                       <StatLabel size={'md'}>{coins.name}</StatLabel>
                       <StatNumber>{`${currencySymbol} ${coins.market_data.current_price[currency]}`}</StatNumber>
                       <StatHelpText>
                          <StatArrow type={coins.market_data.price_change_percentage_24h >0 ?"increase":"decrease"}/>
                            {coins.market_data.price_change_percentage_24h}%
                       </StatHelpText>
                  </Stat>
                  <Badge fontSize={'2xl'} bg={'blackAlpha.900'} color={'whiteAlpha.900'}>#{coins.market_cap_rank}</Badge>

                  <CustomBar high={`${currencySymbol}${coins.market_data.high_24h[currency]}`} low={`${currencySymbol}${coins.market_data.low_24h[currency]}`}/>
                  <Box w={'full'}>
                       <Title name={'Max supply'} value={coins.market_data.max_supply}/>
                       <Title name={'Circulatory supply'} value={coins.market_data.circulating_supply}/>
                       <Title name={'Market Cap'} value={`${currencySymbol}${coins.market_data.market_cap[currency]}`}/>
                       <Title name={'All Time Low'} value={`${currencySymbol}${coins.market_data.atl[currency]}`}/>
                       <Title name={'All Time High'} value={`${currencySymbol}${coins.market_data.ath[currency]}`}/>
                  </Box>
          </VStack>
          </>)
         }   
    </Container> 
    </>
  )
}

export default Coindetails