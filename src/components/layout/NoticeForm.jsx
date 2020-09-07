import React, { Component } from 'react'
import { Button, Form,Checkbox,Modal } from 'semantic-ui-react'
export default class NoticeForm extends Component {
    state={
        Notice:'', 
        Is_pinned:'',
        File:''
    }
    handelFile(e){
        let File=e.target.files[0]
        this.setState({File:File})
    }
    render() {
        return (
            <Modal trigger={<Button circular icon='add'/>} style={{position:'static'}}>
                <Modal.Header>Add Notice</Modal.Header>
                <Modal.Content>
                <Form>
                    <Form.TextArea label='Notice' required/>
                    <Form.Field>
                        <Checkbox label='Pin' />
                    </Form.Field>
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
