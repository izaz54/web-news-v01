import Tabs from './Tabs'; 
import './App.css';      

function App() {
  return (
    <div className="App">
      <h1>Job Application Form</h1>
      {/* Render the Tabs component */}
      <Tabs currentActiveTab={0} />
    </div>
  );
}

export default App;