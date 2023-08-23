# Travel Journal

This project was made to learn how to use props in React, and how to map data from a file to components making them reusable. It is a basic journal that a user can log their travels in a data file, which then updates the app to show each entry added.

## Mapping data and using props

A key aspect of React is creating reusable components. Opposed to manually creating and styling each travel log, the information about the trip is instead added to a data file. This data file contains objects (trips) which contain all the information necessary to create a card component. Each object in the data file is then mapped to a card component, with the information about the trip being passed as a prop to the card component(s).

Example journal entry of a trip
![journal](/public/journal.png)

Eample trip object in data file
![data](/public/tripdata.png)
