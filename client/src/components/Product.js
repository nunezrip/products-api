import React from 'react';
import styled from 'styled-components';

const Tr = styled.tr`
	td {
		padding: 0.5rem 1rem;

		> span {
			display: inline-block;
			padding: 0.5rem 1rem;
			border: 0.1rem solid #3368b2;
			border-radius: 0.2rem;
			color: #3368b2;

			&:nth-of-type(1) {
				color: teal;
				border-color: teal;
			}

			&:nth-of-type(2) {
				color: blue;
				border-color: blue;
			}

			&:nth-of-type(3) {
				color: red;
				border-color: red;
			}

			&:not(:last-child) {
				margin-right: 0.5rem;
			}
		}
	}
`;

const Product = props => {
	const { name, description, price, category } = props;
	return (
		<Tr>
			<td>{name}</td>
			<td>{description}</td>
			<td>{price}</td>
			<td>{category}</td>
			<td>
				<span>read</span>
				<span>edit</span>
				<span>delete</span>
			</td>
		</Tr>
	);
};

export default Product;
