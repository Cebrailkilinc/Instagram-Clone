import React, { useEffect, useState, useContext } from 'react'
import { collection, doc, onSnapshot, orderBy, query, snapshotEqual } from "firebase/firestore"
import { db } from '../../firebase'
import profil from '../../Data/profil'
import FirebaseContext from '../constext/FirebaseContext'

function MiniProfile() {
    const {
        handleLogin,
        email,
        setEmail,
        password,
        setPassword,
        error,
        setError,
        deneme,
        nickname,
        setNickname,
        name,
        surname,
        users
    } = useContext(FirebaseContext)
  
    return (
        <div className='ml-5 mt-8 items-center  fixed'>
            <div className='flex items-center   text-xs'>
                <img className='rounded-full w-14 h-14' src={ users ?  users[0].Photo : ""}/>
                <h1 className='flex-1 ml-3'>{ users ?  users[0].Nickname : ""}</h1>
                <button className='border-none text-blue-600 ml-8' >Geçiş Yap</button>
            </div>
        </div>
    )
}

export default MiniProfile