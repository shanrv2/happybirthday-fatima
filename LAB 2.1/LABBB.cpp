#include <iostream.h>

void main()
{
    // Define meaningful variable names
    float hoursWorked;
    float hourlyRate = 4.25;
    float tips;
    float totalPay;

    // Prompt the user for hours worked and tips
    cout << "Enter total hours worked: "; 
    cin >> hoursWorked;

    cout << "Enter total tips received: "; 
    cin >> tips;

    // Calculate the total pay
    totalPay = (hoursWorked * hourlyRate) + tips;

    // Output the final pay amount clearly to the user
    cout << "Your total pay is: " << totalPay << endl;
}