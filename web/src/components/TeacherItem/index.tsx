import React from 'react'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css'

 function TeacherItem () {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/31330531?s=460&u=0e69e3cd0a23f2a99c067157773cf0ed6fa493cb&v=4/" alt="Joao Luiz"/>
                <div>
                    <strong>João Luiz</strong>
                    <span>Quimica</span>
                </div>
            </header>
            <p>
                Entusiasta das melhores tecnologias de química avançada
                <br/>
                Apaixonado por explodir
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem