import React, { useState, useEffect } from 'react';

import { getClients} from '../../features/ClientsSlice';
import { useDispatch , useSelector } from "react-redux";

import AffClientsList from './AffClientsList'

const Liste = () => {

  // const {clients} = useSelector((state) => state.clients); 
  const dispatch = useDispatch();

  //    useEffect(() => {
  //     dispatch(getClients());
     
  //   }, [dispatch]);

  //   console.log(clients)    
  useEffect(() => {
    dispatch(getClients());

  }, [dispatch]);

  // useEffect(() => {

  //   setIsLoading(true)
  //   setData(clients)
  //   console.log(clients)
  // }, []);

  return (
 
     <AffClientsList />

  );
};



export default Liste;
