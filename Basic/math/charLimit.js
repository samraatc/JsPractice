// Prompt the user for their first name and last name
const userName = 'Bishnus';

// Define the maximum length for the first name and the ellipsis
const maxLength = 5;
const ellipsis = '...';

// Process the first name
let formattedFirstName;

if (userName.length > maxLength) {
  // Truncate the first name to the first 5 characters and add ellipsis
  formattedFirstName = userName.substring(0, maxLength) + ellipsis;
} else {
  // If the first name is 5 characters or fewer, just add ellipsis
  formattedFirstName = userName + ellipsis;
}

// Print the result to the console
console.log(formattedFirstName);
