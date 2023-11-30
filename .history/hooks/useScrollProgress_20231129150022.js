import React, { useState, useEffect} from 'react'

const useScrollProgress = () => {
    const [completion, setCompletion] = useState(0);

    useEffect(() => {
        const updateScrollCompletion = () => {
            const currentProgress = window.scrollY;
            const scrollHeight = document.body.scrollHeight - window.innerHeight;

            if (scrollHeight) {
                setCompletion(number(currentProgress / scrollHeight).toFixed(2) * 100);
            }
        };
            // event
        window.addEventListener('scroll', updateScrollCompletion);
            //clear event
            return() 
    }, [])
  return (
    <div>useScrollProgress</div>
  )
}

export default useScrollProgress