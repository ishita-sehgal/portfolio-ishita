import React from 'react'
import {Navbar,ListGroup,Nav,Container,Card,Button,ProgressBar} from 'react-bootstrap';
import about from "./about.jpeg"
import "./Main.css";
import image from "./ishita.jpg";
import p1 from './p1.jpg';
import p2 from './p2.jpg';
import p3 from './p3.jpg';
import p4 from './p4.jpg';
import g from './g.png'
function Main() {
 
  return (<>
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#"><img className="github" src={g}/>Ishita Sehgal</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
  
    </Nav>
    <Nav>
    <Nav.Link href="#about">About</Nav.Link>
    <Nav.Link href="#education">Education</Nav.Link>
    <Nav.Link href="#internships">Internships</Nav.Link>
      <Nav.Link href="#projects">Projects</Nav.Link>
      <Nav.Link href="https://drive.google.com/file/d/1823o5Dcg7EoodyaMBOW-nZhVe51VjOy2/view?usp=drivesdk">Resume</Nav.Link>
      <Nav.Link href="#skills">Skills</Nav.Link>

    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
<div className='intro'>
      <div className='intro_details'>
          Hey !!! 🙋‍♂️<br/>
          I'm Ishita Sehgal<br/>
          Full-Stack Developer
      </div>
        <img  className="intro_image" src={image}/>
</div>
<div id='about'>
   <h1>About</h1>
   <div className="about_content">
     <img className="about_image" src={about}/>
     <div className='about_details'>
<p>I am a pre-final year undergraduate pursuing Bachelors of Technology in Computer Science and Engineering.</p>
<p>I have good experience of frontend development and exploring the backend development as well. I have worked with technologies like React.js, Node.js and have used libraries and frameworks like bootstrap,express.js</p>
  <p>I love exploring new technologies and different tech domains.</p>
  <pre>I am looking for opportunities as-
    Software Developer/ Full-Stack Developer.
  </pre>

     </div>
   </div>
</div>
<div id="education">
  <h1>Education</h1>
  <Card style={{ width: '85rem' }}>
  <ListGroup variant="flush">
    <ListGroup.Item><p>Bachelors of Technology (CSE)
   <br/> Dronacharya College Of Engineering , Gurgaon 
   <br/>(affiliated to Maharshi Dayanand
University, Rohtak)<br/>
<small><li>(2019-2023)</li></small>
<small><li>CGPA: 9.48</li></small>
</p></ListGroup.Item>
    <ListGroup.Item><p>High School (science stream)<br/>
Delhi Public School, Gurgaon<br/>
<small><li>-2019 batch</li></small>
<small><li>percentage: 95.33%</li></small>
 </p></ListGroup.Item>
   
  </ListGroup>
</Card>


</div>
<div id="internships">
<h1>Internships</h1>
  <Card style={{ width: '85rem' }}>
  <ListGroup variant="flush">
    <ListGroup.Item>
      <p>The Sparks Foundation (remote)
 <br/>
<small><li>(1st March 2021-1st April 2021)</li></small>
<small><li>Task: To build a banking transaction web application showing transaction history of transfer of amount between two people</li></small>
</p></ListGroup.Item>
    <ListGroup.Item><p>GirlScript Summer of Code 2021<br/>

<small><li>(8th March,2021-31st May,2021)</li></small>
<small><li>A 3-month long open source program in which I contributed in various javascript open source projects</li></small>
 </p></ListGroup.Item>
   
  </ListGroup>
</Card>

</div>

<div id="projects">
<h1 className="project_title">Projects</h1>
<div className='projects_content'>
  
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top"  src={p1} />
  <Card.Body>
    <Card.Title>Amazon-Clone</Card.Title>
    <Card.Text>
    A full-stack amazon clone (E-Commerce) website made using
React.js, Firebase, Stripe and express.js. Payment processing done using stripe Backend and hosting integrated using firebase.
    </Card.Text>
    <Button variant="primary" href="https://github.com/ishita-sehgal/amazon-clone">Github</Button>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={p2} />
  <Card.Body>
    <Card.Title>Weather App</Card.Title>
    <Card.Text>
    Weather data fetching web application made using html, css, javascript. It fetches the weather data
    </Card.Text>
    <Button variant="primary" href="https://github.com/ishita-sehgal/weather-app">Github</Button>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={p3} />
  <Card.Body>
    <Card.Title>Task-List-Manager</Card.Title>
    <Card.Text>
    Task List web application made using html,css, javscript
It adds, deletes, filters tasks.
    </Card.Text>
    <Button variant="primary" href="https://ishita-sehgal.github.io/task-list-app/">Website</Button>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={p4} />
  <Card.Body>
    <Card.Title>Banking Application</Card.Title>
    <Card.Text>
    Banking Application made using html ,css, javascript and bootstrap for the user
interface, MySql for the dummy database for the transaction and
PHP for the backend. This application was made under 'The Sparks Foundation' internship

as a wed development and designing intern.
    </Card.Text>
    <Button variant="primary" href="http://sparks-ishita.000webhostapp.com/index.html">Website</Button>
  </Card.Body>
</Card>
</div>
</div>
<div id="skills">
  
  <h1>Skills</h1><br/>
  <div className="skill_detail">
    <ul>
      <lh><h4><h4>Languages/Technologies:</h4></h4></lh>
      <li>C++/C</li>
      <li>Javascript</li>
      <li>HTML</li>
      <li>CSS</li>
      <li>SQL</li>
      <li>Java Core</li>   
      </ul>
      <ul>
      <lh><h4>
      
        Frameworks/Libraries:
      </h4></lh>
      <li>React.js</li>
      <li>Bootstrap</li>
      <li>Material UI</li>
      <li>Stripe</li>
    

      </ul>
      <ul>
      <lh><h4>
        Databases:
      </h4></lh>
      <li>Mysql</li>
      <lh><h4>
        Tools:
      </h4></lh>
      <li>VS Code</li>
      <li>Git</li>
      <li>Github</li>
      <li>Firebase</li></ul>
     
 
  </div>
  <div className='skill_progress'>
  <h3>C++/C</h3><ProgressBar now={75} label="75%" />
  <br/>
  <h3>React.js</h3><ProgressBar now={50} label="50%" />  <br/>
  <h3>Javascript</h3><ProgressBar now={50} label="50%"/>  <br/>
  <h3>SQL</h3><ProgressBar now={75} label="75%"/>  <br/>
  <h3>HTML</h3><ProgressBar now={80} label="80%"/>  <br/>
  <h3>CSS</h3><ProgressBar now={50} label="50%"/>  <br/>
  
  </div>
<div className='sitefooter'>
© copyright -Ishita Sehgal (2022)
</div>

</div>
</>)
}

export default Main