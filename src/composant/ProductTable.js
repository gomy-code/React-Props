import React from 'react'
const ProductTable=(props)=> {
    return(
        <div>
            {
                props.data.map((el,i)=>(
<table style={{
    border:'1px solid black'
}}>
    <tr>
        <th>Categorie</th>
        <th>Prix</th>
        <th>Nom</th>
    </tr>
<tr>
<td>{el.categorie}</td>
<td>{el.prix}</td>
<td>{el.nom}</td>
</tr>
</table>
                ))}
        </div>
    );
};
export default ProductTable