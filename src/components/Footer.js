import React from 'react';
import logo from '../images/logo.svg';
import { GrFacebook } from 'react-icons/gr';
import { FaTwitter, FaPinterest, FaInstagram } from 'react-icons/fa';

const Footer = () => {
	return (
		<>
			<footer className='footer'>
				<div>
					<div>
						<img src={logo} alt='logo' />
					</div>
					<ul>
						<li>
							<button>About</button>
						</li>
						<li>
							<button>Careers</button>
						</li>
						<li>
							<button>Events</button>
						</li>
						<li>
							<button>Products</button>
						</li>
						<li>
							<button>Support</button>
						</li>
					</ul>
				</div>
				<div>
					<ul>
						<li>
							<GrFacebook />
						</li>
						<li>
							<FaTwitter />
						</li>
						<li>
							<FaPinterest />
						</li>
						<li>
							<FaInstagram />
						</li>
					</ul>
				</div>
				<div>&copy; 2022 LoopStudios. All rights reserved.</div>
			</footer>
		</>
	);
};

export default Footer;
