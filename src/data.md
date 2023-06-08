```js
export default function CreateBookmark ({
  createBookmark,
  bookmark,
  handleChange
}) {
  return (
    <>
      <h2>Create A Bookmark</h2>
      <form onSubmit={(e) => {
        e.preventDefault()
        createBookmark()
      }}
      >
        <input type='text' value={bookmark.title} name='title' onChange={handleChange} placeholder='Title' />
        <input type='text' value={bookmark.url} name='url' onChange={handleChange} placeholder='URL' />
        <input type='submit' value='Create Bookmark' />
      </form>
    </>
  )
}
```

```js
import { useRef, useState } from 'react'

export default function Bookmark ({
  bookmark,
  updateBookmark,
  deleteBookmark
}) {
  const [showInput, setShowInput] = useState(false)
  const inputRef = useRef(null)
  return (
    <>
      <li>
        <h4 onClick={() => setShowInput(!showInput)}>{bookmark.title}</h4>
        <input
          ref={inputRef}
          style={{ display: showInput ? 'block' : 'none' }}
          type='text'
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              const title = inputRef.current.value
              updateBookmark(bookmark._id, { title })
              setShowInput(false)
            }
          }}
          defaultValue={bookmark.title}
        />
        <a href={bookmark.url} target='_blank' rel='noreferrer'> {bookmark.url}</a>
        <button
          onClick={() => deleteBookmark(bookmark._id)}
        >
          Delete Me
        </button>
      </li>
    </>
  )
}

```

```js
import Bookmark from '../Bookmark/Bookmark'

export default function BookmarkList ({
  bookmarks,
  updateBookmark,
  deleteBookmark
}) {
  return (
    <ul>
      {
            bookmarks.length
              ? bookmarks.map(bookmark => (
                <Bookmark
                  key={bookmark._id}
                  bookmark={bookmark}
                  updateBookmark={updateBookmark}
                  deleteBookmark={deleteBookmark}
                />
              ))
              : <>
                <h2>No Bookmarks Yet... Add one in the Form Above</h2>
                </>
        }
    </ul>
  )
}

```

```js
import { useState, useEffect } from 'react'
import Auth from './components/Auth/Auth'
import CreateBookmark from './components/CreateBookmark/CreateBookmark'
import BookmarkList from './components/BookmarkList/BookmarkList'

export default function App () {
  /*
    Login, SignUp, CreateBookmark, ListBookmarksByUser, DeleteBookmark, UpdateBookmark
    */

  const handleChangeAuth = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value })
  }
  const handleChange = (event) => {
    setBookmark({ ...bookmark, [event.target.name]: event.target.value })
  }
  
  const [bookmark, setBookmark] = useState({
    title: '',
    url: ''
  })
  const [bookmarks, setBookmarks] = useState([])

  const createBookmark = async () => {
    try {
      const response = await fetch('/api/bookmarks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          
        },
        body: JSON.stringify({ ...bookmark })
      })
      const data = await response.json()
      setBookmarks([data, ...bookmarks])
    } catch (error) {
      console.error(error)
    } finally {
      setBookmark({
        title: '',
        url: ''
      })
    }
  }
  const listBookmarksByUser = async () => {
    try {
      const response = await fetch('/api/users/bookmarks', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      })
      const data = await response.json()
      setBookmarks(data)
    } catch (error) {
      console.error(error)
    }
  }
  const deleteBookmark = async (id) => {
    try {
      const response = await fetch(`/api/bookmarks/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          
        }
      })
      const data = await response.json()
      const bookmarksCopy = [...bookmarks]
      const index = bookmarksCopy.findIndex(bookmark => id === bookmark._id)
      bookmarksCopy.splice(index, 1)
      setBookmarks(bookmarksCopy)
    } catch (error) {
      console.error(error)
    }
  }
  const updateBookmark = async (id, updatedData) => {
    try {
      const response = await fetch(`/api/bookmarks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          
        },
        body: JSON.stringify(updatedData)
      })
      const data = await response.json()
      const bookmarksCopy = [...bookmarks]
      const index = bookmarksCopy.findIndex(bookmark => id === bookmark._id)
      bookmarksCopy[index] = { ...bookmarksCopy[index], ...updatedData }
      setBookmarks(bookmarksCopy)
    } catch (error) {
      console.error(error)
    }
  }


  return (
    <>
 
      <CreateBookmark
        createBookmark={createBookmark}
        bookmark={bookmark}
        handleChange={handleChange}
      />
      <BookmarkList
        bookmarks={bookmarks}
        deleteBookmark={deleteBookmark}
        updateBookmark={updateBookmark}
      />
    </>
  )
}
```