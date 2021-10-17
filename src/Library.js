function createLibrary(a) {
  var library = {
    name: a,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: []
    }
  }
  return library
}
function addBook(theLibrary, theBook) {
  theLibrary.shelves.fantasy.push(theBook)
}

module.exports = {
   createLibrary,
   addBook,
  // checkoutBook
};
