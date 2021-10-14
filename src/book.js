function createTitle(bookTitle,) {
  return `The ${bookTitle}`

}

function buildMainCharacter(name, age, pronouns) {
  var character = {
    name: name,
    age: age,
    pronouns: pronouns,
  }
  return character
}
function saveReview() {

}

module.exports = {
  createTitle,
   buildMainCharacter,
   saveReview,
  // calculatePageCount,
  // writeBook,
  // editBook
}
