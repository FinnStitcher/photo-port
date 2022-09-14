import React, {useEffect} from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
    // destructure
    const {categories = [], currentCat, setCurrentCat, contactSelected, setContactSelected} = props;

    useEffect(() => {
        document.title = capitalizeFirstLetter(currentCat.name);
    }, [currentCat]);

	return (
		<header className="flex-row">
			<h2>
				<a data-testid="link" href="/">
					<span role="img" aria-label="camera">
                    📸
					</span>
					Oh Snap!
				</a>
			</h2>

			<nav>
				<ul className="flex-row">
					<li className="mx-2">
						<a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
							About me
						</a>
					</li>

					<li className={`mx-2 ${contactSelected && 'navActive'}`}>
						<span onClick={() => setContactSelected(true)}>Contact</span>
					</li>

					{/* implicit return */}
					{categories.map(category => (
						<li
                            className={`mx-1 ${currentCat.name === category.name && !contactSelected && 'navActive'}`}
                            key={category.name}
                        >
                            {/* short circuit statement - if that comparison is true, run the second half of the statement */}
							<span
								onClick={() => {
                                    setCurrentCat(category);
                                    setContactSelected(false);
                                }}
							>
								{capitalizeFirstLetter(category.name)}
							</span>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
}

export default Nav;
