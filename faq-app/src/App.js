import './App.css';
import { FaqQuestion } from './components/FaqQuestions';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Footer />
      </header>
      <body>
        <FaqQuestion />
      </body>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
