const myLibrary= [
    { title: "Putul Nacher Itikatha", author: "Manik Bandopadhyay", pages: 250, read: true },
    { title: "Padma Nadir Majhi", author: "Manik Bandopadhyay", pages: 220, read: true },
    { title: "Chhadmabeshi", author: "Manik Bandopadhyay", pages: 200, read: false }
];

function Book(title, author, pages, hasRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
}   

function addBookToLibaray(title, author, pages, hasRead){
    const newBook = new Book(title, author, pages, hasRead);
    myLibrary.push(newBook);
    displayBook(myLibrary);
}

function displayBook(myLibrary){
    const content = document.querySelector("#content");
    content.innerHTML="";
    myLibrary.forEach((element, index) => {
        const card = document.createElement("div");
        card.classList.add("card");

        const title = document.createElement("p");
        title.classList.add("title");
        title.textContent = element.title;

        const author = document.createElement("p");
        author.classList.add("author");
        author.textContent = element.author;

        const pages = document.createElement("p");
        pages.classList.add("pages");
        pages.textContent = element.pages;

        const read = document.createElement("button");
        read.classList.add("read");
        read.textContent = element.read? "Read" : "Not Read";
        read.style.backgroundColor = element.read? "#9fff9c" : "#ff9c9c";
        read.style.padding = element.read? "0 10rem" : "0 7.3rem";

        read.addEventListener("click",()=>{
            element.read = !element.read;
            displayBook(myLibrary);
        });

        const remove = document.createElement("button");
        remove.classList.add("remove");
        remove.textContent="Remove";

        remove.addEventListener("click", ()=>{
            myLibrary.splice(index, 1);
            displayBook(myLibrary);
        });

        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(read);
        card.appendChild(remove);

        content.appendChild(card);

    });
}
displayBook(myLibrary);

document.querySelector("#addBtn").addEventListener("click", ()=>{
    // ............
});

