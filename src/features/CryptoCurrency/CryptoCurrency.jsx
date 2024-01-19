import { useEffect, useState } from "react";
import InfiniteList from "../../components/InfiniteList/InfiniteList";
import Loading from "../../components/Loading/Loading";
import MainLayout from "../../layouts/mainLayout/MainLayout";
import axios from '../../services/Api'
const CryptoCurrency=()=>{
    const [cryptoCurrency,setCryptoCurrency]=useState([]);
const [page,setPage]=useState(1);
const [lastElement,setLastElement]=useState();
const [loading,setLoading]=useState();
    const fetchData=async ()=>{
        setLoading(true)
        const response=await axios.get(`Comments/${page}`);
        setCryptoCurrency((oldData)=>[...oldData,...response.data]);
        setLoading(false);
        }
        const observerRef=new IntersectionObserver(([entry])=>{
          if(entry.isIntersecting){
            setPage((currentPage)=>currentPage+1)
          }
        })

useEffect(()=>{
    fetchData();
},[page])
useEffect(()=>{
    if(lastElement){
        observerRef.observe(lastElement)
    }
    return ()=>{
        if(lastElement){
            observerRef.unobserve(lastElement)
        }
    }

},[lastElement])
  return(
    <MainLayout headerTitle="Crypto Currency" isFooter={false}>
    <div className="w-1/2  mx-auto" >
        {
          
            cryptoCurrency.map((data=>
                <div ref={setLastElement}>
                <InfiniteList key={data.id} {...data}/>
                </div>
            ))}
            {
        loading&&(
        <Loading/>
            )}


    </div>
    </MainLayout>
  )
}
export default CryptoCurrency;