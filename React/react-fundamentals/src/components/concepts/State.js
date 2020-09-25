
import React, { useState } from 'react';

const State = () => {

    return (

        <div className="main">
            <div className="mainDiv">

                <ul>
                    <dt>useState is unique to Functional Components</dt>
                    <dd>Class-based components have a seperate means of utilizing and modifying state.</dd>
                    <dt>useState uses array destructuring</dt>
                    <dd>useState provides a state variable to reference the value of the state, and a state modification function that allows you to set the new value of the state.</dd>
                    <dt>useState is a Hook</dt>
                    <dd>useState is a tool that originates from the list of Hooks you can access within React.</dd>
                    <dt>Triggers Re-renders</dt>
                    <dd>Like when a prop changes, changing the state of a component re-renders the whole component.</dd>

                </ul>
                <StateExample />
            </div>

        </div>

    );

};


function StateExample() {

    const [text, setText] = useState('initial value');
    const [likeNum, setLikeNum] = useState(0);
    const [textColor, setTextColor]= useState('blue');
    return (

        <div>
            <input value={text} onChange={e => setText(e.target.value)} />
            <br />
            <img
                style={{ width: '100px', height: '100px' }}
                src="https://upload.wikimedia.org/wikipedia/common/1/13/Facebook_like_thumb.png" alt="" onClick={e => setLikeNum(likeNum + 1)} />
            <span>{likeNum}</span>
            <br />
            <br />
            <p style={{ color: textColor }}
                onMouseOver={() => setTextColor('red')}
                onMouseLeave={() => setTextColor('blue')}>
                This text should be able to change colors
            </p>
        </div>

    );

};


export default State;