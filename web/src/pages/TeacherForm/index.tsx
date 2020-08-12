import React,{useState, FormEvent} from 'react'
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import warningIcon from '../../assets/images/icons/warning.svg';
import {useHistory} from 'react-router-dom';
import './styles.css';
import Textarea from '../../components/TextArea';
import Select from '../../components/Select';
import api from '../../services/api';

function TeacherForm () {
    const history = useHistory();

    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [whatsapp, setWhatsApp] = useState('');
    const [bio, setBio] = useState('');

    const [subject, setSubject] = useState('');
    const [cost, setCost] = useState('');

    const [scheduleItems, setScheduleItems] =useState([
        {week_day: 0, from: '',to: ''}
    ]);

    function addNewScheduleItem(){
        setScheduleItems([
            ...scheduleItems,
            {week_day: 0, from: '',to: ''}
        ]);
    }

    function handleCreateClass(e: FormEvent) {
        e.preventDefault();

        api.post('classes', {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost: Number(cost),
            schedule: scheduleItems
        }).then(() => {
            alert('Cadastro realizado com sucesso!')
            history.push('/');
        }).catch(() => {
            alert('Erro no contrato')
        })
        console.log({name, scheduleItems})
    }

    function setScheduleItemValue(position: number,field: string, value: string ){
        const updateScheduleItem = scheduleItems.map((scheduleItem, index) => {
            if(index === position){
                //Quando usa [field] ele vai substituir isso pelo q esta vindo, por exemplo week_day
                //e caso ele ja exista (...scheduleItem) ele vai substituir o valor do week_day pelo value
                return { ...scheduleItem, [field]: value};
            }
            return scheduleItem;
        })

        setScheduleItems(updateScheduleItem);
    }

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader 
                title="Que incrível que você quer dar aula."
                description="O primeiro passo é preencher esse formulário de inscrição"
            />
            <main>
                <form onSubmit={handleCreateClass}>
                    <fieldset>
                        <legend>Seus dados</legend>
                        <Input label="Nome completo" name="name" 
                            value={name} 
                            onChange={(e)=> { setName(e.target.value)}} />
                        <Input label="Avatar" name="avatar"  
                            value={avatar} 
                            onChange={(e)=> { setAvatar(e.target.value)}}
                        />
                        <Input label="WhatsApp" name="whatsapp"  
                            value={whatsapp} 
                            onChange={(e)=> { setWhatsApp(e.target.value)}}
                        />
                        <Textarea name="bio" label="Biografia" 
                            value={bio} 
                            onChange={(e)=> { setBio(e.target.value)}}
                        />
                    </fieldset>
                    <fieldset>
                        <legend>Sobre a aula</legend>
                        <Select label="Matéria" name="subject"
                            value={subject}
                            onChange={(e) => {setSubject(e.target.value)}}
                            options={[
                            { value: 'Artes', label: 'Artes'},
                            { value: 'Fisica', label: 'Fisica'},
                            { value: 'Matematica', label: 'Artes'}]} 
                        />
                        <Input label="Custo da sua hora por aula" name="cost" 
                            value={cost}
                            onChange={(e)=> {setCost(e.target.value)}}/>
                    </fieldset>
                    <fieldset>
                        <legend>
                            Horários disponíveis
                            <button type="button" onClick={addNewScheduleItem}>
                                + Novo horário
                            </button>
                        </legend>
                        {scheduleItems.map((scheduleItem, index) => {
                            return (
                                <div key={scheduleItem.week_day} className="schedule-item">
                                    <Select label="Dia da semana" name="week_day"
                                        value={scheduleItem.week_day}
                                        onChange={e => setScheduleItemValue(index, 'week_day', e.target.value)}
                                        options={[
                                            { value: '0', label: 'Domingo'},
                                            { value: '1', label: 'Segunda-feira'},
                                            { value: '2', label: 'Terça-feira'},
                                            { value: '3', label: 'Quarta-feira'},
                                            { value: '4', label: 'Quinta-feira'},
                                            { value: '5', label: 'Sexta-feira'},
                                            { value: '6', label: 'Sábado'}
                                        ]} 
                                    />
                                    <Input name="from" label="Das" type="time" 
                                        value={scheduleItem.from}
                                        onChange={e => setScheduleItemValue(index, 'from', e.target.value)}
                                    ></Input>
                                    <Input 
                                        name="to" 
                                        label="Até" 
                                        type="time"
                                        value={scheduleItem.to}
                                        onChange={e => setScheduleItemValue(index, 'to', e.target.value)} 
                                    />
                                </div>
                            )
                        })}
                    </fieldset>
                    <footer>
                        <p>
                            <img src={warningIcon} alt="Aviso importante"/>
                            Importante! <br/>
                            Preencha todos os dados
                        </p>
                        <button type="submit">
                            Salvar cadastro
                        </button>
                    </footer>
                </form>
            </main>
         </div>
    )
}

export default TeacherForm;