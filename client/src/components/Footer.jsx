
import React from 'react';
import './css/Footer.css'; // Import the corresponding CSS file

const Footer = () => {
  return (<>
        <footer class="footer-container">
            <div class="sec">
            <div class="quicklinks">
                <h2>Shop</h2>
                <ul>
                    <li><a href="#">Men</a></li>
                    <li><a href="#">Women</a></li>
                    <li><a href="#">Kids</a></li>
                    <li><a href="#">Shoes</a></li>
                </ul>
            </div>
                <ul class="sci">
                    <li><a href="#"><i class="fa-brands fa-facebook"></i></a></li>
                    <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                    <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                    <li><a href="#"><i class="fa-brands fa-youtube"></i></a></li>
                </ul>
            </div>
            <div class="quicklinks">
                <h2>Support</h2>
                <ul>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Privacy</a></li>
                    <li><a href="#">Help</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div class="quicklinks">
                <h2>Contact Us</h2>
                <ul class="info">
                    <li>
                        <span><i class="fa-solid fa-phone"></i></span>
                        <p><a href="tel:9745372508">9745372508</a></p>
                    </li>
                    <li>
                        <span><i class="fa-solid fa-envelope"></i></span>
                        <p><a href="mailto:abc2024@gmail.com">abc2024@gmail.com</a></p>
                    </li>
                </ul>
            </div>

        </footer>
    <div class="copyrightText">
        <p>Copyright &copy; 2024 New Website. All Rights Reserved.</p>
    </div>
    </>
  );
};

export default Footer;








{/* <footer className="footer-container">
      <p>&copy; 2024 HOSTELIFY. All rights reserved.</p>
    </footer> */}