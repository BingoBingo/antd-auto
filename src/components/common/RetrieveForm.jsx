import React from 'react';
import { Form, Button } from 'antd';

import CFormItem from './CreateFormItem';
import styles from './Common.less';

const FormItem = Form.Item;

let RForm = React.createClass({
    render: function() {
        const self = this;
        const RType = this.props.RType;
        const { getFieldDecorator } = this.props.form;
        return RType ?
                (<div className={styles.search}>
                    <Form inline>
                        { 
                            RType.map(function(item){
                                return <CFormItem key={item.name} getFieldDecorator={getFieldDecorator} item={item}/>
                            })
                        }
                        <FormItem key="search-btn">
                            <Button type="primary" onClick={this.handleRetrieve}>查询</Button>
                        </FormItem>
                    </Form>
                </div>):
                <div></div>;
    },

    handleRetrieve: function(){
        this.props.submit(this.props.form.getFieldsValue());
    }
});
RForm = Form.create()(RForm);

export default RForm;
