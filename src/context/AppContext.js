import { createContext, useState } from "react";
import {baseUrl} from "../baseUrl"

// create context
const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [posts, setPost] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(null);

  async function fetchData(page=1){
    setLoading(true)
    let ulr = `${baseUrl}?page=${page}`
    try {
        const response = await fetch(ulr)
        const data = await response.json()
        setPage(data.page)
        setPost(data.posts)
        setTotalPage(data.totalPages)
    } catch (error) {
        console.log(error)
    }
    setLoading(false)
 
  }


  function handlePageChagne(page){
    setPage(page)
    fetchData(page)
  }

  const data = {
    posts,
    setPost,
    loading,
    setLoading,
    page,
    setPage,
    totalPage,
    setTotalPage,
    fetchData,
    handlePageChagne
  }

  // provide
  return(
    <AppContext.Provider value={data} >
        {children}
    </AppContext.Provider>
  )

};

export default AppContext;
