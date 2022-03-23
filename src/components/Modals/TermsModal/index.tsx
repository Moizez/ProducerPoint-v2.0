import React, { createRef } from 'react';
import { StyleSheet, Platform } from 'react-native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons'
import HTMLView from 'react-native-htmlview';
import { colors } from '../../../styles/theme.json'
import { terms } from '../../../data/terms';

import { Container, Touchable, Modal, Title, Text, Checkbox, Spacer, Button } from '../../../styles';

type ModalizeProps = {
    close: () => void,
    open: () => void
}

export const modalRef = createRef<ModalizeProps>()

const TermsModal = ({ setField }) => {

    return (
        <Modal ref={modalRef} adjustToContentHeight>
            <Container>
                <Container
                    background='primary'
                    row
                    align='center'
                    customPadding='10px 20px 10px 10px'
                    style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
                >
                    <Touchable onPress={() => modalRef.current.close()} style={{ position: 'absolute', paddingLeft: 10 }}>
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
                            modalRef.current.close()
                        }}
                    >
                        Eu concordo com os termos e condições
                    </Button>

                </Container>

            </Container>
        </Modal>
    )
}

const styles = StyleSheet.create({
    a: {
        fontWeight: '300',
        color: '#FF3366', // make links coloured pink
    },
});

export default TermsModal;