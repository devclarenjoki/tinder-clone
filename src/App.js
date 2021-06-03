import './App.css';
import Header from './Header';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';
function App() {
  return (
    //BM class naming convention
    <div className="app">
      {/**Header */}
      <Header/>
      {/**Tinder Cards */}
      <TinderCards/>
      {/**SwipeButtons */}
      <SwipeButtons />
    </div>
  );
}

export default App;
