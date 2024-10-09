import StepsCA from "../components/steps-ca";

export default function FormCAOwner() {
  return (
    <div className="bg-white h-full">
      <StepsCA stepType={"form"}/>
      <h1 className="text-primary-hotPint font-jua text-xl flex lg:mx-[208px] mx-[30px]">Dados Proprietário:</h1>
      <div className="flex flex-col justify-center items-center lg:mt-5 mt-5 gap-5">
        <div className="flex lg:flex-row flex-col gap-10 w-[350px] lg:w-[850px]">
          <div className="flex flex-col">
            <label htmlFor="Nome completo" className="font-jua text-purple-600">Nome completo</label>
            <input type="text" className="text-[#8D8F8A] text-lg bg-[#EBEBE9] outiline-[#8D8F8A] outline-2 outline p-2 rounded-md"/>
          </div>
          <div className="flex flex-col">
            <label htmlFor="Email" className="font-jua text-purple-600">Email</label>
            <input type="email" className="text-[#8D8F8A] text-lg bg-[#EBEBE9] outiline-[#8D8F8A] outline-2 outline p-2 rounded-md"/>
          </div>
          <div className="flex flex-col">
            <label htmlFor="Telefone" className="font-jua text-purple-600">Telefone</label>
            <input type="number" className="text-[#8D8F8A] text-lg bg-[#EBEBE9] outiline-[#8D8F8A] outline-2 outline p-2 rounded-md"/>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col gap-5 w-[350px] lg:w-[850px]">
          <div className="flex flex-col lg:w-[415px]">
            <label htmlFor="Senha" className="font-jua text-purple-600">Senha</label>
            <input type="password" className="text-[#8D8F8A] text-lg bg-[#EBEBE9] outiline-[#8D8F8A] outline-2 outline p-2 rounded-md"/>
          </div>
          <div className="flex flex-col lg:w-[415px]">
            <label htmlFor="Confirmação de senha" className="font-jua text-purple-600">Confirmação de senha</label>
            <input type="password" className="text-[#8D8F8A] text-lg bg-[#EBEBE9] outiline-[#8D8F8A] outline-2 outline p-2 rounded-md"/>
          </div>
        </div>
      </div>
      <h1 className="text-primary-hotPint font-jua text-xl mt-5 lg:mx-[208px] mx-[30px]">Dados Estabelecimento:</h1>
      <div className="flex flex-col justify-center items-center mt-5 gap-5">
        <div className="flex lg:flex-row flex-col gap-10 w-[350px] lg:w-[850px]">
          <div className="flex flex-col">
            <label htmlFor="Nome completo" className="font-jua text-purple-600">Nome do Estabelecimento</label>
            <input type="text" className="text-[#8D8F8A] text-lg bg-[#EBEBE9] outiline-[#8D8F8A] outline-2 outline p-2 rounded-md"/>
          </div>
          <div className="flex flex-col">
            <label htmlFor="Email" className="font-jua text-purple-600">Email</label>
            <input type="email" className="text-[#8D8F8A] text-lg bg-[#EBEBE9] outiline-[#8D8F8A] outline-2 outline p-2 rounded-md"/>
          </div>
          <div className="flex flex-col">
            <label htmlFor="Telefone" className="font-jua text-purple-600">Telefone</label>
            <input type="number" className="text-[#8D8F8A] text-lg bg-[#EBEBE9] outiline-[#8D8F8A] outline-2 outline p-2 rounded-md"/>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col gap-10 w-[350px] lg:w-[850px]">
          <div className="flex flex-col lg:w-[405px]">
            <label htmlFor="Endereço" className="font-jua text-purple-600">Endereço</label>
            <input type="text" className="text-[#8D8F8A] text-lg bg-[#EBEBE9] outiline-[#8D8F8A] outline-2 outline p-2 rounded-md"/>
          </div>
          <div className="flex flex-col lg:w-[405px]">
            <label htmlFor="Horário de funcionamento" className="font-jua text-purple-600">Horário de funcionamento</label>
            <input type="text" className="text-[#8D8F8A] text-lg bg-[#EBEBE9] outiline-[#8D8F8A] outline-2 outline p-2 rounded-md"/>
          </div>
        </div>
        <h2 className="text-black my-10">
        adicionar produtos
        </h2>
      </div>
      <div className="lg:mt-5 mt-10 lg:mx-[208px] mx-[30px]">
        <button className="bg-purple-600 p-2 rounded-md hover:bg-primary-hotPint w-64">Cadastrar</button>
      </div>
    </div>
  )
}