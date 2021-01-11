import React, { useState } from 'react'

const useStateHook = () => {
	// Declaración de una variable de estado que llamaremos "count"
	const [count, setCount] = useState(0)

	return (
		<div className="use-state">
			<p>You clicked {count} times</p>
			<button onClick={() => setCount(count + 1)}>Click me</button>
		</div>
	)
}

export default useStateHook
