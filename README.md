# ifsc_parser
download and parse IFSC codes

# Packages used:
<ul>
<li>Axios :- Promise based HTTP client for the browser and nodejs.</li>
<li>Config :- Node-config organizes hierarchical configurations for your app deployments.</li>
<li>Convert Excel To JSON :- Convert Excel to JSON, mapping sheet columns to object keys.</li>
<li>Mariadb :- Non-blocking MariaDB and MySQL client for Node.js. </li>

# Setup:
1) git clone
2) cd server
    2.1) npm install

# Usage :
1) To Download the excel file.
   node download.js
2) Once Excel file is Downloaded then parse sheet wise data and save in DB
   node convert.js SHEET_NAME    

