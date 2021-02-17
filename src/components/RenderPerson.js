import React from 'react';
import ReactDOM from 'react-dom';

function RenderPerson(div1, div2, div3) {

    ReactDOM.render(
        <div>
            <br/>
            {div1}
            <br/>
            {div2}
            <br/>
            {div3}
        </div>
        , document.getElementById('root')
    );
}

export default RenderPerson