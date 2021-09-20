import React, { PropsWithChildren } from "react";
import { Keyboard, StyleSheet, ScrollView, TouchableOpacity } from "react-native";

interface Props {
    withScrollView?: boolean;
}

const KeyboardDismissView: React.FC<Props> = (props: PropsWithChildren<Props>) => {
    if(props.withScrollView) {
        return (
            <ScrollView keyboardShouldPersistTaps="never">
                {props.children}
            </ScrollView>
        )
    }

    return (
        <TouchableOpacity activeOpacity={1} style={styles.container} onPress={Keyboard.dismiss}>
            {props.children}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default KeyboardDismissView;