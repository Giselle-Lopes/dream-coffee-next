import StepsCA from "../components/steps-ca";

export default function FormCACustomer() {
  return (
    <div className="bg-white h-screen">
      <StepsCA stepType={"form"}/>
      <div className="flex flex-col justify-center items-center lg:mt-10 mt-5 gap-5">
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
        <div className="flex lg:flex-row flex-col gap-10 w-[350px] lg:w-[850px]">
          <div className="flex flex-col lg:w-[405px]">
            <label htmlFor="Endereço" className="font-jua text-purple-600">Endereço</label>
            <input type="text" className="text-[#8D8F8A] text-lg bg-[#EBEBE9] outiline-[#8D8F8A] outline-2 outline p-2 rounded-md"/>
          </div>
          <div className="flex flex-col lg:w-[405px]">
            <label htmlFor="Endereço adicional" className="font-jua text-purple-600">Endereço adicional</label>
            <input type="text" className="text-[#8D8F8A] text-lg bg-[#EBEBE9] outiline-[#8D8F8A] outline-2 outline p-2 rounded-md"/>
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
      <div className="lg:mt-5 mt-10 lg:mx-[213px] mx-[30px]">
        <button className="bg-purple-600 p-2 rounded-md hover:bg-primary-hotPint w-64">Cadastrar</button>
      </div>
    </div>
  )
}