import React, { useState } from "react";

type Form = {
    setShowModal: (arg: boolean) => void
}

const Form: React.FC<Form> = ({ setShowModal }) => {
    const closeShowModal = () => {
        setShowModal(false)
    }
    return (
        <div  className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <span className="close" onClick={closeShowModal}>&times;</span>
                    <h2>DELETE MOVIE</h2>
                </div>
                <div className="modal-body">
                    <div style={{ width: '100%' }}>
                        Are you sure want to delete this movie?
                    </div>
                    <div className="btn" onClick={closeShowModal}>CONFIRM</div>
                </div>
            </div>
        </div>
    )
}

export default Form;