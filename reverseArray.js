
function convertDataToArray(array){
	return array.split('');
}

function reverseArrayData(){
 var result = convertDataToArray('data').reverse().join('');
return result;
}
reverseArrayData()