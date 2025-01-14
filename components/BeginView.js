import React from "react";
import { View, StyleSheet, Text, VrButton } from "react-360";

const BeginView = ({ level, title, onClick }) => {
  return (
    <View>
      <Text style={styles.title}>
        {title} {/* Take the quiz */}
      </Text>
      <Text style={styles.level}>Level {level}</Text>
      <VrButton onClick={() => onClick()} style={styles.BeginButton}>
        <Text style={styles.text}>Begin</Text>
      </VrButton>
    </View>
  );
};

const styles = StyleSheet.create({
  startButton: {},
  text: {
    backgroundColor: "#333333",
    fontSize: 40,
    fontWeight: "400",
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: "center",
    textAlignVertical: "center",
    borderRadius: 10,
    fontWeight: "bold",
  },
  title: {
    fontSize: 50,
    fontWeight: "400",
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: "center",
    textAlignVertical: "center",
    borderRadius: 10,
    fontWeight: "bold",
    color: "#ff00ff",
  },
  level: {
    fontSize: 45,
    fontWeight: "400",
    paddingBottom: 10,
    paddingTop: 10,
    textAlign: "center",
    textAlignVertical: "center",
    borderRadius: 10,
    marginBottom: 50,
  },
});

export default BeginView;
