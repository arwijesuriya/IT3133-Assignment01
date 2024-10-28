import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {sculptureList} from './assets/data';
import Title from './components/Title';
import Image from './components/Image';
import { useState } from 'react';
import Artist from './components/Artist';
import Description from './components/Description';
import Buttons from './components/Buttons';
import Nightmood from './components/Nightmood';

function App() {
    const [index, setindex] = useState(0)

   
    

    function nextelemet(){
       if (index === sculptureList.length - 1) {
        setindex(0);
       } else {
        setindex(index + 1);
       }

    }

    function Previouse(){
      if (index < 1) {
       setindex(sculptureList.length - 1);
      } else {
       setindex(index - 1);
      }

   }

   function first(){
   setindex(0);

 }

 function last(){
   setindex(sculptureList.length - 1);

 }

  return (
   <Container>
      <Row>
       <Title title = {sculptureList[index].name}></Title>

      </Row>
      <Row>
      <Col>
          <Image image = {sculptureList[index].url}></Image>
      </Col>
      <Col>
          <Artist artist={sculptureList[index].artist}></Artist>
          <Description description={sculptureList[index].description}></Description>
      </Col>
      <Col>
           <Nightmood></Nightmood>
      </Col>

      </Row>
      <Row>
         <Buttons next={nextelemet} 
         pre={Previouse} 
         first={first} 
         last={last}></Buttons>
        
     </Row>



   </Container>


  );
}

export default App;
