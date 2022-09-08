import { useState, useEffect } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

const App = () => {
	const [searchField, setSearchField] = useState('');
	const [monsters, setMonsters] = useState([]);
	const [filteredMonsters, setFilteredMonsters] = useState([]);

	const onSearchChange = (event) => {
		const searchString = event.target.value.toLocaleLowerCase();
		setSearchField(searchString);
	};

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((users) => setMonsters(users));
	}, []);

	useEffect(() => {
		const newFilteredMonsters = monsters.filter((monster) => {
			return monster.name.toLocaleLowerCase().includes(searchField);
		});
		setFilteredMonsters(newFilteredMonsters);
	}, [monsters, searchField]);
	return (
		<div className='App'>
			<h1 className='app-title'>Monsters Roladex</h1>
			<SearchBox
				onChangeHandler={onSearchChange}
				placeholderText='search monsters'
				className='search-box'
			/>
			<CardList monsters={filteredMonsters} />
		</div>
	);
};

export default App;
