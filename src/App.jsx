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
      <div style={{ display: 'flex' , position: 'relative', top:300, backgroundColor:'white', position:'relative',left:'320px'}}>
    <Card style={{ textAlign:'center', marginRight: 10, border:0,  backgroundColor:'aliceblue'}}>
        <Card.Body style={{ width: 200}}>
            <Card.Title style={{textAlign:'center'}}>
                <h1 style={{
                    fontSize: 30,
                    backgroundColor:'maroon',
                    color:'white',
                    borderTopLeftRadius:20,
                    position: 'relative',
                    bottom:'1rem',
                    width:180
                    
                       }}>Team 1</h1>
                {team1}<br />
                <Button onClick={incrementCountT1}>+</Button>
                <Button onClick={decrementCountT1} className='btn-danger'>-</Button>
            </Card.Title>
        </Card.Body>
    </Card>

    <Card style={{marginRight: 10 ,border:0, backgroundColor:'aliceblue', textAlign:'center', width:100}}>
        <Card.Body style={{ width: 200, position:'relative', right:50, top:20}}>
            <Card.Title  style={{textAlign:'center'}}>
                <h1 style={{ fontSize: 15, position:'relative', bottom:20}}>Round</h1>
                {round}<br />
                <div style={{backgroundColor:'yellow'}}>
                <Button onClick={incrementCountR}>+</Button>
                <Button onClick={decrementCountR} className='btn-danger'>-</Button>
                </div>
               
            </Card.Title>
        </Card.Body>
    </Card>


    <Card style={{border:0, backgroundColor:'aliceblue'}}>
        <Card.Body style={{ width: 200 , textAlign:'center'}}>
            <Card.Title  style={{textAlign:'center'}}>
                <h1 style={{ fontSize: 30,
                    backgroundColor:'royalblue',
                    color:'white',
                    borderTopRightRadius:20,
                    position: 'relative',
                    bottom:'1rem',
                    right:'1rem',
                    width:180

                }}>Team 2</h1>
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