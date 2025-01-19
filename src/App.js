import React, { Component } from 'react';
import NavigationBar from './components/NavigationBar/NavigationBar';
import DashboardHeader from './components/DashboardHeader/DashboardHeader';
import NewsBox from './components/NewsBox/NewsBox';
import RecycleRecognizer from './components/RecycleRecognizer/recycleRecognizer';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dashboard: false
    }
  }

  render() {
    const { dashboard } = this.state;
    if (dashboard) {
      return (
      <div className="App">
        <NavigationBar />
        <DashboardHeader />
        <NewsBox/>
      </div>
      )
    } else {
      return (
        <div>
          <NavigationBar />
          <RecycleRecognizer />
        </div>
      )
    }
  }
}

export default App;
