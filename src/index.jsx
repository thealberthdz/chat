import React, { Component } from 'react'
import ReactDOM from 'react-dom';

//components
import HelloWorld from './components/helloworld'

//styles
import './styles/app.scss'

ReactDOM.render(
    <HelloWorld />,
    document.getElementById('app')
);