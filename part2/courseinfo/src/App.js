const Header = (props) => {
  return <h1>{props.course.name}</h1>;
};
const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  );
};
const Content = (props) => {
  return (
    <div>
      {props.course.parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
    </div>
  );
};
const Total = (props) => {
  return (
    <h4>
      total of {" "}
      {props.course.parts.reduce((total, part) => {
        total += part.exercises;
        return total;
      }, 0)}
      {" "}
      exercises
    </h4>
  );
};
const Course = ({ course }) => {
  return (
    <>
      <Header course={course} />
      <Content course={course} />
      <Total course={course}/>
    </>
  );
};

const App = () => {
  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
      {
        name:'redux',
        exercises:22,
        id:4
      }
    ],
  };

  return <Course course={course} />;
};

export default App;
