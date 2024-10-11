function withdrawCash(amount) {
    // Define the denominations available in the ATM
    const denominations = [500, 200, 100];
    
    // Initialize counters for each denomination
    let count = {
        500: 0,
        200: 0,
        100: 0
    };
    
    
    // Process the withdrawal
    for (let denom of denominations) {
        switch (denom) {
            case 500:
                if (amount >= 500) {
                    count[500] = Math.floor(amount / 500); // Calculate the number of 500 notes
                    amount = amount % 500; // Update the remaining amount
                }
                break;
            case 200:
                if (amount >= 200) {
                    count[200] = Math.floor(amount / 200); // Calculate the number of 200 notes
                    amount = amount % 200; // Update the remaining amount
                }
                break;
            case 100:
                if (amount >= 100) {
                    count[100] = Math.floor(amount / 100); // Calculate the number of 100 notes
                    amount = amount % 100; // Update the remaining amount
                }
                break;
        }
    }
    
    // Display the result
    console.log('Denominations withdrawn:');
    for (let denom of denominations) {
        if (count[denom] > 0) {
            console.log(`${denom}: ${count[denom]} note(s)`);
        }
    }
    
    if (amount > 0) {
        console.log(`Remaining amount: ${amount}`);
    }
}

// Example usage
withdrawCash(1300);
