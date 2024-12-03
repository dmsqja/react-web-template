// Search page
import SearchForm from '../components/search/SearchForm';
import '../styles/pages.css';

const Search = () => {
    return (
        <div className="page search-page">
            <div className="page-header">
                <h1 className="page-title">
                    <span className="text-gradient">Search</span>
                </h1>
                <p className="lead text-muted">Find what you're looking for</p>
            </div>
            <div className="search-container">
                <SearchForm />
            </div>
        </div>
    );
};

export default Search;