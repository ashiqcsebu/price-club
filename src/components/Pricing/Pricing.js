import React from 'react';
import PriceOption from '../PriceOption/PriceOption';


const Pricing = () => {
    const pricingOptions=[
        {id:1 , name: 'free' , price : 0 , features :[
            'feature-1',
            'feature-2',
            'feature-3',
            'feature-4',
            'feature-5'
        ]},
        {id:3 , name: 'medium' , price : 9.99 ,features :[
            'feature-1',
            'feature-2',
            'feature-3',
            'feature-4',
            'feature-5']},

        {id:2 , name: 'premium' , price : 19.99 ,features :[
            'feature-1',
            'feature-2',
            'feature-3',
            'feature-4',
            'feature-5']}

    ]
    return (
        <div>
     <h1 className='text-5xl font-bold bg-slate-300 p-6 text-white'>Best Deal of the Town</h1>

     <div className='grid md:grid-cols-3 gap-3'>

        {
            pricingOptions.map(option => <PriceOption
            key={option.id}
            option ={option}
            
            >
            </PriceOption> )
        }
     </div>

        </div>
    );
};

export default Pricing;