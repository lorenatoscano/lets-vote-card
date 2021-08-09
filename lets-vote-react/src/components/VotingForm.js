import '../styles/voting-form.css';

import { useForm } from "react-hook-form";

export default function VotingForm(props) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => props.onStart(data);

  return (
    <div className="card-container">
      <h2 className="title">Inicie uma votação</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-field">
          <label>Título:</label>
          <input
            type="text"
            placeholder="O que gostaria de perguntar?"
            {...register("title", { required: true, maxLength: 30 })}
            className={`${errors.title ? 'field-invalid' : ''}`}
          />
          {errors.title?.type === 'required' && <span>Título é obrigatório</span>}
          {errors.title?.type === 'maxLength' && <span>Máximo de 30 caracteres</span>}
        </div>

        <div className="form-field">
          <label>Opções de voto:</label>
          <select {...register("threeOptions", { required: true })}>
            <option value="0">Sim, não</option>
            <option value="1">Sim, não, talvez</option>
          </select>
        </div>

        <button type="submit">Começar</button>
      </form>

    </div>
  )
}