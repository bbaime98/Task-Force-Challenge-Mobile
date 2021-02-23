import React from "react";
import { StyleSheet } from "react-native";
import colors from "../../../utils/colors";

import AppText from "../AppText";

function ErrorMessage({ error, visible }) {
  if (!visible || !error) return null;

  return <AppText style={styles.error}>{error}</AppText>;
}

const styles = StyleSheet.create({
  error: { 
    color: colors.danger,
    fontSize: 15,
    marginVertical: 0,
  },
});

export default ErrorMessage;
