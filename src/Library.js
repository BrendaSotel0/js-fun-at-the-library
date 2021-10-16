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

module.exports = {
   createLibrary,
   addBook,
  // checkoutBook
};
