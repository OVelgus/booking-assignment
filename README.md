# Test Scenarios

## Booking form

Scenario #1: Verify placeholders for booking form

    Given You book the first available room in a list 
     When Evaluating the form
     Then The first field has a placeholder ‘Firstname’
     Then The first field has a placeholder ‘Lastname’
     Then The first field has a placeholder ‘Email’
     Then The first field has a placeholder ‘Phone’



Scenario #2: Error message when booking a room without dates

     Given Available rooms are shown in a website 
     When the First name is entered
     And Last name is entered
     And Email is entered
     And Phone is entered
     And Book button is clicked
     Then The error message is shown


## Contact form

Scenario #1: When invalid phone number is entered shows error message


     Given Contact form is available
     When Valid first name is entered
     And Valid email is entered
     And Invalid phone is entered
     And Valid subject is entered
     And Valid description is entered
     And Submit button is clicked
     Then The error message is shown


Scenario #2: When valid data for all the fields is entered shows success message


     Given Contact form is available
     When Valid first name is entered
     And Valid email is entered
     And Valid phone is entered
     And Valid subject is entered
     And Valid description is entered
     And Submit button is clicked
     Then The success message is shown

Scenario #3: When invalid email is entered shows error message

     Given Contact form is available
     When Valid first name is entered
     And Invalid email is entered
     And Valid phone is entered
     And Valid subject is entered
     And Valid description is entered
     And Submit button is clicked
     Then The error message is shown

Scenario #4: When a short subject is entered shows error message

     Given Contact form is available
     When Valid first name is entered
     And Valid email is entered
     And Valid phone is entered
     And Short subject is entered
     And Valid description is entered
     And Submit button is clicked
     Then The error message is shown

