import React from 'react'
import { Spinner } from 'react-bootstrap'
import "./LoaderStyle.css" 

export const Loader = () => {
    return (
        <div className="spinner">
            <Spinner
            animation ="border"
            size="lg"
            />
        </div>
    )
}
