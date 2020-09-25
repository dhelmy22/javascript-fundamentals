
import React from 'react';

const FunctionalComponentDemo = () => {
    return (

        <div className="main">
            <div className="mainDiv">
            <h1>Functional Components</h1>
                <dl>
                    <dt><h4>Can use state</h4></dt>
                    <dd>With the 'useState' hook, functional components can now both render a display to the page and update the information to be shown.</dd>
                    <dt><h4>No 'this' keyword</h4></dt>
                    <dd>Older class components use 'this', functional components have no 'this' object.</dd>
                    <dt><h4>Can use effects</h4></dt>
                    <dd>With the 'useEffect' hook, functional components can perform side effect with any props or state changes.</dd>
                    <dt><h4>return()</h4></dt>
                    <dd>Must return a single element, but this element may have nested elements inside.</dd>
                </dl>
                <h1>Functional Syntax versus Arrow Function</h1>
            </div>
            
        </div>

    );


};

export default FunctionalComponentDemo;
