//creating an array and passing the number, question, and answers.
let questions = [
    {
        numb: 1,
        question: "What does client-side mean ?",
        answer: "Code which is executed on the client web page rather than the server",
        options: [
            "Allows us to talk to a server",
            "Code which is executed on the client web page rather than the server",
            "Allows us to split our web page in two, one for the client and one for the server",
            "It's HTML code on the client"
        ]
    },
    {
        numb: 2,
        question: "What does CSS stand for?",
        answer: "Cascading Style Sheets",
        options: [
            "Cascading Style Sheets",
            "Computer Style Sheets",
            " Cascading Sheet Styles",
            " Computer Sheet Styles"
        ]
    },
    {
        numb: 3,
        question: "What is a framework in web development?",
        answer: "A set of pre-written code for building websites",
        options: [
            "A set of pre-written code for building websites",
            "A library for styling websites",
            "  A language for building websites",
            " A tool for designing websites",
        ]
    },
    {
        numb: 4,
        question: "Which of the following is a front-end JavaScript framework?",
        answer: "AngularJS",
        options: [
            "Ruby on Rails",
            "Laravel",
            "AngularJS",
            "Django",
        ]
    },
    {
        numb: 5,
        question: "What is AJAX used for in web development?",
        answer: "To dynamically update content on a webpage without reloading the entire page",
        options: [
            "To design websites",
            "To build the backend of a website",
            "To dynamically update content on a webpage without reloading the entire page",
            "To optimize website images"
        ]
    },
    {
        numb: 6,
        question: "What is the purpose of a web server?",
        answer: "To serve dynamic content to web clients",
        options: [
            "To store website files",
            "To serve dynamic content to web clients",
            "To manage website databases",
            "All of the above",
        ]
    },
    {
        numb: 7,
        question: "What is the purpose of a relational database management system (RDBMS)?",
        answer: " To store and manage data in a structured way",
        options: [
            " To store and manage data in a structured way",
            " To serve dynamic content to web clients",
            "To manage images for a website",
            "To manage website users and authentication"
        ]
    },
    {
        numb: 8,
        question: "Which of the following is not a back-end programming language?",
        answer: " AngularJS",
        options: [
            " Ruby",
            " Python",
            " AngularJS",
            "Django"
        ]
    },
    {
        numb: 9,
        question: "What is the purpose of a content management system (CMS)?",
        answer: "What is the purpose of a content management system (CMS)?",
        options: [
            " To manage and store images for a website",
            "To manage website users and authentication",
            " To provide a user-friendly interface for managing the content of a website",
            "To serve dynamic content to web clients"
        ]
    },
    {
        numb: 10,
        question: "What is the difference between a static and a dynamic website?",
        answer: " Static websites have fixed content while dynamic websites have changing content",
        options: [
            " Static websites have fixed content while dynamic websites have changing content",
            "Dynamic websites are faster than static websites",
            "Static websites are easier to build than dynamic websites",
            "Dynamic websites are more secure than static websites"
        ]
    },
    {
        numb: 11,
        question: "What is the purpose of a version control system in web development?",
        answer: " To manage the different versions of a website's code",
        options: [
            " To manage the different versions of a website's code",
            " To store website files",
            " To manage website users and authentication",
            "To manage website databases"
        ]
    },
    {
        numb: 12,
        question: "What is a REST API?",
        answer: " A way of building APIs that uses a set of constraints to ensure scalability and reliability",
        options: [
            " A way of building APIs that uses a set of constraints to ensure scalability and reliability",
            " A tool for testing APIs",
            " To manage website users and authentication",
            "A database management system for APIs"
        ]
    },
    {
        numb: 13,
        question: "What is a cookie in web development?",
        answer: " A small text file stored on a user's computer by a website to remember user preferences",
        options: [
            "Allows us to talk to a server",
            "Code which is executed on the client web page rather than the server",
            "Allows us to split our web page in two, one for the client and one for the server",
            "It's HTML code on the client"
        ]
    },
    {
        numb: 14,
        question: "What is a responsive website?",
        answer: " A website that can be viewed on any device",
        options: [
            " A website that is optimized for mobile devices",
            "A website that is optimized for desktop computers",
            " A website that can be viewed on any device",
            "A website that is only optimized for tablets"
        ]
    },
    {
        numb: 15,
        question: "What is a domain name in web development?",
        answer: " The unique name that identifies a website and its location on the internet",
        options: [
            "  The IP address of a website",
            " The unique name that identifies a website and its location on the internet",
            "A library for building APIs",
            " A way of building APIs"
        ]
    },
    {
        numb: 16,
        question: "What is the purpose of a web browser?",
        answer: " The unique name that identifies a website and its location on the internet",
        options: [
            "  The IP address of a website",
            " The unique name that identifies a website and its location on the internet",
            "A library for building APIs",
            " A way of building APIs"
        ]
    },
    {
        numb: 17,
        question: "What is the purpose of a web browser?",
        answer: "To render HTML, CSS, and JavaScript into a webpage",
        options: [
            "To build the backend of a website",
            " To manage website databases",
            "To render HTML, CSS, and JavaScript into a webpage",
            " To serve dynamic content to web clients"
        ]
    },
    {
        numb: 18,
        question: "What is a protocol in web development?",
        answer: "A set of rules for communication between computers on the internet",
        options: [
            "A set of rules for communication between computers on the internet",
            " A way of building APIs",
            "A library for styling websites",
            " A tool for designing websites"
        ]
    },
    {
        numb: 19,
        question: "What is a search engine optimization (SEO)?",
        answer: "The process of optimizing a website to improve its ranking on search engine results pages",
        options: [
            "The process of optimizing a website to improve its ranking on search engine results pages",
            ". A way of building APIs",
            "A library for styling websites",
            "A tool for designing websites"
        ]
    },
    {
        numb: 20,
        question: "What is a hosting service in web development?",
        answer: "A service that stores and serves the files that make up a website",
        options: [
            "A service that stores and serves the files that make up a website",
            "A library for styling websites",
            "A tool for designing websites",
            "A way of building APIs"
        ]
    }
]