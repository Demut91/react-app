import './App.css';
import './index.css';
import Message from './message.jsx';
import logo from './logo192.png'


const message =
  'Человек, много путешествующий, похож на камень, пронесенный водою многие сотни верст: его шероховатости сглаживаются, и все в нем принимает мягкие, округленные формы…';


function App (props) {
  return (
    <div className="App" >
      <header className="App-header">
        <div className="logo"><img src={logo} alt='logo'/></div>
        <h3>{props.name}</h3>
      </header>
      <Message mess={message}/>
    </div>
  );
}



export default App;
