import React from 'react'
const ProductTable=(props)=> {
    return(
        <table style={{
            border:'1px solid black'
        }}>
             <tr>
        <th>Categorie</th>
        <th>Prix</th>
        <th>Nom</th>
    </tr>
            {
                props.data.map((el,i)=>(

<tr> 
<td>{el.categorie}</td>
<td>{el.prix}</td>
<td>{el.nom}</td>
</tr>

                ))}
        </table>
    );
};
export default ProductTable