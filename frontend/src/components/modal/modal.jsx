import React from 'react';


const Modal = ({modal}) => {

    if (!modal) return null;

    switch (modal.type) {
        case 'session': 
            return;
        default:
            return null;

    }
}