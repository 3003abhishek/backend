import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import ExcelJS from 'exceljs';

const ExcelEditor = () => {
  const [data, setData] = useState([]);
  const [file, setFile] = useState(null);
  const [newData, setNewData] = useState({
    name: '',
    age: '',
    date: '',
  });

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleDataChange = (e) => {
    const { name, value } = e.target;
    setNewData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDataAdd = () => {
    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const fileData = e.target.result;
        const workbook = XLSX.read(fileData, { type: 'binary' });

        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const newRows = XLSX.utils.sheet_to_json(worksheet);

        const updatedData = [...newRows, newData];
        setData(updatedData);



        XLSX.utils.sheet_add_json(worksheet, updatedData, { skipHeader: true });

         


        const updatedExcelBlob = new Blob([XLSX.write(workbook, { bookType: 'xlsx', type: 'array' })], {
          type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        });

        const fileName = 'updated_file.xlsx';
        const downloadUrl = window.URL.createObjectURL(updatedExcelBlob);

        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = fileName;
        link.click();

        window.URL.revokeObjectURL(downloadUrl);
      };

      reader.readAsBinaryString(file);
    } else {
      alert('Please select an Excel file.');
    }
  };

  return (
    <div>
      <h2>Excel Editor</h2>
      <input type="file" accept=".xlsx" onChange={handleFileChange} />
      <div>
        <input type="text" name="name" placeholder="Name" onChange={handleDataChange} />
        <input type="number" name="age" placeholder="Age" onChange={handleDataChange} />
        <input type="text" name="date" placeholder="Date" onChange={handleDataChange} />
      </div>
      <button onClick={handleDataAdd}>Add Data</button>
    </div>
  );
};

export default ExcelEditor;
