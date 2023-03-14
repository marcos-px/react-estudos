import './InputText.css'

const InputText = (props) => {

    const modifiedPlaceholder = `${props.placeholder}...`
    
    return (
        <div className="inputText">
            <label> {props.label} </label>
            <input 
            placeholder={modifiedPlaceholder}
            
            type="text" />
        </div>
    )
}

export default InputText;