import React from 'react';
import About from './components/About';
import Nav from './components/Nav';

// this is the root of the whole app

function App() {
	return (
    <div>
        <Nav></Nav>
        <main>
            <About></About>
        </main>
    </div>
    );
};

export default App;
