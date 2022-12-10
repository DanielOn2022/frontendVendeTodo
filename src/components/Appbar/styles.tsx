import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  button: {
    color: "white",
    marginRight: 1,
    marginLeft: 4,
  },
  searchbox: {
    position: "relative",
    borderRadius: 4,
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.25)",
    },
    "&:selected":{
        border:0
    },
    color: "white",
    width: "100%",
    height: 30,
    paddingX: 20,
    paddingY: 12,
    margin: 8,
    border: 0,
  },
});
