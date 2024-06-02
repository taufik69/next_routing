export function getDocementByCatagory(docs, catagory) {
  const catgoryResult = docs.filter((doc) => doc.category === catagory);
  return catgoryResult;
}

export function getDocementByauthor(docs, author) {
  const authorResult = docs.filter((doc) => doc.author === author);
  console.log(authorResult);
  return authorResult;
}

export function getDocementBytag(docs, tag) {
  const tagResult = docs.filter((doc) =>
    doc.tags.some((inputtag) => inputtag === tag)
  );
  return tagResult;
}
