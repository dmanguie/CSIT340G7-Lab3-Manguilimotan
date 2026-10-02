const Header = (props) => {
  return <h1>{props.course.name}</h1>
}

const Part = (props) => {
  return <p>{props.name} {props.units}</p>
}

const Content = (props) => {
  return (
    <div>
      <Part name={props.course.parts[0].name} units={props.course.parts[0].units} />
      <Part name={props.course.parts[1].name} units={props.course.parts[1].units} />
      <Part name={props.course.parts[2].name} units={props.course.parts[2].units} />
    </div>
  )
}

const Total = (props) => {
  return (
    <p>
      Number of units{' '}
      {props.course.parts[0].units +
        props.course.parts[1].units +
        props.course.parts[2].units}
    </p>
  )
}

const Footer = (props) => {
  return (
    <footer>
      <p>{props.fullName} - {props.courseCode} - {props.section}</p>
    </footer>
  )
}

const App = () => {
  const course = {
    name: 'Bachelor of Science in Information Technology', // change this if you decided on a subject name
    parts: [
      { name: 'IT365 Data Analytics 1', units: 3 },
      { name: 'CSIT340 Industry Elective', units: 3 },
      { name: 'CSIT321 Application Development and Emerging Technologies', units: 3 },
    ],
  }

  const fullName = 'Danielle Manguilimotan'
  const courseCode = 'CSIT340'
  const section = 'G7'

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
      <Footer fullName={fullName} courseCode={courseCode} section={section} />
    </div>
  )
}

export default App