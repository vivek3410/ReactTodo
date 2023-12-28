import React, { useState } from 'react';
import { Button, Col, Form, FormGroup, Input, Label } from 'reactstrap';
import Container from "reactstrap/lib/Container";
// import './FormHeader.css';

export default function FormList(props) {
    // console.log(props);
    let [title,setTitle] = useState(props.object.isEdit ? props.object.data.title : "");
    let [desc,setDesc] = useState(props.object.isEdit ? props.object.data.desc : "");
    let [isComplete,setIsComplete] = useState(props.object.isEdit ? props.object.data.isDone : false);

    let tit = (props.object.isEdit && title === "") ? props.object.data.title : title;
    let des = (props.object.isEdit && desc === "") ? props.object.data.desc : desc;
    let isComp = (props.object.isEdit && props.object.data.isDone) ? !isComplete : isComplete;

    const addItem = () => {
        let title1 = document.getElementById('title');
        let desc1 = document.getElementById('desc');
        console.log(title1.value,desc1.value);
        props.addTodo({title:title1.value,desc:desc1.value,id:props.id,isDone:isComplete})
        setDesc("")
        setTitle("")
        setIsComplete(false)
    }

    const editItem = (id) => {
        const title1 = document.getElementById('title');
        const desc1 = document.getElementById('desc')

        props.editTodoItem(id,{title:title1.value,desc:desc1.value,isDone:isComp,id:props.object.id})
        props.object.isDone = false
        setDesc("")
        setTitle("")
        setIsComplete(false);
    }

  return (
    <div>
      <Container className="mt-5 form-header">
        <Form>
            <FormGroup className='row'>
                <Label sm={2} className='text-center'>Title:</Label>
                <Col sm={10}>
                    <Input id='title' type='text' value={tit} onChange={(e) => setTitle(e.target.value)} />
                </Col>
            </FormGroup>
            <FormGroup className='row'>
                <Label sm={2} className='text-center'>Description:</Label>
                <Col sm={10}>
                    <Input id="desc" type='text' value={des} onChange={(e) => setDesc(e.target.value)} />
                </Col>
            </FormGroup>
            <FormGroup className='row'>
                <Label for="exampleCheckbox" sm={2}>Mark As Completed: </Label>
                <Col sm={10}>
                    <Button onClick={()=>setIsComplete(!isComplete)}>{isComp ? "Click To Uncomplete": "Click To Complete"}</Button>
                    <Label for="exampleCheckbox" sm={5} className='text-center' >{ `${isComp ? "Compete task click to UnComplete" : "InComplete task click to complete it"}`}</Label>
                </Col>
            </FormGroup>
            <div className='text-center row m-2'>
                <Col sm={12}>
                    <Button color='success' className='text-center p-3' onClick={()=> props.object.isEdit ? editItem(props.object.data.id):addItem()}>Success</Button>
                </Col>
            </div>
        </Form>
      </Container>
    </div>
  );
}
