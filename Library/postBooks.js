const postBooks = (event) => {

    event.preventDefault();
    const bookName = document.getElementById("bName");
    const authorName = document.getElementById("aName");

    if(bookName == " " || authorName == " "){
        alert("All fields are required!!!")
    }
}

export default postBooks;