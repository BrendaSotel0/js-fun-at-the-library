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
  theLibrary.shelves[theBook.genre].push(theBook)
}
function checkoutBook(theLibrary, theBook, theShelf) {
  for(var i = 0; i < theLibrary.shelves[theShelf].length; i++) {
    if(theLibrary.shelves[theShelf][i].title === theBook) {
      theLibrary.shelves[theShelf].splice(i, 1);
      return `You have now checked out ${theBook} from the ${theLibrary.name}`
    }
  }
  return `Sorry, there are currently no copies of ${theBook} available at the ${theLibrary.name}`
}


module.exports = {
   createLibrary,
   addBook,
   checkoutBook
};
