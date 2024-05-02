import Image from "next/image"
import logo from "@/../../public/assets/logo.svg"

interface LogoProps {
    wrapperClassName?: string
    fill?: boolean,
    className?: string
}

export const Logo = ({
    fill,
    className
}: LogoProps) => {
    return (
        <Image
            alt="Logo"
            src={logo}
            fill={fill}
            className={className}
        />
    )
}