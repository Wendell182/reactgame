import React from 'react';
import Hero from '../Hero';
import { GAME_SIZE } from '../../settings/constants';
import MiniDemon from '../MiniDemon';
import Demon from '../Demon';
import Chest from '../Chest';
import Trap from '../Trap';
import { canvas, Ecanvas } from '../../contexts/canvas/helpers';


function getCanvasMap(){
  const array =[];

  for(let y = 0; y<canvas.length; y++){
    const canvasY = canvas[y];

    for(let x = 0; y < canvasY.length; x++){
      const canvasYX = canvasY[x];

      const position = {x: x, y:y};
      const text = canvas[y][x] || canvasYX;
      const key = `${x}-${y}`;
      
      if(text === Ecanvas.TRAP){
        array.push(<Trap key={key} initialPosition={position} />)
      }
      
      if(text === Ecanvas.MINI_DEMON){
        array.push(<MiniDemon key={key} initialPosition={position} />)
      }

      if(text === Ecanvas.DEMON){
        array.push(<Demon key={key} initialPosition={position} />)
      }

      if(text === Ecanvas.CHEST){
        array.push(<Chest key={key} initialPosition={position} />)
      }

      if(text === Ecanvas.HERO){
        array.push(<Hero key={key} initialPosition={position} />)
      }
    }
  }  
  return array;
}

const elements = getCanvasMap();
const Board = () =>{
  return(
    <div>
      {/*<MiniDemon initialPosition = {{x:10, y:8}} />
      <MiniDemon initialPosition = {{x:10, y:10}} />
      <Demon/>
      <Hero/>
      <Chest/>
      <Trap/>*/}

      {elements}
      <img src="./assets/tileset.gif" alt="" width= {GAME_SIZE} height= {GAME_SIZE}/>    

    </div>
  );
}

export default Board;