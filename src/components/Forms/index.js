import InputText from '../InputText';
import './form.css';

const Form = () => {
    return (
        <section className='form'>
            <form>
                <h2>Preencha os dados para criar o card do seu amigo de Squad</h2>
            <InputText label="Nome" placeholder="Digite seu nome"/>
            <InputText label="Cargo" placeholder="Digite seu cargo"/>
            <InputText label="Imagem" placeholder="Insira sua imagem"/>
            </form>
        </section>
    )
}

export default Form;