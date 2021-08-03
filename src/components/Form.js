import React,{useState} from 'react'
import './Form.css';

const Form = (props)=>{

    const [input, setInput] = useState("")

    console.log(input+' : ',input[0])
    const changeValueHandler = (e)=>{
        setInput(e.target.value);
        if(input[0]=== ' ' ){
            alert('첫글자에 띄어쓰기를 하지마세요')
            setInput('')
        }
    }
    const onClickHandler = ()=>{
        if(input===''){
            alert('내용을 입력하세요')
            return;
        }
       
        props.clickHandler(input)

        setInput('');
    }
    

    return(
        <div className="form">
            <input type="text" value={input} style={{color:props.color}}onChange={changeValueHandler}/>
            <div className="create-button" onClick={onClickHandler} >추가</div>
        </div>
    )
}

export default Form;