import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Blog from "./Blog";

describe("<Blog/>", () => {
  const blog = {
    title: "fsopen teaches testing",
    author: "hassan bulega",
    likes: 13,
    user: {
      name: "Abu",
    },
  };
  let container;
  const increaseLikes = jest.fn();
  beforeEach(() => {
    container = render(<Blog blog={blog} increaseLikes={increaseLikes} />).container;
  });

  test(" blog renders the blog's title and author, but does not render its URL or number of likes by default", () => {
    const element = screen.getByText(`${blog.title} ${blog.author}`);

    const moreDetails = container.querySelector(".moreDetails");
    expect(moreDetails).toHaveStyle("display: none");

    expect(element).toBeDefined();
    expect(moreDetails).toBeDefined();
  });
  
});
