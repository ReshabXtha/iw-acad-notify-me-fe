import React, { Component } from 'react'
import{Modal,Form,Button} from 'semantic-ui-react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export default class EventForm extends Component {
    state={
        EventTopic:'', 
        EventStartDate:'',
        EventEndDate:'',
        EventTime:'',
        EventMsg:'',
        EventFile:''
    }
    
handleStartDate = startdate => {
    this.setState({
      EventStartDate: startdate
    });
}
handeleEndDate=
    enddate=>{
        this.setState({
            EventEndDate:enddate
        })
};
handelFile(e){
    let File=e.target.files[0]
    this.setState({File:File})
}
handelTime= time=>{
    this.setState({
        EventTime:time
    })
}


    render() {
        return (
           <Modal trigger={<Button circular icon='add'/>} style={{position:'static'}}>
                <Modal.Header>Add Event</Modal.Header>
                <Modal.Content>
                    <Form>
                        <Form.Input fluid label='Event Topic' placeholder='Event Topic' />
                        <Form.Field>
                            <label>Start Date</label>
                            <DatePicker selected={this.state.EventStartDate} onChange={this.handleStartDate} />
                        </Form.Field>
                        <Form.Field>
                            <label>End Date</label>
                            <DatePicker selected={this.state.EventEndDate} onChange={this.handeleEndDate} />
                        </Form.Field>
                        <Form.Field style={{width:120}}>
                            <label>Time</label>
                            <input type="time" name={this.state.EventTime} onChange={this.handelTime}></input>
                        </Form.Field>
                        <Form.TextArea label='Message'/>
                        <Form.Field>
                            <input type="file" multiple name='File' onChange={(e)=>this.handelFile(e)}></input>
                        </Form.Field>
                       <Button type='submit'>Submit</Button>
                    </Form> 
                    </Modal.Content>
            </Modal>
        )
    }
}
