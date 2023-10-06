export function Header(props) //namespace export
{
    return(
        <div>
            <h1>I am {props.name} working as a {props.role}</h1>
            <h1>Header Component 1</h1>
        </div>
    )
}
// export default Header; //default export

export function Nav() //namespace export
{
    return(
        <div>
            <h1>Navigation Component</h1>
        </div>
    )
}
// export default Nav; //default export