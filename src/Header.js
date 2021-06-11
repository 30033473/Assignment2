import React,{Component} from "react";
import headervideo from "./images/header_vid.webm"

class Header extends Component
{
    render()
    {
        return(
            <div>
            <section class="py-1 text-center container">
            <div class="row py-lg-1">
            <div class="col-lg-6 col-md-8 mx-auto  bg-dark w-100">
                <video autoPlay loop muted className="mx-auto w-100">
                <source src={headervideo} type="video/webm" /></video>
              <hr class="text-warning" />
            </div>
            </div>
            </section>
            </div>

        );
    }
}

export default Header;
