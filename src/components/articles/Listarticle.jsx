import React, { useState } from 'react'
import { useEffect } from 'react'
import {fetcharticles ,deletearticle} from "../../services/articleservice"
import Affichearticle from './Affichearticle'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import Insertarticle from './Insertarticle';
const Listarticle = () => {
const [products,setProducts]=useState([])
useEffect(() => {
listproduits()
}, [])
const listproduits=async()=>{
try {
await fetcharticles().then(res=>setProducts(res.data))
}
catch (error) {
console.log(error)
}
}
const addproduct=(newproduit)=>{
setProducts([newproduit,...products])
}
const deleteProduct = (productId,ref) => {

    confirmAlert({
    title: "Confirm delete...",
    message: " supprimer l' article: " + ref,
    buttons: [
    {    
    label: 'Oui',
    onClick: () => deletearticle(productId)
    .then(res=>
    setProducts(products.filter((product) => product._id !==productId))) //.then(console.log("suppression effectuée avec success"))
    .catch(error=>console.log(error))
    },
    {
    label: 'Non',
    }
    ]
    });
    }
const updateProduct = (prmod) => {
setProducts(products.map((product) =>product._id === prmod._id ? prmod :
product));
};
return (
<div>
Liste des produits
<Insertarticle addproduct={addproduct}/>
<Affichearticle products={products} deleteProduct={deleteProduct}/>
</div>
)
}
export default Listarticle