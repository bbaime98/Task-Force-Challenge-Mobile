import React from "react"
import { View, Text, StyleSheet, Modal, TouchableOpacity } from "react-native"
import colors from "../utils/colors"
import { FULL_WIDTH_SIZE, FULL_HEIGHT_SIZE } from '../utils/dimensions'

export default function AppModal({ modalTitle, visible, yesHandler, noHandler }) {
    return (
        <Modal visible={visible}>
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <View style={styles.modalTitleContainer}>
                        <Text style={styles.modalTitle}>
                            {modalTitle}
            </Text>
                    </View>
                    <View style={styles.actionBtnContainer}>
                        <TouchableOpacity style={styles.btnContainer} onPress={yesHandler}>
                            <Text style={styles.yesBtnText}>Yes</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnContainer} onPress={noHandler}>
                            <Text style={styles.noBtnText}>No</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    actionBtnContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        height: "40%",
        width: "100%",
        alignItems: "center",
        position: "absolute",
        bottom: 15
    },
    btnContainer: { padding: 10, },
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.black,
    },
    modalContent: {
        width: FULL_WIDTH_SIZE - 60,
        height: FULL_HEIGHT_SIZE / 7,
        backgroundColor: "white",
        borderRadius: 3,
    },
    modalTitleContainer: {
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 15,
    },
    modalTitle: {
        color: colors.black,
        fontSize: 15
    },
    yesBtnText: {
        color: colors.danger,
        fontSize: 16
    },
    noBtnText: {
        fontSize: 16
    },
})
