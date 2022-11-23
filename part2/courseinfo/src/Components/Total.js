const Total = ({course}) => {
  return (
    <h4>
      total of{"  "}
      {course.parts.reduce((total, part) => {
        total += part.exercises;
        return total;
      }, 0)}{" "}
      exercises
    </h4>
  );
};

export default Total