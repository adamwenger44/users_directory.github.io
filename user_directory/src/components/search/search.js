import React from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';


function seach(props) {
    return (

        <div className="app">
            <br></br>
            <br></br>
            <nav class="navbar navbar-light bg-light">
                <form>
                    <div class="row">
                        <div class="form">
                            <input type="text" class="form-control" placeholder="search" />
                        </div>
                    </div>
                </form>
            </nav>

        </div>

    )
}

export default seach;