import Navigation from './Navigation';



const Header = () =>{
    return(
        <div className="header">
            <img className="pfp" src='./img/pfp.jpg' width="100px" height="100px"/>
            <h1>Hunter's Portfolio</h1>
            <Navigation/>
        </div>
    );
}

export default Header;