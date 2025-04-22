import { render } from '@czechitas/render';
import '../global.css';
import './index.css';

const Header = () => {
  return (
    <header>
      <h1>Lenka</h1>   
    </header>)
}

const intro = "intro"

document.querySelector('#root').innerHTML = render(
  <div className="container">
    
      <Header />
    <main>
      <p className={intro}>Startovací šablona pro webovou aplikaci v JavaScriptu s JSX. Vytvořeno pomocí <a href="https://www.npmjs.com/package/create-kodim-app">create-kodim-app</a>.</p>
    </main>
    <footer>
      <p>Czechitas, Digitální akademie: Web</p>
    </footer>
  </div>
);
