import React, { Component } from 'react'
import {Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

const PublicRoutes = ({component:Component, isAuthenticated, ...prop}) => (
    <Route {...prop} component={(props) => (
        isAuthenticated ? (<Redirect to = '/dashboard' />) : (<Component {...props} />)
    )} />
)

const mapStateToProps = (state) => ({
    isAuthenticated : !!state.auth.uid
})

export default connect(mapStateToProps)(PublicRoutes)