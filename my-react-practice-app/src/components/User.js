import React from 'react';
import '../styles/App.css';
import '..';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import Header from './Header';

const css ={
    "input[type=text], input[type=password] :": {
        width: "30%",
        padding: "12px 20px",
        margin: "10px",
        display: "inline-block",
        border: "1px solid #ccc",
        boxSizing: "border-box"
      },
      button: {
        backgroundColor: "#1976d2",
        color: "white",
        padding: "14px 20px",
        margin: "8px 0",
        border: "none",
        cursor: "pointer",
        marginRight: '7px',
        marginLeft: '10px',
        width: '10% !important'
      },
      select: {
        width: "30%",
        padding: "12px 20px",
        margin: "10px",
        display: "inline-block",
        border: "1px solid #ccc",
        boxSizing: "border-box"
      }
};


function User(props) {
    const [dataArray, setDataArray] = React.useState([]);
    const [editClicked, setEditClicked] = React.useState(false);
    const [userObject, setUserObject] = React.useState({
        id: '', firstname: '', lastname: '', companyname: '', role: '', about: '', email: ''
    });
    let tableHeders = ['Firstname', 'Lastname', 'Companyname', 'Role', 'Gender', 'Email'];

    const navigate = useNavigate();

    //UseEffect hook called whenever dependant state gets changed
    React.useEffect(() => {
        const editUser = async () => {
            const response = await axios.get(`https://mocki.io/v1/d870b45a-9cbd-40d3-8fa9-612909f94276`);

            setDataArray(response.data);

        };
        if (dataArray.length === 0) {

            editUser();
        }

    }, []);
    //UseEffect hook called whenever dependant state gets changed
    // React.useEffect(() => {
    //    console.log(dataArray);
    // }, [dataArray, userObject]);


    const handleInputChange = (evt) => {

        const { name, value } = evt.target;

        setUserObject((userObject) => ({ ...userObject, [name]: value }));
    }

    const handleAddUser = (e) => {
        e.preventDefault();
        if (editClicked) {
            setEditClicked(false);
            let tempData = dataArray;
            tempData.map((item) => {
                if (item.id === userObject.id) {
                    item = Object.assign(item, userObject);
                }
            })

            setDataArray(tempData);
            setUserObject(
                {
                    id: '', firstname: '', lastname: '', companyname: '', role: '', about: 'M', email: ''
                });

        } else {
            let obj = { ...userObject, id: Math.floor(Math.random() * 100) }

            setDataArray(dataArray => [...dataArray, userObject]);
            setUserObject(
                {
                    id: '', firstname: '', lastname: '', companyname: '', role: '', about: 'M', email: ''
                });
        }

    }
    const handleEdit = (item) => (e) => {
        setEditClicked(true);
        setUserObject(item);
    }
    const handleDelete = (id) => {

        setDataArray(() =>
            dataArray.filter(a =>
                a.id !== id
            )
        );
    }

    return (
        <div className="App">
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <h3 style={{ marginLeft: '42%' }}>Welcome to User component</h3>
                <Header url="/items"></Header>
            </div>
            <form onSubmit={handleAddUser} style={{ border: '1px solid black', height: '3%', width: '100%', padding: '3px' }}>
                <p>Add User</p>
                <div style={{ marginBottom: '10px' }}>
                    <input className='mr-10' style={css['input[type=text], input[type=password] :']} placeholder='Enter Firstname'
                        name='firstname'
                        value={userObject.firstname}
                        onChange={handleInputChange}>
                    </input>
                    <input className='mr-10' style={css['input[type=text], input[type=password] :']} placeholder='Enter Lastname' name="lastname"
                        value={userObject.lastname}
                        onChange={handleInputChange}>
                    </input>
                    <input className='mr-10' style={css['input[type=text], input[type=password] :']} placeholder='Enter Companyname' name="companyname"
                        value={userObject.companyname}
                        onChange={handleInputChange}>
                    </input>
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <input className='mr-10' style={css['input[type=text], input[type=password] :']} placeholder='Enter Role' name="role"
                        value={userObject.role}
                        onChange={handleInputChange}>
                    </input>
                    <select name="about" className='mr-10' style={css.select} onChange={handleInputChange} >
                        <option value='M'>Male</option>
                        <option value='F'>Female</option>
                    </select>
                    <input className='mr-10' style={css['input[type=text], input[type=password] :']} placeholder='Enter Email' name="email"
                        value={userObject.email}
                        onChange={handleInputChange}>
                    </input>

                </div>
                <div>
                    {editClicked ? <button style={css.button} type='submit'> Edit user</button> : <button style={css.button} type='submit'> Add user</button>}

                </div>

            </form>
            <div>
                <table>
                    <thead>
                        {tableHeders.map((item, index) => <td key={index}>{item}</td>)}
                    </thead>

                    {dataArray && dataArray.map((item, index) => {
                        return (
                            <tbody key={item.id}>
                                <tr >
                                    <td>{item.firstname}</td>
                                    <td>{item.lastname}</td>
                                    <td>{item.companyname}</td>
                                    <td>{item.role}</td>
                                    <td>{item.about}</td>
                                    <td>{item.email}</td>
                                    <td><img className='editImg' src="./edit-icon.jpg" onClick={handleEdit(item)} /></td>
                                    <td><img className='editImg' src="./delete-icon.png" onClick={() => handleDelete(item.id)} /></td>
                                </tr>
                            </tbody>
                        )
                    })}
                </table>
            </div>
        </div>
    )


}


export default User;