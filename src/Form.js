import React from 'react'
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import './Form.scss'

const Form = () => {
    const schema = yup.object().shape({
        fullName: yup.string().required(),
        email: yup.string().email().required(),
        age: yup.number().integer().positive().required(),
        password: yup.string().min(4).max(20).required(),
        confirmPassword: yup.string().oneOf([yup.ref("password"), null]).required(),
    })

    const {register, handleSubmit} = useForm({
        resolver: yupResolver(schema),
    })
    
    const onSubmitHandler = (data) => {
        console.log('testing')
        console.log({data})
    }

    return(
        <form onSubmit={handleSubmit(onSubmitHandler)} className="form">
            <input type="text" placeholder="Full name..." {...register("fullname")} />
            <input type="text" placeholder="Email..." {...register("email")}/>
            <input type="number" placeholder="Age..." {...register("age")}/> 
            <input type="password" placeholder="Password..." {...register("password")}/>
            <input type="password" placeholder="Confirm password..." {...register("confirmPassword")}/> 
            <input type="submit" />
        </form>
    )
}

export default Form