import {useState} from 'react'
import BookEdit from './BookEdit'
function BookShow({book, onDelete, onEdit}) {
    const [showEdit, setSchowEdit] = useState(false)
    const handleDeleteClick = () => {
        onDelete(book.id)
    }
    const handleSubmit = (id, newTitle) => {
        setSchowEdit(false)
        onEdit(id, newTitle)
    }
    const handleEditClick = () => {
        setSchowEdit(!showEdit)
    }

    let content = <h3>{book.title}</h3>
    if(showEdit) {
        content = <BookEdit book={book} onSubmit={handleSubmit} />
    }

    return (
        <div className="book-show">
            <div>{content}</div>
            <div className='actions'>
                <button className='edit' onClick={handleEditClick}>Edit</button>
                <button className="delete" onClick={handleDeleteClick}>Delete</button>
            </div>
        </div>
    )
}
export default BookShow