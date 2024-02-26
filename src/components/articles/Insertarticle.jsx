import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import { addarticle } from '../../services/articleservice';
import {fetchscategories} from "../../services/scategorieservice"
import { useEffect } from 'react';
const Insertarticle = ({addproduct}) => {
const [article,setArticle]=useState({})
//const[article,setArticle]=useState({})
const[scategories,setScategories]=useState([])
const [validated, setValidated] = useState(false);
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
useEffect(() => {
getScategories()
}, [])
const getScategories=async()=>{
await fetchscategories().then(res=>{

setScategories(res.data)
})
}
const handlechange=(e)=>{
setArticle({...article,[e.target.name]:e.target.value})
}
const handleSubmit = (e) => {
e.preventDefault();
const form = e.currentTarget;
if (form.checkValidity() === true) {
//faire le add dans la BD
addarticle(article)
.then(res => {
//const response = res.data;
// faire le add dans le tableau affiché
addproduct(res.data);
//vider le form
handleReset()
setValidated(false);
})
.catch(error=>{
console.log(error)
alert("Erreur ! Insertion non effectuée")
})
}
setValidated(true);
}

const handleReset=()=>{
setArticle({})
handleClose()
}
return (
<div >
<nav className="navbar navbar-expand-lg navbar-dark bg-success">
<div className="container-fluid">
<Button
onClick={handleShow}
className="btn btn-outline-light"
style={{float: 'left','margin':10,'left':10,fontFamily:'Arial'}}>
<i className="fa-solid fa-circle-plus"></i>

&nbsp;
Nouveau
</Button>

</div>
</nav>

<Modal show={show} onHide={handleClose}>
<Form noValidate validated={validated} onSubmit={handleSubmit}>
<Modal.Header closeButton>
<h2>Create Product</h2>
</Modal.Header>
<Modal.Body>
<div className="container w-100 d-flex justify-content-center">
<div>
<div className='form mt-3'>
<Row className="mb-2">
<Form.Group as={Col} md="6" >
<Form.Label >Référence *</Form.Label>
<Form.Control
required
type="text"
placeholder="Référence"
name="reference"
value={article.reference}
onChange={(e)=>handlechange(e)}
/>
<Form.Control.Feedback type="invalid">
Saisir Référence Article
</Form.Control.Feedback>
</Form.Group>
<Form.Group as={Col} md="6">
<Form.Label>Désignation *</Form.Label>
<Form.Control
required
type="text"
name="designation"
placeholder="Désignation"
value={article.designation}
onChange={(e)=>handlechange(e)}
/>
<Form.Control.Feedback type="invalid">
Saisir Désignation
</Form.Control.Feedback>
</Form.Group>

</Row>
<Row className="mb-2">
<Form.Group className="col-md-6">
<Form.Label>Marque *</Form.Label>
<InputGroup hasValidation>
<Form.Control
type="text"
required
name="marque"
placeholder="Marque"
value={article.marque}
onChange={(e)=>handlechange(e)}
/>
<Form.Control.Feedback type="invalid">
Marque Incorrecte
</Form.Control.Feedback>
</InputGroup>
</Form.Group>
<Form.Group as={Col} md="6">
<Form.Label>Prix</Form.Label>
<Form.Control
type="number"
placeholder="Prix"
name="prix"
value={article.prix}
onChange={(e)=>handlechange(e)}
/>
</Form.Group>
</Row>
<Row className="mb-3">
<Form.Group className="col-md-6 ">
<Form.Label>
Qté stock<span className="req-tag">*</span>
</Form.Label>
<Form.Control
required
type="number"
name="qtestock"
value={article.qtestock}
onChange={(e)=>handlechange(e)}
placeholder="Qté stock"
/>
<Form.Control.Feedback type="invalid">
Qté stock Incorrect
</Form.Control.Feedback>
</Form.Group>
<Form.Group as={Col} md="6">
<Form.Label>Image</Form.Label>
<Form.Control

type="text"
name="imageart"
placeholder="Image"
value={article.imageart}
onChange={(e)=>handlechange(e)}
/>
</Form.Group>
<Form.Group as={Col} md="12">
<Form.Label>S/Catégorie</Form.Label>
<Form.Control
as="select"
type="select"
name="scategorieID"
value={article.scategorieID}
onChange={(e)=>handlechange(e)}
>
<option></option>
{scategories.map((scat)=><option key={scat._id}
value={scat._id}>{scat.nomscategorie}</option>
)}
</Form.Control>
</Form.Group>
</Row>
</div>
</div>
</div>
</Modal.Body>
<Modal.Footer>
<Button type="submit">Enregistrer</Button>
<Button type="button" className="btn btn-warning"
onClick={()=>handleReset()}>Annuler</Button>
</Modal.Footer>
</Form>
</Modal>
</div>
)
}
export default Insertarticle