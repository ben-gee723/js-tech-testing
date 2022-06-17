import { BrowserRouter as Router, Routes, Route, NavLink, Outlet } from 'react-router-dom';
function BilderNav() {
    return (
        <>
            <div className="topHeaderd">
                <nav className="main">
                    <div className="pageNav">
                        <span>
                            <NavLink to="mer">Mer</NavLink>
                        </span>
                        <span>
                            <NavLink to="waelde">Wälde</NavLink>
                        </span>
                        <span>
                            <NavLink to="himmel">Himmel</NavLink>
                        </span>
                    </div>
                </nav>
                <Outlet />
            </div>
        </>
    )

}
export default BilderNav;