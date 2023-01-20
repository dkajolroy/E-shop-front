import React from "react";

export default function LoginPage() {
  return <div className='col-md-3 col-11 m-auto'>
    <div className="rounded shadow p-3">
      <h3 className='text-center'>Login</h3>
      <input className='form-control my-3' type="text" placeholder="Username" />
      <input className='form-control my-3' type="text" placeholder="Password" />
      <input className='btn btn-success w-100' type="submit" value="Login"/>
    </div>
  </div>;
}
