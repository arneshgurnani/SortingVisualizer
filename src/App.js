import React from 'react';
import SortingVisualizer from './SortingVisualizer/SortingVisualizer';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Merge Sort Visualizer</h1>
      <SortingVisualizer></SortingVisualizer>
      <footer>
        <p>© 2021 Arnesh Gurnani</p>
      </footer>
    </div>
  );
}

export default App;
