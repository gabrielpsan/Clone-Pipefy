import React, { useRef, useContext } from 'react';
import { Container, Label } from './styles';
import { useDrag, useDrop } from 'react-dnd';
import BoardContext from '../Board/context'

export default function Card({data, index ,listIndex}) {

    const ref = useRef();
    const { move } = useContext(BoardContext); 

    const [ {isDragging}, dragRef ] = useDrag({
        item: { type: 'CARD', index, id: data.id, listIndex },
        collect: monitor => ({
            isDragging: monitor.isDragging()
        }),
    });

    const [, dropRef] = useDrop({
        accept: 'CARD',
        hover(item, monitor ){
            const draggedListIndex = item.listIndex;

            const targetListIndex = listIndex
            const draggedIndex = item.index;
            const targetIndex = index;

            if(draggedIndex === targetIndex && draggedListIndex === targetListIndex){
                return ;
            }

            const targetSize = ref.current.getBoundingClientRect();

            const targeCenter = (targetSize.bottom - targetSize.top) / 2;

            const draggedOffSet = monitor.getClientOffset();

            const draggetTop = draggedOffSet.y - targetSize.top;

            if(draggedIndex < targetIndex && draggetTop < targeCenter){
                return;
            }

            if(draggedIndex > targetIndex && draggetTop > targeCenter){
                return;
            }

            move(draggedListIndex, targetListIndex, draggedIndex, targetIndex);

            item.index = targetIndex;
            item.listIndex = targetListIndex;

             
        }
    })

    dragRef(dropRef(ref));

    return (
        <Container ref={ref} isDragging={isDragging}>
            <header>
                {data.labels.map(label => <Label color={label} key={label}/>)}
            </header>

            <p>{data.content}</p>
            
            {data.user &&
                <img src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1485665415623x323958275606855740%2FAA_icon.png?w=64&h=64&auto=compress&dpr=0.75&fit=max" alt=""></img>
            }
        </Container>
    )
}
