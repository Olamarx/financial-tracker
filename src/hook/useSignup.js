import { useEffect, useState } from "react";
import { projectAuth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  const [isCancelled, setIsCancelled] = useState(false)
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const { dispatch } = useAuthContext()

  const signup = async (email, password, username) => {
    setError(null)
    setIsPending(true)

    try {
      // signup
    const response = await projectAuth.createUserWithEmailAndPassword(email, password)

    
    if (!response) {
      throw new Error('Could not complete signup')
    }

    // add username
    await response.user.updateProfile({displayName: username})

    // Dispatch Login Action
    dispatch({ type: 'LOGIN', payload: response.user })

    if(!isCancelled) {
      setIsPending(false)
      setError(null)
    }

    } catch (error) {

      if(!isCancelled) {
        setError(error.message)
        setIsPending(false)
      }
    }
  }

  useEffect(() => {
    return () => setIsCancelled(true)
  }, [])
  
  return {
    error,
    isPending,
    signup
  }
}