// import './App.css';
// import { useEffect, useState } from 'react';
//
// function App() {
//   const [data, setData] = useState(null);
//   const [toggle, setToggle] = useState(false);
//   const [value, setValue] = useState('false');
//
//   const onClick = () => setToggle(prev => !prev);
//
//   const onChange = (e) => setValue(e.target.value);
//
//   useEffect(() => {
//     setTimeout(() => {
//       setData({});
//     }, 100);
//   }, []);
//
//   return (
//     <div className="App">
//       {toggle && <div data-testid={'toggle-elem'}>toggle</div>}
//       {data && <div>someText</div>}
//       <h1 style={{ color: 'red' }}>Hello world</h1>
//       <button onClick={onClick} data-testid={'toggle-btn'}>click me</button>
//       <input type="text" value={value} placeholder={'input value'} onChange={onChange} data-testid={'input-elem'} />
//     </div>
//   );
// }
//
// export default App;

import AppRouter from './router/AppRouter';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <div>
      <Navbar />
      <AppRouter />
    </div>
  );
};

export default App;