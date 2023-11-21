import React from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

export default function Terms(){
    return(
        <div>
            <h3>By clicking "I agree to the terms and conditions", you agree to the following terms and condition</h3>
            <br/>
            <p>1. You agree to give this project a 100/100 marks</p>
            <p>2. You agree that this project is cool ;)</p>
            <br/>
            <p><RouterLink to='/register'>click here</RouterLink> to go back to the registration page</p>
        </div>
    )
}
