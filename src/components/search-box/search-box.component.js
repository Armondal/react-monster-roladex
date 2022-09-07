import { Component } from 'react';
import './search-box.style.css';

class SearchBox extends Component {
	render() {
		const { onChangeHandler, placeholderText, className } = this.props;
		return (
			<input
				type='search'
				className={className}
				placeholder={placeholderText}
				onChange={onChangeHandler}
			/>
		);
	}
}
export default SearchBox;
