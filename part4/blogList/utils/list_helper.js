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
const biggerList = [
  {
    _id: "5a422aa71b54a676234d17f8",
    title: "Go To Statement Considered Harmful",
    author: "Edsger W. Dijkstra",
    url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
    likes: 5,
    __v: 0,
  },
  {
    title: "fsopen donee",
    author: "matt finland",
    url: "https://fullstackopen.com/en/part4/structure_of_backend_application_introduction_to_testing",
    likes: 12,
    id: "639d805feca7fbde1b2405af",
  },
  {
    title: "fsopen again n' again",
    author: "hassan bulega",
    url: "https://fullstackopen.com/en/part4/structure_of_backend_application_introduction_to_testing",
    likes: 3,
    id: "639d7b9e69353841fc130a21",
  },
];
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
  return favBlog
};
favoriteBlog(biggerList);

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
};
