const Search = ({setInput}) => {
    const handleKey = (e) => {
        if(e.key === "Enter"){
            setInput(e.target.value);
            e.target.value = "";
        }
    }
    return(
        <div className="search">
            <input onKeyPress={(e) => handleKey(e)} type="text" placeholder="Search for a user" />
        </div>
    )
}
export default Search;