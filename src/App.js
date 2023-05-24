import './App.css';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import Nav from './Nav';
import { ReactComponent as Logo } from './Logo.svg'

function App() {
  return (
    <>
      <Header>
        <Logo/>
        <Nav/>
      </Header>
      <Main>

      </Main>
      <Footer>

      </Footer>
    </>
  );
}

export default App;
