import logo from './logo.svg';
import './App.css';

function App() {
  return (

    <div>
    {/* <button id="cloneButton" onClick={handleCloneCard}>Clone Card</button>
    <button id="colorButton" onClick={handleChangeCardColor}>Change Card Color</button>
    <button id="titleButton" onClick={handleChangeTitle}>Change Title</button>
    <button id="deleteButton" onClick={handleDeleteLastCard}>Delete Last Card</button> */}

    <div className="cards">
      {/* Card Template */}
      <div className="card-container">
        <div className="card-content">
          {/* Card Title */}
          <h2 className="cardTitle">PSU Blue and White</h2>
          {/* Card Description */}
          <p> "Blue and White is a Penn State Football Game day where the team is split into two teams blue and white" : "Blue and White game day"</p>
          {/* Card Image */}
          <img src="https://nittanylionswire.usatoday.com/wp-content/uploads/sites/100/2023/04/USATSI_20469545.jpg?w=1000" alt="Card Image" />
          <div>
            {/* Toggle Description Button */}
            <button className="details-button">Toggle Description</button>
          </div>
          {/* Hidden Description */}
         <p className="description-hidden">Blue and White is a Penn State Football Game day where the team is split into two teams blue and white</p>
        </div>
      </div>
    </div>
  </div>
);
}

export default App;





