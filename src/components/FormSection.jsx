import { useState } from "react";
import { Input } from "./Input";
import { CargosDropdown } from "./CargosDropdown";
import { CadastrarButton } from "./CadastrarButton";
import userIcon from "/assets/images/user-icon.svg";
import emailIcon from "/assets/images/letter-icon.svg";
import phoneIcon from "/assets/images/phone-icon.svg";
import linkedlnIcon from "/assets/images/linkedln-icon.svg";
import githubIcon from "/assets/images/github-icon.svg";
import * as Yup from "yup";

export const FormSection = () => {
  const listaCargos = [
    "Desenvolvedor Frontend", "Desenvolvedor Backend", "Desenvolvedor Full Stack", "Desenvolvedor Mobile", "Desenvolvedor de Software", "Engenheiro de Software", "Arquiteto de Software", "UI / UX Designer", "Analista de Sistemas", "Analista Programador", "DevOps Engineer", "Engenheiro de Dados", "QA Engineer", "Scrum Master", "Product Owner"
  ];

  const [form, setForm] = useState({
    nomeCompleto:"",
    email:"",
    telefone:"",
    cargo:"",
    linkedln:"",
    github:"",
  });
  const [erros, setErros] = useState({});

  const handleChange = e => {
    setForm({...form, [e.target.id]: e.target.value});
  }

  const handleCargoChange = e => {
    setForm({...form, cargo: e.target.value});
  }

  const handleCadastrar = async e => {
    e.preventDefault();
    try{
      await schemaDeValidacao.validate(form, {abortEarly:false});
      setErros({});
      alert("Cadastro realizado com sucesso!")
    } catch (erro) {
      if (erro.inner) {
        const formErros = {};
        erro.inner.forEach(erro => {
          formErros[erro.path] = erro.message;
        });
        setErros(formErros);
      }
    }
  }

  const schemaDeValidacao = Yup.object({
    nomeCompleto: Yup.string().required("Nome completo é obrigatório").test("nome-completo", "Digite o nome completo", nome => !!nome && nome.trim().split(" ").length > 1),
    email: Yup.string().email("Formato de e-mail inválido").required("Email é obrigatório"),
    telefone: Yup.string().matches(/^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/, "Número de telefone inválido").required("Telefone é obrigatório"),
    cargo: Yup.string().required("Selecione um cargo"),
    linkedln: Yup.string().matches(/^$|^https?:\/\/(www\.)?linkedin\.com\/.*$/i, "Insira um endereço de linkedln válido"),
    github: Yup.string().matches(/^$|^https?:\/\/(www\.)?github\.com\/.*$/i, "Insira um endereço de github válido"),
  })

  return (
    <form id="form" onSubmit={handleCadastrar} className="flex flex-col gap-8 min-w-7/8 font-dmsans">

      <div className="relative">
        <Input
          label="Nome"
          placeholder="Nome Completo"
          id="nomeCompleto"
          type="text"
          value={form.nomeCompleto}
          onChange={handleChange}
          src={userIcon}
          alt="Icon de usuário"
        />
        {erros.nomeCompleto && <div className="text-red-400 text-xs absolute font-bold">{erros.nomeCompleto}</div>}
      </div>
      
      <div className="relative">
        <Input
          label="E-mail"
          placeholder="Digite seu e-mail"
          id="email"
          type="text"
          value={form.email}
          onChange={handleChange}
          src={emailIcon}
          alt="Icon de email"
        />
        {erros.email && <div className="text-red-400 text-xs absolute font-bold">{erros.email}</div>}
      </div>
      
      <div className="relative">
        <Input
          label="Telefone"
          placeholder="Ex: (99) 99999-9999"
          id="telefone"
          type="number"
          value={form.telefone}
          onChange={handleChange}
          src={phoneIcon}
          alt="Icon de usuário"
        />
        {erros.telefone && <div className="text-red-400 text-xs absolute font-bold">{erros.telefone}</div>}
      </div>
      
      <div className="relative">
        <CargosDropdown
        listaCargos={listaCargos}
        value={form.cargo}
        onChange={handleChange}
      />
      {erros.cargo && <div className="text-red-400 text-xs absolute font-bold">{erros.cargo}</div>}
      </div>
      
      <div className="relative">
        <Input
          label="Linkedln (Opcional)"
          placeholder="Ex: https://www.linkedin.com/in/seu-usuario"
          id="linkedln"
          type="text"
          value={form.linkedln}
          onChange={handleChange}
          src={linkedlnIcon}
          alt="Icon do Linkedln"
        />
        {erros.linkedln && <div className="text-red-400 text-xs absolute font-bold">{erros.linkedln}</div>}
      </div>
      
      <div className="relative">
        <Input
          label="Github (Opcional)"
          placeholder="Ex: https://github.com/seu-usuario"
          id="github"
          type="text"
          value={form.github}
          onChange={handleChange}
          src={githubIcon}
          alt="Icon do Github"
        />
        {erros.github && <div className="text-red-400 text-xs absolute font-bold">{erros.github}</div>}
      </div>
      

      <CadastrarButton />
    </form>
  );
}