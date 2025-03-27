import React from 'react'
import {Line} from 'react-chartjs-2'
import {Chart as ChartJS,CategoryScale,LinearScale,PointElement,
LineElement,Title,Tooltip,Legend} from 'chart.js'

ChartJS.register(
     CategoryScale,
     LinearScale,
     PointElement,
     LineElement,
     Title,
     Tooltip,
     Legend
)

const Chart = ({arr=[],currency,day}) => {

 const prices=[] 
 const date=[]
 
 arr.forEach((elem,i)=>{
  if(day==="24h"){
    date.push(new Date(elem[0]).toLocaleTimeString())
  }else{
    date.push(new Date(elem[0]).toLocaleDateString())
  }
    prices.push(elem[1])
 })

//  console.log(date)
//  console.log(prices)

  return (
        <Line 
            options={{
              responsive:true,
              }}
            data={{
                labels:date,
                datasets:[{
                  label:`Price in ${currency}`,
                  data:prices,
                  borderColor:'rgb(255,99,132)',
                  backgroundColor:'rgba(255,99,132,0.2)',
                }]
            }}
        />
  )
}

export default Chart