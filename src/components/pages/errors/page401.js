import React from 'react';

const Page401 = (props) => {
    return (
        <div className="mt-5">
            <h1 className="text-danger">401</h1>
            <p>There was some error or something went wrong, Please try again later.</p>
            <hr />
            <p>Sorry for the inconvenience. <a className="text-info cursor-pointer" onClick={() => props.history.push('/')}>Get back to our home page.</a> </p>
            <p>If you require further immediate assistance, please <a className="text-info cursor-pointer" onClick={() => props.history.push('/Support')}>reach out to us.</a> </p>
        </div>
    )
}

export default Page401;