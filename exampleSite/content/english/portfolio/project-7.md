---
title: "Spotify Music Recommender"
date: 2020-05-12T12:14:34+06:00
image: "images/portfolio/sptf.jfif"
categories: ["Data Science", "Machine Learning"]
description: "This is meta description."
draft: false
project_info:
- name: "Spotify Music Recommender"
  icon: "fas fa-user"
  content: "Kushagra Singh"
- name: "Project Link"
  icon: "fas fa-link"
  content: "https://github.com/kushagrasingh772/Music_Recommender"
# - name: "New Item"
#   icon: "fas fa-globe"
#   content: "Add whatever you want"
# - name: "Loop Item"
#   icon: "fas fa-redo"
#   content: "This is in a loop"
---

## Building a Spotify Recommender based on Listening History and Song Features

### Introduction
Based on my Spotify Wrap 2021 I listened to songs on Spotify more than 98% of the other users, I accumulated astronomical minutes of listening which translates to over roughly 1500 hours, which also translates to a whooping 62.5 days. So I do consider myself a huge music enthusiast and enjoy exploring all the different genres music has to offer. Because of my extensive listening history, I realized I had a lot of data to work with to create a classifier that will state whether or not I would like to listen to a song or not.

### About the Data 
* Two datasets: "StreamingHistory.csv" (my Spotify listening history) and "SpotifyFeatures.csv" (dataset with songs and song features)
* StreamingHistory.csv was obtained through Spotify with a json drop.
* SpotifyFeatures.csv was downloaded from kaggle.

StreamingHistory.csv has 8933 rows and 4 columns (Artist, Date, msPlayed, trackName). SpotifyFeatures.csv contains 223,044 rows and 17 columns. Of these 17 columns, 14 are related to a song's feautures such as popularity, mode, key, and etc.  Moreover, each row represents an individual song. 

### What are song features and why use them? 
All music in Spotify are given song features to describe the audio. For example, 1 in "acousticness" indicates a high level of confidence that the track is acoustic. If we wan't to find a good dancing song, the "danceability" feature with the value of 1 says that the song is perfect to dance to. With these values, we can explore to see if we prefer certain values more than others. What if we enjoy more acoustic music? Then, we would find more songs with lower values in acousticness. This is how we will recommend songs, by identifying features with the highest correlations to our favorite songs. 

(Read more about the features here: https://developer.spotify.com/documentation/web-api/reference/tracks/get-audio-features/)

### Objective
In this project, I will build a song recommender based on my personal Spotify listening history and a Spotify song features dataset. To accomplish this, I will compare 3 classifier models: 
* Logistic Regression
* Decision Trees 
* Random Forest

I will evaluate each model based on the F1 score.

#### Why use F1 score? 
The F1 score enables us to take into account false negatives and false positives when calculating the accuracy of a model. If we use the generic accuracy_score method, false positives would be considered as correct predictions which is something that is inaccurate and would mislead me into thinking my model is more accurate than it is. 

#### Defining our prediction variable
Our prediction variable will be called "favorite" with 1 representing a well-liked song and 0 representing otherwise.
But, what is a 'favorite' song? I decided to label songs with more than 10 listens as a favorite and those with less as not. 

Why 10? When I plotted the song counts on a histogram, there was a substantial drop in song frequencies after 15. These cutoff seemed like a perfect place to differentiate songs that I casual listen to versus songs that I truly enjoy. 

## Result

This project has enabled me to obtain a mass recommendation of songs at once instead of having to go through options such as Discover Weekly (limited to 30 songs), look through different playlists, or opt for a playlist radio.


---
