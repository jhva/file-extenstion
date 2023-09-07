import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import Home from './pages/Home';
import { createGlobalStyle } from 'styled-components';

function App() {
  const GlobalStyle = createGlobalStyle`
    body {
      font-family: 'Noto Sans', sans-serif;
      padding: 0;
      margin: 0;
      background: #d3d3d3;
    }

    a {
      margin: 0;
      padding: 0;
    }

    div, p, span, h1 {
      margin: 0;
      box-sizing: border-box;

      ::-webkit-scrollbar {
        display: none;
      }
    }

    button, input {
      outline: none;
      border: none;
    }

    button {
      cursor: pointer;
    }

  `;
  return (
    <>
      <GlobalStyle />

      <Router>
        <Routes>
          <Route path='*' element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
