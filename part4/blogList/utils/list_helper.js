const dummy = (blogs) => {
  return 1;
};
const totalLikes = (blogs) => {
  const allLikes = blogs.reduce((total, blog) => {
    total += blog.likes;
    return total;
  }, 0);
  return allLikes
};
module.exports = {
  dummy,
  totalLikes,
};
