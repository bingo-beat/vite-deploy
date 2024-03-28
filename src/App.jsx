import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AudioPlayer from "./AudioPlayer";
import audio from "./assets/audio/audio.mp3";
function App() {
  return (
    <>
      <AudioPlayer src={audio} />
    </>
  );
}

export default App;