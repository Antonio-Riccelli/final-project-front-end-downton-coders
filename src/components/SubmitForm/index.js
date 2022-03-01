import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./styles.css"

class SubmitForm extends Component {
  constructor() {
    super();
    this.state = {
      showHideForm: false,
    };
    this.hideComponent = this.hideComponent.bind(this);
  }

  hideComponent(form) {
    switch (form) {
      case "showHideForm":
        this.setState({ showHideForm: !this.state.showHideForm });
        break;
        default:
          // eslint-disable-next-line no-unused-expressions
          null;
    }
  }

  render() {
    const { showHideForm } = this.state;
    return (
      <div className = "outer-container">
        <table>
        <tr>
            <td className = "create-experience-container">
              <button className="create-experience-button" onClick={() => this.hideComponent("showHideForm") } >
                Create Experience
              </button>
            </td>
          </tr>
          {showHideForm && (
            <div className= "main-container">
           <div className="card">
             <div className = "create-experience-image">
                 <fieldset><input type="file" className="form-image-file" ></input></fieldset>
             </div>
             <div className="mt-4 text-center">
               <fieldset> 
                 <div className="mt-3 inputbox">
                   <input type="text" className="form-control" name="" placeholder="Title"></input>
                   <div className= "locaton-date-flex">
                     <input type="text" className="form-control" name="" placeholder="Location"></input>
                     <input type="text" className="form-control" name="" placeholder="Date / Time"></input>
                   </div>
                   <input type="text" className="form-control" name="" placeholder="Description"></input>
                   <input type="text" className="form-control" name="" placeholder="price"></input>
                   <div className="mt-2"> <button className="btn btn-primary btn-block">Submit</button> </div>
                 </div> 
               </fieldset>
             </div>
           </div>
           </div>
          )}

         
        </table>
      </div>
    );
  }
}

export default SubmitForm;













// import React, { useState } from 'react';
// import { MDBCollapse, MDBBtn } from 'mdb-react-ui-kit';
// import 'bootstrap/dist/css/bootstrap.min.css'
// import "./SubmitForm.css"

// function SubmitForm() {
//   const [showShow, setShowShow] = useState(false);

//   const toggleShow = () => setShowShow(!showShow);

//   return (
    
//     <div className = "experience-form-container">      
//         <MDBBtn onClick={toggleShow} className="create-experience-button"><h2>Create New Experience</h2></MDBBtn>
//           <MDBCollapse show={showShow} className="show-container">
//           <div className= "main-container">
//           <div className="card">
//             <div className = "create-experience-image">
//                 <fieldset><input type="file" className="form-image-file" ></input></fieldset>
//             </div>
//             <div className="mt-4 text-center">
//               <fieldset> 
//                 <div className="mt-3 inputbox">
//                   <input type="text" className="form-control" name="" placeholder="Title"></input>
//                   <div className= "locaton-date-flex">
//                     <input type="text" className="form-control" name="" placeholder="Location"></input>
//                     <input type="text" className="form-control" name="" placeholder="Date / Time"></input>
//                   </div>
//                   <input type="text" className="form-control" name="" placeholder="Description"></input>
//                   <input type="text" className="form-control" name="" placeholder="price"></input>
//                   <div className="mt-2"> <button className="btn btn-primary btn-block">Submit</button> </div>
//                 </div> 
//               </fieldset>
//             </div>
//           </div>
//           </div>
//       </MDBCollapse>
//       </div>               
//   );
// }

// export default SubmitForm


