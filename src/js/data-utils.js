export const getDaysSinceJobPost = (datePublished) => {
  const oneDay = (24 * 60 * 60 * 1000);
  const today = new Date();
  const dayPublished = new Date(datePublished);
  const daysPassed = Math.round(Math.abs((today - dayPublished) / oneDay));
  return daysPassed
}
