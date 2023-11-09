'use client';

interface ContainersProps {
    children : React.ReactNode;
}

const Container: React.FC<ContainersProps> = ({children }) =>  {
    return (
        <div className="
        max-w-[2520px]
        mx-auto
        xl: px-20
        md: px-20
        sm: px-2
        px-4
        ">
            {children}
        </div>
    );
}
export default Container;