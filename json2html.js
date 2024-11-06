// json2html.js

export default function json2html(data) {
  // Get unique keys from the data array to create table headers
  const headers = [...new Set(data.flatMap(Object.keys))];

  // Build the HTML table
  let html = `<table data-user="ayushsharma290802@gmail.com">`;
  
  // Create table header
  html += "<thead><tr>";
  headers.forEach(header => {
    html += `<th>${header}</th>`;
  });
  html += "</tr></thead>";
  
  // Create table body
  html += "<tbody>";
  data.forEach(row => {
    html += "<tr>";
    headers.forEach(header => {
      html += `<td>${row[header] || ''}</td>`; // If a property is missing, leave cell blank
    });
    html += "</tr>";
  });
  html += "</tbody></table>";
  
  return html;
}
