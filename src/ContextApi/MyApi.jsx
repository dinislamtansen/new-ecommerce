import React ,{   createContext,  useEffect,  useState } from "react"


export const MyContext = createContext();
export const MyApi = ({children}) => {
 
 const [data,setData] = useState([]);
 const [loading,setLoading]=useState(true);

useEffect(()=>{
  setLoading(true);
 
fetch('https://dummyjson.com/products')
.then((res) => res.json())
.then((result) => {
  setData(result);
  setLoading(false);
})

}
,[])
const info={
  data,
  setData,
  loading,
  setLoading,
  
  
};
  return <MyContext.Provider value={info}>
    {children}
    </MyContext.Provider>
  
}
export default MyApi;
