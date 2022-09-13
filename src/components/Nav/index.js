import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
    // destructure
    const {categories = [], currentCat, setCurrentCat} = props;

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
					<li>
						<a data-testid="about" href="#about">
							About me
						</a>
					</li>

					<li>
						<span>Contact</span>
					</li>

					{/* implicit return */}
					{categories.map(category => (
						<li
                            className={`mx-1 ${currentCat.name === category.name && 'navActive'}`}
                            key={category.name}
                        >
                            {/* short circuit statement - if that comparison is true, run the second half of the statement */}
							<span
								onClick={() => setCurrentCat(category)}
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
