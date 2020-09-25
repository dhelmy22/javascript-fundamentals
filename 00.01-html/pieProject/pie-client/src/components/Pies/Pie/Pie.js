// 
import React, { useState, useEffect } from 'react';
import './Pie.css';

const Pie = (props) => {
    console.log('Pie', props)

    return (

        <>

            {props.testData.map(pie => {
                return (
                    <tr key={pie.id}>
                        <td>{pie.nameOfPie}</td>
                        <td>{pie.baseOfPie}</td>
                        <td>{pie.crust}</td>
                        <td>{pie.timeToBake}</td>
                        <td>{pie.rating}</td>
                    </tr>
                )
            })





            }

        </>

    )
}

export default Pie;
