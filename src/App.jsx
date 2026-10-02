const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  return <p>{props.name} {props.units}</p>
}

const Content = (props) => {
  return (
    <div>
      <Part name={props.parts[0].name} units={props.parts[0].units} />
      <Part name={props.parts[1].name} units={props.parts[1].units} />
      <Part name={props.parts[2].name} units={props.parts[2].units} />
    </div>
  )
}

const Total = (props) => {
  return (
    <p>
      Number of units{' '}
      {props.parts[0].units + props.parts[1].units + props.parts[2].units}
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
  const course = 'Bachelor of Science in Information Technology' 
  const parts = [
    { name: 'IT365 Data Analytics 1', units: 3 },
    { name: 'CSIT340 Industry Elective', units: 3 },
    { name: 'CSIT321 Application Development and Emerging Technologies', units: 3 },
  ]

  const fullName = 'Danielle Manguilimotan'
  const courseCode = 'CSIT340'
  const section = 'G7'

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
      <Footer fullName={fullName} courseCode={courseCode} section={section} />
    </div>
  )
}

export default App