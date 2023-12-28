import React, { useCallback, useState } from 'react';
import { Collapse, Navbar,NavbarToggler,Nav, NavItem, NavbarBrand } from 'reactstrap';

export default function NavigationBar(props) {
    const [isOpen,setIsOpen] = useState(false);
    // const toggle = useCallback(()=>{
    //     setIsOpen(!isOpen);
    // },[isOpen])
    const toggle = () => setIsOpen(!isOpen);
    const markAllComplete = () => {
        props.markAllAsComplete();
    }
    const markAllInComplete = () => {
        props.markAllAsIncomplete();
    }
    const deleteCompleted = () => {
        props.deleteCompleted();
    }
  return (
    <div className='container-fluid mt-4 '>
      <Navbar dark color='info' expand="md" className='flex-auto'>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
            <Nav className='mx-auto gap-8' navbar>
                <NavItem className=''>
                    <NavbarBrand className='mx-auto cursor-pointer pr-4' onClick={markAllComplete}>Mark All As Complete</NavbarBrand>
                </NavItem>
                <NavItem>
                    <NavbarBrand className='mx-auto cursor-pointer pr-4' onClick={markAllInComplete}>Mark All As Incomplete</NavbarBrand>
                </NavItem>
                <NavItem>
                    <NavbarBrand className='mx-auto cursor-pointer pr-4' onClick={deleteCompleted}>Delete All Completed ToDo</NavbarBrand>
                </NavItem>
            </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
