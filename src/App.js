import Header from "./components/Header";
import Blog from "./components/Blog";
import Pagination from "./components/Pagination";
import { useContext, useEffect } from "react";
import AppContext from "./context/AppContext";
import "./App.css"
export default function App() {

  const {fetchData} = useContext(AppContext)

  useEffect(()=>{
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <Header />
      <Blog />
      <Pagination />
    </div>
  );
}
