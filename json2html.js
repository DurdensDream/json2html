export default function json2html(data) {
  
    const headers = [...new Set(data.flatMap(Object.keys))];
  
    let html = `<table data-user="ayushsharma290802@gmail.com">`;
    html += `<thead><tr>${headers.map(header => `<th>${header}</th>`).join('')}</tr></thead>`;
    html += `<tbody>`;
  
   
    data.forEach(row => {
      html += `<tr>${headers.map(header => `<td>${row[header] || ''}</td>`).join('')}</tr>`;
    });
  
    html += `</tbody></table>`;
  
    return html;
  }
  