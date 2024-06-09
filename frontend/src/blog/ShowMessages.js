import axios from 'axios'
import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'

const URI = 'http://localhost:8000/blogs/messages/'

const CompShowMessages = () => {
    const [messages, setMessages] = useState([])
    useEffect ( () => {
        getMessages()
    }, [])

    //procedimiento para mostrar todos los blogs
    const getMessages = async () => {
        const res = await axios.get(URI)
        setMessages(res.data)
    }

    //procedimiento para eliminar un blog
    // const deleteBlog = async(id) => {
    //     await axios.delete(`${URI}${id}`)
    //     getBlogs()
    // }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to="/create" className='btn btn-primary mt-2 mb-2'><i class="fa-solid fa-plus"></i></Link>
                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>
                                <th>Id</th>
                                <th>Message</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {messages.map ((message) => (
                                <tr key={message.id}>
                                    <td>{message.id}</td>
                                    <td>{message.message}</td>
                                    <td>{message.status}</td>
                                    <td>
                                        <Link to={`/edit/${message.id}`} className='btn btn-info'><i class="fa-solid fa-pen-to-square"></i></Link>
                                        {/* <button onClick={()=>deleteBlog(blog.id)} className='btn btn-danger'><i class="fa-solid fa-trash-can"></i></button> */}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default CompShowMessages