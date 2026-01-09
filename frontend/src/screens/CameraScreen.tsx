import { CameraView, useCameraPermissions } from "expo-camera";
import * as Location from "expo-location";
import * as ImagePicker from "expo-image-picker";
import React, { useEffect, useRef, useState } from "react";
import {
  Alert,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import type { ScreenProps } from "../types";
import CameraStyle from "../styles/CameraStyle";

const styles = CameraStyle;

export default function CameraScreen({
  navigation,
}: ScreenProps<"CameraScreen">) {
  const cameraRef = useRef<any>(null);
  const [permission, requestPermission] = useCameraPermissions();
  const [isCameraReady, setIsCameraReady] = useState(false);

  useEffect(() => {
    Location.requestForegroundPermissionsAsync();
  }, []);

if (!permission?.granted) {
  return (
    <View style={styles.permissionContainer}>
      <Text style={styles.permissionTitle}>Share With Campus</Text>

      <Text style={styles.permissionSubtitle}>
        SnapMap needs access to your camera so you can capture and share photos
        on the live campus map.
      </Text>

      <View style={styles.cameraIconWrapper}>
        <View style={styles.cameraIconInner}>
          <Text style={styles.cameraIcon}>📷</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.permissionButton}
        onPress={requestPermission}
      >
        <Text style={styles.permissionButtonText}>
          Allow Camera Access
        </Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.notNowText}>Not now</Text>
      </TouchableOpacity>
    </View>
  );
}


  const capturePhoto = async () => {
    if (!cameraRef.current || !isCameraReady) return;

    const photo = await cameraRef.current.takePictureAsync();
    const location = await Location.getCurrentPositionAsync({});

    navigation.navigate("UploadConfirmationScreen", {
      photo,
      location,
    });
  };

  const openGallery = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      quality: 1,
    });

    if (result.canceled) return;

    const location = await Location.getCurrentPositionAsync({});

    navigation.navigate("UploadConfirmationScreen", {
      photo: {
        uri: result.assets[0].uri,
        width: result.assets[0].width ?? 0,
        height: result.assets[0].height ?? 0,
      } as any,

      location,
    });
  };

  return (
    <View style={styles.container}>
      <CameraView
        ref={cameraRef}
        style={styles.camera}
        onCameraReady={() => setIsCameraReady(true)}
      />

      <View style={styles.controls}>
        <TouchableOpacity onPress={openGallery}>
          <Text style={styles.controlText}>Gallery</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.shutterOuter}
          onPress={capturePhoto}
        >
          <View style={styles.shutterInner} />
        </TouchableOpacity>

        <View style={{ width: 50 }} />
      </View>
    </View>
  );
}
