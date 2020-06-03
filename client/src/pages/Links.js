import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import mongo from "../Images/mngodbimg.png"
import nExpress from "../Images/nexpress.jpg"
import ract from "../Images/react.png"
import node from "../Images/node.png"
import Nav from "../components/Nav";
//import Dropdown from "react-toolbox/lib/dropdown"

// const mern = [
//   {value: 'mongo', label: 'mongo' },
//   {value: 'express', label: 'express'},
//   {value: 'react', label: 'react'},
//   {value: 'node', label: 'node'}
// ];

// class DropdownTest extends React.Component {
//   state = { value: ''};

//   handleChange = (value) => {
//     this.setState({value: value});

    
//   }

  


  // render () {
  //   return (
  //     <Dropdown
  //       auto
  //       onChange={this.handleChange}
  //       source={mern}
  //       value={this.state.value}
  //     />
  //   )}}


function Links() {
    // Setting our component's initial state
    const [links, setLinks] = useState([])
    const [formObject, setFormObject] = useState({})

    // Load all links and store them with setLinks
    useEffect(() => {
        loadLinks()
    }, [])

    // Loads all links and sets them to links
    function loadLinks() {
        API.getLinks()
            .then(res =>
                setLinks(res.data)
            )
            .catch(err => console.log(err));
    };

    // Handles updating component state when the user types into the input field
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value })
    };

    // When the form is submitted, use the API.saveBook method to save the book data
    // Then reload books from the database
    function handleFormSubmit(event) {
        event.preventDefault();
        if (formObject.url && formObject.subject) {
            API.saveLink({
                    category: formObject.category,
                    subject: formObject.subject,
                    url: formObject.url,
                    synopsis: formObject.synopsis
                })
                .then(res => loadLinks())
                .catch(err => console.log(err));
        }
        loadLinks();
    };

// function dbquery () {
//   db.cohortCorner.find( { category : "MongoDB" } )

//   console.log("button was clicked")
// }


    return (
    
<<<<<<< HEAD
     <Container fluid>
       <Nav/>
        <Row>
          <Col size="md-6">
            <Jumbotron><h2>Subjects to Choose From</h2>
            
            </Jumbotron>
           
             <h4>MongoDB <img src={mongo}width="50" height="50" alt="mongodb"/></h4>
              <h4>Express   <img src={nExpress}width="50" height="50" alt="express"/></h4>
              <h4>React <img src={ract}width="50" height="50" alt="react"/></h4>
              <h4>Node <img src={node}width="50" height="50" alt="node"/></h4>
           
            <Jumbotron>
              <h1>Submit a New Link for Reference</h1>
            </Jumbotron>
            <form>
              
              {/* <Dropdown
              auto
              onChange={this.handleChange}
              source={mern}
              value={this.state.value}
              /> */}
              {/* <DropdownTest/> */}
              
              {/* onChange={handleInputChange} */}
              {/* name="category" */}
              {/* placeholder="Please Pick a Category to Submit to!" */}
              
              <Input
                onChange={handleInputChange}
                name="subject"
                placeholder="Subject (required)"
              /> 
               <Input
                onChange={handleInputChange}
                name="url"
                placeholder="Url (required)"
              />
              <TextArea
                onChange={handleInputChange}
                name="synopsis"
                placeholder="Synopsis (Optional)"
              />
              <FormBtn
                disabled={!(formObject.category && formObject.subject && formObject.url)}
                onClick= {handleFormSubmit}
              >
                Submit New Reference Link
              </FormBtn>
            </form>
           
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Reference Links</h1>
            </Jumbotron>
            {links.length ? (
              <List>
                {links.map(link => (
                  <ListItem key={link._id}>
                    <Link to={"/links/" + link._id}>
                      <strong>
                        {link.category}
                        {link.subject} by {link.url}
                      </strong>
                    </Link>
                    </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
  );
  };
=======
      <Container fluid>
        <Nav/>
         <Row>
           <Col size="md-6">
             <Jumbotron>
               <h2>Subjects to Choose From</h2>
             
             </Jumbotron>
>>>>>>> master

              <button onClick={dbquery}> MongoDB <img src={mongo}width="50" height="50" alt="mongodb"/></button> 
              <button onClick={dbquery}>Express   <img src={nExpress}width="50" height="50" alt="express"/></button> 
              <button onClick={dbquery}>  React <img src={ract}width="50" height="50" alt="react"/></button> 
              <button onClick={dbquery}> Node <img src={node}width="50" height="50" alt="node"/></button> 

            <Jumbotron>
               <h1>Submit a New Link for Reference</h1>
             </Jumbotron>
             <form>
               <Input 
               onChange={handleInputChange}
               name="category"
               placeholder="Please Pick a Category to Submit to!"
               />
               <Input
                 onChange={handleInputChange}
                 name="subject"
                 placeholder="Subject (required)"
               /> 
                <Input
                 onChange={handleInputChange}
                 name="url"
                 placeholder="URL (required)"
               />
               <TextArea
                 onChange={handleInputChange}
                 name="synopsis"
                 placeholder="Synopsis (Optional)"
               />
               <FormBtn
                 disabled={!(formObject.category && formObject.subject && formObject.url)}
                 onClick= {handleFormSubmit}
               >
                 Submit New Reference Link
               </FormBtn>
             </form>
            
           </Col>
           <Col size="md-6 sm-12">
             <Jumbotron>
               <h1>Reference Links</h1>
             </Jumbotron>
             {links.length ? (
               <List>
                 {links.map(link => (
                   <ListItem key={link._id}>
                     <Link to={"/links/" + link._id}>
                       <strong>
                        {link.subject}
                       </strong>
                     </Link>
                     </ListItem>
                 ))}
               </List>
             ) : (
               <h3>No Results to Display</h3>
             )}
           </Col>
         </Row>
       </Container>
   );
   };
 
 
 export default Links;