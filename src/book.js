function createTitle(bookTitle,) {
  return `The ${bookTitle}`
}

function buildMainCharacter(a, b, c) {
  var character = {
    name: a,
    age: b,
    pronouns: c,
  }
  return character
}

function saveReview(addString, reviews) {
  if(reviews.includes(addString)) {
    return reviews
  } else {
    reviews.push(addString)
  }
  return reviews
}

function calculatePageCount(newTitle) {
  return 20 * newTitle.length;
}

function writeBook(bookTitle, bookCharacter, genre) {
  var bookObject = {
    title: bookTitle,
    mainCharacter: bookCharacter,
    genre: genre,
    pageCount: calculatePageCount(bookTitle)
  }
  return bookObject
}

function editBook(newBook) {
  newBook.pageCount = newBook.pageCount * 0.75
}


module.exports = {
   createTitle,
   buildMainCharacter,
   saveReview,
   calculatePageCount,
   writeBook,
   editBook
}
