#include <iostream>

// Function Prototypes 
int square();
int rectangle();
int circle();

using namespace std;

int main()
{
    int num; // Declared outside the loop
    
    do {
        // Display the main menu
        cout << "GEOMETRICAL APP" << endl;
        cout << "-----------" << endl;
        cout << "SELECT SHAPE" << endl;
        cout << "1. square" << endl;
        cout << "2. Rectangle" << endl;
        cout << "3. Circle" << endl;
        cout << "4. Exit" << endl; // Option to exit the program
        
        // Get the user's shape choice
        cout << "Enter code: ";
        cin >> num;
        
        cout << "-----------" << endl; 
        
        // Process the choice using if/else statements
        if (num == 1) {
            square();
        } 
        else if (num == 2) {
            rectangle();
        } 
        else if (num == 3) {
            circle();
        }
        else if (num == 4) {
            char confirm; // Variable to hold the user's confirmation input
            cout << "Are you sure you want to exit? (y/n): ";
            cin >> confirm;
            if (confirm == 'y' || confirm == 'Y') {
                cout << "Exiting the program." << endl;
                return 0; // Exit the program
            } else {
                cout << "Returning to the main menu." << endl;
                // instead of calling main(), just change num to 0
                // This lets do-while loop handle the menu display again
                num = 0; // Reset num to 0 to continue the loop
            }
        }
        else {
            cout << "Invalid choice. Please select 1, 2, 3, or 4." << endl;
        }
        
        cout << endl; // Adds a blank line to keep the console clean
        
    } while (num != 4);
    
    return 0;
}

// function for square
int square() 
{
    cout << "You selected: square" << endl;
    double side;
    cout << "Enter the side length: ";
    cin >> side;
    
    // Square calculations
    cout << "Area: " << (side * side) << endl;
    cout << "Perimeter: " << (4 * side) << endl;
    return 0;
}

// function for rectangle
int rectangle()
{
    cout << "You selected: Rectangle" << endl;
    double length, width;
    cout << "Enter the length: ";
    cin >> length;
    cout << "Enter the width: ";
    cin >> width;
    
    // Rectangle calculations
    cout << "Area: " << (length * width) << endl;
    cout << "Perimeter: " << (2 * (length + width)) << endl;
    return 0;
}

// function for circle
int circle()
{
    cout << "You selected: Circle" << endl;
    double radius;
    cout << "Enter the radius: ";
    cin >> radius;
    
    // Circle calculations
    cout << "Area: " << (3.14159 * radius * radius) << endl;
    cout << "Circumference: " << (2 * 3.14159 * radius) << endl;
    return 0;
}