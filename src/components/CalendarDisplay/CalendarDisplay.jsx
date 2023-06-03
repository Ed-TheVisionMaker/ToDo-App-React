import React from "react";
import styled from "styled-components";
import Calendar from 'react-calendar';


export default class CalendarDisplay extends React.Component {
    handleChange = (e) => {
        // getMonth zero based so getMonth plus 1
        // getDate returns the day's number correctly
        // get full year returns the year

        // console.log(e.getDate(), e.getMonth() + 1, e.getFullYear())
    }
    render() {
        const id = this.props.id;
        return <Calendar onChange={(date) => this.props.handleDateChange(id, date)} />
    }
};
