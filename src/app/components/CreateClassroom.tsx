interface IProps {
    
}

const Home = ({  }: IProps) => {
    return (
        <>
                <div className="flex items-center justify-center min-h-screen bg-base-200">
            <div className="card max-w-md shadow-lg bg-base-100">
                <div className="card-body space-y-4">
                    <h2 className="text-center text-2xl font-bold">Criar Desafio</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Nome do Desafio</span>
                            </label>
                            <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                type="text"
                                placeholder="Digite o nome do desafio"
                                className="input input-bordered"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Descrição</span>
                            </label>
                            <textarea
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="Descreva o desafio"
                                className="textarea textarea-bordered"
                            />
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary w-full">
                                Salvar Desafio
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home