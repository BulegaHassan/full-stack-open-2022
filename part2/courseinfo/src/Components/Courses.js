import Course from "./Course";

const Courses = ({ courses }) => {
  return courses.map((course) => <Course course={course} />);
};
export default Courses