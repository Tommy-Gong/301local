import './home.css'
import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Button, Col, Container, Form, Row, Card, InputGroup } from "react-bootstrap";
import Navigation from '../../components/Navigation'
import { HiOutlinePencil } from 'react-icons/hi'
import { BsCameraVideo, BsCloudUpload, BsEmojiSmile, BsImage } from 'react-icons/bs'
import { GoLocation } from 'react-icons/go'

import avatar from './avatar.png'
import imgPH from './image-placeholder.jpg'
function Home() {
  const user = useSelector((state) => state.user);
  const [tab, setTab] = useState(1)
  const isActive = true;
  const layerExamples = ["test", "Categories", "test"]
  const postExanples = [""]
  const emotor = useRef();

  function tabOnChange(i) {
    setTab(i);
  }

  function contentOnChange(content) {
    console.log(content);
  }

  function myClean() {
    console.log("clean");
    emotor.current.onFocus();
  }
  return (
    <div>
      <Navigation />
      <Container className='my-4'>

        <Row>
          <Col lg="3">
            <Card className="my-3">
              <Card.Body>
                <Row className='my-2'>
                  <Col lg={3}>
                    <img src={avatar} width={56} height={56}></img>
                  </Col>
                  <Col lg={9}>
                    Username
                  </Col>
                </Row>
                
                <Row >
                <Form>
                  <Form.Group>
                    <Form.Control className="bg-light input" as="textarea" placeholder='Share your life!' rows={4}></Form.Control>
                    
                      <Row className=''>
                        <Col lg={1}><BsImage size={28} /></Col>
                        <Col lg={1}><BsCameraVideo size={28} /></Col>
                        <Col lg={1}><GoLocation size={28} /></Col>
                        <Col lg={1}><BsCloudUpload size={28} /> </Col>
                        <Col lg={1}><BsEmojiSmile size={28} /></Col>
                      </Row>
                      
                    <button className='btn'>Post</button>
                  </Form.Group>

                </Form>
                </Row>
                
              </Card.Body>
            </Card>

            <Card className="my-3">
              <Card.Body >
                <div className="row p-2" style={{ display: "flex", "align-items": "center" }}>
                  <div className="col-lg-10 ">Layers </div>
                  <div className="col-lg-2">
                    <button className="btn text-left"><HiOutlinePencil /></button>
                  </div>
                  <hr></hr>
                  {
                    layerExamples.map((category) => {
                      return <button className="btn bg-light m-2 text-start w-75">{category}</button>
                    })
                  }
                </div>

              </Card.Body>
            </Card>
          </Col >

          <Col lg="9">
            <Card className="my-3">
              <Card.Body className='nopadding'>
                <div className="d-flex justify-content-evenly">
                  <button className={tab == 1 ? "btn btn-nav active p-3" : "btn btn-nav"} onClick={() => tabOnChange(1)}>For you</button>
                  <button className={tab == 2 ? "btn btn-nav active p-3" : "btn btn-nav"} onClick={() => tabOnChange(2)}>Following</button>
                </div>
              </Card.Body>
            </Card>
            <Card className="my-3">
              <Card.Body className="bg-light shadow nopadding">
                <Row className="nopadding">
                  <Col lg="7" className="bg-white rounded">
                    <img src={imgPH}></img>
                  </Col>
                  <Col lg="5">
                    test
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>

  );
}

export default Home;

/* 

<div className="content">
        <div className="row">
        <div className="col-4">
        <div className="lb">
        {user &&(<div className="photoFrame"> 
        <img src={user.picture} style={{ width: 80, height: 80, marginRight: 10, objectFit: "cover", borderRadius: "50%" }} /> <div>{user.name}</div>
        </div>)} 
           
            
            <div className="icons">
              <span><i class="bi bi-image"></i></span>
              <span><i class="bi bi-camera-video"></i></span>
              <span><i class="bi bi-geo-alt"></i></span>
              <span><i class="bi bi-cloud-upload"></i></span>
              <span><i class="bi bi-emoji-smile"></i></span></div>

              <div className="inputBtn">
                 <input class="btn btn-secondary " id="postBtn" type="submit" value="Post"></input>
                 </div> 
                 </div>
                <div className="lb2">
                  <div>Layers</div>





                  <div className="layerBox"><p>Layer Category</p></div>
                  <div className="layerBox"><p>Layer Category</p></div>
                  <div className="layerBox"><p>Layer Category</p></div>
                  <div className="layerBox"><p>Layer Category</p></div>
                  <div className="layerBox"><p>Layer Category</p></div>
                  <div className="layerBox"><p>Layer Category</p></div>
                 </div>                        
        </div>
        <div className="col-8">
           <div className="rb">
           <nav class="nav nav-pills flex-column flex-sm-row">
            <a class="flex-sm-fill text-sm-center nav-link" aria-current="page" href="#">For You</a>
            <a class="flex-sm-fill text-sm-center nav-link" href="#">Following</a></nav>
           </div>

           <div className="rcard"> 
           <div class="row g-0">
           <div class="col-md-7">
             <img src={require('./image-placeholder.jpg')} class="img-fluid rounded-start" style={{ height:350, borderRadius: "5%"}} alt="IMAGE"/>
             </div>
             <div class="col-md-5">
             <div class="card-body">
             <div className="userInfo">
                    <div className="avatar">
                      <img src={require('./avatar.png')} style={{ width: 60, height: 60, marginRight: 10, objectFit: "cover", borderRadius: "50%"}} />
                       </div>
                       <div className="userdescrip">
                        <div><b>User Name</b></div>
                        <div>User Description</div></div>
             </div>

             <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p class="card-text"><small class="text-muted">#posttag #posttag</small></p>
              <div className="icons">
                <span><i class="bi bi-heart"></i></span>
                <span><i class="bi bi-send"></i></span>
                <span><i class="bi bi-box-arrow-up-right"></i></span>
                </div>

                <div class="input-group mb-3">
                   <input type="text" class="form-control" placeholder="Add a Comment" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                   <button class="btn" type="button" id="button-addon2"><i class="bi bi-chat"/></button></div>    
             </div>
             </div>
           </div>
           </div>
        

           <div className="rcard"> 
           <div class="row g-0">
           <div class="col-md-7">
             <img src={require('./image-placeholder.jpg')} class="img-fluid rounded-start" style={{ height:350, borderRadius: "5%"}} alt="IMAGE"/>
             </div>
             <div class="col-md-5">
             <div class="card-body">
             <div className="userInfo">
                    <div className="avatar">
                      <img src={require('./avatar.png')} style={{ width: 60, height: 60, marginRight: 10, objectFit: "cover", borderRadius: "50%"}} />
                       </div>
                       <div className="userdescrip">
                        <div><b>User Name</b></div>
                        <div>User Description</div></div>
             </div>

             <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p class="card-text"><small class="text-muted">#posttag #posttag</small></p>
              <div className="icons">
                <span><i class="bi bi-heart"></i></span>
                <span><i class="bi bi-send"></i></span>
                <span><i class="bi bi-box-arrow-up-right"></i></span>
                </div>

                <div class="input-group mb-3">
                   <input type="text" class="form-control" placeholder="Add a Comment" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                   <button class="btn" type="button" id="button-addon2"><i class="bi bi-chat"/></button></div>    
             </div>
             </div>
           </div>
           </div>




        </div>
        </div>              
       </div> 

*/