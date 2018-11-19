import React,{Component} from 'react';
import { List, DatePicker } from 'antd-mobile';
import {createForm} from 'rc-form';

import styles from './DatePickerPopupsRow.css'

function formatDate(date) {
  /* eslint no-confusing-arrow: 0 */
  const pad = n => n < 10 ? `0${n}` : n;
  const dateStr = `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
  // const timeStr = `${pad(date.getHours())}:${pad(date.getMinutes())}`;
  return `${dateStr}`;
}

class DatePickerPopupsRow extends Component {

  constructor(props){
    super(props);
    this.state = {
      date :'',
      defaultMinDate: new Date('1900-01-01'),
      defaultMaxDate: new Date(),
      arrow: props.arrow || 'horizontal'
    }
  }

  sublime = (v) =>{
    // console.log(value)
    this.setState({ date: v })

    this.props.onSave(formatDate(v))
  }

  render() {

    const { defaultMinDate, defaultMaxDate,arrow } = this.state;
    const {popupsHead, labelName,popupsDefaults, displayDefaults, minDate, maxDate} = this.props;

    return (

      <DatePicker
        mode="date"
        title={popupsHead}
        extra={popupsDefaults}
        value={this.state.date}
        minDate={minDate ? minDate : defaultMinDate}
        maxDate={maxDate ? maxDate : defaultMaxDate}
        onChange={date => this.sublime(date)}
      >
        <List.Item arrow={arrow}>{labelName}</List.Item>
      </DatePicker>
    );
  }

}

const DatePickerWrapper = createForm()(DatePickerPopupsRow);

export default DatePickerWrapper;
