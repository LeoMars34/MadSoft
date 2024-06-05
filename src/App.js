import {
    Navigate,
    Route,
    BrowserRouter as Router,
    Routes,
} from 'react-router-dom';
import { Home } from './Home';
import { Game } from './Game';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/Home" />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/Game" element={<Game />} />
            </Routes>
        </Router>
    );
}

export default App;
