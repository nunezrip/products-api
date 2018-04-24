import React from 'react';
import styled from 'styled-components';
// import ProductForm from '../components/ProductForm';
import ProductDashboard from '../components/ProductForm';

const Tr = styled.tr`
	td {
		padding: 0.5rem 1rem;

		> button {
			display: inline-block;
			padding: 0.5rem 1rem;
			border: 0.1rem solid #3368b2;
			border-radius: 0.2rem;
			color: #3368b2;
			cursor: pointer;

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

/*
const PathSearch = '/products-api/api';
const ReadAPI = '/products-api/api/read_one_product.php';
const EditAPI = '/products-api/api/update_product.php';
const DeleteAPI = '/products-api/api/delete_product.php';
*/

const Product = props => {
	const fetchOne = id => {
		fetch(`/products-api/api/read_one_product.php?prod_id=${id}`)
			.then(res => res.json())
			.then(product => {
				console.log(product);
			})
			.catch(err => console.log(err));
	};

	const { name, description, price, category, id } = props;
	return (
		<Tr>
			<td>{name}</td>
			<td>{description}</td>
			<td>{price}</td>
			<td>{category}</td>
			<td>
				<button type="submit" action="ReadAPI" onClick={() => fetchOne(id)}>
					READ
				</button>
				<button type="submit" action="EditAPI">
					EDIT
				</button>
				<button type="submit" action="DeleteAPI">
					DELETE
				</button>
			</td>
		</Tr>
	);
};

export default Product;
