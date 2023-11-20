import { useContext } from "react"
import { MyContext } from "./ContextApi/MyApi"
import Card from "./Card";


const Home = () => {

 const {data ,loading }=useContext(MyContext);
 console.log(data);

 if(loading){
  return <div className=" flex justify-center items-center h-screen w-full ">
 
 <p>Loading...........</p>
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