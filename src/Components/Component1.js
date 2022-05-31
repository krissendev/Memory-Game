import React from 'react';

const SayHello = () => (
	<div>
		<h1>Memory Game</h1>
		<h4>(work in progress)</h4>
	</div>
);

const ShowButton = () => (
	<div>
		<button type="button">?</button>
		<button type="button">?</button>
		<button type="button">?</button>
		<br></br>
		<button type="button">?</button>
		<button type="button">?</button>
		<button type="button">?</button>
		<br></br>
		<button type="button">?</button>
		<button type="button">?</button>
		<button type="button">?</button>
	</div>
);

const NumberofTries = () => (
	<div>
		<h3>number of tries: </h3>
	</div>
);
export { ShowButton, SayHello, NumberofTries };
