import './App.css';
import { SayHello, ShowButton, NumberofTries } from './Components/Component1';

function App() {
	return (
		<div className="App">
			<SayHello></SayHello>
			<ShowButton></ShowButton>
			<NumberofTries></NumberofTries>
		</div>
	);
}

export default App;
