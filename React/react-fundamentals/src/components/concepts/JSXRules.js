
import React from 'react';

const JSXRules = () => {

    return (

        <div className="main">
            <div className="mainDiv">
                <h1 className="section-title">JSX</h1>
                <dl>
                    <dt>Resembles HTML</dt>
                    <dd>It's not. It's actually closer to JavaScript.</dd>
                    <dt>React Elements</dt>
                    <dd>These are used to construct and update the DOM, or what you see on the screen.</dd>
                    <dt>Not Required</dt>
                    <dd>You can write in vanilla JavaScript, but most sane people use JSX.</dd>
                </dl>
                <hr />
                <NormalCompnent />
                <CreateElementComponent />
            </div>
        </div>

    );

}


const NormalCompnent = () => {

    return (

        <div style={{ border: '2px solid black' }}>
            <h1>Normal Functional Component</h1>
            <p>This was constructed with JSX in the return.</p>
            <img src="https://pbs.twimg.com/media/DOzL82mXAAOzFs.jpg" alt="" />
        </div>

    );

};

const imageLocation = 'https://cdn-images-1.medium.com/max/1200/1*jJZHFQmhkq_7ohn18KrMhA.png';

const CreateElementComponent = () => {

    return (

        React.createElement('div',
            { style: { border: '2px solid black' } },
            React.createElement('h1', null, 'CreateElemaent Component'),
            React.createElement('p', null, 'This was constructed with CreateElement calls'),
            React.createElement('img', { src: imageLocation }, null)
    )

);

};


export default JSXRules;