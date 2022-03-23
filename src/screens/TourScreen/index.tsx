import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { replace } from '../../utils/rootNavigation';
import { colors } from '../../styles/theme.json';
import { onboardRequest } from '../../store/modules/auth/actions';
//@ts-ignore
import img1 from '../../assets/images/tour/01.jpg';
//@ts-ignore
import img2 from '../../assets/images/tour/02.jpg';
//@ts-ignore
import img5 from '../../assets/images/tour/05.jpg';
//@ts-ignore
import logo from '../../assets/images/logo.png';

import { Button, Onboarding, Image } from '../../styles';

const TourScreen = () => {
	const dispatch = useDispatch();
	const [currentTour, setCurrentTour] = useState(0);

	const goToSignIn = () => {
		dispatch(onboardRequest());
		replace('SignInScreen');
	};

	const NextButton = ({ ...props }) => (
		<Button {...props} mode="text" textColor="dark">
			Próximo
		</Button>
	);

	const SkipButton = ({ skipLabel, ...props }) => (
		<Button {...props} onPress={goToSignIn} mode="text" textColor="dark">
			Pular
		</Button>
	);

	const DoneButton = ({ ...props }) => (
		<Button {...props} onPress={goToSignIn} mode="text" textColor="dark">
			Começar
		</Button>
	);

	return (
		<Onboarding
			NextButtonComponent={NextButton}
			SkipButtonComponent={SkipButton}
			DoneButtonComponent={DoneButton}
			titleStyles={{ fontSize: 20, fontFamily: 'Quantico_700Bold' }}
			subTitleStyles={{ fontSize: 14, fontFamily: 'Quantico_400Regular' }}
			pages={[
				{
					backgroundColor: colors.lightMuted,
					image: <Image source={img1} width={450} height={450} radius={10} />,
					title: 'Chegou o seu app de bolões de futebol definitivo!',
					subtitle: 'Será que você realmente entende de futebol?',
				},
				{
					backgroundColor: colors.light,
					image: <Image source={img2} width={450} height={450} radius={10} />,
					title: 'Campeonatos do mundo todo!',
					subtitle:
						'Teste seus conhecimentos nos principais campeonatos do planeta.',
				},
				{
					backgroundColor: colors.lightMuted,
					image: <Image source={img5} width={450} height={450} radius={10} />,
					title: 'Suba de nível e prove que você é o melhor!',
					subtitle:
						'Encare seus amigos e adversários de todo país. E aí, está preparado?',
				},
				{
					backgroundColor: colors.light,
					image: <Image source={logo} width={250} height={250} />,
					title: 'E ai, está preparado?',
					subtitle: 'Boa sorte palpiteiro!',
				},
			]}
		/>
	);
};

export default TourScreen;
