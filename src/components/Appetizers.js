import React, {Component} from 'react';

class Appetizers extends Component {


  render(){
    //grab items, give them a key, and increment the key so each item is different.
    let key = 0;
    let appetizers = this.props.allAppetizers.map((appetizer)=>{
      key++;
      return (
        <tbody key={key}>
           <tr>
             <td key={appetizer._id}>{appetizer.dish}</td>
             <td key={appetizer._id}>{appetizer.description}</td>
             <td key={appetizer._id}>{appetizer.price}</td>
           </tr>
        </tbody>
      )
    })
    return (
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
        <h4>Appetizers</h4>
          <table className="table">
            <thead>
              <tr>
                <th className="col-md-3">Dish</th>
                <th className="col-md-8">Description</th>
                <th className="col-md-1">Price</th>
              </tr>
            </thead>
            {appetizers}
          </table>
        </div>
      </div>
    );
  }
}

export default Appetizers;
