import React from 'react'
import { Link } from 'react-router-dom';

export default function PageNotFound() {
  const placeholderImage ="https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80";

  return (
    <div className="page-not-found" style={{backgroundImage: `url(${placeholderImage})`,backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
    <div style={{maxWidth: "900px", height: "100vh", margin: "0 auto", padding: "2.25rem 1.25rem"}}>
        <h1 style={{color: "#f4ce14", fontSize: "4rem", fontWeight: "700"}}>404 Page Not Found</h1>
        <div style={{textAlign:"left"}}>
            <Link to="/">Go to Home </Link>
        </div>
    </div>
    </div>
  )
}
