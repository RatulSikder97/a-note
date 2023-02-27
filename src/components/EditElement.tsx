import { useState } from 'react'
import { BsPlusLg, BsFillGrid3X2GapFill } from 'react-icons/bs';

function EditElement() {

    return (
        <div className='edit-element'>
            <button>
                <BsPlusLg />
            </button>

            <button>
                <BsFillGrid3X2GapFill />
            </button>

            <div className='edit-body' contentEditable>

            </div>
            
        </div>
    )
}

export default EditElement;