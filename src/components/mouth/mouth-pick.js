import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.css"
import { padLeft, range } from "./util"


export default class Mouth extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false,
            selectedYear: this.props.selectedYear,
            selectedMonth: this.props.selectedMonth
        }
    }

    toggleDropdown = (ev) => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    selectedYear(ev, year) {
        ev.preventDefault()
        this.setState({selectedYear: year})
    }

    selectedMonth(ev, mouth) {
        ev.preventDefault()
        this.setState({selectedMonth: mouth, isOpen: false})
        this.props.onChange(this.state.selectedYear, mouth)
    }

    render() {
        const {year, month} = this.props
        const {isOpen} = this.state
        let monthRange = range(12, 1)
        let yearRange = range(9, -4).map(item => item + year)
        return (
            <div className="dropdown month-picker-component">
                <h4>选择月份</h4>
                <button className="btn btn-lg btn-secondary dropdown-toggle" onClick={this.toggleDropdown}>
                    {`${year}年 ${padLeft(month)}月`}
                </button>
                {
                    isOpen && (
                        <div className="dropdown-menu" style={{display: "block"}}>
                            <div className="row">
                                <div className="col border-right">
                                    {yearRange.map((yearNumber, index) => (
                                        <a href="#"
                                           onClick={ev => this.selectedYear(ev, yearNumber)}
                                           className={(yearNumber === year) ? 'dropdown-item active' : 'dropdown-item'}
                                           key={index}>
                                            {yearNumber}年
                                        </a>
                                    ))}
                                </div>
                                <div className="col">
                                    {monthRange.map((monthNumber, index) => (
                                        <a href="#" key={index}
                                           onClick={ev => this.selectedMonth(ev, monthNumber)}
                                           className={(monthNumber === month) ? 'dropdown-item active' : 'dropdown-item'}>
                                            {padLeft(monthNumber)}月
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )

                }
            </div>
        )
    }
}

