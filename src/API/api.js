export const baseURL = 'https://prello-819ff-default-rtdb.firebaseio.com'

export const API = {
        get: ( url , userId ) => {
            return fetch(`${baseURL}/${url}/${userId}`)
        },

        getSingle: ( url , userId , cardId ) =>{
            return fetch(`${baseURL}/${url}/${userId}/${cardId}`)
        },

        getSingleTask: (url , userId , cardId , singleCard) =>{
            return fetch(`${baseURL}/${url}/${userId}/${cardId}/${singleCard}.json`)
        },
        

        getFinish: (url , userId , cardId , singleCard , taskId , finish) =>{
            return fetch(`${baseURL}/${url}/${userId}/${cardId}/${singleCard}/${taskId}/${finish}.json`)
        },


        post: (data  ,url  , userId) =>{
            return fetch(`${baseURL}/${url}/${userId}` ,{
                method:'POST',
                body:data
            })
        },

        postSingle: ( data , url , userId   , cardId , singleCard) =>{
            return fetch(`${baseURL}/${url}/${userId}/${cardId}/${singleCard}.json` ,{
                method:'POST',
                body:data
            })
        },

        postFinish: ( data , url , userId , cardId , singleCard , taskId , finish ) => {
            return fetch(`${baseURL}/${url}/${userId}/${cardId}/${singleCard}/${taskId}/${finish}.json` ,{
                method:'POST',
                body:data
            })
        }

    }
