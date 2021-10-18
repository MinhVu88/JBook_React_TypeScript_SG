import React from "react";
import ReactDOM from "react-dom";
import "bulmaswatch/superhero/bulmaswatch.min.css";
// import { CodeCell } from './components';
import { Editor as TextEditor } from "./components/TextCell/Editor/index";

const App = (): JSX.Element => {
	return (
		<div className="App">
			{/* <CodeCell/> */}
			<TextEditor />
		</div>
	);
};

export default App;

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);
