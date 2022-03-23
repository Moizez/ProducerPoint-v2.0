import React from 'react';
//@ts-ignore
import logo from '../../assets/images/logo.png';

import { Container, Image } from '../../styles';

const SplashScreen = () => {
	return (
		<Container
			style={{ backgroundColor: '#fff' }}
			align="center"
			justify="center"
		>
			<Image source={logo} height={250} width={250} />
		</Container>
	);
};

export default SplashScreen;
