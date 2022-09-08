import './search-box.style.css';

const SearchBox = ({ onChangeHandler, placeholderText, className }) => {
	return (
		<input
			type='search'
			className={className}
			placeholder={placeholderText}
			onChange={onChangeHandler}
		/>
	);
};
export default SearchBox;
