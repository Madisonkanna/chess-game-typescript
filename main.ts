import './style.css'

import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter, createBoard } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="board" id="board"></div>
    <table>
      <tr>
        <td class="piece"></td>
        <td class="piece"></td>
        
        <td class="piece"></td>
        <td class="piece"></td>
        
        <td class="piece"></td>
        <td class="piece"></td>
      </tr>
      <tr>
        <td class="piece"></td>
        <td class="piece"></td>
        <td class="piece"></td>
        <td class="piece"></td>
        <td class="piece"></td>
        <td class="piece"></td>
        <td class="piece"></td>
        <td class="piece"></td>
      </tr>
      <tr>
        <td class="piece"></td>
        <td class="piece"></td>
        <td class="piece"></td>
        <td class="piece"></td>
        <td class="piece"></td>
        <td class="piece"></td>
        <td class="piece"></td>
        <td class="piece"></td>
      </tr>
      <tr>

        <td class="piece"></td>
        <td class="piece"></td>
        <td class="piece"></td>
        <td class="piece"></td>
        <td class="piece"></td>
        <td class="piece"></td>
        <td class="piece"></td>
        <td class="piece"></td>
      </tr>

      <tr>
      </tr>
        <td class="piece"></td>
        <td class="piece"></td>
        <td class="piece"></td>
        <td class="piece"></td>
        <td class="piece"></td>
        <td class="piece"></td>
        <td class="piece"></td>
        <td class="piece"></td>
      <tr>
        <td class="piece"></td>
        <td class="piece"></td>
        <td class="piece"></td>
        <td class="piece"></td>
        <td class="piece"></td>
        <td class="piece"></td>
        <td class="piece"></td>
        <td class="piece"></td>
      </tr>
      <tr>
        <td class="piece"></td>
        <td class="piece"></td>
        <td class="piece"></td>
        <td class="piece"></td>
        <td class="piece"></td>
        <td class="piece"></td>
        <td class="piece"></td>
        <td class="piece"></td>
      </tr>
 
    </table>


    <div class="card">



      
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

createBoard(document.getElementById("board"));
setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);
const board = document.getElementById("board");


for (let i = 1; i < 6; i++) {

  const square = document.createElement("div");
  square.innerHTML = "X";
  board.appendChild(square);

  

}
