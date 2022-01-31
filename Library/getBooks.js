import setUi from "./setUi.js";

 const getBooks = async () => {
     let arr = [];
    await fetch("http://localhost:3000/books")
    .then(res => res.json())
    .then(data => (
        setUi(data)
    ))
    .catch(err => console.log(err))

}

export default getBooks;