import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useDrag, useDrop } from 'react-dnd';

import { deleteConstructorIngredient, moveConstructorItem } from '../../../services/burger/actions';

import styles from './burger-element.module.scss';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const BurgerElement = ({ type, isLocked, draggable, text, thumbnail, price, id, idx }) => {
	const dispatch = useDispatch();
	const ref = useRef(null);

	const [{ isDragging }, dragRef] = useDrag(() => ({
		type: 'constructor',
		item: { idx },
		collect: (monitor) => ({
			isDragging: monitor.isDragging(),
		}),
	}));

	const [{ handlerId }, dropRef] = useDrop({
		accept: 'constructor',
		collect(monitor) {
			return {
				handlerId: monitor.getHandlerId(),
			};
		},
		hover(item, monitor) {
			if (!ref.current) {
				return;
			}

			const dragIndex = item.index;
			const hoverIndex = idx;

			if (dragIndex === hoverIndex) {
				return;
			}

			const hoverBoundingRect = ref.current?.getBoundingClientRect();
			const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
			const clientOffset = monitor.getClientOffset();
			const hoverClientY = clientOffset.y - hoverBoundingRect.top;
			if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
				return;
			}
			if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
				return;
			}

			dispatch(moveConstructorItem(dragIndex, hoverIndex));

			item.index = hoverIndex;
		},
	});

	dragRef(dropRef(ref));

	const opacity = isDragging ? 0.25 : 1;
	const onDeleteIngredientClick = () => dispatch(deleteConstructorIngredient(id));

	return (
		<div
			className={`${styles.element} ${draggable === true ? styles.draggable : styles.fixed}`}
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
				type={type}
				isLocked={isLocked}
				text={text}
				thumbnail={thumbnail}
				price={price}
				handleClose={onDeleteIngredientClick}
			/>
		</div>
	);
};

BurgerElement.propTypes = {
	type: PropTypes.string,
	isLocked: PropTypes.bool,
	draggable: PropTypes.bool,
	text: PropTypes.string.isRequired,
	thumbnail: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
};

export default BurgerElement;
