import React from 'react';

class App extends React.Component {
    state = {
        count: 0,
        isCounting: false,
    };
  
    componentDidMount() {
      if (localStorage.getItem('count') !== null) {
        let localKey = localStorage.getItem('count')
        this.setState({count: +localKey})
      }
    }
  
    componentDidUpdate() {
      localStorage.setItem('count', this.state.count)
    }
  
    componentWillUnmount() {
      clearInterval(this.time)
    }
  
    handleStart = () => {
      this.setState({isCounting: true})
      this.time = setInterval(() => {
        this.setState({count: this.state.count + 1})
      }, 1000)
    }
  
    handleStop = () => {
      this.setState({isCounting: false})
      clearInterval(this.time)
    }
  
    handleReset = () => {
      this.setState({isCounting: false, count: 0})
      clearInterval(this.time)
    }
  
    render() {
        return (
            <div className="App">
                <h1>React Timer</h1>
                <h3>{this.state.count}</h3>
                {!this.state.isCounting ? (
                    <button onClick={this.handleStart}>Start</button>
                ) : (
                    <button onClick={this.handleStop}>Stop</button>
                )}
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
  }
  
  export default App;