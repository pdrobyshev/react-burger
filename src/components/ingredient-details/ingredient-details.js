import React from 'react';
import PropTypes from 'prop-types';

import styles from './ingredient-details.module.scss';

const IngredientDetails = ({ image_large, name, calories, proteins, fat, carbohydrates }) => (
	<section>
		<img className={`${styles.image}  mb-4`} src={image_large} alt={name} width={480} height={240} />

		<span className={`${styles.name}  mb-8`}>{name}</span>

		<section className={styles.flexWrapper}>
			<div className="mr-5">
				<span className={`${styles.text}  text_type_main-default  mb-2`}>Калории,ккал</span>
				<span className={`${styles.text}  text_type_digits-default`}>{calories}</span>
			</div>
			<div className="mr-5">
				<span className={`${styles.text}  text_type_main-default  mb-2`}>Белки, г</span>
				<span className={`${styles.text}  text_type_digits-default`}>{proteins}</span>
			</div>
			<div className="mr-5">
				<span className={`${styles.text}  text_type_main-default  mb-2`}>Жиры, г</span>
				<span className={`${styles.text}  text_type_digits-default`}>{fat}</span>
			</div>
			<div>
				<span className={`${styles.text}  text_type_main-default  mb-2`}>Углеводы, г</span>
				<span className={`${styles.text}  text_type_digits-default`}>{carbohydrates}</span>
			</div>
		</section>
	</section>
);

IngredientDetails.propTypes = {
	image_large: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	calories: PropTypes.number.isRequired,
	proteins: PropTypes.number.isRequired,
	fat: PropTypes.number.isRequired,
	carbohydrates: PropTypes.number.isRequired,
};

export default IngredientDetails;
