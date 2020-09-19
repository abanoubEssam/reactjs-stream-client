import {
    CREATE_STREAM,
    SIGN_IN,
    SIGN_OUT,
    DELETE_STREAM,
    EDIT_STREAM,
    FETCH_STREAM,
    FETCH_STREAMS
} from "./types"
import streams from '../apis/stream'
export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    }
}

export const signOut = () => {
    return {
        type: SIGN_OUT,
    }
}



export const createStream = formValues => async (dispatch, getState) => {
    const { userId } = getState().auth;
    const response = await streams.post("/streams", { ...formValues, userId })
    dispatch({
        type: CREATE_STREAM,
        payload: response.data,
        status: response.status
    })
}

export const fetchStreams = () => async dispatch => {
    const responce = await streams.get('/streams');
    dispatch({ type: FETCH_STREAMS, payload: responce.data })
}

export const fetchStream = (streamId) => async dispatch => {
    const responce = await streams.get(`/streams/${streamId}`);
    dispatch({ type: FETCH_STREAM, payload: responce.data })
}

export const editStream = (streamId, formValues) => async dispatch => {
    const responce = await streams.put(`/streams/${streamId}`, formValues);
    dispatch({ type: EDIT_STREAM, payload: responce.data })
}

export const deleteStream = (streamId) => async dispatch => {
    await streams.delete(`/streams/${streamId}`);
    dispatch({ type: DELETE_STREAM, payload: streamId })
}