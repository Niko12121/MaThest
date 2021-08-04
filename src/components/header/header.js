import './header.css'

const Header = () => {
    let squares = [];
    for (let i = 0; i<25; i++) {
        squares.push(i)
    }
    return (
        <header class='header'>
            <p>Welcome to MaThest!</p>
            <ul class="background">
                {squares.map(a => {
                    return (<li class="square">{a}</li>)}
                )}
            </ul>
        </header>
        
    )
}

export default Header