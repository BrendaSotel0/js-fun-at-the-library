function shelfBook(bookName, shelfType) {
  if(shelfType.length < 3) {
    shelfType.unshift(bookName)
  }
}

function unshelfBook(bookName, shelfType) {
    for (var i = 0; i < shelfType.length; i++) {
      if(shelfType[i].title === bookName) {
        shelfType.splice(i, 1)
      }
    }
}

function listTitles(shelfType) {
  var titleShelf = [shelfType[0].title, shelfType[1].title, shelfType[2].title];
  return titleShelf.join(', ');
}

function searchShelf(shelfType, bookTitle) {
  for (var i = 0; i < shelfType.length; i++) {
    if (shelfType[i].title === bookTitle) {
      return true;
    }
  }
  return false;
}

module.exports = {
   shelfBook,
   unshelfBook,
   listTitles,
   searchShelf
};
