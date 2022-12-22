// eslint-disable-next-line no-unused-vars
const dummy = (blogs) => {
  return 1;
};
const totalLikes = (blogs) => {
  const allLikes = blogs.reduce((total, blog) => {
    total += blog.likes;
    return total;
  }, 0);
  return allLikes;
};

const favoriteBlog = (blogs) => {
  const allLikes = blogs.map((blog) => {
    return blog.likes;
  });
  const favBlogLikes = Math.max(...allLikes);
  // console.log("fav", allLikes, "fav blog likes", favBlogLikes);
  const favBlog = blogs.find((blog) => {
    if (blog.likes === favBlogLikes) return blog;
  });
  delete favBlog.url;
  delete favBlog.id;
  // console.log("fav", favBlog);
  return favBlog;
};

const mostBlogs = (blogs) => {
  const authors = blogs.map((list) => list.author);
  
function mostFrequentWord(arr, n) {
  let freq = 0;
  
  let freqString = "";
  
  for (let i = 0; i < n; i++) {
    let count = 0;
    for (let j = i; j < n; j++) {
      if (JSON.stringify(arr[j]) === JSON.stringify(arr[i])) {
        count++;
      }
    }
    
    if (count >= freq) {
      freqString = arr[i];
      freq = count;
    }
  }
  // console.log({ author: freqString, blogs: freq });
  return ({ author: freqString, blogs: freq });
}

return mostFrequentWord(authors, authors.length);
};

const mostLikes = (blogs) => {
  const allLikes = blogs.map((blog) => {
    return blog.likes;
  });
  const favBlogLikes = Math.max(...allLikes);
  // console.log("fav", allLikes, "fav blog likes", favBlogLikes);
  const favBlog = blogs.find((blog) => {
    if (blog.likes === favBlogLikes) return blog;
  });
  delete favBlog.id;
  delete favBlog.url;
  delete favBlog.title;
  // console.log("fav", favBlog);
  return favBlog;
};

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes
};
