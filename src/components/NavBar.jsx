import { Link } from 'react-router-dom';
 

const NavBar = (props) => {
    let navItemData = [
        { to: "/signin", label: "Sign In" },
        { to: "/signup", label: "Sign Up" }
    ]
    if (props.user) {
        navItemData = [
            { to: "", label: "Sign Out", onClick:  props.handleSignout  },
        ]
    }
    return (
        <nav>
            <ul>
                {navItemData.map((v,i) => {
                    return (<li key={i}>
                        <Link to={v.to} onClick={v.onClick}>
                            {v.label}
                        </Link>
                    </li>)
                })}

            </ul>
        </nav>
    );
};
export default NavBar;