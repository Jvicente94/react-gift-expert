import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState('');

    const onInputChange = (e) => {
        // console.log(e.target.value);
        
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // para evitar que se actualice la pagina 
        if (inputValue.trim().length > 0) {
            // setCategories(categories => [inputValue.trim() , ...categories ]);
            onNewCategory( inputValue.trim() );
            setInputValue('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={onInputChange}
                placeholder="Buscar Giff"
            />
        </form>
    );
};

AddCategory.propTypes = {
    setCategories: PropTypes.func,
    onNewCategory: PropTypes.func,
};

export default AddCategory;