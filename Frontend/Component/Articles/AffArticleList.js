import React, { useState, useEffect } from 'react';

import { getArticles} from '../../features/articleSlice';
import { useDispatch , useSelector } from "react-redux";
import { ProductsList } from '../../screens/ProductsList';


const AffArticleList = ({navigation}) => {

  const dispatch = useDispatch();

  
  useEffect(() => {
    dispatch(getArticles());

  }, [dispatch]);

  return (
 
     <ProductsList navigation={navigation}/>
    

  );
};



export default AffArticleList;
