function Tabs({currentActiveTab=0}) {
  return (
    // Use the main container class from the CSS
    <div className="tabs-container">

      {/* Use the header container class */}
      <div className="tab-headers">
        {/* Placeholder - we'll generate these dynamically later */}
        <button className={`tab-header ${currentActiveTab===0?'active':''}`}>1. Personal Info</button>
        <button className={`tab-header ${currentActiveTab===1?'active':''}`}>2. Experience</button>
        <button className={`tab-header ${currentActiveTab===2?'active':''}`}>3. Review & Submit</button>
      </div>

      {/* Use the content container class */}
      <div className="tab-content">
        {currentActiveTab === 0 && (
          <div>
            <h2>Personal Information</h2>
            <p>Content for the personal info tab goes here.</p>
          </div>
        )}
        
      </div>

      {/* Use the navigation container class */}
      <div className="tab-navigation">
        {/* Placeholder buttons */}
        <button>Previous</button>
        <button>Next</button>
      </div>

    </div>
  );
}

export default Tabs;