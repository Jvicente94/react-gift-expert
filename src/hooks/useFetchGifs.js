import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getgifs";

export const useFetchGifs = ( category ) => {

     const [images, setImges] = useState([]);
     const [isLoading, setIsLoading] = useState([]);
    
    const getImages = async() => {
          const response = await getGifs( category );
          setImges(response);
          setIsLoading(false);
    }
    
      useEffect(() => {
        getImages();
    
      },[])


  return {
    images,
    isLoading
  }
}
