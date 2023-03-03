import React from 'react';
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
React.useEffect(() => {
fetch('api/groups')
.then(res => console.log(res.json()))

}, []);


return <img src={reactLogo}/>
}
export default App;
