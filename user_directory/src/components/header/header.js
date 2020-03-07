import React from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';


function header(props) {
    return (

        <div className="app">
            <nav className="navbar navbar-light" id="headerNav">
                <div className='col-md-12' id='head'>
                    <h1 className="title">Employee Directory</h1>
                    <h3 className="subTitle">Click on carrots to filter by heading or use the search box to narrow your results.</h3>
                </div>
            </nav>

        </div>

    )
}

export default header;

// class Page extends Component() {
//     render() {
//         return (
//             <div className="App">
//                 <nav class="navbar navbar-light bg-light">
//                     <div class='col-md-12' id='head'>
//                         <h1> Employee Directory</h1>
//                         <h3>Click on carrots to filter by heading or use the search box to narrow your results.
// </h3>
//                     </div>
//                 </nav>
//                 <br></br>
//                 <nav class="navbar navbar-light bg-light">
//                     <form>
//                         <div class="row">
//                             <div class="form">
//                                 <input type="text" class="form-control" placeholder="search" />
//                             </div>
//                         </div>
//                     </form>
//                 </nav>
//                 <br></br>
//                 <br></br>

//                 <div class="row">
//                     <div class="col-md-1"></div>
//                     <div class="col-md-1">Image</div>
//                     <div class="col-md-2">Name</div>
//                     <div class="col-md-1">Phone</div>
//                     <div class="col-md-4">Email</div>
//                     <div class="col-md-1">DOB</div>
//                     <div class="col-md-1"></div>
//                 </div>
//             </div>
//         );
//     }
// }

