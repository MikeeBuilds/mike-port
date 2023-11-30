import React, { useState, useEffect} from 'react'

const useScrollProgress = () => {
    const [completion, setCompletion] = useState(0);

    useEffect(() => {
        const updateScrollCompletion = () => {
            const currentProgress = window.scrollY;
            const
        }
    }, [])
  return (
    <div>useScrollProgress</div>
  )
}

export default useScrollProgress