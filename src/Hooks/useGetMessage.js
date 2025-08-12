import React, { useEffect, useState } from 'react'
import useConversion from '../Zustand/useConversion'
import axios from 'axios'

const useGetMessage = () => {
  const[loading ,setLoading] = useState(false)
  const {messages , setMessages , selectedConversion}  =useConversion()
  
  useEffect(()=>{
      const getMessage = async ( ) => {
        setLoading(true)
        try {
            const response = await axios.get(`http://localhost:8000/api/message/${selectedConversion._id}`)
            setMessages(response.data)
        } catch (error) {
            console.log(error)
        }
      }
      if(selectedConversion?._id) getMessage()
  },[selectedConversion?._id , setMessages])
  return {loading ,messages}
}

export default useGetMessage