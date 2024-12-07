import React, { useRef, useState } from 'react'

function Form() {
    const nameRef = useRef(null);
    const photoLinkRef = useRef(null);
    const descriptionRef = useRef(null);
    const [userData, setUserData] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            name: nameRef.current.value,
            photoLink: photoLinkRef.current.value,
            description: descriptionRef.current.value,
        };

        setUserData([...userData, newUser]);
        nameRef.current.value = '';
        photoLinkRef.current.value = '';
        descriptionRef.current.value = '';
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" ref={nameRef} placeholder="Name" required />
                <input type="text" ref={photoLinkRef} placeholder="Photo Link" required />
                <textarea ref={descriptionRef} placeholder="Description" required />
                <button type="submit">Submit</button>
            </form>
            <div className='container mt-10'  style={{display:'flex', gap:'20px'}}> 
            {userData.map((user, index) => (
                <div className="card" style={{ width: '18rem' }}>
                    <img src={user.photoLink} className="card-img-top" alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{user.name}</h5>
                        <p className="card-text">{user.description}</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            ))}
            </div>
           


        </>
    )
}

export default Form
