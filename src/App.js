import React, { useState } from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';

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

	const [contactSelected, setContactSelected] = useState(false);
    // set by nav - Nav is a function called by App(), so it has access to all the variables within App

	// data flow here:
	// currentCat is defined up here, so it's available to the entire app
	// something about function closures, i'm thinking
	// nav uses setCurrentCat to set what category we should be viewing
	// when currentCat updates, Nav and Gallery re-render because they both use that variable
	// Gallery also passes the name attached to the category into PhotoList, which uses it to display the correct photos
	return (
		<div>
			<Nav
				categories={categories}
				currentCat={currentCat}
				setCurrentCat={setCurrentCat}
                contactSelected={contactSelected}
                setContactSelected={setContactSelected}
			></Nav>
			<main>
				{!contactSelected ? (
					<>
						<Gallery currentCat={currentCat}></Gallery>
						<About></About>
					</>
				) : (
					<ContactForm></ContactForm>
				)}
			</main>
		</div>
	);
}

export default App;
