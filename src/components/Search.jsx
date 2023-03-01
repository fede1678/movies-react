import { FaSearch } from "react-icons/fa";
import {  useSearchParams } from "react-router-dom";
import styles from "./Search.module.css"

export function Search() {
    const [query, setQuery] = useSearchParams();
    const search = query.get("search");
   

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form className={styles.searchContainer} onSubmit = {handleSubmit} >
            <div className={styles.searchBox}>

                <input
                 className={styles.searchInput}
                 type="text"
                 value={search ?? ""}
                 autoFocus
                 placeholder="Title"
                 aria-label="Search"
                 onChange = {(e) => {
                     const value = e.target.value;
                     setQuery({search: value})
                 }}
                 />
                    <FaSearch size={20} color="black" className={styles.searchButton}/>
            </div>
        </form>
    );
}
