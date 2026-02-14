//import { useState } from 'react'
//import './App.css'


// UserProfile component: A reusable component to display user information
function UserProfile(props) {
  return (
    <div>
      <h1>User Profile:</h1>{/* Heading for the user profile section */}
      <h2>Username: {props.name}</h2>{/* Displaying the user's name from props */}
      <h2>Age: {props.age}</h2>{/* Displaying the user's age from props */}
    </div>
  );
}

// App component: Renders multiple UserProfile components with different data
function App() {
  return (
    <div>
      {/* Passing different names and ages to the UserProfile component */}
      <UserProfile name="John" age={15}/>
      <UserProfile name="Kansas" age={25} />
      <UserProfile name="Rupa" age={35}/>
    </div>
  );
}

export default App; // Exporting the App component for use in the application