import { useEffect, useState } from "react"

interface IProps {
    message: string
    type: string
    onClose: () => void
}

const Alert = ({ message, type, onClose }: IProps) => {
    const [visible, setVisible] = useState<boolean>(true)
    const [fading, setFading] = useState<boolean>(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setFading(true)
            setTimeout(() => {
                setVisible(false)
                onClose()
            }, 500)
        }, 2000)

        return () => clearTimeout(timer)
    }, [onClose])

    if (!visible) return null

    return (
        <div
            className={`fixed left-1/2 top-10 transform -translate-x-1/2 z-10 transition-opacity duration-500 ${fading ? "opacity-0" : "opacity-100"
                }`}>
            <div
                role="alert"
                className={`alert shadow-lg p-4 w-96 ${type === "success" ? "alert-success" : "alert-error"
                    }`}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 shrink-0 stroke-current"
                    fill="none"
                    viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
                <span>{message}</span>
            </div>
        </div>

    )
}

export default Alert