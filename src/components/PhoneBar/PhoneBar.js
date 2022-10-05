import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {  BarChart, Tooltip, Bar, XAxis, YAxis, } from 'recharts';

const PhoneBar = () => {
     const [phones, setPhones] = useState([]);
      useEffect( ()=>{
        axios.get("https://openapi.programming-hero.com/api/phones?search=iphone")
        .then(data =>{
          const phonesLoaded = data.data.data ;
          const phoneData = phonesLoaded.map(phone =>{
            const parts = phone.slug.split('-');
            const price = parseInt(parts[1]);
            const singlePhone ={
                name : phone.phone_name ,
                price: price 

            }
            return singlePhone
          })
        
         console.log(phoneData);
        setPhones(phoneData);
        });
    } , [])
    return (
        <div>
            <BarChart  width={600}  height={600} data={phones}   
        >
             <XAxis dataKey="name" />
          <YAxis />
       
        <Bar dataKey="price" fill="#82ca9d" />
     
        </BarChart> 
            
        </div>
    );
};

export default PhoneBar;