import React from 'react';
import styled from 'styled-components';
import Product from './Product';

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
`;

const Table = styled.table`
	border-collapse: collapse;
	margin-top: 5rem;
	box-shadow: 0 0.2rem 0.7rem rgba(0, 0, 0, 0.2);
`;

const Thead = styled.thead`
	background-color: #3368b2;
	font-size: 1.2rem;
	font-weight: 500;
	color: #fff;
	text-align: center;

	> tr {
		td {
			padding: 1rem;
		}
	}
`;

const Tbody = styled.tbody`
	> tr:nth-of-type(odd) {
		background-color: #e2e2e2;
	}
`;

const Tr = styled.tr`
	td {
		padding: 0.5rem 1rem;
	}
`;

const Tfoot = styled.tfoot`
	> tr {
		> td {
			width: intial;
			padding: 0;

			> button {
				display: block;
				width: 100%;
				border: none;
				background-color: #eee;
				padding: 1.5rem;
				text-transform: uppercase;
			}
		}
	}
`;

class ProductTable extends React.Component {
	render() {
		return (
			<Wrapper>
				<Table>
					<Thead>
						<Tr>
							<td>Name</td>
							<td>Description</td>
							<td>Price</td>
							<td>Category</td>
							<td>Actions</td>
						</Tr>
					</Thead>
					<Tbody>
						{this.props.products.map(
							({ id, name, description, price, category_name }) => {
								return (
									<Product
										key={id}
										name={name}
										description={description}
										price={price}
										category={category_name}
									/>
								);
							},
						)}
					</Tbody>
					<Tfoot>
						<Tr>
							<td colSpan="5">
								<button>Clear all</button>
							</td>
						</Tr>
					</Tfoot>
				</Table>
			</Wrapper>
		);
	}
}

export default ProductTable;
