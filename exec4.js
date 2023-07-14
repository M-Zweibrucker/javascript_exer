

const booksByCategory = [
    {
        category: `Riqueza`,
        books: [
            {
                title: `Os segredos da mente milionária`,
                author: `T. Harv Eker`,
            },
            {
                title: `O homem mais rico da babilônia`,
                author: `George S. Clason`,
            },
            {
                title: `Pai rico, pai pobre`,
                author: `Robert T. Kiyosaki e Sharon L. lechter`,
            }
        ],
    },
    {
        category: `Inteligencia emocional`,
        books: [
            {
                title: `Você é Insusbstituivel`,
                author: `Augusto Cury`,
            },
            {
                title: `Ansiedade - Como enfrentar o mal do seculo`,
                author: `Augusto Cury`,
            },
            {
                title: `os 7 habitos das pessoas altamente eficazes`,
                author: `Stephen R. Covey`,
            },
        ],
    },
];


const totalCategories = booksByCategory.length

console.log(totalCategories);

for (let category of booksByCategory) {
    console.log(`total de livros da categoria: ${category.category}`)
    console.log(`total de livros: ${category.books.length}`)
}

function countAuthor() {
    let authors = []

    for (let category of booksByCategory) {
        for (let book of category.books) {
            if(authors.indexOf(book.author) == -1) {
                authors.push(book.author)
            }
        }
    }
    console.log(authors.length)
}

countAuthor()

function booksOfAuthor(author) {
    let books = []

    for (let category of booksByCategory) {
        for (let book of category.books) {
            if(book.author === author) {
                books.push(book.title)
            }
        }
    }
    console.log(`livros do autor ${author}: ${books.join(`, `)}`)
}

booksOfAuthor(`Augusto Cury`)

