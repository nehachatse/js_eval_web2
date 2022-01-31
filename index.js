import getBooks from "./Library/getBooks.js";
import setUi from "./Library/setUi.js";

const getData = async () => {
    const books = getBooks()
}

window.addEventListener('load', getData)


