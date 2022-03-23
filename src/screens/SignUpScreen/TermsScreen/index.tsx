import React from 'react';
import { StyleSheet } from 'react-native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons'
import { goBack } from '../../../utils/rootNavigation';
import HTMLView from 'react-native-htmlview';
import { colors } from '../../../styles/theme.json'
import { terms } from '../../../data/terms';

import { Button, Container, ScrollView, Spacer, Title, Touchable } from '../../../styles';


const TermsScreen = ({ route }) => {

    const { setField } = route?.params

    return (
        <ScrollView>
            <Container
                background='primary'
                row
                align='center'
                customPadding='10px 20px 10px 10px'
            >
                <Touchable onPress={() => goBack()} style={{ position: 'absolute', paddingLeft: 10 }}>
                    <Icon name='chevron-down' size={40} color={colors.light} />
                </Touchable>
                <Container align='center' pointerEvents='box-none'>
                    <Title bold color='light'>Termos de uso</Title>
                </Container>
            </Container>

            <Container hasPadding>

                <HTMLView
                    value={terms}
                    stylesheet={styles}
                />

                <Spacer size={20} />

                <Button
                    block
                    background='primary'
                    onPress={() => {
                        setField()
                        goBack()
                    }}
                >
                    Eu concordo com os termos e condições
                </Button>

            </Container>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    a: {
        fontWeight: '300',
        color: '#FF3366', // make links coloured pink
    },
});

export default TermsScreen;