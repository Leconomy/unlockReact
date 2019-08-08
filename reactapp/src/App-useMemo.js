import React, {useState, useMemo} from 'react';
export default function App() {
	const [height, setHeight] = useState(0);

	const measuredRef = useMemo(() => {
		return node => {
			if (node !== null) {
				setHeight(node.getBoundingClientRect().height);
			}
		}
	}, []);

	return (
		<>
			<h1 ref={measuredRef}>Hello, world</h1>
			<h2>The above header is {Math.round(height)}px tall</h2>
		</>
	);
}