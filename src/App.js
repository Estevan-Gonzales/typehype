import logo from './logo.svg';
import './App.css';
import Keyboard from './components/Keyboard'

function App() {

  document.addEventListener('keydown', function(event) {
    event.stopImmediatePropagation();

    let keys = "qwertyuiopasdfghjklzxcvbnm".split('');
    for (let i=0; i<keys.length; i++) {
      if (event.key === keys[i]) {
        let selectedElement = document.getElementById(keys[i]);
        selectedElement.className = "key-pressed";
      }
    }

    let keyNumbers = "1234567890".split('');
    for (let i=0; i<keyNumbers.length; i++) {
      if (event.key === keyNumbers[i]) {
        let selectedElement = document.getElementById("key" + keyNumbers[i]);
        selectedElement.className = "key-pressed";
      }
    }

    if (event.code === "ShiftRight") {
      let toShow = document.getElementsByClassName("key-double-alt");
      for (let i=0; i<toShow.length; i++) {
        toShow[i].hidden = false;
      }
      let selectedElement = document.getElementById("keyShiftRight");
      selectedElement.className = "key-pressed";

      let toHide = document.getElementsByClassName("key-double");
      for (let i=0; i<toHide.length; i++) {
        toHide[i].hidden = true;
      }
    }
  });

  document.addEventListener('keyup', function(event) {
    event.stopImmediatePropagation();
    let keys = "qwertyuiopasdfghjklzxcvbnm".split('');
    for (let i=0; i<keys.length; i++) {
      if (event.key === keys[i]) {
        let selectedElement = document.getElementById(keys[i]);
        selectedElement.className = "key-letter";
      }
    }

    let keyNumbers = "1234567890".split('');
    for (let i=0; i<keyNumbers.length; i++) {
      if (event.key === keyNumbers[i]) {
        let selectedElement = document.getElementById("key" + keyNumbers[i]);
        selectedElement.className = "key-double";
      }
    }

    if (event.code === "ShiftRight") {
      let toShow = document.getElementsByClassName("key-double-alt");
      for (let i=0; i<toShow.length; i++) {
        toShow[i].hidden = true;
      }

      let toHide = document.getElementsByClassName("key-double");
      for (let i=0; i<toHide.length; i++) {
        toHide[i].hidden = false;
      }

      let selectedElement = document.getElementById("keyShiftRight");
      selectedElement.className = "key-single";
    }
  })

  return (
    <div className="grid">
      
      <div className="row-1">
        <div className="key-double" id="keyBacktick">`</div>
        <div className="key-double-alt" id="keyTilde" hidden={true}>~</div>
        <div className="key-double" id="key1">1</div>
        <div className="key-double-alt" id="keyExclamation" hidden={true}>!</div>
        <div className="key-double" id="key2">2</div>
        <div className="key-double-alt" id="keyAt" hidden={true}>@</div>
        <div className="key-double" id="key3">3</div>
        <div className="key-double-alt" id="keyPound" hidden={true}>#</div>
        <div className="key-double" id="key4">4</div>
        <div className="key-double-alt" id="keyDollar" hidden={true}>$</div>
        <div className="key-double" id="key5">5</div>
        <div className="key-double-alt" id="keyPercent" hidden={true}>%</div>
        <div className="key-double" id="key6">6</div>
        <div className="key-double-alt" id="keyCarrot" hidden={true}>^</div>
        <div className="key-double" id="key7">7</div>
        <div className="key-double-alt" id="keyAnd" hidden={true}>&</div>
        <div className="key-double" id="key8">8</div>
        <div className="key-double-alt" id="keyAsterisk" hidden={true}>*</div>
        <div className="key-double" id="key9">9</div>
        <div className="key-double-alt" id="keyOpenParens" hidden={true}>(</div>
        <div className="key-double" id="key0">0</div>
        <div className="key-double-alt" id="keyCloseParens" hidden={true}>)</div>
        <div className="key-double" id="keyMinus">-</div>
        <div className="key-double-alt" id="keyUnderscore" hidden={true}>_</div>
        <div className="key-double" id="keyEqual">=</div>
        <div className="key-double-alt" id="keyPlus" hidden={true}>+</div>
        <div className="key-single" id="keyDelete">DELETE</div>

      </div>

      <div className="row-2">
        <div className="key-single">TAB</div>
        <div className="key-letter" id="q">Q</div>
        <div className="key-letter" id="w">W</div>
        <div className="key-letter" id="e">E</div>
        <div className="key-letter" id="r">R</div>
        <div className="key-letter" id="t">T</div>
        <div className="key-letter" id="y">Y</div>
        <div className="key-letter" id="u">U</div>
        <div className="key-letter" id="i">I</div>
        <div className="key-letter" id="o">O</div>
        <div className="key-letter" id="p">P</div>
        <div className="key-double" id="keyOpenBracket">[</div>
        <div className="key-double-alt" id="keyObenCurlyBrackets" hidden={true}></div>
        <div className="key-double" id="keyCloseBrackets">]</div>
        <div className="key-double-alt" id="keyCloseCurlyBrackets" hidden={true}></div>
        <div className="key-double" id="keyBackslash">\</div>
        <div className="key-double-alt" id="keyPipe" hidden={true}>|</div>

      </div>

      <div className="row-3">
        <div className="key-single">CAPS</div>
        <div className="key-letter" id="a">A</div>
        <div className="key-letter" id="s">S</div>
        <div className="key-letter" id="d">D</div>
        <div className="key-letter" id="f">F</div>
        <div className="key-letter" id="g">G</div>
        <div className="key-letter" id="h">H</div>
        <div className="key-letter" id="j">J</div>
        <div className="key-letter" id="k">K</div>
        <div className="key-letter" id="l">L</div>
        <div className="key-double" id="keySemicolon">;</div>
        <div className="key-double-alt" id="keyColon" hidden={true}>:</div>
        <div className="key-double" id="keySingleParenthesis">'</div>
        <div className="key-double-alt" id="keyDoubleParenthesis" hidden={true}>"</div>
        <div className="key-single">RETURN</div>
      </div>

      <div className="row-4">
        <div className="key-single">SHIFT</div>
        <div className="key-letter" id="z">Z</div>
        <div className="key-letter" id="x">X</div>
        <div className="key-letter" id="c">C</div>
        <div className="key-letter" id="v">V</div>
        <div className="key-letter" id="b">B</div>
        <div className="key-letter" id="n">N</div>
        <div className="key-letter" id="m">M</div>
        <div className="key-double" id="keyComma">,</div>
        <div className="key-double-alt" id="keyLessThan" hidden={true}></div>
        <div className="key-double" id="KeyPeriod">.</div>
        <div className="key-double-alt" id="keyLessThan" hidden={true}></div>
        <div className="key-double" id="keySlash">/</div>
        <div className="key-double-alt" id="keyLessThan" hidden={true}>?</div>
        <div className="key-single" id="keyShiftRight">SHIFT</div>
      </div>

      <div className="row-5">
        <div className="key-single">CTRL</div>
        <div className="key-single">OPT</div>
        <div className="key-single">CMD</div>
        <div className="key-single">SPACE</div>
        <div className="key-single">CMD</div>
        <div className="key-single">OPT</div>
        <div></div>
        <div></div>
      </div>

    </div>
  );
}

export default App;
