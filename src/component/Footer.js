import React from "react";
import "./Footer.css"
import { AiFillTwitterSquare, AiFillLinkedin , AiFillFacebook } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import {IconContext} from "react-icons"






class Footer extends React.Component {
    render() {
        return (

            <>
                <footer class="footer-20192">
                    <div class="site-section">
                        <div class="container">


                            <div class="row">

                                <div class="col-sm">
                                    <a href="#" class="footer-logo"><h3>Everything you need in one place</h3>popcorn</a>
                                    <p class="copyright">
                                        <small>&copy; 2022</small>
                                    </p>
                                </div>

                                <div class="col-md-3">
                                    <h3>Follow us</h3>
                                    <IconContext.Provider
                                        value={{ color: '#8186D5', size: '35px' ,}}
                                    >
                                        <ul class="list-unstyled social">
                                        <li><a href="#"><AiFillFacebook /></a></li>
                                        <li><a href="#"><span><AiFillTwitterSquare /></span></a></li>
                                        <li><a href="#"><span><AiFillLinkedin /></span></a></li>
                                        <li><a href="#"><span><FaInstagramSquare /></span></a></li>
                                    </ul>
                                    </IconContext.Provider>
                                    
                                </div>

                            </div>
                        </div>
                    </div>
                </footer>
            </>
        );
    }
}

export default Footer;
