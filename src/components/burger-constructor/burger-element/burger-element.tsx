import React, { FC, useRef } from 'react';
import { useDispatch } from '../../../services/store';
import { DropTargetMonitor, useDrag, useDrop, XYCoord } from 'react-dnd';

import { deleteConstructorIngredient, moveConstructorItem } from '../../../services/slices/burger/burger';

import styles from './burger-element.module.scss';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';

interface IBurgerElement {
  isLocked?: boolean;
  draggable: boolean;
  text: string;
  thumbnail: string;
  price: number;
  id?: string;
  idx: number;
}

const BurgerElement: FC<IBurgerElement> = ({ isLocked, draggable, text, thumbnail, price, id, idx }) => {
  const dispatch = useDispatch();
  const ref = useRef<HTMLLIElement>(null);

  interface DragItem {
    idx: number;
    id: string;
    type: string;
  }

  const [{ isDragging }, dragRef] = useDrag({
    type: 'constructor',
    item: { idx },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [{ handlerId }, dropRef] = useDrop({
    accept: 'constructor',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item: DragItem, monitor: DropTargetMonitor) {
      if (!ref.current) {
        return;
      }

      const dragIndex = item.idx;
      const hoverIndex = idx;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      dispatch(moveConstructorItem({ dragIndex, hoverIndex }));

      item.idx = hoverIndex;
    },
  });

  dragRef(dropRef(ref));

  const opacity = isDragging ? 0.25 : 1;
  const onDeleteIngredientClick = () => id && dispatch(deleteConstructorIngredient(id));

  return (
    <li
      className={`${styles.element} ${draggable ? styles.draggable : styles.fixed}`}
      style={{ opacity }}
      ref={ref}
      data-handler-id={handlerId}
    >
      {draggable && (
        <span className="mr-2">
          <DragIcon type="primary" />
        </span>
      )}

      <ConstructorElement
        isLocked={isLocked}
        text={text}
        thumbnail={thumbnail}
        price={price}
        handleClose={onDeleteIngredientClick}
      />
    </li>
  );
};

export default BurgerElement;
