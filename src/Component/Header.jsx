import './top_header.css';
import Logo from './logo.png'
function Header() {
    return(
        <div className="main_head">
          <div className="top_head"> 
          <div id='list'>
            <div ><i class="fa fa-phone space_icon"><span className='i_list'>+91-753-847-98745</span></i></div>
            <div ><i class="fa fa-envelope"><span className='i_list'>info@urba</span></i></div>
          </div>
          </div>
          <div className="header">
            <div className='logo'>
                <img src="https://th.bing.com/th/id/OIP.cCT5yC57szCDjunehxFjcQHaHa?pid=ImgDet&rs=1" height="50px" width="50px"></img>
            </div>
            <div className='menu_items'>
                <span className='menu_bar'>Home
                </span>
                <span className='menu_bar'>About
                </span>
                <span className='menu_bar'>Project
                </span>
                <span className='menu_bar'>Services
                </span>
                <span className='menu_bar'>Blog
                </span>
                <span className='menu_bar'>Contact Us
                </span>
            </div>
            <div className='enquiry'>
                <button id='btn_enquiry'>Enquire Now</button>
            </div>
          </div>
        </div>
    );
}
export default Header;