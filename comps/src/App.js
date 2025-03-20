import Button from './Button'

function App() {
    const handleClick = () => {
        console.log("kol")
    }
    return <div>
        <div>
            <Button primary rounded outline onClick={handleClick}>Click me!!</Button>
        </div>
        <div>
            <Button secondary rounded outline>Buy Now</Button>
        </div>
        <div>
            <Button success rounded outline>Check me out</Button>
        </div>
        <div>
            <Button warning rounded outline>Press meeee</Button>
        </div>
        <div>
            <Button danger rounded outline>Common</Button>
        </div>
    </div>
}

export default App