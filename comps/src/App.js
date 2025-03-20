import Accordion from './components/Accordion'
import Button from './components/Accordion'

function App() {
    const items = [
        {
            id: '123',
            label: 'First label',
            content: 'some text'
        },
        {
            id: '12',
            label: 'Second label',
            content: 'some text'
        },
        {
            id: '13',
            label: 'Third label',
            content: 'some text'
        }
    ]
    return (
        <Accordion items={items} />
    )
}

export default App