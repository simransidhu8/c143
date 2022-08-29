import React, {Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import {Header, Icon} from 'react-native-elements' 
import {RFValue} from 'react-native-responsive-font-size'
import axois from 'axois'

export default class HomeScreen extends Component{
    constructor(){
        super()
        this.state={
            movie_details: {}
        }
    }

    componentDidMount(){
        this.getMovie()
    }

    timeConvert(num){
        var hours = math.floor(num/60)
        var minutes = num%60
        return `${hours}hrs ${minutes}mins`
    }

    getMovie = () => {
        const url = 'http://localhost:5000/get-movies'
        axios 
            .get(url)
            .then(response => {
                var details = response.data.data
                details['duration'] = this.timeConvert(details.duration)
                this.setState({
                    movie_details: details
                })
            })
            .catch(error => {
                console.log('error')
            })
    }

    likedMovie = () =>{
        const url = 'http://localhost:5000/liked-movies'
        axios
            .post(url)
            .then(response => {
                this.getMovie()
            })
            .catch(error => {
                console.log('error')
            })
    }

    unlikedMovie = () => {
        const url = 'http://localhost:5000/not-liked-movie'
        axios  
            .post(url)
            .then(response => {
                this.getMovie()
            })
            .catch(error => {
                console.log('error')
            })
    }

    notWatchedMovies = () => {
        const url = 'http://localhost:5000/did-not-watch'
        axios
            .post(url)
            .then(response => {
                this.getMovie()
            })
            .catch(error => {
                console.log('error')
            })
    }

    render(){
        const {movie_details} = this.state
        if(movie_details.poster_link){
            const {original_title, poster_link, release_date, duration, vote_average, overview} = movie_details
            return(
                <View style={{flex:1}}>

                </View>
            )
        }
    }
}