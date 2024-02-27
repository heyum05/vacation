import { useState } from 'react';

export const Modal = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const setModalOpen = () => {
        setIsOpen(true);
    }
    const setModalClose = () => {
        setIsOpen(false);
    }

    return (
        <div>
            <button onClick={setModalOpen} className=''>
                asdf
            </button>

            {isOpen && (
                <div>
                    <h1>this is modal</h1>
                </div>
            )}
        </div>
    );
}