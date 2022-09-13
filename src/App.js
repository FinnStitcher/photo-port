import React, {useState} from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Gallery from './components/Gallery';

// this is the root of the whole app

function App() {
    // i do not fully understand why we are calling useState twice here
    // i guess because we need to maintain two states - the full list and the current one?
	const [categories] = useState([
		{
			name: 'commercial',
			description:
				'Photos of grocery stores, food truck, and other commercial projects'
		},
		{
			name: 'portraits',
			description: 'Portraits of people in my life'
		},
		{
			name: 'food',
			description: 'Delicious delicacies'
		},
		{
			name: 'landscape',
			description:
				'Fields, farmhouses, waterfalls, and the beauty of nature'
		}
	]);
    const [currentCat, setCurrentCat] = useState(categories[0]);
    // because this state needs to be used by both nav and gallery, and they are siblings, we have it lifted up here

	return (
    <div>
        <Nav categories={categories} currentCat={currentCat} setCurrentCat={setCurrentCat}></Nav>
        <main>
            <Gallery></Gallery>
            <About></About>
        </main>
    </div>
    );
};

export default App;
