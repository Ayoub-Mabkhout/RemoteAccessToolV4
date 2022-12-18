# RemoteAccessToolV3: OpenAPI
OpenAPI Remote Server in Java and a browser-based consumer. This is a repository for a programming assignment in my 
"CSC 3374 Advanced & Distributed Programming Paradigms"course as part of the chapter on "Programming for Reactivity".


## Demonstrated Learning Outcomes
- Programming for Reactivity
- Understanding of the Reactive Programming Paradigm
- Understanding of cold/lazy calls
- Programming with RxJS 

## Description
The project consist of a client program and a server program accessible remotely through the client. From the client, a user can 
issue one of 3 commands. Either (1) take a screenshot of the main screen,
(2) record and send a list of all processes running on the Server machine, or (3) reboot the server machine.

This implementation should work on both Windows and Unix based machines.

## RxJS Client
The client/consumer for this remote access tool uses RxJS through the Rx-Http-Request module.

## Technology Enablers
- Server Business Logic is programmed in Java
- Web Service developped using Spring Boot 2.7.2  
- API Specification: OpenAPI v3.0.1
- Protocol: HTTP
- HTML, CSS, JavaScript
- Rx-Http-Request module

## Development Approach
This API was developped with a Code-First approach:
1. Started with developping the server business logic in Java. 
2. Marked it as a web service using Java Spring Boot `@RestController` annotation.
3. Generated the API documentation by implementing the `springdoc-openapi-ui` dependency.
4. Compiled and deployed the API.
5. Developped the HTML markup and JavaScript code for the browser-based consumer

## How To Run
1. Clone this repository
2. CD into the root directory and start the server with the following command: `./gradlew bootRun`.
   - Alternatively, you could cd to `src\\main\\java\\com\\RemoteAccessTool\\` and run the command `java RemoteAccessToolApplication.java`
3. Once the server started, it should be hosted in port 8080
4. CD into `src\\consumers\\browser\\` and run `node index.js` to start the client. Before that, make sure the dependencies are installed by running `npmm install` in the directory. 
5. You will need to change the URL to match that of the server. This step is necessary even if the server is running locally.
6. Alternatively, you can enter the root URL of the server prefixed by `http://` and follow by `/`, the browser-based consumer will be server by SpringBoot a static files since it is also located in `src/main/resources/public/`
