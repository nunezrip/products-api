import React, { Component } from 'react';
import styled from 'styled-components';
import ProductTable from './ProductTable';
import ProductForm from './ProductForm';

class App extends Component {
	state = {
		products: [],
	};

	componentDidMount() {
		fetch('/products-api/api/read_all_products.php')
			.then(res => res.json())
			.then(products => {
				this.setState(() => ({ products }));
			});
	}

	// handleReadProduct(products) {
	// 	products = this.state.products;
	// 	products.push(products);
	// 	this.set.state({ products: products });
	// }

	// handleEditProduct(products) {
	// 	products = this.state.products;
	// 	products.push(products);
	// 	this.set.state({ products: products });
	// }

	// handleDeleteProduct(products) {
	// 	let id = '';
	// 	products = this.state.products;
	// 	let index = products.findIndex(x => x.id === id);
	// 	products.splice(index, 1);
	// 	this.set.state({ products: products });
	// }

	render() {
		console.log(this.state.products);
		return <ProductTable products={this.state.products} />;
	}
}

export default App;
