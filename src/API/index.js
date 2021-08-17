import { API } from "./api";
import {getCardRoute , sentCardRoute ,getSingleCardRoute ,sentSingleCardRoute , getSingleTaskCardRoute  ,getSingleTaskSingleCardRoute , sentSingleFinishCard , sentSingleFinishSingleCard , finish , getFinishCard , getFinishSingleCard} from './routes'


export const getCard = ( userId ) =>{
    return API.get(getCardRoute , userId)
}

export const getSingleCard = (userId , cardId) =>{
    return API.getSingle(getSingleCardRoute , userId , cardId)
}


export const getSingleTaskCard = (userId , cardId ) =>{
    return API.getSingleTask(getSingleTaskCardRoute , userId , cardId , getSingleTaskSingleCardRoute)
}

export const getSingleFinish = (userId , cardId , taskId) =>{
    return API.getFinish(getFinishCard , userId , cardId , getFinishSingleCard , taskId , finish)
}

export const postCard = ( data , userId ) =>{
    return API.post(JSON.stringify(data) , sentCardRoute , userId )
}

export const postSingleCard = (data , userId , cardId) =>{
    return API.postSingle(JSON.stringify(data) , sentCardRoute , userId, cardId , sentSingleCardRoute  )
}


export const postFinishCard = ( data , userId , cardId , taskId ) =>{
    return API.postFinish(JSON.stringify(data) , sentSingleFinishCard  , userId , cardId , sentSingleFinishSingleCard ,taskId ,  finish )
}