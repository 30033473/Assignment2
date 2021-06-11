import React,{Component} from "react";
import logo from './images/scplogo.png'

class Footer extends Component
{
    render()
    {
        return(
            <footer class="text-muted py-5">
            <div class="container">
              <p class="float-end mb-1">
                <a>
                  
                  <img className="w-25" alt="Back to Top" src={logo}/>
                
                </a>
              </p>
              <p class="mb-1">&copy; Mitchell Edgar</p>
              </div>
          </footer>
        );
    }
}

export default Footer;