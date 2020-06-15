const person = {
    name:undefined,
    age: 24,
    location: {
        city: 'Lagos',
        temperature: 35
    }
}

const  { same: name='Anonymous', age} = person

console.log(name)

const book = {
    title: 'Ego is the enemy',
    author: 'Ryan holiday',
    publisher: {
       name:undefined
    }
}

const { name:publisherName ='Self publisher'} = book.publisher

console.log(publisherName)