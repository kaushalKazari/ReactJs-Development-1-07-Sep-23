import logo from './logo.svg';
import './App.css';
import ComponentA from './ComponentA';
import MyComponent4 from './components/MyComponent4';
import MyComponent5 from './components/MyComponent5';
import MyComponent3 from './components/MyComponent3';
import { ClassComponent1 } from './components/ClassComponent1';

function App() {
  return (
    <div className="App">
      <h1>Test React App</h1>      
    <ComponentA/>
    <MyComponent3/>
    <MyComponent4 village="Kazari Khurd"/>
    <MyComponent5/>
    <ClassComponent1/>
    </div>
  );
}

export default App;
