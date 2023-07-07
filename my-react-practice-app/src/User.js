import React from 'react';
import './App.css';
import axios from "axios";

function User(props) {
    const [dataArray, setDataArray] = React.useState([]);
    const [userObject, setUserObject] = React.useState({
        firstname: '', lastname: '', companyname: '', role: '', about: '', email: ''
    });
    let tableHeders = ['Firstname', 'Lastname', 'Companyname', 'Role', 'Gender', 'Email'];



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
    React.useEffect(() => {
        console.log(dataArray)
    }, [dataArray]);


    const handleInputChange = (evt) => {

        const { name, value } = evt.target;
        
        setUserObject((userObject) => ({ ...userObject, [name]: value }));
    }

    const handleAddUser = () => {
        setDataArray(dataArray => [...dataArray, userObject]);
        setUserObject(
            {
                firstname: '', lastname: '', companyname: '', role: '', about: 'M', email: ''
            });
        console.log(dataArray);
    }


    return (
        <div className="App">
            <div>
                <h3>Welcome to User component</h3>
            </div>
            <div style={{ border: '1px solid black', height: '3%', width: '100%', padding: '3px' }}>
                <p>Add User</p>
                <div style={{ marginBottom: '10px' }}>
                    <input className='mr-10' placeholder='Enter Firstname'
                        name='firstname'
                        value={userObject.firstname}
                        onChange={handleInputChange}>
                    </input>
                    <input className='mr-10' placeholder='Enter Lastname' name="lastname"
                        value={userObject.lastname}
                        onChange={handleInputChange}>
                    </input>
                    <input className='mr-10' placeholder='Enter Companyname' name="companyname"
                        value={userObject.companyname}
                        onChange={handleInputChange}>
                    </input>
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <input className='mr-10' placeholder='Enter Role' name="role"
                        value={userObject.role}
                        onChange={handleInputChange}>
                    </input>
                    <select name="about" className='mr-10' onChange={handleInputChange} style={{ width: '190px' }}>
                        <option value='M'>Male</option>
                        <option value='F'>Female</option>
                    </select>
                    <input className='mr-10' placeholder='Enter Email' name="email"
                        value={userObject.email}
                        onChange={handleInputChange}>
                    </input>
                </div>
                <div>
                    <button onClick={handleAddUser}> Add user</button>
                </div>

            </div>
            <div>
                <table>
                    <thead>
                        {tableHeders.map((item) => <th>{item}</th>)}
                    </thead>

                    {dataArray && dataArray.map((item, index) => {
                        return (
                            <tbody>
                                <tr key={item.id}>
                                    <td>{item.firstname}</td>
                                    <td>{item.lastname}</td>
                                    <td>{item.companyname}</td>
                                    <td>{item.role}</td>
                                    <td>{item.about}</td>
                                    <td>{item.email}</td>
                                </tr></tbody>
                        )
                    })}
                </table>
            </div>
        </div>
    )


}


export default User;