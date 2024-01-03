import React, { useState, useEffect } from 'react';

import { getArticles} from '../../features/articleSlice';
import { useDispatch , useSelector } from "react-redux";
import { ProductsListC } from './ProductListC';



const AplListeC = ({navigation}) => {

  const dispatch = useDispatch();

  
  useEffect(() => {
    dispatch(getArticles());

  }, [dispatch]);

  return (
 
     <ProductsListC navigation={navigation}/>
    

  );
};



export default AplListeC;
