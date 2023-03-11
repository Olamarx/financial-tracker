import { useReducer, useState, useEffect } from "react";
import { projectFirestore, timestamp } from "../firebase/config";

let initialState = {
  document: null,
  isPending: false,
  error: null,
  success: null
}

const firestoreReducer = (state, action) => {
  switch (action.type) {
    case "IS_PENDING":
      return { isPending: true, document: null, success: false, error: null}
    
      case "ADDED_DOCUMENT":
        return { isPending: false, document: action.payload, success: true, error: null}

      case "DELETED_DOCUMENT":
        return { isPending: false, document: null, success: true, error: null}
      
        case "ERROR":
      return {isPending: false, document: null, success: false, error: action.payload}
    default:
      return state;
  }
}

export const useFirestore = (collection) => {
  const [response, dispatch] = useReducer(firestoreReducer, initialState)
  const [isCancelled, setIsCancelled] = useState(false)

  const ref = projectFirestore.collection(collection)

// only dispatch is not cancelled
const dispatchIsNotCancelled = (action) => {
  if (!isCancelled) {
    dispatch(action)
  }
}

  // Add a document
  const addDocument = async (doc) => {
    dispatch({
      type: "IS_PENDING"
    })

    try {
      const createdAt = timestamp.fromDate(new Date())
      const addedDocument = await ref.add({...doc, createdAt})
      dispatchIsNotCancelled({type: "ADDED_DOCUMENT", payload: addedDocument})
    } catch (error) {
      dispatchIsNotCancelled({type: "ERROR", payload: error.message})
    }
  }

  // delete a document
  const deleteDocument = async (id) => {
    dispatch({ type: 'IS_PENDING'})

    try {
      await ref.doc(id).delete()
      dispatchIsNotCancelled({ type: 'DELETED_DOCUMENT'})
    } catch (error) {
      dispatchIsNotCancelled({type: "ERROR", payload: 'Could not delete transaction.'})
    }
  }

  useEffect(() => {
    return () => setIsCancelled(true)
  }, [])

  return {addDocument, deleteDocument, response}
}