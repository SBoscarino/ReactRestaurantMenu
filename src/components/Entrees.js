import React, {Component} from 'react';

export default class Entrees extends Component {
  //there is no need for a constructor or setting a state when you're just passing everything down as children.
  render(){
    let key = 0;
    let entrees = this.props.allEntrees.map((entree)=>{
      key++;
      return (
        <tbody key={key}>
           <tr>
             <td key={entree._id}>{entree.dish}</td>
             <td key={entree._id}>{entree.description}</td>
             <td key={entree._id}>{entree.price}</td>
           </tr>
        </tbody>
      )
    })
    return (
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <h4>Entrees</h4>
          <table className="table">
            <thead>
              <tr>
                <th className="col-md-3">Dish</th>
                <th className="col-md-8">Description</th>
                <th className="col-md-1">Price</th>
              </tr>
            </thead>
            {entrees}
          </table>
        </div>
      </div>
    );
  }
}
