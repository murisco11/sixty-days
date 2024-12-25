import { useRouter } from "next/navigation"

interface IProps {

}

const Principal = ({ }: IProps) => {
    const router = useRouter()

    const handleCreateChallenge = () => {
        router.push("create-challenge")
    }

    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-base-200">
                <div className="card max-w-sm shadow-lg bg-base-100">
                    <div className="card-body space-y-4">
                            <h2 className="text-2xl font-bold">Bem-vindo à Página inicial!</h2>
                            <button
                                onClick={handleCreateChallenge}
                                className="btn btn-primary mt-6 w-full">
                                Criar Desafio!
                            </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Principal