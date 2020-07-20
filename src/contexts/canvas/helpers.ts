import { EDirection } from "../../settings/constants";
import React from "react";

export function handleNextPosition(direction,position){
  switch(direction ){
    case EDirection.LEFT:
      return {x: position.x -1, y: position.y };

    case EDirection.RIGHT:
      return {x: position.x +1, y: position.y };

    case EDirection.DOWN:
      return {x: position.x, y: position.y +1};
    
    case EDirection.UP:
      return {x: position.x, y: position.y -1};  

  }
} 

export enum Ecanvas {
  FLOOR = 0,
  WALL = 1,
  DOOR = 2,
  TRAP = 3,
  MINI_DEMON = 4,
  DEMON = 5,
  CHEST = 5,
  HERO = 7
};

const FL = Ecanvas.FLOOR;
const WL = Ecanvas.WALL;
const DR = Ecanvas.DOOR;
const TR = Ecanvas.TRAP;
const MD = Ecanvas.MINI_DEMON;
const DE = Ecanvas.DEMON;
const CH = Ecanvas.CHEST;
const HE = Ecanvas.HERO;


/*
*TODO VALOR 1 É IGUAL A PAREDE
 */
export const canvas = [
  [WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL],
  [WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL],
  [WL,FL,FL,WL,FL,FL,FL,FL,WL,FL,FL,FL,FL,FL,FL,FL,WL,FL,FL,WL],
  [WL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WL],
  [WL,FL,FL,FL,FL,FL,FL,CH,FL,FL,FL,FL,FL,FL,FL,FL,MD,FL,FL,WL],
  [WL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WL],
  [WL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WL],
  [WL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WL],
  [WL,TR,FL,FL,FL,FL,MD,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WL],
  [WL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WL],
  [WL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WL],
  [WL,FL,FL,FL,FL,FL,FL,FL,FL,FL,DE,FL,FL,FL,FL,FL,FL,FL,FL,WL],
  [WL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WL],
  [WL,FL,FL,FL,MD,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WL],
  [WL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WL],
  [WL,FL,FL,FL,TR,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,CH,FL,FL,WL],
  [WL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WL],
  [WL,HE,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WL],
  [WL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WL],
  [WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL],
];

export function checkValidMoviment(nextPosition){
 const canvasvalue = canvas[nextPosition.y][nextPosition.x]

 if(canvasvalue === Ecanvas.WALL){
   return false;
 }

 if(canvasvalue === Ecanvas.CHEST){
  console.log('pisou no baú');
 }

 if(canvasvalue === Ecanvas.TRAP){
  console.log('pisou na trap');
}

 return true;
}