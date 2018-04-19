import React from 'react';
import styled from 'styled-components';

class ProductForm extends React.Component {
	state = {
		fields: {
			name: '',
			description: '',
			price: '',
			category: '',
		},
	};

	onChangeInput = e => {
		const name = e.target.name;
		const val = e.target.value;
		const fields = { ...this.state.fields };
		fields[name] = val;
		this.setState(() => ({ fields }));
	};

	render() {
		return (
			<React.Fragment>
				<form action="#">
					<input
						type="text"
						placeholder="name"
						name="name"
						value={this.state.fields.name}
						onChange={this.onChangeInput}
					/>
					<input
						type="text"
						placeholder="description"
						name="description"
						value={this.state.fields.description}
						onChange={this.onChangeInput}
					/>
					<input
						type="text"
						placeholder="price"
						name="price"
						value={this.state.fields.price}
						onChange={this.onChangeInput}
					/>
					<input
						type="text"
						placeholder="category"
						name="category"
						value={this.state.fields.category}
						onChange={this.onChangeInput}
					/>
				</form>
			</React.Fragment>
		);
	}
}

export default ProductForm;
