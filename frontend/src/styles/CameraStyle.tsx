import { StyleSheet } from "react-native";
import { Platform } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },

  camera: {
    flex: 1,
  },

  controls: {
    position: "absolute",
    bottom: 40,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  controlText: {
    color: "#FFF",
    fontSize: 14,
  },

  shutterOuter: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 4,
    borderColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
  },

  shutterInner: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: "#FFF",
  },



  permissionText: {
    textAlign: "center",
    color: "#666",
    marginBottom: 30,
  },


  permissionContainer: {
  flex: 1,
  backgroundColor: "#FFEFF3",
  alignItems: "center",
  justifyContent: "center",
  paddingHorizontal: 30,
},

permissionTitle: {
  fontSize: 22,
  fontWeight: "700",
  marginBottom: 12,
  textAlign: "center",
},

permissionSubtitle: {
  fontSize: 14,
  color: "#7A7A7A",
  textAlign: "center",
  lineHeight: 20,
  marginBottom: 50,
},

cameraIconWrapper: {
  marginBottom: 50,
},

cameraIconInner: {
  width: 120,
  height: 120,
  borderRadius: 60,
  backgroundColor: "#FF3B6A",
  alignItems: "center",
  justifyContent: "center",

  ...(Platform.OS === "web"
    ? {
        boxShadow: "0px 6px 20px rgba(0,0,0,0.2)",
      }
    : {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 8,
      }),
},
cameraIcon: {
  fontSize: 40,
  color: "#fff",
},

permissionButton: {
  width: "100%",
  backgroundColor: "#FF3B6A",
  paddingVertical: 16,
  borderRadius: 30,
  alignItems: "center",
  marginBottom: 16,
},

permissionButtonText: {
  color: "#fff",
  fontSize: 16,
  fontWeight: "600",
},

notNowText: {
  fontSize: 14,
  color: "#9A9A9A",
},

});
