
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';


export default function Buttons({next,pre,first,last}){


    return (


     <>
     
        <Button variant="primary" onClick={pre} >Previouse</Button>
        <Button variant="secondary" onClick={first}>First</Button>
        <Button variant="secondary" onClick={last}>Last</Button>
        <Button variant="primary" onClick={next}>Next</Button>
     
     </>
    )
}