import General from './components/General';
import Education from './components/Education';

function App() {
  return (
    <div className="container">
        <div className="row pt-3">
          <div className="col-sm">
            <General />
          </div>
          <div className="col-sm">
            <Education />
          </div>
        </div>
    </div>
  );
}

export default App;
