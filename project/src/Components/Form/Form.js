
import { useEffect, useState } from 'react';
import './Form.css';

function Form(){

    let initialvalue = {Fname: "", Lname: "", email: "", password: "",repassword : ""};
    let [formvalue, setFormvalue] = useState(initialvalue);
    let [formerror, setFormerror] = useState({});
    let [isSubmit, setIsSubmit] = useState(false);


    let handleValue = (e) =>{
        const {name, value} = e.target;
        setFormvalue({...formvalue, [name]:value});
        console.log(formvalue);
    }

    let handleSubmit =(e) =>{
        e.preventDefault();
       setFormerror(validate(formvalue));
       setIsSubmit(true);
    }

    useEffect(() =>{
        console.log(formerror)
        if(Object.keys(formerror).length === 0 && isSubmit){
            console.log(formvalue);
        }
    },[formerror,formvalue,isSubmit])

    const validate = (value) =>{
        const error = {};
        // const regex = /^[^$s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if(!value.Fname){
            error.Fname = "First name is required";
        }
        if(!value.Lname){
            error.Lname = "Last name is required";
        }
        if(!value.email){
            error.email = "Email is required";
        }
        if(!value.password){
            error.password = "password is required";
        }else if(value.password.length < 4 ||  value.password.length > 10){
            error.password = "password should be > 4 and <10 digit";
        }
        if(!value.repassword){
            error.repassword = "Please Enter password again";
        }else if (value.password !== value.repassword){
            error.repassword = "Password must be same";
        }
        return error;
    }

    return(
        <div className='form'>
            {/* <pre>{JSON.stringify(formvalue,undefined,2)}</pre> */}
            <form onSubmit={handleSubmit} className='form'>
            <h2>Register Form</h2> 
            <div className='input-group'> 
            <label>First Name : </label>           
             <input type='text'
                name='Fname'
                 placeholder='Enter First Name' 
                 value={formvalue.Fname} 
                 onChange={handleValue}
                  />
            </div>
            <p>{formerror.Fname}</p>

            <div className='input-group'>            
            <label>Last Name : </label>  
                <input type='text'
                name='Lname'
                className='input'
                 placeholder='Enter Last Name'
                 value={formvalue.Lname} 
                 onChange={handleValue}
                  />
            </div>
            <p>{formerror.Lname}</p>

            <div className='input-group'> 
            <label>Email : </label>  
                <input type='email'
                    name='email'
                    className='input'
                 placeholder='Enter Email'
                 value={formvalue.email} 
                 onChange={handleValue}
                  />
            </div>
            <p>{formerror.email}</p>

            <div className='input-group'> 
            <label>password: </label>  
                <input type='password'
                name='password'
                className='input'
                 placeholder='Enter password'
                 value={formvalue.password} 
                 onChange={handleValue}
                    />
            </div>
            <p>{formerror.password}</p>

            <div className='input-group'> 
            <label>password: </label>  
            <input type='password'
            name='repassword'
            className='input'
             placeholder='Re-Enter password'
             value={formvalue.repassword} 
             onChange={handleValue}
              />
            </div>
            <p className='p'>{formerror.repassword}</p>

            <button className='form-btn'>Submit</button>
            </form>
        </div>
    );
}

export default Form;