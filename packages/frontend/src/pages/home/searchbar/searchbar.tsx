import scss from './searchbar.module.scss';

const Searchbar = () => {
    return (
        <div className={scss.searchbar}>
            <input
                type="text"
                placeholder="Wyszukaj..."
                className={scss.input}
            />
            <div className={scss.submit}>
                <i className="fa-solid fa-magnifying-glass fa-xl"></i>
            </div>
        </div>
    );
};

export default Searchbar;
