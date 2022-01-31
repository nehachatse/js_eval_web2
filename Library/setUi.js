const setUi = (data) => {
    console.log("in", data)

    let parent = document.getElementById("store");

    for(let book of data){
        console.log("in", book)
 
        var bookData = document.createElement('div');
        bookData.style.border = "1px solid black"
        bookData.style.padding = "1rem"
        bookData.style.margin = "1rem"

        let heading = document.createElement('h3');
        heading.textContent = `Book Name: ${book.book}`;
        let p = document.createElement("p");
        p.textContent = `Author Name: ${book.author}`;
        let cmt = document.createElement('div');
        cmt.textContent = "Comments:";

        for( let cmts of book.comments){
            let createCmt = document.createElement('p');
            createCmt.textContent = cmts
            createCmt.contentEditable = "true";
            cmt.appendChild(createCmt);
        }

        bookData.append(heading, p, cmt);
        parent.appendChild(bookData)
    }

    
}

export default setUi;