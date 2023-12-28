import React from 'react';
import { Button, Card, CardBody, CardText, CardTitle, Col, Row } from 'reactstrap';

export default function Body(props) {
    return (
        <div>
            <Card>
                <CardBody className='text-center'>
                    <CardTitle>{props.data.title}</CardTitle>
                    <CardText>{props.data.desc}</CardText>
                    <div className='btn' style={{ width: '100%'}}>
                        <Row>
                            <Col md={3}>
                                <Button color='info' id='edit' md={4} onClick={() => props.editTodo(props.data.id)} >Edit</Button>
                            </Col>
                            <Col md={6} disabled>{props.data.isDone ? "Task Done" : "Task Not Done"}</Col>
                            <Col md={3}>
                                <Button id='delete' color='danger' onClick={() => props.deleteTodo(props.data.id)}>Delete</Button>
                            </Col>
                        </Row>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
}
