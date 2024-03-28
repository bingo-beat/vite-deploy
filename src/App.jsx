import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import skull from "./skull";
import InfiniteLoopAudio from "./InfiniteLoopAudio";
import voice from "./assets/audio/audio.mp3";
function App() {
  return (
    <>
      <skull></skull>
      <InfiniteLoopAudio src={voice} />
    </>
  );
}

export default App;
