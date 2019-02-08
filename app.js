const patientList = [
  'Paul',
  'Jan',
  'Tri',
  'Maryam'
]
alert(patientList);

do{
  var command = prompt('Choose one: update, delete, add, reorder or exit');
  var i = 0;
  if(command == 'add')
    {
      patientList.push(prompt('Enter patient name:'));
      alert(patientList);
    } 
    else if(command == 'update')
      {
        const updatePatientFrm = prompt('Enter patient name to update:');
        const updatePatientTo = prompt('Enter patient name to be updated to:');
        i = patientList.indexOf(updatePatientFrm);
        if (i != -1)
          {
            patientList[i] = updatePatientTo;
            alert(patientList);
          }
        else
          {
            alert(`Patient not found`)
          }
      }
    else if(command == 'delete')
      {
        const deletePatient= prompt('Enter patient name to delete:');
        i = patientList.indexOf(deletePatient);
        if (i != -1)
          {
            patientList.splice(i,1);
            alert(patientList);
          }
        else
          {
            alert(`Patient not found`)
          }
      }
    else if(command == 'reorder')
      {
        const reorderPatientFrm = prompt('Enter patient name to reorder:');
        const reorderPatientTo = prompt('Enter patient name to be reordered to:');
        i = patientList.indexOf(reorderPatientFrm);
        j = patientList.indexOf(reorderPatientTo);
        if (i != -1 && j != -1)
          {
            patientList[i] = reorderPatientTo;
            patientList[j] = reorderPatientFrm;
            alert(patientList);
          }
        else
          {
            alert(`Patient not found`)
          }
      }
    } while(command != 'exit');


