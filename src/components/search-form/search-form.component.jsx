import './search-form.styles.css';

const SearchForm = ({handleSubmit, name, handleChange}) => {
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => handleChange(e)} placeholder="Search for a dog. ex. Boxer" />
        <input type="submit" value="Search" />
      </form>
    )
}

export default SearchForm;