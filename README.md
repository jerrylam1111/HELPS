## UTS HELPS Project (41095 - Software Engineering Studio 2A)

### Setting up a development environment

1. Download and install [ASP.net Core](https://dotnet.microsoft.com/download)
2. Download and install [Node](https://nodejs.org/en/download/)
3. Download and install [PostgreSQL](https://www.postgresql.org/download/) **(Take note of the password entered during installation)**
4. Clone this repo and open in your preferred IDE (Must support C#, if unsure use Visual Studio)
5. Open HELPS/appsettings.json and replace \<POSTGRESQL PASSWORD> with the password from step **3**
6. Open a terminal and move into the HELPS directory
    > cd \<Project Directory>/HELPS
7. Run the following command to install node dependencies
    > npm install --prefix ClientApp
8. Run the following command to build a database per the .net entity model
    > dotnet ef database update
9. Start the project by running the following command or through your IDE's run config:
    > dotnet run
10. The command should output the local address of the project, open the link
    > Now listening on: https://localhost:5001
11. You should be presented with a home page with a couple of tabs at the top of the screen, navigate to **Fetch Data**
12. If the project displays something like **"Unhandled Rejection (SyntaxError)"**, you likely have clicked the wrong output link or have not configured your database correctly.

    If you can run queries against your database (See steps **13** - **16**), repeat step **5** ensuring the password is correct and does not include quotes or these symbols "<>"

13. Once the fetch data page is displaying an empty list, open a database manager that supports PostgreSQL (If unsure use [pgAdmin](https://www.pgadmin.org/download/))
14. Ensure there is a database "HELPS" that contains a "Students" table within the public schema, if any are not present repeat step **8** and ensure there are no errors in the output
15. Add a new row to the students table and refresh the "Fetch Data" page (if needed)
16. If you have something like the image below, everything has worked!

![alt text](https://i.imgur.com/sfG8Hck.jpg "Initial State")
