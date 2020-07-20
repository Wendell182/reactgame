import React from 'react';
import { TILE_SIZE } from '../../../settings/constants';
import { Ecanvas } from '../../../contexts/canvas/helpers';

interface IProps{
  position:{x:number, y:number};
  text: number;
}

function Tile(props: IProps){
  function getTileColor(){
    switch(props.text){
      case Ecanvas.FLOOR:
        return 'darkgrey';
      
      case Ecanvas.WALL:
        return 'yellow';

      case Ecanvas.DOOR:
        return 'white';

      case Ecanvas.TRAP:
        return 'chartreuse';

      case Ecanvas.MINI_DEMON:
      case Ecanvas.DEMON:
        return 'red';
        
      case Ecanvas.CHEST:
        return 'cyan';  

      case Ecanvas.HERO:
        return 'magenta';  
    }
  }

  const color =getTileColor();
  return (
    <div style={{
      position: "absolute",
      left: TILE_SIZE * props.position.x,
      top:TILE_SIZE * props.position.y,
      width:TILE_SIZE,
      height:TILE_SIZE,
      color: color,
      border:`2px solid ${color}`,
      fontSize: 32,
      zIndex: 2,
      
    }}>
      {props.text}
    </div>
  );
}

export default Tile;