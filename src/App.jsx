const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  return <p>{props.name} {props.units}</p>
}

const Content = (props) => {
  return (
    <div>
      <Part name={props.part1.name} units={props.part1.units} />
      <Part name={props.part2.name} units={props.part2.units} />
      <Part name={props.part3.name} units={props.part3.units} />
    </div>
  )
}

const Total = (props) => {
  return <p>Number of units {props.total}</p>
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
  const part1 = { name: 'IT365 Data Analytics 1', units: 3 }
  const part2 = { name: 'CSIT340 Industry Elective', units: 3 }
  const part3 = { name: 'CSIT321 Application Development and Emerging Technologies', units: 3 }

  const fullName = 'Danielle Manguilimotan'
  const courseCode = 'CSIT340'
  const section = 'G7'

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total total={part1.units + part2.units + part3.units} />
      <Footer fullName={fullName} courseCode={courseCode} section={section} />
    </div>
  )
}

export default App