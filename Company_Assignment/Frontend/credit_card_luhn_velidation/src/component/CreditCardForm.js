import React from "react";
import { useState } from "react";
import { ValidateCard } from "../api/CardApi";

function CreditCardForm({handleOnClick}){


let [cardNo,setcardNo]=useState("");

return (
        <div>
            <div class="container">
    <div class="row">
        <div class="col-xs-12 col-md-4 offset-md-4">
            <div class="card ">
                <div class="card-header">
                    <div class="row">
                        <h1 class="text-xs-center">Credit Card Number Validator</h1>
                        <img class="img-fluid cc-img" src="http://www.prepbootstrap.com/Content/images/shared/misc/creditcardicons.png"/>
                    </div>
                </div>
                <div class="card-block">
                    <form role="form">
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="form-group">
                                    <label>CARD NUMBER</label>
                                    <div class="input-group">
                                        <input onChange={(e)=>setcardNo(e.target.value)} type="tel" class="form-control" placeholder="Please Enter Your Card Number" />
                                        <span class="input-group-addon"><span class="fa fa-credit-card"></span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </form>
                </div>
                <div class="card-footer">
                    <div class="row">
                        <div class="col-xs-12">
                            <button onClick={()=>handleOnClick(cardNo)} class="btn btn-warning btn-lg btn-block">SHOW RESULT</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


        </div>
    )
}


export default CreditCardForm;