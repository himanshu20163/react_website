import './allproject.css'
import Line from './line.jpg'
function Projectitle(){
    return(
     <div id="project">
        <div id="project_head">
        <h1 id="head_project">Our Projects</h1>
        <img src={Line} height="100" width="150" id="line_head"></img>
        </div>
     </div>
    );
}
function Allproject(props){
    return(
        <div id='cards'>
            <img src={props.img} height="150" width="250" id="card_img"></img>
            <p id="card_title">{props.title}</p>
        </div>
    );
} 
export {Projectitle,Allproject};