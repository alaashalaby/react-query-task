import { useEffect } from "react"

const useTitle = (title ) => {
    useEffect(() => {
        document.title=`${title} | page`
    })
}

export default useTitle;
