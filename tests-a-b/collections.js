newItems = [
  {
    network: 'facebook',
    text: 'post number 1',
  },
  {
    network: 'twitter',
    text: 'some twitter text',
  },
  {
    network: 'gplus',
    text: 'some gplus stuff',
  },
  {
    network: 'facebook',
    text: 'post number 2',
  },
]

function foo(arrayOfItems, aNetwork) {
	
  // filter the array by the name of social network given
  // map the array to change the structure
	return arrayOfItems.filter(selectedNewtwork => selectedNewtwork.network == aNetwork).map(item=>{
  	return {
    	displayName: brandNames(aNetwork),
      text: item.text
    }
  })
}

// Change the names for real social network brand
function brandNames(aNetwork){

	// array of real names by brand
	const normalizedNames = {
  	'facebook':'Facebook',
    'twitter':'Twitter',
    'gplus':'Google +'
  }
	return aNetwork in normalizedNames ? normalizedNames[aNetwork] : aNetwork
}

console.log(foo(newItems, 'facebook'));
console.log(foo(newItems, 'gplus'))