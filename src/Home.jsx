import { useContext } from "react"
import { MyContext } from "./ContextApi/MyApi"
import Card from "./Card";
import { BallTriangle } from  'react-loader-spinner'

const Home = () => {

 const {data ,loading }=useContext(MyContext);
 console.log(data);

 if(loading){
  return <div className=" flex justify-center items-center h-screen w-full ">
 
 <BallTriangle
  height={100}
  width={100}
  radius={5}
  color="#4fa94d"
  ariaLabel="ball-triangle-loading"
  wrapperClass={{}}
  wrapperStyle=""
  visible={true}
/>
 </div>

}

  return (
   
    <>
    
    <div className=" flex justify-center gap-4 flex-wrap">
       {
        data?.products?.map((item)=>{ return <Card key={item.id} tansen={item}/>})
       }
       </div>
  
    </>
  )
}

export default Home