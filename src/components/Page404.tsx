import React from "react";
import { NavLink } from "react-router-dom";
import {Button, Empty} from "antd";

const Page404: React.FC = () => (
    <main className='main'>
        <div className='page404'>
            <Empty
                image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
                description={
                    <>
                        <h1>404</h1>
                        <h2>Page not found</h2>
                        <NavLink to="/">
                            <Button type="dashed">Go back to Home</Button>
                        </NavLink>
                    </>
                }
            />
        </div>
    </main>
)

export default Page404;
