import React, { Component } from 'react';
import styled from 'styled-components';
import ProductTable from './ProductTable';

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

	render() {
		console.log(this.state.products);
		return <ProductTable products={this.state.products} />;
	}
}

export default App;
