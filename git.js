
// What is git use for?

// Manage projects with Repositories
// Clone a project to work on a local copy
// Control and track changes with Staging and Committing
// Branch and Merge to allow for work on different parts and versions of a project
// Pull the latest version of the project to a local copy
// Push local updates to the main project




// Initialize Git on a folder, making it a Repository
// Git now creates a hidden folder to keep track of changes in that folder
// When a file is changed, added or deleted, it is considered modified
// You select the modified files you want to Stage
// The Staged files are Committed, which prompts Git to store a permanent snapshot of the files
// Git allows you to see the full history of every commit.
// You can revert back to any previous commit.
// Git does not store a separate copy of every file in every commit, but keeps track of changes made in each commit!




// Git Install
// You can download Git for free from the following website: https://www.git-scm.com/


// Configure Git
// Now let Git know who you are. This is important for version control systems, as each Git commit uses this information:

// Example
// git config --global user.name "w3schools-test"
// git config --global user.email "test@w3schools.com"
// Change the user name and e-mail address to your own. You will probably also want to use this when registering to GitHub later on.

// Note: Use global to set the username and e-mail for every repository on your computer.

// If you want to set the username/e-mail for just the current repo, you can remove global

// Creating Git Folder
// Now, let's create a new folder for our
// Example
// mkdir myproject
// cd myproject
// mkdir makes a new directory.

// cd changes the current working directory.

// Now that we are in the correct directory. We can start by initializing Git!

// Note: If you already have a folder/directory you would like to use for Git:

// Navigate to it in command line, or open it in your file explorer, right-click and select "Git Bash here"