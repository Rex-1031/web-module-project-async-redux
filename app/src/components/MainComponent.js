
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchData } from '../actions/fetchDataActions'

const MainComponent = (props) => {
    useEffect(()=>{props.fetchData()}, [])
    return (
        <div>
            <h1>Rando Doggos!</h1>
            <div>
            <img src={props.item} width="200"/>
            </div>
            <button onClick={props.fetchData}>Fetch!</button>
        </div>
    )
}

const mapStateToProps = state => {
    return{
        item: state.item,
        loading: state.loading,
        error: state.error
    }
}

export default connect(mapStateToProps, {fetchData}) (MainComponent)
