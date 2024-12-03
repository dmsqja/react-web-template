import { useState, useEffect, useCallback, memo } from 'react';
import generateMockData from '../../utils/generateMockData';
import '../../styles/search.css';

const SearchForm = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [mockData, setMockData] = useState([]);
    const [displayedResults, setDisplayedResults] = useState([]);
    const [page, setPage] = useState(1);
    const itemsPerPage = 5; // 한 번에 보여줄 아이템 수

    useEffect(() => {
        const data = generateMockData(200);
        console.log('생성된 데이터:', data);
        setMockData(data);
    }, []);

    // 스크롤 이벤트 처리
    useEffect(() => {
        const handleScroll = () => {
            const scrollHeight = document.documentElement.scrollHeight;
            const scrollTop = document.documentElement.scrollTop;
            const clientHeight = document.documentElement.clientHeight;

            // 하단에서 100px 전에 도달했을 때 로드
            if (scrollTop + clientHeight >= scrollHeight - 1) {
                loadMore();
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [searchResults, page]);

    const loadMore = useCallback (() => {
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = page * itemsPerPage;
        const newResults = searchResults.slice(startIndex, endIndex);

        if (newResults.length > 0) {
            setTimeout(() => {
                setDisplayedResults(prev => [...prev, ...newResults]);
                setPage(prev => prev + 1);
            }, 1000);
        }
    }, [page, searchResults, itemsPerPage]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('검색어:', searchTerm);

        let results = mockData.filter(item =>
            (item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.content.toLowerCase().includes(searchTerm.toLowerCase()))
        );

        console.log('검색 결과:', results);

        setTimeout(() => {
            setSearchResults(results);
            setDisplayedResults(results.slice(0, itemsPerPage));
            setPage(2);            
        }, 500);
    };

    return (
        <div className="search-form-wrapper">
            <form onSubmit={handleSubmit} className="search-form">
                <div className="search-input-container">
                    <i className="fas fa-search search-icon"></i>
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <button type="submit" className="search-button">
                    Search
                </button>
            </form>
            <div className="search-results">
                {displayedResults.length > 0 ? (
                    <>
                        {displayedResults.map(item => (
                            <div key={item.id} className="search-result-item">
                                <h3>{item.title}</h3>
                                <p className="search-result-category">{item.category}</p>
                                <p className="search-result-content">{item.content}</p>
                                <p className="search-result-date">{item.date}</p>
                            </div>
                        ))}
                        {displayedResults.length < searchResults.length && (
                            <div className="loading">
                                <i className="fas fa-spinner fa-spin"></i>
                                <p>Loading more results...</p>
                            </div>
                        )}
                    </>
                ) : searchTerm && (
                    <p className="no-results">No results found</p>
                )}
            </div>
        </div>
        
    );
};

export default SearchForm;