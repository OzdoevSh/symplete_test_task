import React, { Component } from 'react';



class Getfibo extends Component{

    constructor(props) {
        super(props);
        this.state = {
            result: {},
            number: '',

        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    


    handleChange(event){
        this.setState({number: event.target.value})
    }

    


    handleSubmit=(event) => {
        if (this.state.number === "" || !(Number(this.state.number) >= 1 && Number(this.state.number) <= 50)) {
            alert("Введите корректный номер числа Фибоначчи")
            return
        }
            fetch('/getNumber', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({"number": this.state.number})
              })
        
            .then(res => res.json())
            .then(result => this.setState({result}, () => console.log("nums fetched..", result)))
        event.preventDefault();
    }

    render(){
        return (
            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col-sm-8">
                        <input className="form-control" type="number" name="number" placeholder="Введите порядковый номер" onChange={this.handleChange} min="1" max="50"/>
                    </div>
                </div>

                <div className="row justify-content-md-center">
                    <div className="col-sm-4">
                        <button className="btn btn-primary mb-2" onClick={this.handleSubmit}>Вычислить</button>
                    </div>
                </div>


                <div className="row justify-content-md-center">

                    <div className="col-sm-8">
                        <h5>Ваше число Фибоначчи: {this.state.result.fibNum}</h5>
                    </div>

                </div>
            
            </div>

            
            
        );
    }
}



export default Getfibo