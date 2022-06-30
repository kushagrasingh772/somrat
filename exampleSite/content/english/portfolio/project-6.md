---
title: "Flight Reservation System"
date: 2021-07-20T12:14:34+06:00
image: "images/portfolio/plane.jpg"
categories: ["cpp"]
description: "This is meta description."
draft: false
project_info:
- name: "Flight Reservation System"
  icon: "fas fa-user"
  content: "Kushagra Singh"
- name: "Project Link"
  icon: "fas fa-link"
  content: "https://github.com/kushagrasingh772/Flight_Reservation_System"
# - name: "New Item"
#   icon: "fas fa-globe"
#   content: "Add whatever you want"
# - name: "Loop Item"
#   icon: "fas fa-redo"
#   content: "This is in a loop"
---

The project involves making use of Dijkstra's algorithm to develop a reservation system of the flights operating in the United States.

## DATASET-
#### USA AIRPORT DATABASE

Original Dataset Link: https://www.kaggle.com/flashgordon/usa-airport-dataset

This dataset is a record of 3.5 Million+ US Domestic Flights from 1990 to 2009. It has been taken from OpenFlights website which has a huge database of different travelling mediums across the globe.

## Project Details:

Applying the dijkstra algorithm to find the shortest possible path from our origin city to destination city to get the minimum fair.

The dijkstra algorithm used to get the shortest distance between the origin and the destination city .

For Dijkstra’s algorithm, it is always recommended to use heap (or priority queue) as the required operations (extract minimum and decrease key) match with speciality of heap (or priority queue). However, the problem is, priority_queue doesn’t support decrease key. To resolve this problem, do not update a key, but insert one more copy of it. So we allow multiple instances of same vertex in priority queue. This approach doesn’t require decrease key operation and has below important properties.

Whenever the distance of a vertex is reduced, we add one more instance of vertex in priority_queue. Even if there are multiple instances, we only consider the instance with minimum distance and ignore other instances. The time complexity remains O(ELogV)) as there will be at most O(E) vertices in priority queue and O(Log E) is same as O(Log V)

Just finding the shortest distance is not enough, We will have to know which cities we will have to go through in order to reach the the destination city in the shortest distance possible like in any airline travel

To do this, we have created 2 separate vectors: ‘parent’ and ‘path’.

PARENT: it stores the index of the preceding vertex of the current node satisfying the minimum distance condition

PATH: stores the flight number of the flight that could be used in order to get to the current vertex while satisfying the min distance condition

To recreate the path,

We have stored all of the flight numbers from the path array from the origin city to the destination city

Reserving seats:
We are first asking the origin and destination city and then checking our databases for possible combinations for such a journey and then returning the details of the flight(s) which is charging the customer with the minimum possible fare using dijkstra algorithm.

We also ask for the number of seats required

If and only if the seats are available for the entire trip , we move forward with the reservation then we give them a booking id and password which they would need in the future for checking,

Cancellation:
Here it is the function to cancel any reservation that has been made, authenticate function is being called, that we have created, it checks for reservation id and password and if they match any values that have been previously registered by the reservation seats function If they exist, then we moved forward to confirm their cancellation and deduct 2/3rd usd of the initial amount, as the cancellation fee and show the cancellation message.

See connectivity:
This is the function that is called in the ‘ see connectivity between two cities ’. It tells you to the details of the journey without making a reservation like max seats that are currently available in all the flights you may need in that journey , the distance you will cover , the number of connecting flights for the most efficient journey, which can be taken.

Main function:

This is the driver code of the program program. Where we have gone with a menu-driven type display and we give the user choices to use the different functionalities that we have provided in the program This has been executed via a simple switch case code block

The functionalities are as follows:

1. Install : This installs the data from the csv file to the prgram
And if it has already been installed then it shows it has already been installed

2. Reservation : Calls the reserve seats function and then the user can make reservations and they will be provided with a booking id and password which they can use for further procedure
This function also checks if the database has been installed or not and if it is not , then it returns an error

If the number of seats that the user wants is greater than the vacant seats , it lets them know seats are not available and they should retry the booking process to possibly get seats.

3. Show Booking : this options returns your booking details once you are authenticated by checking your booking id and password.
4. Cancellation : this option here calls the cancellation function and the cancellation procedure is followed.
5. Check Connectivity Between Two Cities : This option here you might need if you might want to only check the details of the journey and not make a reservation like seats that are currently available , the distance you will cover , the number of connecting flights for the most efficient journey.
6. Exit: To exit the flight booking system.

#### Tools and Technologies Used:

- C++
- Python
- Standard Template Library
- Dijkstra Algorithm
- CSV reader
- VS Code (any text editor)

