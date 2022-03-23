import React from 'react'
import { TouchableWithoutFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { Container, GradientView } from '../../../styles'

const FormButton = ({ onPress, focused }) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <GradientView
                focused={focused}
                colors={
                    focused
                        ? ['#52b788', '#007200']
                        : ['#495057', '#212529']
                }
            >
                <Icon
                    name='plus'
                    color={focused ? '#FFF' : '#92929C'}
                    size={30} />
            </GradientView>
        </TouchableWithoutFeedback>
    );
}

export default FormButton