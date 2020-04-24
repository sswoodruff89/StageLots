import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {closeModal} from '../../actions/modal_actions';
// import "../session/signup_form";
import SessionForm from "../session/session_form";


const Modal = () => {
    const dispatch = useDispatch();
    const modal = useSelector((state) => state.ui.modal);
    // useEffect(() => {
    // }, [])
    
    if (!modal) return null;

    let component;
    let modalBackClass;
    let modalChildClass;

    switch (modal.type) {
        case 'session': 
            component = <SessionForm formType={modal.formType} />
            modalBackClass = 'grey-background';
            modalChildClass = 'session-child';
            break;
        default:
            return null;

    }

    return (
        <div className={modalBackClass} onClick={() => {
            dispatch(closeModal());
        }}>
            <div className={modalChildClass} onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

export default Modal;