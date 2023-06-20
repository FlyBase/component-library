import React from "react";

type FooProps = {
    one: boolean,
    two: string,
    three?: number
};
const Foo: React.FC<FooProps> = ({
    one,
    two,
    three
}) => {
    return (
        <div>
            one: {one}<br/>
            two: {two}<br/>
            three: {three ? three : 'N/A'}
        </div>
    );
};

export default Foo;