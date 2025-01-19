import React, { Component } from 'react';
import NavigationBar from './components/NavigationBar/NavigationBar';
import DashboardHeader from './components/DashboardHeader/DashboardHeader';
import NewsBox from './components/NewsBox/NewsBox';
import GuideButton from './components/GuideButton/GuideButton';
import RecycleRecognizer from './components/RecycleRecognizer/recycleRecognizer';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      page: 'dashboard'
    }
  }

  onRecyclingGuideButton = () => {
    this.setState({page: 'recyclingGuide'});
  }

  render() {
    const { page } = this.state;
    if (page === 'dashboard') {
      return (
      <div className="App">
        <NavigationBar />
        <DashboardHeader />
        <div style={{display: 'flex'}}>
          <GuideButton onRecyclingGuideButton={this.onRecyclingGuideButton} />
          <NewsBox />
        </div>
      </div>
      )
    } else if (page === 'recyclingGuide') {
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