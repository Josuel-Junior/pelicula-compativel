import { AVPlaybackStatus, ResizeMode, Video } from "expo-av";
import { useState } from "react";
import { StyleSheet } from "react-native";

import { hideAsync } from "expo-splash-screen";

interface IProps {
  onComplete: (status: boolean) => void;
}
export function Splash({ onComplete }: IProps) {
  const [lastStatus, setStatus] = useState<AVPlaybackStatus>(
    {} as AVPlaybackStatus
  );
  function onPlaybackStatusUpdate(status: AVPlaybackStatus) {
    if (status.isLoaded) {
      if (lastStatus.isLoaded !== status.isLoaded) {
        hideAsync();
      }

      if (status.didJustFinish) {
        onComplete(true);
      }
    }

    setStatus(() => status);
  }

  return (
    <Video
      style={StyleSheet.absoluteFill}
      resizeMode={ResizeMode.COVER}
      source={require("../../../assets/splashVideo.mp4")}
      isLooping={false}
      onPlaybackStatusUpdate={onPlaybackStatusUpdate}
      shouldPlay={true}
    />
  );
}
