import useEventListener from '@use-it/event-listener'; 
import React from 'react';
import { EDirection } from '../../settings/constants';
import { handleNextPosition, checkValidMoviment } from '../../contexts/canvas/helpers';

function useHeroMoviment(initialPosition){
    const [positionState, updatePositionState] = React.useState(initialPosition);
    const [direction, updateDirectionState] = React.useState(EDirection.RIGHT);
    //const positionState = heroPositionState[0];
    //const updatePositionState = heroPositionState[1];
    useEventListener('keydown',(event: React.KeyboardEvent<HTMLDivElement>)=>{
      const direction = event.key as EDirection;

      if(direction.indexOf('Arrow') ===-1 ){
        return;
      }

       const nextPosiiton = handleNextPosition(direction,positionState); 
       const isValidMoviment = checkValidMoviment(nextPosiiton);
       
       if(isValidMoviment){
         updatePositionState(nextPosiiton);
         updateDirectionState(direction)
       }
       
    });

    return{
      position: positionState,
      direction: direction,
    }
}

export default useHeroMoviment;