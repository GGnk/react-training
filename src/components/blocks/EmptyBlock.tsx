import React from "react";
import { Empty } from "antd";

const EmptyBlock: React.FC = () => (
    <div className="empty">
        <Empty
            description={
                <h1>No movies found</h1>
            }
        />
    </div>
)

export default EmptyBlock;
