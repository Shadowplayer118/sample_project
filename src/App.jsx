import React, { useState } from 'react';
import {Button} from "react-bootstrap";
import {Card} from "react-bootstrap";
//functional component

const App = () => {

    const [team1, setCount1] = useState(1);
    const [round, setCountR] = useState(1);
    const [team2, setCount2] = useState(1);

    const incrementCountT1 = ()=>{

        setCount1(team1+1)
    }

    const decrementCountT1 = ()=>{
        if(team1 == 0){
            setCount1(0)
        }
        else{
            setCount1(team1-1)
        }
        
    }

    const incrementCountR = ()=>{
        setCountR(round+1)
    }

    const decrementCountR = ()=>{
        setCountR(round-1)
    }

    const incrementCountT2 = ()=>{
        setCount2(team2+1)
    }

    const decrementCountT2 = ()=>{
        if(team2 == 0){
            setCount2(0)
        }
        else{
            setCount2(team2-1)
        }
    }

    return ( 
        <>
      
      <div style={{ display: 'flex' , position: 'relative', top:300, backgroundColor:'white'}}>
    <Card style={{ flex: 1, marginRight: 10, border:0}}>
        <Card.Body style={{ width: 200 , backgroundColor:'aliceblue', position:'relative', left:300}}>
            <Card.Title style={{textAlign:'center'}}>
                <h1 style={{ fontSize: 30}}>Team 1</h1>
                {team1}<br />
                <Button onClick={incrementCountT1}>+</Button>
                <Button onClick={decrementCountT1} className='btn-danger'>-</Button>
            </Card.Title>
        </Card.Body>
    </Card>

    <Card style={{ flex: 1, marginRight: 10 ,border:0}}>
        <Card.Body style={{ width: 200 , backgroundColor:'aliceblue', position:'relative', left:130}}>
            <Card.Title  style={{textAlign:'center'}}>
                <h1 style={{ fontSize: 15 }}>Round</h1>
                {round}<br />
                <Button onClick={incrementCountR}>+</Button>
                <Button onClick={decrementCountR} className='btn-danger'>-</Button>
            </Card.Title>
        </Card.Body>
    </Card>

    <Card style={{ flex: 1 ,border:0}}>
        <Card.Body style={{ width: 200 , backgroundColor:'aliceblue', position:'relative', left:-50}}>
            <Card.Title  style={{textAlign:'center'}}>
                <h1 style={{ fontSize: 30 }}>Team 2</h1>
                {team2}<br />
                <Button onClick={incrementCountT2}>+</Button>
                <Button onClick={decrementCountT2} className='btn-danger'>-</Button>
            </Card.Title>
        </Card.Body>
    </Card>
</div>

        </>
     );
} 
export default App;