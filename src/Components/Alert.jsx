import React from 'react'

export const Alert = (props) => {
  return (
    
props.alert &&  <div className={`alert alert-warning alert-dismissable fade-show`} role="alert">
{props.alert.type}:{props.alert.msg} 
<button type='button' className='btn-close' data-bs-dismiss='alert' area-label='Close'></button>
</div>

    
  )
}
