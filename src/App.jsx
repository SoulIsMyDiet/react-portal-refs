import Player from './components/Player.jsx';
import TimerChalenge from "./components/TimerChalenge";

function App() {
  return (
    <>
      <Player />
      <div id="challenges"></div>
        <TimerChalenge targetTime={1} title={'Easy'}/>
        <TimerChalenge targetTime={5} title={'Medium'}/>
        <TimerChalenge targetTime={10} title={'Hard'}/>
        <TimerChalenge targetTime={20} title={'Very hard'}/>
    </>
  );
}

export default App;
