import { useEffect, useState } from "react"

export const useFetch = (url) => {
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(false)
    useEffect(()=>{
        const fetchData =  async ()=> {
            setLoading(true)
            try {
                let response = await fetch(url)
                let json = await response.json();
                if (response.ok===false) {
                    setLoading(false)
                    throw new Error('Network response was not ok')
                } 
                
                setData(json)
                setLoading(false)
            } catch(error){
                console.log(error.message)
            }
            
        }
        fetchData();
    },[url])
  return {data,loading}
}

export default useFetch
