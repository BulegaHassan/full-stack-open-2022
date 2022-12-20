const listHelper = require("../utils/list_helper");

test("dummy returns one", () => {
  const blogs = [];

  const result = listHelper.dummy(blogs);
  expect(result).toBe(1);
});
describe("total likes", () => {
  const emptyList =[]
  const listWithOneBlog = [
    {
      _id: "5a422aa71b54a676234d17f8",
      title: "Go To Statement Considered Harmful",
      author: "Edsger W. Dijkstra",
      url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
      likes: 5,
      __v: 0,
    },
  ];
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
  test("of empty list is zero", () => {
    const result = listHelper.totalLikes(emptyList);
    expect(result).toBe(0);
  });
  test("when list has only one blog, equals the likes of that", () => {
    const result = listHelper.totalLikes(listWithOneBlog);
    expect(result).toBe(5);
  });
   test("of a bigger list is calculated right", () => {
     const result = listHelper.totalLikes(biggerList);
     expect(result).toBe(20);
   });
});
describe('the fav blog', ()=> {
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
       title: "fsopen done",
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
   test('favorite blog object', ()=> {
  
    const result = listHelper.favoriteBlog(biggerList);
    expect(result).toEqual({
      title: "fsopen done",
      author: "matt finland",
      likes: 12,
    });
   })
})

describe("most blogs", () => {
  const frequentAuthors = [
    {
      title: "skillin up with fsopen",
      author: "hassan bulega",
      url: "https://fullstackopen.com/en/part4/structure_of_backend_application_introduction_to_testing",
      likes: 3,
      id: "639d7b9e69353841fc130a21",
    },
    {
      _id: "5a422aa71b54a676234d17f8",
      title: "Go To Statement Considered Harmful",
      author: "Edsger W. Dijkstra",
      url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
      likes: 5,
      __v: 0,
    },
    {
      title: "Typescript revisited",
      author: "hassan bulega",
      url: "https://fullstackopen.com/en/part4/structure_of_backend_application_introduction_to_testing",
      likes: 3,
      id: "639d7b9e69353841fc130a21",
    },
    {
      title: "fsopen done",
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
    {
      title: "fsopen again n' again",
      author: "hassan bulega",
      url: "https://fullstackopen.com/en/part4/structure_of_backend_application_introduction_to_testing",
      likes: 3,
      id: "639d7b9e69353841fc130a21",
    },
  ];
  test("author with the most blogs", () => {
    const result = listHelper.mostBlogs(frequentAuthors);
    expect(result).toEqual({
      author: "hassan bulega",
      blogs: 4,
    });
  });
});

describe("most likes", () => {
  const ourBlogs = [
    {
      title: "skillin up with fsopen",
      author: "hassan bulega",
      url: "https://fullstackopen.com/en/part4/structure_of_backend_application_introduction_to_testing",
      likes: 3,
      id: "639d7b9e69353841fc130a21",
    },
    {
      _id: "5a422aa71b54a676234d17f8",
      title: "Go To Statement Considered Harmful",
      author: "Edsger W. Dijkstra",
      url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
      likes: 5,
      __v: 0,
    },
    {
      title: "Typescript revisited",
      author: "hassan bulega",
      url: "https://fullstackopen.com/en/part4/structure_of_backend_application_introduction_to_testing",
      likes: 3,
      id: "639d7b9e69353841fc130a21",
    },
    {
      title: "fsopen done",
      author: "matt finland",
      url: "https://fullstackopen.com/en/part4/structure_of_backend_application_introduction_to_testing",
      likes: 121,
      id: "639d805feca7fbde1b2405af",
    },
    {
      title: "fsopen again n' again",
      author: "hassan bulega",
      url: "https://fullstackopen.com/en/part4/structure_of_backend_application_introduction_to_testing",
      likes: 3,
      id: "639d7b9e69353841fc130a21",
    },
    {
      title: "fsopen again n' again",
      author: "hassan bulega",
      url: "https://fullstackopen.com/en/part4/structure_of_backend_application_introduction_to_testing",
      likes: 120,
      id: "639d7b9e69353841fc130a21",
    },
  ];
  test("of an author from the blog", () => {
    const result = listHelper.mostLikes(ourBlogs);
    expect(result).toEqual({
      author: "matt finland",
      likes: 121,
    });
  });
});