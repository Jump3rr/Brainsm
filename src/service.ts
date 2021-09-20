import TrackPlayer from "react-native-track-player"
//export default async function trackPlayerServices() {
module.exports = async function () {
  // TrackPlayer.addEventListener(Event.RemotePlay, () => TrackPlayer.play())
  TrackPlayer.addEventListener("remote-play", () => TrackPlayer.play())
  TrackPlayer.addEventListener("remote-pause", () => TrackPlayer.pause())
  TrackPlayer.addEventListener("remote-stop", () => TrackPlayer.destroy())
  TrackPlayer.addEventListener("remote-jump-forward", async ({interval}: {interval: number}) => {
    const position = await TrackPlayer.getPosition();
    await TrackPlayer.seekTo(position+interval);
  },)
  TrackPlayer.addEventListener("remote-jump-backward", async ({interval}: {interval: number}) => {
    const position = await TrackPlayer.getPosition();
    await TrackPlayer.seekTo(position-interval);
  },)
 // TrackPlayer.addEventListener("playback-track-changed", () => {})
 // TrackPlayer.addEventListener("playback-state", (state) => {console.log('playback-state', state);});
}