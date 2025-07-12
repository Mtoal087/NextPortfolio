import HeroElement from '@/components/index-components/hero';
import Mail from '@/components/index-components/mail';
import Tools from '@/components/index-components/tools';
import React from 'react';

const App = () => {
	return (
		<>
			<HeroElement />
			<div id="tools" className="pt-6">
				<Tools />
			</div>
			<Mail />
		</>
	);
};

export default App;
