// import React, { Component } from 'react';

// class App extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             count: 0
//         };
//     }

//     //증가
//     increment () {
//         this.setState((prevState) => ({
//             count: prevState.count + 1
//         }));
//     }
//     //감소
//     decrement () {
//         this.setState((prevState) => ({
//             count: prevState.count - 1
//         }));
//     }

//     render () {
//         return (
//             <div>
//                 <button onClick={this.increment.bind(this)}>증가</button>
//                 <button onClick={this.decrement.bind(this)}>감소</button>
//                 <div>Output: {this.state.count}</div>
//             </div>
//         );
//     }
// }

// export default App;

import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        };
    }

    render() {
        return (
            <div>
                <button>증가</button>
                <button>감소</button>
                <div>Output: {this.state.count}</div>
            </div>
        );
    }
}

export default App;